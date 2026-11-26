// Renders public/ui/<slug>/og.png (1200x630) from an exploration's shown variant with headless Chrome.
//   yarn ui:og <slug> [--variant LABEL] [--chrome /path/to/chrome]
import { spawnSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { buildFrame } from "../../src/lib/ui-lab.ts";
import { args, readBrief, UI_DIR } from "./lib.ts";

const { positional, flags } = args(process.argv.slice(2));
const slug = positional[0];
if (!slug) throw new Error("usage: yarn ui:og <slug> [--variant LABEL]");

const brief = readBrief(slug);
const variants = readdirSync(join(UI_DIR, slug)).filter((f) => f.endsWith(".html")).map((f) => f.slice(0, -5)).sort();
const variant = (typeof flags.variant === "string" && flags.variant) || brief.data.shipped || variants[0];
if (!variant || !variants.includes(variant)) throw new Error(`no ui/${slug}/${variant ?? "<variant>"}.html`);

const dir = mkdtempSync(join(tmpdir(), "ui-og-"));
const page = join(dir, "frame.html");
writeFileSync(page, await buildFrame(readFileSync(join(UI_DIR, slug, `${variant}.html`), "utf8")));

const outDir = join("public", "ui", slug);
mkdirSync(outDir, { recursive: true });
const out = resolve(outDir, "og.png");
const chrome = typeof flags.chrome === "string" ? flags.chrome : process.env.CHROME_PATH ?? "google-chrome";
const res = spawnSync(
  chrome,
  ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=1", "--window-size=1200,630",
   "--virtual-time-budget=4000", `--screenshot=${out}`, `file://${page}`],
  { stdio: "inherit" },
);
rmSync(dir, { recursive: true, force: true });
if (res.status !== 0) throw new Error(`${chrome} exited with ${res.status}`);
console.log(`Wrote ${join(outDir, "og.png")} from ${variant}.html`);
