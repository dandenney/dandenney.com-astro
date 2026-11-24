// Researches where already-reviewed songs were recorded and writes `recordedAt` into their frontmatter.
// Usage: node --experimental-strip-types scripts/lately/backfill-recorded-at.ts [--dry-run] [--force] slug...
import { readFileSync, writeFileSync } from "node:fs";
import { claude, CostMeter, EVIDENCE_DIR, extractJson, readJson, RESEARCH_MODEL, SONGS_DIR } from "./lib.ts";
import { recordedAtYaml, type RecordedAt } from "./recorded-at.ts";

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const force = args.includes("--force");
const slugs = args.filter((a) => !a.startsWith("--"));

const field = (text: string, key: string) => text.match(new RegExp(`^${key}: "(.*)"`, "m"))?.[1] ?? "";

let total = 0;
for (const slug of slugs) {
  const file = `${SONGS_DIR}/${slug}.md`;
  const text = readFileSync(file, "utf8");
  if (/^recordedAt:/m.test(text) && !force) continue;
  const [, fm, body] = text.split(/^---$/m);
  const evidence = readJson<any>(`${EVIDENCE_DIR}/${slug}.json`, {});
  const facts = (evidence.research?.facts ?? []).map((f: any) => `- ${f.claim} (${f.source})`).join("\n");
  const meter = new CostMeter();
  const prompt = `Where was the recording of "${field(fm, "title")}" by ${field(fm, "artist")} (from "${field(fm, "album")}", released ${field(fm, "releaseDate")}) made?

Known notes from earlier research (may be incomplete or wrong):
${facts || "None."}

Excerpt from a review of it:
${body.trim().slice(0, 2500)}

Find the studio(s) where this exact version was tracked. Album sessions count when the song is on that album. A live or session version (e.g. "Live from X", "OurVinyl Sessions") was recorded where that session happened, not where the studio album was made. Mixing, mastering, writing, or where the artist lives do not count. If sources only give a city, set studio to null. Leave it empty rather than guessing.

Return only JSON:
{ "recordedAt": [{ "studio": "studio name or null", "city": "city", "state": "state/province or null", "country": "country", "source": "URL that states it" }] }`;
  try {
    const out = await claude({ model: RESEARCH_MODEL, prompt, maxTokens: 1500, webSearches: 3, meter, step: "recordedAt" });
    const data = extractJson<{ recordedAt: RecordedAt[] }>(out);
    const entries = (data.recordedAt ?? []).filter((r) => r.city && r.source?.startsWith("http"));
    total += meter.total;
    console.log(`${slug}: ${entries.map((e) => `${e.studio ?? "?"} / ${e.city}`).join("; ") || "none"} ($${meter.total.toFixed(3)})`);
    if (!entries.length || dryRun) continue;
    const cleaned = text.replace(/^recordedAt:\n(?:  .*\n)+/m, "");
    writeFileSync(file, cleaned.replace(/^aiGenerated:/m, `${recordedAtYaml(entries)}aiGenerated:`));
  } catch (error) {
    console.warn(`${slug}: failed ${(error as Error).message}`);
  }
}
console.log(`total $${total.toFixed(2)}`);
