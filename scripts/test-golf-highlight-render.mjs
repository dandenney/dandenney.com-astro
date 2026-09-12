import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const sessionsHtml = await readFile(new URL("../dist/golf/sessions/index.html", import.meta.url), "utf8");
const indexHtml = await readFile(new URL("../dist/golf/index.html", import.meta.url), "utf8");

test("the golf log renders selected shot highlights and their records", () => {
  assert.match(sessionsHtml, /Selected shot highlights/);
  assert.match(sessionsHtml, /Shot 45\/45/);
  assert.match(sessionsHtml, /4 saved shots, not session averages/);
  assert.match(sessionsHtml, /id="shot-highlights-title-4"/);
  assert.match(sessionsHtml, /aria-labelledby="shot-highlights-title-4"/);
  assert.match(sessionsHtml, /class="shots-scroll"[^>]*role="region"[^>]*aria-labelledby="shot-highlights-title-4"[^>]*tabindex="0"/);
  assert.match(sessionsHtml, /<span[^>]*class="sr-only"[^>]*>Not recorded<\/span>/);
  assert.match(sessionsHtml, /151<span class="gf-unit"[^>]*>yd<\/span>/);
  assert.match(sessionsHtml, /1\.34/);
});

test("selected shots set records without becoming carry-trend averages", () => {
  assert.match(indexHtml, /7-iron carry[\s\S]{0,500}>151</);
  assert.match(indexHtml, /Smash factor[\s\S]{0,500}>1\.34</);

  const payloadMatch = indexHtml.match(/<script[^>]*data-chart-data[^>]*>(.*?)<\/script>/s);
  assert.ok(payloadMatch, "chart payload should exist");
  const payload = JSON.parse(payloadMatch[1]);
  const carrySeries = payload.series.find((series) => series.key === "carry7i");
  assert.ok(carrySeries, "7-iron carry series should exist");
  assert.equal(carrySeries.points.some((point) => point.date === "2026-09-11"), false);
});
