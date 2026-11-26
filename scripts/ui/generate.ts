// Generates one variant of a UI exploration with any CLI agent. See ui/README.md.
//
//   yarn ui:generate <slug> --agent claude|codex|gemini|opencode [--model M] [--as LABEL] [--force]
//   yarn ui:generate <slug> --cmd "<reads the prompt on stdin, prints the page>" --as LABEL
//   yarn ui:generate <slug> --print-prompt     (paste into any chat or agent)
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { extractHtmlDocument, TAILWIND_BROWSER_SCRIPT } from "../../src/lib/ui-lab.ts";
import { fail, runnerFromFlags } from "./agents.ts";
import { args, readBrief, UI_DIR } from "./lib.ts";

const { positional, flags } = args(process.argv.slice(2));
const slug = positional[0];
if (!slug) fail("usage: yarn ui:generate <slug> --agent <claude|codex|gemini|opencode> [--model M] [--as LABEL]");

const brief = readBrief(slug);
const prompt = buildPrompt();

if (flags["print-prompt"]) {
  process.stdout.write(prompt);
  process.exit(0);
}

const runner = runnerFromFlags(flags);
const label = runner.label;
const out = join(UI_DIR, slug, `${label}.html`);
if (existsSync(out) && !flags.force) fail(`${out} exists; pass --force to replace it`);

console.error(`Generating ${out} with ${runner.describe}…`);
const started = Date.now();
const reply = runner.ask(prompt);
let html = extractHtmlDocument(reply);
if (!html) {
  const dump = join(UI_DIR, slug, `.${label}.reply.txt`);
  writeFileSync(dump, reply);
  fail(`no complete <!doctype html>…</html> document in the reply; saved it to ${dump}`);
}
if (!html.includes("@tailwindcss/browser") && /class="[^"]*\b(flex|grid|p-|m-|text-|bg-)/.test(html)) {
  html = html.replace(/<\/head>/i, `${TAILWIND_BROWSER_SCRIPT}\n</head>`);
}
writeFileSync(out, html);
console.error(`Wrote ${out} in ${Math.round((Date.now() - started) / 1000)}s.`);
if (!brief.data.shipped) console.error(`Set \`shipped: ${label}\` in ui/${slug}/BRIEF.md if this is the one.`);

function buildPrompt(): string {
  const contract = readFileSync(join(UI_DIR, "AGENTS.md"), "utf8");
  return [
    contract,
    `\n---\n\n# Your brief: ui/${slug}/BRIEF.md\n\n${brief.raw}`,
    "\n---\n\nReply with only the complete HTML document, from <!doctype html> to </html>. Don't write any files.\n",
  ].join("\n");
}
