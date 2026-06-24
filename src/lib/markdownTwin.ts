import { getCollection, type CollectionEntry } from "astro:content";

/**
 * Markdown twins: every eligible content page has a companion `.md` URL
 * (e.g. /posts/slug.md) that returns a synthesized markdown document
 * (header + body) as text/plain. See CONTEXT.md and
 * docs/adr/0001-markdown-twins-no-content-negotiation.md.
 */

export const SITE = "https://www.dandenney.com";

export type TwinCollectionName =
  | "posts"
  | "blips"
  | "reviews"
  | "songs"
  | "plus-ev"
  | "artificially-intelligent";

/** URL prefix for each in-scope collection (the route segment before the slug). */
const PREFIX: Record<TwinCollectionName, string> = {
  posts: "posts",
  blips: "blips",
  reviews: "no-reserv-ai-tions",
  songs: "music/reviews",
  "plus-ev": "plus-ev",
  "artificially-intelligent": "artificially-intelligent",
};

/** Human label used to group entries in /llms.txt. */
const SECTION: Record<TwinCollectionName, string> = {
  posts: "Posts",
  blips: "Blips",
  reviews: "No Reserv-AI-tions",
  songs: "Heavy Rotation",
  "plus-ev": "Plus EV",
  "artificially-intelligent": "Artificially Intelligent",
};

/** One-line section blurb for /llms.txt — mirrors each section index page's description. */
const SECTION_DESCRIPTION: Record<TwinCollectionName, string> = {
  posts:
    "Articles I really wanted to share, or felt compelled to write because I couldn't find them when I was looking",
  blips: "Shorter than a blog post, longer than a tweet",
  reviews: "Reviews of food, music, and events with the help of AI",
  songs: "The songs I keep coming back to, each with a full review",
  "plus-ev": "A data-driven sports betting experiment, recapped daily by Gale",
  "artificially-intelligent":
    "Experiments at the intersection of AI and front-end development",
};

/**
 * Relative twin URL for a single entry, e.g. twinUrlForId("posts", "conferences/x.md")
 * → "/posts/conferences/x.md". Used by content routes to pass the twin link to layouts.
 */
export function twinUrlForId(collection: TwinCollectionName, id: string): string {
  return `/${PREFIX[collection]}/${id.replace(/\.mdx?$/, "")}.md`;
}

export interface TwinItem {
  collection: TwinCollectionName;
  section: string;
  title: string;
  summary?: string;
  /** path param for the [...path].md endpoint, e.g. "posts/foo/bar" (no extension) */
  path: string;
  /** absolute canonical HTML url */
  sourceUrl: string;
  /** absolute twin url, e.g. https://www.dandenney.com/posts/foo/bar.md */
  twinUrl: string;
  /** the full synthesized markdown document */
  markdown: string;
}

type MetaLine = [label: string, value: string | undefined];

const slugOf = (id: string): string => id.replace(/\.mdx?$/, "");

const fmtDate = (d: Date | string | undefined): string | undefined => {
  if (!d) return undefined;
  const date = d instanceof Date ? d : new Date(d);
  return Number.isNaN(date.getTime()) ? String(d) : date.toISOString().slice(0, 10);
};

const joinTruthy = (parts: Array<string | undefined>, sep = ", "): string | undefined => {
  const kept = parts.filter((p): p is string => Boolean(p && p.trim()));
  return kept.length ? kept.join(sep) : undefined;
};

/** Turn a slug-ish field ("las-vegas") into a readable label ("Las Vegas"). */
const humanize = (value: string | undefined): string | undefined =>
  value
    ?.split(/[\s-]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

/**
 * Assemble the twin document: an H1 title, plain `Key: value` header lines
 * (machine-noise fields omitted), a `---` rule, then the raw body.
 */
function buildMarkdown(
  title: string,
  sourceUrl: string,
  date: Date | string | undefined,
  extra: MetaLine[],
  summary: string | undefined,
  body: string,
): string {
  const meta: MetaLine[] = [
    ["Source", sourceUrl],
    ["Date", fmtDate(date)],
    ...extra,
    ["Summary", summary],
  ];
  const headerLines = meta
    .filter(([, value]) => Boolean(value))
    .map(([label, value]) => `${label}: ${value}`);

  return `# ${title}\n\n${headerLines.join("\n")}\n\n---\n\n${body.trim()}\n`;
}

function makeTwin(
  collection: TwinCollectionName,
  id: string,
  title: string,
  date: Date | string | undefined,
  extra: MetaLine[],
  summary: string | undefined,
  body: string,
): TwinItem {
  const path = `${PREFIX[collection]}/${slugOf(id)}`;
  const sourceUrl = `${SITE}/${path}`;
  return {
    collection,
    section: SECTION[collection],
    title,
    summary,
    path,
    sourceUrl,
    twinUrl: `${sourceUrl}.md`,
    markdown: buildMarkdown(title, sourceUrl, date, extra, summary, body),
  };
}

const tagsLine = (tags?: string[]): MetaLine => ["Tags", joinTruthy(tags ?? [])];

async function postsTwins(): Promise<TwinItem[]> {
  const entries = await getCollection("posts");
  return entries.map((e: CollectionEntry<"posts">) =>
    makeTwin("posts", e.id, e.data.title, e.data.pubDate, [tagsLine(e.data.tags)], e.data.summary, e.body ?? ""),
  );
}

async function blipsTwins(): Promise<TwinItem[]> {
  const entries = await getCollection("blips");
  return entries.map((e: CollectionEntry<"blips">) =>
    makeTwin("blips", e.id, e.data.title, e.data.pubDate, [], e.data.summary, e.body ?? ""),
  );
}

async function reviewsTwins(): Promise<TwinItem[]> {
  const entries = await getCollection("reviews");
  return entries.map((e: CollectionEntry<"reviews">) =>
    makeTwin(
      "reviews",
      e.id,
      e.data.title,
      e.data.pubDate,
      [
        ["Location", joinTruthy([humanize(e.data.city), humanize(e.data.state), e.data.country])],
        ["Address", e.data.address],
        ["More info", e.data.infoUrl],
      ],
      e.data.description,
      e.body ?? "",
    ),
  );
}

async function songsTwins(): Promise<TwinItem[]> {
  const entries = await getCollection("songs");
  return entries.map((e: CollectionEntry<"songs">) =>
    makeTwin(
      "songs",
      e.id,
      e.data.title,
      e.data.pubDate,
      [
        ["Artist", e.data.artist],
        ["Album", e.data.album],
        ["Released", fmtDate(e.data.releaseDate)],
        ["Spotify", e.data.spotifyUrl],
        tagsLine(e.data.tags),
      ],
      undefined,
      e.body ?? "",
    ),
  );
}

async function plusEvTwins(): Promise<TwinItem[]> {
  const entries = await getCollection("plus-ev");
  return entries.map((e: CollectionEntry<"plus-ev">) =>
    makeTwin(
      "plus-ev",
      e.id,
      e.data.title,
      e.data.pubDate,
      [
        ["Sport", e.data.sport?.toUpperCase()],
        ["Recap date", fmtDate(e.data.recapDate)],
      ],
      e.data.summary,
      e.body ?? "",
    ),
  );
}

async function aiTwins(): Promise<TwinItem[]> {
  const entries = await getCollection("artificially-intelligent");
  return entries.map((e: CollectionEntry<"artificially-intelligent">) =>
    makeTwin(
      "artificially-intelligent",
      e.id,
      e.data.title,
      e.data.pubDate,
      [["GitHub", e.data.githubPath], tagsLine(e.data.tags)],
      e.data.summary,
      e.body ?? "",
    ),
  );
}

/** Section order for /llms.txt and twin enumeration. */
const SECTION_ORDER: TwinCollectionName[] = [
  "posts",
  "blips",
  "reviews",
  "songs",
  "plus-ev",
  "artificially-intelligent",
];

let cache: TwinItem[] | null = null;

/** All twins across every in-scope collection, ordered by SECTION_ORDER. */
export async function getAllTwins(): Promise<TwinItem[]> {
  if (cache) return cache;
  const groups = await Promise.all([
    postsTwins(),
    blipsTwins(),
    reviewsTwins(),
    songsTwins(),
    plusEvTwins(),
    aiTwins(),
  ]);
  const byName = new Map<TwinCollectionName, TwinItem[]>();
  for (const group of groups) {
    if (group.length) byName.set(group[0].collection, group);
  }
  cache = SECTION_ORDER.flatMap((name) => byName.get(name) ?? []);
  return cache;
}

export interface TwinSection {
  section: string;
  description: string;
  items: TwinItem[];
}

/** Twins grouped by section, in SECTION_ORDER, for rendering /llms.txt. */
export async function getTwinSections(): Promise<TwinSection[]> {
  const twins = await getAllTwins();
  return SECTION_ORDER.map((name) => ({
    section: SECTION[name],
    description: SECTION_DESCRIPTION[name],
    items: twins.filter((t) => t.collection === name),
  })).filter((s) => s.items.length > 0);
}
