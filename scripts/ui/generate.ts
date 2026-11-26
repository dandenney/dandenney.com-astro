// Generates one variant of a UI exploration with any CLI agent. See ui/README.md.
//
//   yarn ui:generate <slug> --agent claude|codex|gemini|opencode [--model M] [--as LABEL] [--force]
//   yarn ui:generate <slug> --cmd "<reads the prompt on stdin, prints the page>" --as LABEL
//   yarn ui:generate <slug> --print-prompt     (paste into any chat or agent)
import { spawnSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { extractHtmlDocument, TAILWIND_BROWSER_SCRIPT } from "../../src/lib/ui-lab.ts";
import { args, readBrief, UI_DIR } from "./lib.ts";

const AGENTS = ["claude", "codex", "gemini", "opencode"] as const;
type Agent = (typeof AGENTS)[number];

const { positional, flags } = args(process.argv.slice(2));
const slug = positional[0];
if (!slug) fail("usage: yarn ui:generate <slug> --agent <claude|codex|gemini|opencode> [--model M] [--as LABEL]");

const brief = readBrief(slug);
const prompt = buildPrompt();

if (flags["print-prompt"]) {
  process.stdout.write(prompt);
  process.exit(0);
}

const agent = flags.agent as Agent | undefined;
const model = typeof flags.model === "string" ? flags.model : undefined;
const cmd = typeof flags.cmd === "string" ? flags.cmd : undefined;
if (!cmd && !(agent && AGENTS.includes(agent))) fail(`pass --agent (${AGENTS.join(", ")}) or --cmd`);

const label = toLabel(typeof flags.as === "string" ? flags.as : model ?? agent ?? "");
if (!label) fail("--cmd needs --as <label> to name the variant");
const out = join(UI_DIR, slug, `${label}.html`);
if (existsSync(out) && !flags.force) fail(`${out} exists; pass --force to replace it`);

console.error(`Generating ${out} with ${cmd ?? [agent, model].filter(Boolean).join(" ")}…`);
const started = Date.now();
const reply = cmd ? run("sh", ["-c", cmd], prompt) : runAgent(agent!, model);
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

function runAgent(agent: Agent, model?: string): string {
  const m = (flag: string) => (model ? [flag, model] : []);
  switch (agent) {
    case "claude":
      return run("claude", ["-p", ...m("--model")], prompt);
    case "gemini":
      return run("gemini", [...m("-m"), "-p", prompt]);
    case "opencode":
      return run("opencode", ["run", ...m("-m"), prompt]);
    case "codex": {
      const dir = mkdtempSync(join(tmpdir(), "ui-codex-"));
      const last = join(dir, "last.txt");
      try {
        run("codex", ["exec", "--skip-git-repo-check", "--output-last-message", last, ...m("-m"), "-"], prompt);
        return readFileSync(last, "utf8");
      } finally {
        rmSync(dir, { recursive: true, force: true });
      }
    }
  }
}

function run(bin: string, argv: string[], input?: string): string {
  const res = spawnSync(bin, argv, {
    input,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
    timeout: 20 * 60 * 1000,
    stdio: [input === undefined ? "ignore" : "pipe", "pipe", "inherit"],
  });
  if (res.error) fail(`${bin}: ${res.error.message}`);
  if (res.status !== 0) fail(`${bin} exited with ${res.status}`);
  return res.stdout;
}

function toLabel(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9.]+/g, "-").replace(/^-+|-+$/g, "");
}

function fail(message: string): never {
  console.error(message);
  process.exit(1);
}
