import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const routeUrl = new URL("./editor.astro", import.meta.url);

async function routeSource() {
  return readFile(routeUrl, "utf8");
}

test("editor route renders entries through every real collection layout", async () => {
  const source = await routeSource();
  assert.match(source, /BlogPost/);
  assert.match(source, /Blip/);
  assert.match(source, /Review/);
  assert.match(source, /await render\(entry\)/);
  assert.match(source, /const layoutIdentifier = record\.entryId\.split\('\/'\)\.at\(-1\)/);
  assert.match(source, /<BlogPost [^>]*identifier=\{layoutIdentifier\}/);
  assert.doesNotMatch(source, /<Blip [^>]*identifier=/);
  assert.match(source, /id="local-editor-original"/);
});

test("editor route mounts a visual editor without body source forms", async () => {
  const source = await routeSource();
  assert.doesNotMatch(source, /editor-source|editor-regions|Markdown source editor/);
  assert.match(source, /mountWritingEditor/);
});
