import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pageUrl = new URL("../../src/pages/betting/rithmm-tracker.astro", import.meta.url);

test("Rithmm tracker uses the 2xl container for its page sections", async () => {
  const source = await readFile(pageUrl, "utf8");
  const wideContainers = source.match(/mx-auto max-w-screen-2xl/g) ?? [];

  assert.equal(
    wideContainers.length,
    3,
    "expected the page header, stats, and table content to share the 2xl container",
  );
  assert.doesNotMatch(source, /mx-auto max-w-7xl/);
});
