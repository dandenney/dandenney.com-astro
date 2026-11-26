// Critiques an exploration's shown variant with any CLI agent and writes ui/<slug>/CRITIQUE.md. See ui/README.md.
//
//   yarn ui:critique <slug> --agent claude|codex|gemini|opencode [--model M] [--as LABEL] [--variant V] [--force]
//   yarn ui:critique <slug> --cmd "<reads the prompt on stdin, prints the critique>" --as LABEL
//   yarn ui:critique <slug> --print-prompt
//
// Briefs with `style: free` are skipped; --anyway critiques them on function and communication only.
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import yaml from "js-yaml";
import { fail, runnerFromFlags } from "./agents.ts";
import { args, readBrief, UI_DIR } from "./lib.ts";

const SKILLS = ".agents/skills";

const { positional, flags } = args(process.argv.slice(2));
const slug = positional[0];
if (!slug) fail("usage: yarn ui:critique <slug> --agent <claude|codex|gemini|opencode> [--model M] [--variant V]");

const brief = readBrief(slug);
const free = brief.data.style === "free";
if (free && !flags.anyway) {
  console.error(`ui/${slug} is style: free, so it skips the critique. Pass --anyway to critique function and communication only.`);
  process.exit(0);
}

const variant = typeof flags.variant === "string" ? flags.variant : brief.data.shipped ?? firstVariant();
const sourcePath = join(UI_DIR, slug, `${variant}.html`);
if (!existsSync(sourcePath)) fail(`${sourcePath} doesn't exist`);
const prompt = buildPrompt(readFileSync(sourcePath, "utf8"));

if (flags["print-prompt"]) {
  process.stdout.write(prompt);
  process.exit(0);
}

const runner = runnerFromFlags(flags);
const out = join(UI_DIR, slug, "CRITIQUE.md");
if (existsSync(out) && !flags.force) fail(`${out} exists; pass --force to replace it`);

console.error(`Critiquing ${sourcePath} with ${runner.describe}…`);
const reply = runner.ask(prompt);
const body = reply.slice(Math.max(0, reply.search(/^## /m))).trim();
if (!/^## /.test(body)) {
  const dump = join(UI_DIR, slug, `.critique-${runner.label}.reply.txt`);
  writeFileSync(dump, reply);
  fail(`no "## " sections in the reply; saved it to ${dump}`);
}
const frontmatter = yaml.dump({ variant, critic: runner.label, date: new Date().toISOString().slice(0, 10), scope: free ? "function" : "full" });
writeFileSync(out, `---\n${frontmatter}---\n\n${body}\n`);
console.error(`Wrote ${out}.`);

function firstVariant(): string {
  const file = readdirSync(join(UI_DIR, slug)).filter((f) => f.endsWith(".html")).sort()[0];
  if (!file) fail(`ui/${slug} has no variants to critique`);
  return file.replace(/\.html$/, "");
}

/** The part of a skill file between two headings, so the critique quotes Impeccable rather than paraphrasing it. */
function section(file: string, from: string, to?: string): string {
  const text = readFileSync(join(SKILLS, file), "utf8");
  const start = text.indexOf(from);
  if (start === -1) fail(`${file} has no "${from}" heading; update scripts/ui/critique.ts`);
  const end = to ? text.indexOf(to, start) : -1;
  return text.slice(start, end === -1 ? undefined : end).trim();
}

function buildPrompt(source: string): string {
  const contract = readFileSync(join(UI_DIR, "AGENTS.md"), "utf8");
  const parts = [
    `You're a design director critiquing one UI exploration for dandenney.com/ui: ui/${slug}/${variant}.html, built from the brief below.`,
    "The bar is a beautiful outcome where communication or functionality is unusually high. Be direct and specific: name the element, say why it matters to the person using it, and give a concrete fix. Don't soften it, and don't pad it.",
    free
      ? "The brief is `style: free`: it breaks the house taste on purpose. Don't judge it against any style. Judge only whether it communicates and works."
      : "Judge it against the contract it was built to, including the house taste, and against the Impeccable guidelines.",
    `\n---\n\n# The contract it was built to: ui/AGENTS.md\n\n${contract}`,
  ];
  if (!free) {
    parts.push(`\n---\n\n# Impeccable guidelines\n\n${section("impeccable/SKILL.md", "## Frontend Aesthetics Guidelines", "## Implementation Principles")}`);
  }
  parts.push(
    `\n---\n\n${section("critique/reference/heuristics-scoring.md", "# Heuristics Scoring Guide")}`,
    `\n---\n\n# The brief: ui/${slug}/BRIEF.md\n\n${brief.raw}`,
    `\n---\n\n# The source: ui/${slug}/${variant}.html\n\n\`\`\`html\n${source}\n\`\`\``,
    `\n---\n\n# Your reply

Reply with only Markdown in exactly these sections, starting at the first "## ". Don't write any files.

## Verdict
Two or three sentences: does it reach the bar, and what's the single biggest opportunity?${free ? "" : " Say plainly whether it reads as AI-generated, and why."}

## Brief coverage
One bullet per thing the brief asks for: **Met**, **Partly** or **Missed**, then what you saw.

## Heuristics
A table with columns #, Heuristic, Score, Key issue for Nielsen's 10, scored 0 to 4 per the guide. End with a **Total** row out of 40 and its rating band.

## What's working
Two or three specific things, and why they work.

## Priority issues
Three to five, most important first. Each is one bullet starting **[P0]** to **[P3]**, then the problem, why it matters, and the fix.

## Questions
One to three questions that might unlock a better version.
`,
  );
  return parts.join("\n");
}
