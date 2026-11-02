/**
 * Pulls shipped projects from the public Possibility Factory repo into the
 * `factory` content collection (src/content/factory/<slug>.md) and saves each
 * live site's og:image to public/factory/<slug>.<ext>.
 *
 * A project counts as shipped once its README has a `Live: <url>` line, or its
 * package.json is publishable to npm. Existing entries are never overwritten,
 * so hand edits stick; pass --force to rewrite them.
 *
 * Optional: FACTORY_DATABASE_URL + FACTORY_DATABASE_AUTH_TOKEN (read-only Turso
 * token) add the idea's signals and skip ideas not marked shipped on the board.
 *
 * Usage: node --experimental-strip-types --no-warnings scripts/sync-factory.ts [--dry-run] [--force] [--only <slug>]
 */
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REPO = "dandenney/the-possibility-factory";
const BRANCH = "main";
const CONTENT_DIR = join(process.cwd(), "src/content/factory");
const IMAGE_DIR = join(process.cwd(), "public/factory");

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const force = args.includes("--force");
const onlyIndex = args.indexOf("--only");
const only = onlyIndex >= 0 ? args[onlyIndex + 1] : undefined;

type Signal = { title: string; url: string };
type Entry = {
  slug: string;
  title: string;
  summary: string;
  ideaId: number;
  ideaTitle: string;
  pitch: string;
  whyNow: string;
  kind: "web" | "package";
  url: string;
  repoUrl: string;
  pubDate: string;
  image?: string;
  signals: Signal[];
};

const ghHeaders: Record<string, string> = {
  Accept: "application/vnd.github+json",
  "User-Agent": "dandenney.com-factory-sync",
};
if (process.env.GITHUB_TOKEN) ghHeaders.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

async function gh<T>(path: string): Promise<T> {
  const res = await fetch(`https://api.github.com/repos/${REPO}${path}`, { headers: ghHeaders });
  if (!res.ok) throw new Error(`GitHub ${path}: HTTP ${res.status}`);
  return (await res.json()) as T;
}

async function raw(path: string): Promise<string | null> {
  const res = await fetch(`https://raw.githubusercontent.com/${REPO}/${BRANCH}/${path}`);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`raw ${path}: HTTP ${res.status}`);
  return res.text();
}

function section(md: string, heading: string): string {
  const match = md.match(new RegExp(`^##\\s+${heading}\\s*\\n([\\s\\S]*?)(?=^##\\s|(?![\\s\\S]))`, "im"));
  return match ? match[1].trim() : "";
}

function paragraph(text: string): string {
  return text.split(/\n\s*\n/)[0].replace(/\s*\n\s*/g, " ").replace(/`([^`]+)`/g, "$1").trim();
}

function readmeSummary(readme: string): string {
  const afterTitle = readme.replace(/^#\s+.*\n/, "");
  for (const block of afterTitle.split(/\n\s*\n/)) {
    const text = block.trim();
    if (!text || /^(Live:|```|!\[|[-*]\s|\$|<)/.test(text)) continue;
    return text.replace(/\s*\n\s*/g, " ").replace(/`([^`]+)`/g, "$1");
  }
  return "";
}

function markdownLinks(text: string): Signal[] {
  return [...text.matchAll(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g)].map((m) => ({ title: m[1], url: m[2] }));
}

function chicagoDate(iso: string): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Chicago" }).format(new Date(iso));
}

async function firstCommitDate(slug: string): Promise<string> {
  const commits = await gh<{ commit: { author: { date: string } } }[]>(
    `/commits?path=projects/${slug}&per_page=100`,
  );
  const first = commits[commits.length - 1];
  return chicagoDate(first ? first.commit.author.date : new Date().toISOString());
}

async function saveOgImage(slug: string, url: string): Promise<string | undefined> {
  try {
    const html = await (await fetch(url)).text();
    const tag = html.match(/<meta[^>]+property=["']og:image["'][^>]*>/i)?.[0];
    const content = tag?.match(/content=["']([^"']+)["']/i)?.[1];
    if (!content) return undefined;
    const imageUrl = new URL(content, url);
    const res = await fetch(imageUrl);
    if (!res.ok) return undefined;
    const ext = (imageUrl.pathname.match(/\.(png|jpe?g|webp|gif)$/i)?.[1] ?? "png").toLowerCase();
    const file = `${slug}.${ext}`;
    if (!dryRun) {
      mkdirSync(IMAGE_DIR, { recursive: true });
      writeFileSync(join(IMAGE_DIR, file), new Uint8Array(await res.arrayBuffer()));
    }
    return `/factory/${file}`;
  } catch (err) {
    console.warn(`  og:image for ${slug} failed: ${(err as Error).message}`);
    return undefined;
  }
}

type BoardIdea = { status: string; signals: Signal[] };

async function boardIdea(ideaId: number): Promise<BoardIdea | null> {
  const dbUrl = process.env.FACTORY_DATABASE_URL;
  const token = process.env.FACTORY_DATABASE_AUTH_TOKEN;
  if (!dbUrl || !token) return null;
  const sql =
    "select i.status, (select json_group_array(json_object('title', s.title, 'url', s.url)) " +
    "from idea_signals x join signals s on s.id = x.signal_id where x.idea_id = i.id and s.url is not null) as signals " +
    "from ideas i where i.id = ?";
  const res = await fetch(`${dbUrl.replace(/^libsql:/, "https:")}/v2/pipeline`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      requests: [
        { type: "execute", stmt: { sql, args: [{ type: "integer", value: String(ideaId) }] } },
        { type: "close" },
      ],
    }),
  });
  if (!res.ok) throw new Error(`Turso: HTTP ${res.status}`);
  const result = (await res.json()).results[0]?.response?.result;
  const row = result?.rows?.[0];
  if (!row) return null;
  return { status: row[0].value, signals: JSON.parse(row[1].value ?? "[]") };
}

async function buildEntry(slug: string): Promise<Entry | null> {
  const [spec, readme, pkgText] = await Promise.all([
    raw(`projects/${slug}/SPEC.md`),
    raw(`projects/${slug}/README.md`),
    raw(`projects/${slug}/package.json`),
  ]);
  const ideaId = Number(spec?.match(/Idea #(\d+)/)?.[1]);
  if (!spec || !readme || !ideaId) return null;

  const pkg = pkgText ? JSON.parse(pkgText) : null;
  const live = readme.match(/^Live:\s*<?(https?:\/\/[^\s>]+)>?/m)?.[1];
  let kind: Entry["kind"];
  let url: string;
  if (live) {
    kind = "web";
    url = live;
  } else if (pkg?.name && !pkg.private) {
    kind = "package";
    url = `https://www.npmjs.com/package/${pkg.name}`;
  } else {
    return null;
  }

  const board = await boardIdea(ideaId);
  if (board && board.status !== "shipped") return null;

  return {
    slug,
    title: readme.match(/^#\s+(.+)$/m)?.[1].trim() ?? slug,
    summary: readmeSummary(readme),
    ideaId,
    ideaTitle: spec.match(/^#\s+(.+)$/m)?.[1].trim() ?? slug,
    pitch: paragraph(section(spec, "Pitch")),
    whyNow: paragraph(section(spec, "Why now")),
    kind,
    url,
    repoUrl: `https://github.com/${REPO}/tree/${BRANCH}/projects/${slug}`,
    pubDate: await firstCommitDate(slug),
    image: kind === "web" ? await saveOgImage(slug, url) : undefined,
    signals: board?.signals.length ? board.signals : markdownLinks(section(spec, "Sparked by")),
  };
}

function toMarkdown(entry: Entry): string {
  const q = (value: string) => JSON.stringify(value);
  const lines = [
    "---",
    `title: ${q(entry.title)}`,
    `summary: ${q(entry.summary)}`,
    `pubDate: ${entry.pubDate}`,
    `ideaId: ${entry.ideaId}`,
    `ideaTitle: ${q(entry.ideaTitle)}`,
    `pitch: ${q(entry.pitch)}`,
    `whyNow: ${q(entry.whyNow)}`,
    `kind: ${entry.kind}`,
    `url: ${q(entry.url)}`,
    `repoUrl: ${q(entry.repoUrl)}`,
  ];
  if (entry.image) lines.push(`image: ${q(entry.image)}`, `imageAlt: ${q(`${entry.title} preview`)}`);
  if (entry.signals.length) {
    lines.push("signals:");
    for (const s of entry.signals) lines.push(`  - title: ${q(s.title)}`, `    url: ${q(s.url)}`);
  }
  lines.push("aiGenerated: true", "---", "");
  return lines.join("\n");
}

const dirs = (await gh<{ name: string; type: string }[]>("/contents/projects"))
  .filter((item) => item.type === "dir" && (!only || item.name === only))
  .map((item) => item.name);

let written = 0;
for (const slug of dirs) {
  const file = join(CONTENT_DIR, `${slug}.md`);
  if (existsSync(file) && !force) continue;
  const entry = await buildEntry(slug);
  if (!entry) {
    console.log(`skip ${slug} (not shipped yet)`);
    continue;
  }
  console.log(`${dryRun ? "would write" : "write"} src/content/factory/${slug}.md${entry.image ? ` + ${entry.image}` : ""}`);
  if (dryRun) console.log(toMarkdown(entry));
  else {
    mkdirSync(CONTENT_DIR, { recursive: true });
    writeFileSync(file, toMarkdown(entry));
  }
  written++;
}
console.log(`${written} factory entr${written === 1 ? "y" : "ies"} ${dryRun ? "found" : "written"}`);
