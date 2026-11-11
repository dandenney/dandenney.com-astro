/**
 * Re-label `sources` in Lately-pipeline reviews from page metadata.
 *   node --experimental-strip-types --no-warnings scripts/lately/retitle-sources.ts
 */
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { SONGS_DIR, sourceLabel } from "./lib.ts";

const yaml = (value: string) => JSON.stringify(value);

for (const file of readdirSync(SONGS_DIR).filter((f) => f.endsWith(".md"))) {
  const path = `${SONGS_DIR}/${file}`;
  const text = readFileSync(path, "utf8");
  if (!/^pipeline: "lately"$/m.test(text)) continue;
  const block = text.match(/^sources:\n((?: {2}- title: .*\n {4}url: .*\n)+)/m);
  if (!block) continue;
  const urls = [...block[1].matchAll(/^ {4}url: (.*)$/gm)].map((m) => JSON.parse(m[1]) as string);
  const titles = await Promise.all(urls.map(sourceLabel));
  const lines = urls
    .map((url, i) => ({ title: titles[i], url }))
    .filter((s, i, all) => all.findIndex((o) => o.title === s.title) === i)
    .map((s) => `  - title: ${yaml(s.title)}\n    url: ${yaml(s.url)}\n`)
    .join("");
  writeFileSync(path, text.replace(block[0], `sources:\n${lines}`));
  console.log(`${file}\n${lines}`);
}
