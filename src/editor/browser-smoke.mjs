import assert from "node:assert/strict";
import { existsSync, readdirSync } from "node:fs";
import { homedir } from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";

const baseUrl = process.env.EDITOR_SMOKE_BASE_URL ?? "http://127.0.0.1:4321";
const routes = [
  "/__editor/posts/front-end-dev/adding-tinacms-to-my-astro-site",
  "/__editor/blips/notes-on-building-ai-products-in-the-probabilistic-era",
  "/__editor/reviews/grand-central-brewing",
  "/__editor/posts/conferences/imagine-if-2026",
  "/__editor/posts/front-end-dev/css-scrolling-images",
  "/__editor/blips/filter-array-by-keyboard-rows",
];

function chromiumCandidates() {
  const candidates = [
    process.env.CHROME_PATH,
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
  ];
  const tools = path.join(homedir(), ".hermes", "tools");
  if (existsSync(tools)) {
    for (const directory of readdirSync(tools)) {
      if (!directory.startsWith("chromium-")) continue;
      candidates.push(path.join(tools, directory,
        "chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing"));
      candidates.push(path.join(tools, directory,
        "chrome-mac-x64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing"));
    }
  }
  return candidates.filter(Boolean);
}

const chrome = chromiumCandidates().find(existsSync);
if (!chrome) throw new Error("Chromium is required. Set CHROME_PATH to its executable.");

for (const route of routes) {
  const url = new URL(route, baseUrl).href;
  const result = spawnSync(chrome, [
    "--headless=new",
    "--no-sandbox",
    "--disable-gpu",
    "--virtual-time-budget=5000",
    "--dump-dom",
    url,
  ], { encoding: "utf8", maxBuffer: 16 * 1024 * 1024 });
  assert.equal(result.status, 0, `Chromium failed for ${url}: ${result.stderr}`);
  const html = result.stdout;
  assert.match(html, /<header\b/i, `${route} must include the site header`);
  assert.match(html, /<footer\b/i, `${route} must include the site footer`);
  assert.match(html, /class="[^"]*mdxeditor[^"]*"/i, `${route} must mount MDXEditor`);
  assert.match(html, /aria-label="editable markdown"/i,
    `${route} must label the visual editing surface`);
  assert.match(html, /contenteditable="true"/i,
    `${route} must expose a rich contenteditable body`);
  assert.match(html, /data-lexical-editor="true"/i,
    `${route} must mount the Lexical editing surface`);
  assert.doesNotMatch(html, /<textarea\b/i, `${route} must not expose a Markdown textarea`);
}

console.log(`Editor browser smoke passed for ${routes.length} layouts.`);
