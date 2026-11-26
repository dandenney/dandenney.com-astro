// The agent-agnostic runner behind yarn ui:generate and yarn ui:critique: any CLI agent, or any command
// that reads a prompt on stdin and prints its reply.
import { spawnSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

export const AGENTS = ["claude", "codex", "gemini", "opencode"] as const;
export type Agent = (typeof AGENTS)[number];

export interface Runner {
  /** Who made the reply, as a file-name-safe label: `--as`, else `--model`, else the agent. */
  label: string;
  describe: string;
  ask: (prompt: string) => string;
}

export function runnerFromFlags(flags: Record<string, string | true>): Runner {
  const agent = flags.agent as Agent | undefined;
  const model = typeof flags.model === "string" ? flags.model : undefined;
  const cmd = typeof flags.cmd === "string" ? flags.cmd : undefined;
  if (!cmd && !(agent && AGENTS.includes(agent))) fail(`pass --agent (${AGENTS.join(", ")}) or --cmd`);
  const label = toLabel(typeof flags.as === "string" ? flags.as : model ?? agent ?? "");
  if (!label) fail("--cmd needs --as <label> to name who made it");
  return {
    label,
    describe: cmd ?? [agent, model].filter(Boolean).join(" "),
    ask: (prompt) => (cmd ? run("sh", ["-c", cmd], prompt) : runAgent(agent!, prompt, model)),
  };
}

function runAgent(agent: Agent, prompt: string, model?: string): string {
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

export function toLabel(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9.]+/g, "-").replace(/^-+|-+$/g, "");
}

export function fail(message: string): never {
  console.error(message);
  process.exit(1);
}
