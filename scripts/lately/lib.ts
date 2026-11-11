// Shared helpers for the Lately playlist sync and review pipeline.
import { existsSync, readFileSync, writeFileSync } from "node:fs";

export const PLAYLIST_ID = "0bscM0iqnWBVzY9xMCHc4y";
export const SONGS_DIR = "src/content/songs";
export const LATELY_FILE = "src/data/lately/playlist.json";
export const HELD_FILE = "src/data/lately/held.json";
export const EVIDENCE_DIR = "src/data/lately/evidence";

export const WRITER_MODEL = process.env.LATELY_WRITER_MODEL || "claude-opus-5-5";
export const RESEARCH_MODEL = process.env.LATELY_RESEARCH_MODEL || "claude-sonnet-5-5";
export const LISTEN_MODEL = process.env.LATELY_LISTEN_MODEL || "google/gemini-2.5-flash";

// USD per million tokens (input, output); web search is $10 per 1,000.
const ANTHROPIC_PRICES: Record<string, [number, number]> = {
  "claude-opus-5-5": [4, 20],
  "claude-sonnet-5-5": [2, 10],
};
const WEB_SEARCH_PRICE = 0.01;

export type LatelyTrack = { id: string; addedAt: string };
export type LatelySnapshot = { playlistId: string; syncedAt: string; tracks: LatelyTrack[] };

export function readJson<T>(path: string, fallback: T): T {
  return existsSync(path) ? (JSON.parse(readFileSync(path, "utf8")) as T) : fallback;
}

export function writeJson(path: string, data: unknown) {
  writeFileSync(path, `${JSON.stringify(data, null, 2)}\n`);
}

export function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is missing`);
  return value;
}

export function slugify(text: string): string {
  return text
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export class CostMeter {
  lines: { step: string; model: string; usd: number; detail: string }[] = [];

  addAnthropic(step: string, model: string, usage: any) {
    const [inPrice, outPrice] = ANTHROPIC_PRICES[model] ?? [0, 0];
    const input = (usage?.input_tokens ?? 0) + (usage?.cache_creation_input_tokens ?? 0);
    const output = usage?.output_tokens ?? 0;
    const searches = usage?.server_tool_use?.web_search_requests ?? 0;
    const usd = (input * inPrice + output * outPrice) / 1e6 + searches * WEB_SEARCH_PRICE;
    this.lines.push({ step, model, usd, detail: `${input} in / ${output} out${searches ? ` / ${searches} searches` : ""}` });
  }

  addOpenRouter(step: string, model: string, usage: any) {
    this.lines.push({ step, model, usd: usage?.cost ?? 0, detail: `${usage?.prompt_tokens ?? 0} in / ${usage?.completion_tokens ?? 0} out` });
  }

  get total() {
    return this.lines.reduce((sum, line) => sum + line.usd, 0);
  }
}

let spotifyToken: { value: string; expiresAt: number } | null = null;

// Client-credentials tokens last an hour; long batch runs outlive them.
async function getSpotifyToken(): Promise<string> {
  if (spotifyToken && Date.now() < spotifyToken.expiresAt) return spotifyToken.value;
  const basic = Buffer.from(`${requireEnv("SPOTIFY_CLIENT_ID")}:${requireEnv("SPOTIFY_CLIENT_SECRET")}`).toString("base64");
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { Authorization: `Basic ${basic}`, "Content-Type": "application/x-www-form-urlencoded" },
    body: "grant_type=client_credentials",
  });
  if (!res.ok) throw new Error(`Spotify token: ${res.status} ${await res.text()}`);
  const data = await res.json();
  spotifyToken = { value: data.access_token as string, expiresAt: Date.now() + ((data.expires_in ?? 3600) - 300) * 1000 };
  return spotifyToken.value;
}

export async function spotify(pathOrUrl: string, retried = false): Promise<any> {
  const url = pathOrUrl.startsWith("http") ? pathOrUrl : `https://api.spotify.com/v1${pathOrUrl}`;
  const res = await fetch(url, { headers: { Authorization: `Bearer ${await getSpotifyToken()}` } });
  if (res.status === 401 && !retried) {
    spotifyToken = null;
    return spotify(pathOrUrl, true);
  }
  if (!res.ok) throw new Error(`Spotify ${url}: ${res.status} ${await res.text()}`);
  return res.json();
}

export async function claude(opts: {
  model: string;
  system?: string;
  prompt: string;
  maxTokens?: number;
  webSearches?: number;
  meter: CostMeter;
  step: string;
}): Promise<string> {
  const body: Record<string, unknown> = {
    model: opts.model,
    max_tokens: opts.maxTokens ?? 2000,
    messages: [{ role: "user", content: opts.prompt }],
  };
  if (opts.system) body.system = opts.system;
  if (opts.webSearches) body.tools = [{ type: "web_search_20250305", name: "web_search", max_uses: opts.webSearches }];

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": requireEnv("ANTHROPIC_API_KEY"),
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`Anthropic (${opts.model}): ${data.error?.message ?? res.status}`);
  opts.meter.addAnthropic(opts.step, opts.model, data.usage);
  return data.content
    .filter((block: any) => block.type === "text")
    .map((block: any) => block.text)
    .join("")
    .trim();
}

export async function openRouterAudio(opts: { prompt: string; audio: Buffer; meter: CostMeter }): Promise<string> {
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: { Authorization: `Bearer ${requireEnv("OPENROUTER_API_KEY")}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: LISTEN_MODEL,
      temperature: 0.2,
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: opts.prompt },
            { type: "input_audio", input_audio: { data: opts.audio.toString("base64"), format: "mp3" } },
          ],
        },
      ],
    }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`OpenRouter (${LISTEN_MODEL}): ${data.error?.message ?? res.status}`);
  opts.meter.addOpenRouter("listen", LISTEN_MODEL, data.usage);
  return data.choices[0].message.content.trim();
}

export function extractJson<T>(text: string): T {
  const fenced = [...text.matchAll(/```(?:json)?\s*([\s\S]*?)```/g)].map((m) => m[1]);
  const starts = [...text.matchAll(/\{/g)].map((m) => m.index!);
  const candidates = [...fenced.reverse(), ...starts.map((start) => text.slice(start, text.lastIndexOf("}") + 1))];
  for (const candidate of candidates) {
    try {
      return JSON.parse(candidate) as T;
    } catch {}
  }
  throw new Error("no JSON object found");
}

export function extractTag(text: string, tag: string): string | null {
  const match = text.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
  return match ? match[1].trim() : null;
}

const decodeOnce = (text: string) =>
  text
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&rsquo;/g, "’")
    .replace(/&lsquo;/g, "‘")
    .replace(/&rdquo;/g, "”")
    .replace(/&ldquo;/g, "“")
    .replace(/&amp;/g, "&");

function decodeEntities(text: string) {
  let decoded = decodeOnce(text);
  for (let prev = text; decoded !== prev; prev = decoded, decoded = decodeOnce(decoded));
  return decoded;
}

function metaContent(html: string, key: string): string | null {
  const tag = html.match(new RegExp(`<meta[^>]+(?:property|name)=["']${key}["'][^>]*>`, "i"))?.[0];
  const content = tag?.match(/content=["']([^"']*)["']/i)?.[1];
  return content ? decodeEntities(content).replace(/\s+/g, " ").trim() : null;
}

const SUFFIX = /\s+[|│–—-]\s+([^|│–—]{2,30})$/;

/** "Publication: Headline" from the page's metadata, falling back to the bare domain. */
export async function sourceLabel(url: string, attempts = 2): Promise<string> {
  let host = url;
  try {
    host = new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; dandenney.com lately-reviews)" },
      redirect: "follow",
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return res.status >= 500 && attempts > 1 ? sourceLabel(url, attempts - 1) : host;
    const html = (await res.text()).slice(0, 300_000);
    let site = metaContent(html, "og:site_name");
    let title =
      metaContent(html, "og:title") ??
      decodeEntities(html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1] ?? "").replace(/\s+/g, " ").trim();
    if (!title) return site ?? host;
    if (site === title) site = null;
    const suffix = title.match(SUFFIX);
    if (suffix && (!site || suffix[1].trim().toLowerCase() === site.toLowerCase())) {
      site ??= suffix[1].trim();
      title = title.slice(0, suffix.index).trim();
    }
    title = title.slice(0, 140);
    const publication = site ?? host;
    return title.toLowerCase().startsWith(publication.toLowerCase()) ? title : `${publication}: ${title}`;
  } catch {
    return attempts > 1 ? sourceLabel(url, attempts - 1) : host;
  }
}
