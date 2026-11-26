import { readFileSync } from "node:fs";
import { join } from "node:path";
import yaml from "js-yaml";

export const UI_DIR = "ui";

export interface Brief {
  slug: string;
  data: { title: string; kind: string; shipped?: string; style?: "house" | "free"; [key: string]: unknown };
  raw: string;
}

export function readBrief(slug: string): Brief {
  const raw = readFileSync(join(UI_DIR, slug, "BRIEF.md"), "utf8");
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) throw new Error(`ui/${slug}/BRIEF.md has no frontmatter`);
  return { slug, data: yaml.load(match[1]) as Brief["data"], raw };
}

export function args(argv: string[]) {
  const positional: string[] = [];
  const flags: Record<string, string | true> = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith("--")) positional.push(a);
    else if (argv[i + 1] && !argv[i + 1].startsWith("--")) flags[a.slice(2)] = argv[++i];
    else flags[a.slice(2)] = true;
  }
  return { positional, flags };
}
