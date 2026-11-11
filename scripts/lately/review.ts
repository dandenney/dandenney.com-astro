// Researches, writes, and fact-checks reviews for songs on the Lately playlist.
// Usage:
//   node --experimental-strip-types --no-warnings scripts/lately/review.ts --added-within 30
//   node --experimental-strip-types --no-warnings scripts/lately/review.ts --next 2
//   node --experimental-strip-types --no-warnings scripts/lately/review.ts --id <spotifyId> [--id ...]
//   node --experimental-strip-types --no-warnings scripts/lately/review.ts --rewrite-legacy 3
//   add --dry-run to print the review instead of writing files
// Needs SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, ANTHROPIC_API_KEY, OPENROUTER_API_KEY.
import { appendFileSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import {
  CostMeter,
  EVIDENCE_DIR,
  HELD_FILE,
  LATELY_FILE,
  LISTEN_MODEL,
  RESEARCH_MODEL,
  SONGS_DIR,
  WRITER_MODEL,
  claude,
  extractJson,
  extractTag,
  openRouterAudio,
  readJson,
  slugify,
  spotify,
  writeJson,
  type LatelySnapshot,
} from "./lib.ts";

const STYLEPACK = readFileSync("docs/lately/stylepack.md", "utf8");
const BANNED = /\b(visceral|tapestry|sonic|soundscape|poignant|haunting|ethereal|evocative|testament|delve|resonates)\b/i;
const MIN_FACTS_WITHOUT_LYRICS = 3;
const STORE_DOMAINS = /(^|\.)(amazon|shazam|deezer|spotify|apple|itunes|tidal|youtube|pandora|genius|azlyrics|musixmatch|lrclib|letras|lyrics|songlyrics|allamericanspeakers)\./;
const META = /\b(excerpt|clip|packet|evidence|sources?|can't verify|cannot verify|won't claim|overclaim)\b/i;

type Lyrics = { status: "found" | "instrumental" | "missing"; text: string | null; source: string | null };
type Research = {
  identity: "confirmed" | "likely" | "unknown";
  facts: { claim: string; source: string }[];
  lineage: string | null;
  genres: string[];
};
type Track = {
  id: string;
  title: string;
  artist: string;
  artists: string[];
  album: string;
  albumType: string;
  label: string | null;
  releaseDate: string;
  durationMs: number;
  isrc: string | null;
  albumArt: string | null;
  spotifyUrl: string;
  artistUrl: string;
};

const args = process.argv.slice(2);
const flag = (name: string) => args.includes(name);
const values = (name: string) => args.flatMap((arg, i) => (arg === name ? [args[i + 1]] : []));
const dryRun = flag("--dry-run");

const snapshot = readJson<LatelySnapshot>(LATELY_FILE, { playlistId: "", syncedAt: "", tracks: [] });
const held = readJson<Record<string, { reason: string; at: string }>>(HELD_FILE, {});

function existingReviews() {
  const byId = new Map<string, { file: string; legacy: boolean; pubDate: string | null }>();
  for (const file of readdirSync(SONGS_DIR).filter((f) => f.endsWith(".md"))) {
    const text = readFileSync(`${SONGS_DIR}/${file}`, "utf8");
    const id = text.match(/^spotifyId:\s*"?(\w+)"?/m)?.[1];
    if (!id) continue;
    const slug = file.replace(/\.md$/, "");
    byId.set(id, {
      file,
      legacy: !/^pipeline:/m.test(text) || /^pipeline:\s*"?legacy/m.test(text),
      pubDate: text.match(/^pubDate:\s*"?([\d-]+)"?/m)?.[1] ?? null,
    });
  }
  return byId;
}

function pickQueue(): string[] {
  const reviews = existingReviews();
  const ids = values("--id");
  const next = Number(values("--next")[0] ?? 0);
  const legacy = Number(values("--rewrite-legacy")[0] ?? 0);
  const withinDays = Number(values("--added-within")[0] ?? 0);
  const queue = [...ids];
  if (withinDays) {
    const cutoff = new Date(Date.now() - withinDays * 86_400_000).toISOString();
    queue.push(
      ...snapshot.tracks
        .filter((t) => t.addedAt >= cutoff && !reviews.has(t.id) && !held[t.id] && !queue.includes(t.id))
        .map((t) => t.id),
    );
  }
  if (next) {
    queue.push(
      ...snapshot.tracks
        .filter((t) => !reviews.has(t.id) && !held[t.id] && !queue.includes(t.id))
        .slice(0, next)
        .map((t) => t.id),
    );
  }
  if (legacy) {
    queue.push(
      ...snapshot.tracks
        .filter((t) => reviews.get(t.id)?.legacy && !held[t.id] && !queue.includes(t.id))
        .slice(0, legacy)
        .map((t) => t.id),
    );
  }
  return queue;
}

async function getTrack(id: string): Promise<Track> {
  const t = await spotify(`/tracks/${id}`);
  const album = await spotify(`/albums/${t.album.id}`).catch(() => null);
  return {
    id,
    title: t.name,
    artist: t.artists[0].name,
    artists: t.artists.map((a: any) => a.name),
    album: t.album.name,
    albumType: t.album.album_type,
    label: album?.label ?? null,
    releaseDate: t.album.release_date,
    durationMs: t.duration_ms,
    isrc: t.external_ids?.isrc ?? null,
    albumArt: t.album.images?.[0]?.url ?? null,
    spotifyUrl: t.external_urls.spotify,
    artistUrl: t.artists[0].external_urls.spotify,
  };
}

const norm = (s: string) => slugify(s.replace(/\s*[\(\[].*?[\)\]]/g, "").replace(/\s+-\s+.*$/, ""));

async function getLyrics(track: Track): Promise<Lyrics> {
  const headers = { "User-Agent": "dandenney.com lately reviews (https://www.dandenney.com)" };
  const title = track.title.replace(/\s*[\(\[].*?[\)\]]/g, "").replace(/\s+-\s+.*$/, "").trim();
  const params = new URLSearchParams({ track_name: title, artist_name: track.artist });
  const res = await fetch(`https://lrclib.net/api/search?${params}`, { headers });
  const hits: any[] = res.ok ? await res.json() : [];
  const seconds = track.durationMs / 1000;
  const match = hits.find(
    (h) =>
      norm(h.artistName).includes(norm(track.artist)) &&
      norm(h.trackName) === norm(track.title) &&
      Math.abs(h.duration - seconds) <= 4 &&
      (h.plainLyrics || h.instrumental),
  );
  if (!match) return { status: "missing", text: null, source: null };
  const source = `https://lrclib.net/api/get/${match.id}`;
  if (match.instrumental) return { status: "instrumental", text: null, source };
  return { status: "found", text: match.plainLyrics, source };
}

async function getClip(track: Track): Promise<{ audio: Buffer; source: string } | null> {
  const urls: { url: string; source: string }[] = [];
  if (track.isrc) {
    const deezer = await fetch(`https://api.deezer.com/track/isrc:${track.isrc}`).then((r) => r.json()).catch(() => null);
    if (deezer?.preview) urls.push({ url: deezer.preview, source: "deezer" });
  }
  const embed = await fetch(`https://open.spotify.com/embed/track/${track.id}`, { headers: { "User-Agent": "Mozilla/5.0" } })
    .then((r) => r.text())
    .catch(() => "");
  const preview = embed.match(/"audioPreview":\{"format":"[^"]*","url":"([^"]+)"/)?.[1];
  if (preview) urls.push({ url: preview, source: "spotify" });
  for (const { url, source } of urls) {
    const res = await fetch(url);
    if (res.ok) return { audio: Buffer.from(await res.arrayBuffer()), source };
  }
  return null;
}

const LISTEN_PASSES = 3;

async function listen(track: Track, meter: CostMeter): Promise<string | null> {
  const clip = await getClip(track);
  if (!clip) return null;
  const prompt = `This is a 30-second excerpt of "${track.title}" by ${track.artists.join(", ")}. Its position in the song is unknown.
Describe only what you can actually hear, as plain notes for a music critic:
- instruments and how they're played
- tempo and groove feel
- vocals: voice character, delivery, harmonies
- production: room, texture, how polished or raw
- arrangement: what enters, drops out, or builds within the excerpt
Write "unsure" rather than guessing. Don't guess the singer's gender. No timestamps. No adjectives about meaning or emotion beyond the sound itself. 180 words max.`;
  const passes = await Promise.all(
    Array.from({ length: LISTEN_PASSES }, () => openRouterAudio({ prompt, audio: clip.audio, meter }).catch(() => null)),
  );
  const heard = passes.filter((p): p is string => Boolean(p));
  if (heard.length < 2) return null;
  return heard.map((notes, i) => `Pass ${i + 1}:\n${notes}`).join("\n\n");
}

async function research(track: Track, lyrics: Lyrics, meter: CostMeter): Promise<Research> {
  const prompt = `Research the song "${track.title}" by ${track.artists.join(", ")} (from the ${track.albumType} "${track.album}", released ${track.releaseDate}${track.label ? `, label ${track.label}` : ""}). Artist on Spotify: ${track.artistUrl}

Find facts a music critic would use: who wrote and produced it, who played on it, where and how it was recorded, what the artist has said about it in interviews, the story behind it, how it fits the artist's catalog, and the artist's background. Prefer interviews, label pages, Bandcamp, liner notes, and reputable music press. Make sure every fact is about this artist and this song. Other artists and songs often share these names; leave those out entirely rather than listing them.

Return only JSON, no prose before or after:
{
  "identity": "confirmed if sources clearly match this artist and release, likely if probable but unconfirmed, unknown if nothing matched",
  "facts": [{ "claim": "one short factual statement", "source": "URL that states it" }],
  "lineage": "one sentence on the tradition or scene this sits in, grounded in what sources say, or null",
  "genres": ["1-3 lowercase genre descriptors used by sources"]
}
Include 0-10 facts. Each claim must be a plain fact, not a note about the search. Leave out anything you can't tie to a URL. ${lyrics.status === "missing" ? "Lyrics weren't found, so skip lyric claims." : ""}`;
  try {
    const text = await claude({ model: RESEARCH_MODEL, prompt, maxTokens: 3000, webSearches: 5, meter, step: "research" });
    let data: Research;
    try {
      data = extractJson<Research>(text);
    } catch {
      console.warn(`   research JSON unparseable: ${text.slice(0, 300)}`);
      return { identity: "unknown", facts: [], lineage: null, genres: [] };
    }
    const identity = data.identity === "confirmed" || data.identity === "likely" ? data.identity : "unknown";
    if (identity !== "confirmed") return { identity, facts: [], lineage: null, genres: [] };
    return { identity, facts: (data.facts ?? []).filter((f) => f.claim && f.source?.startsWith("http")), lineage: data.lineage ?? null, genres: data.genres ?? [] };
  } catch (error) {
    console.warn(`   research failed: ${(error as Error).message}`);
    return { identity: "unknown", facts: [], lineage: null, genres: [] };
  }
}

function packetText(track: Track, lyrics: Lyrics, listening: string | null, facts: Research) {
  return `## Metadata (Spotify)
Title: ${track.title}
Artists: ${track.artists.join(", ")}
Release: ${track.albumType} "${track.album}", ${track.releaseDate}${track.label ? `, ${track.label}` : ""}
Length: ${Math.floor(track.durationMs / 60000)}:${String(Math.round((track.durationMs % 60000) / 1000)).padStart(2, "0")}

## Lyrics
${lyrics.status === "found" ? lyrics.text : lyrics.status === "instrumental" ? "Instrumental." : "Not available. Don't quote or paraphrase any lyrics."}

## Listening notes (independent passes over a short excerpt)
${listening ? `Only describe sounds that at least two passes agree on.\n\n${listening}` : "Not available. Make no claims about how it sounds beyond what the facts state."}

## Researched facts
${facts.facts.map((f) => `- ${f.claim} (${f.source})`).join("\n") || "None."}
${facts.lineage ? `\nLineage: ${facts.lineage}` : ""}`;
}

const MIN_WORDS = 200;
const wordCount = (text: string) => text.split(/\s+/).filter(Boolean).length;

async function write(packet: string, meter: CostMeter) {
  for (let attempt = 1; attempt <= 2; attempt++) {
    const draft = await writeOnce(packet, meter);
    if (wordCount(draft.body) >= MIN_WORDS) return draft;
    console.warn(`   draft too short (${wordCount(draft.body)} words), attempt ${attempt}`);
  }
  throw new Error("writer returned no usable draft");
}

async function writeOnce(packet: string, meter: CostMeter) {
  const text = await claude({
    model: WRITER_MODEL,
    system: STYLEPACK,
    prompt: `Write the review from this evidence packet.\n\n${packet}\n\nReturn <body>the review markdown</body> then <genres>1-3 lowercase genre descriptors, comma separated</genres>.`,
    maxTokens: 4000,
    meter,
    step: "write",
  });
  return { body: extractTag(text, "body") ?? text, genres: extractTag(text, "genres") ?? "" };
}

async function factCheck(packet: string, draft: string, meter: CostMeter) {
  const text = await claude({
    model: RESEARCH_MODEL,
    system: STYLEPACK,
    prompt: `You are the fact-checker. Check every factual claim in the draft review against the evidence packet: credits, dates, places, history, quotes, lyric quotes (must match the lyrics exactly), and descriptions of the sound (must be backed by at least two listening passes). Timestamps and claims about where something happens in the song are unsupported, since the excerpt's position is unknown.

Interpretation is the critic's job: readings of lyrics, comparisons, and opinions about what the song does stay, as long as they rest on supported facts and aren't dressed up as fact. Claims about a genre's or scene's history need support like any other fact.

Rewrite the draft so it keeps its voice and length but drops or corrects anything unsupported. Don't add hedges or mention what was removed. Also fix any banned words and anything that mentions evidence, clips, excerpts, or sources.

<packet>
${packet}
</packet>

<draft>
${draft}
</draft>

Return <report>JSON array of {"claim": "...", "verdict": "supported|removed|corrected", "note": "..."} for each claim checked</report> then <body>the corrected review markdown</body>.`,
    maxTokens: 4000,
    meter,
    step: "fact-check",
  });
  let report: unknown[] = [];
  try {
    report = JSON.parse(extractTag(text, "report") ?? "[]");
  } catch {
    report = [{ note: "unparseable report", raw: extractTag(text, "report") }];
  }
  return { body: extractTag(text, "body") ?? draft, report };
}

const yaml = (s: string) => JSON.stringify(s);
const yamlList = (list: string[]) => `[${list.map(yaml).join(", ")}]`;

function frontmatter(track: Track, genres: string[], pubDate: string, sources: { title: string; url: string }[]) {
  const year = track.releaseDate.slice(0, 4);
  const tags = [...new Set([slugify(track.artist), ...genres.map(slugify), year])].filter(Boolean);
  return `---
title: ${yaml(track.title)}
artist: ${yaml(track.artist)}
artists: ${yamlList(track.artists)}
album: ${yaml(track.album)}
releaseDate: ${yaml(track.releaseDate)}
spotifyUrl: ${yaml(track.spotifyUrl)}
spotifyId: ${yaml(track.id)}
${track.albumArt ? `albumArt: ${yaml(track.albumArt)}\n` : ""}duration: ${track.durationMs}
genres: ${yamlList(genres)}
pubDate: ${yaml(pubDate)}
tags: ${yamlList(tags)}
pipeline: "lately"
sources:
${sources.map((s) => `  - title: ${yaml(s.title)}\n    url: ${yaml(s.url)}`).join("\n") || "  []"}
aiGenerated: true
---
`.replace("sources:\n  []", "sources: []");
}

function sourceTitle(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

const summary: string[] = [];
const queue = pickQueue();
if (!queue.length) console.log("Nothing to review.");
const reviews = existingReviews();

for (const id of queue) {
  const meter = new CostMeter();
  const track = await getTrack(id);
  const label = `${track.artist} - ${track.title}`;
  console.log(`\n${label} (${id})`);

  const [lyrics, listening] = await Promise.all([
    getLyrics(track),
    listen(track, meter).catch((error) => {
      console.warn(`   listening failed: ${error.message}`);
      return null;
    }),
  ]);
  console.log(`   lyrics: ${lyrics.status}, listening: ${listening ? "yes" : "no"}`);

  if (lyrics.status === "missing" && !listening) {
    const reason = "no lyrics and no audio preview";
    console.log(`   held: ${reason}`);
    if (!dryRun) {
      held[id] = { reason, at: new Date().toISOString() };
      writeJson(HELD_FILE, held);
    }
    summary.push(`| ${label} | held: ${reason} | $${meter.total.toFixed(3)} |`);
    continue;
  }

  const facts = await research(track, lyrics, meter);
  console.log(`   research: ${facts.identity}, ${facts.facts.length} sourced facts`);

  if (lyrics.status === "missing" && facts.facts.length < MIN_FACTS_WITHOUT_LYRICS) {
    const reason = `no lyrics and only ${facts.facts.length} confirmed facts (artist ${facts.identity})`;
    console.log(`   held: ${reason}`);
    if (!dryRun) {
      held[id] = { reason, at: new Date().toISOString() };
      writeJson(HELD_FILE, held);
    }
    summary.push(`| ${label} | held: ${reason} | $${meter.total.toFixed(3)} |`);
    continue;
  }
  const packet = packetText(track, lyrics, listening, facts);
  let draft: Awaited<ReturnType<typeof write>>;
  let checked: Awaited<ReturnType<typeof factCheck>>;
  try {
    draft = await write(packet, meter);
    checked = await factCheck(packet, draft.body, meter);
    if (wordCount(checked.body) < MIN_WORDS) throw new Error(`fact-checked body only ${wordCount(checked.body)} words`);
  } catch (error) {
    console.warn(`   failed: ${(error as Error).message}`);
    summary.push(`| ${label} | failed: ${(error as Error).message} | $${meter.total.toFixed(3)} |`);
    continue;
  }
  const removed = (checked.report as any[]).filter((r) => r?.verdict && r.verdict !== "supported").length;
  const lint = [BANNED.exec(checked.body)?.[0], META.exec(checked.body)?.[0]].filter(Boolean);
  console.log(`   fact-check: ${checked.report.length} claims, ${removed} removed/corrected${lint.length ? `, lint: ${lint.join(", ")}` : ""}`);

  const drafted = draft.genres.split(",").map((g) => g.trim().toLowerCase()).filter(Boolean);
  const genres = (drafted.length ? drafted : facts.genres.map((g) => g.toLowerCase())).slice(0, 3);
  const existing = reviews.get(id);
  const slug = existing ? existing.file.replace(/\.md$/, "") : slugify(`${track.artist} ${track.title}`);
  const pubDate = existing?.pubDate ?? new Date().toISOString().slice(0, 10);
  const sourceUrls = [...new Set(facts.facts.map((f) => f.source))].filter((url) => !STORE_DOMAINS.test(sourceTitle(url)));
  const markdown = `${frontmatter(track, genres, pubDate, sourceUrls.map((url) => ({ title: sourceTitle(url), url })))}${checked.body.trim()}\n`;

  if (dryRun) {
    console.log(`\n${markdown}`);
  } else {
    writeFileSync(`${SONGS_DIR}/${slug}.md`, markdown);
    writeJson(`${EVIDENCE_DIR}/${slug}.json`, {
      spotifyId: id,
      reviewedAt: new Date().toISOString(),
      models: { writer: WRITER_MODEL, research: RESEARCH_MODEL, listen: listening ? LISTEN_MODEL : null },
      lyrics: { status: lyrics.status, source: lyrics.source },
      listening,
      research: facts,
      draft: draft.body,
      factCheck: checked.report,
      lint,
      cost: { totalUsd: Number(meter.total.toFixed(4)), steps: meter.lines },
    });
    delete held[id];
    writeJson(HELD_FILE, held);
  }
  console.log(`   cost: $${meter.total.toFixed(3)} (${meter.lines.map((l) => `${l.step} $${l.usd.toFixed(3)}`).join(", ")})`);
  summary.push(
    `| ${label} | ${existing ? "rewrote" : "new"}: lyrics ${lyrics.status}, ${listening ? "listened" : "no audio"}, ${facts.facts.length} facts, ${removed} fact-check fixes${lint.length ? `, lint: ${lint.join("/")}` : ""} | $${meter.total.toFixed(3)} |`,
  );
}

if (summary.length && process.env.LATELY_SUMMARY_FILE) {
  appendFileSync(process.env.LATELY_SUMMARY_FILE, `| Song | Result | Cost |\n| --- | --- | --- |\n${summary.join("\n")}\n`);
}
