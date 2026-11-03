import { AGENT_SECTIONS, type AgentIndexEntry } from "@/lib/agentIndex";
import { asLimit, asText, registerAgentTools } from "@/lib/webmcp";

let indexPromise: Promise<AgentIndexEntry[]> | null = null;

function loadIndex(): Promise<AgentIndexEntry[]> {
  indexPromise ??= fetch("/agent-index.json").then((res) => {
    if (!res.ok) throw new Error(`Couldn't load the site index (${res.status})`);
    return res.json() as Promise<AgentIndexEntry[]>;
  });
  indexPromise.catch(() => (indexPromise = null));
  return indexPromise;
}

const byNewest = (a: AgentIndexEntry, b: AgentIndexEntry) => (b.date ?? "").localeCompare(a.date ?? "");

function inSection(entry: AgentIndexEntry, section: string): boolean {
  return !section || entry.section.toLowerCase() === section.toLowerCase();
}

function toResult(entry: AgentIndexEntry) {
  const { keywords: _keywords, ...rest } = entry;
  return { ...rest, url: new URL(entry.path, location.origin).href };
}

const sectionProperty = {
  type: "string",
  enum: [...AGENT_SECTIONS],
  description: "Optional section to limit results to.",
};

registerAgentTools([
  {
    name: "search-site",
    title: "Search dandenney.com",
    description:
      "Searches Dan Denney's site (posts, blips, restaurant and concert reviews, song reviews, betting recaps, AI experiments, tinkerings, Possibility Factory projects) by keyword. Returns titles, summaries, dates, and URLs.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Words to search for, e.g. 'nashville tacos' or 'astro'." },
        section: sectionProperty,
        limit: { type: "number", description: "Maximum results, 1-25. Defaults to 10." },
      },
      required: ["query"],
    },
    annotations: { readOnlyHint: true },
    async execute(input) {
      const terms = asText(input.query).toLowerCase().split(/\s+/).filter(Boolean);
      if (!terms.length) return { error: "Provide a query with at least one word." };
      const section = asText(input.section);
      const scored = (await loadIndex())
        .filter((entry) => inSection(entry, section))
        .map((entry) => {
          const title = entry.title.toLowerCase();
          const matched = terms.filter((t) => entry.keywords.includes(t));
          const score = matched.length + terms.filter((t) => title.includes(t)).length;
          return { entry, score, allMatched: matched.length === terms.length };
        })
        .filter((r) => r.score > 0)
        .sort((a, b) => Number(b.allMatched) - Number(a.allMatched) || b.score - a.score || byNewest(a.entry, b.entry));
      return {
        total: scored.length,
        results: scored.slice(0, asLimit(input.limit, 10, 25)).map((r) => toResult(r.entry)),
      };
    },
  },
  {
    name: "list-recent",
    title: "List recent pages",
    description: "Lists the newest pages on Dan Denney's site, optionally within one section.",
    inputSchema: {
      type: "object",
      properties: {
        section: sectionProperty,
        limit: { type: "number", description: "How many to return, 1-25. Defaults to 10." },
      },
    },
    annotations: { readOnlyHint: true },
    async execute(input) {
      const section = asText(input.section);
      const entries = (await loadIndex()).filter((entry) => inSection(entry, section)).sort(byNewest);
      return { results: entries.slice(0, asLimit(input.limit, 10, 25)).map(toResult) };
    },
  },
  {
    name: "get-page",
    title: "Read a page as Markdown",
    description:
      "Returns the full text of a post, blip, review, song review, or recap on Dan Denney's site as Markdown. Takes a URL or path from search-site or list-recent.",
    inputSchema: {
      type: "object",
      properties: {
        url: { type: "string", description: "Page URL or path, e.g. /posts/front-end-dev/trying-openclaw" },
      },
      required: ["url"],
    },
    annotations: { readOnlyHint: true },
    async execute(input) {
      let target: URL;
      try {
        target = new URL(asText(input.url), location.origin);
      } catch {
        return { error: "That isn't a valid URL or path." };
      }
      if (target.origin !== location.origin && !/(^|\.)dandenney\.com$/.test(target.hostname)) {
        return { error: "Only pages on dandenney.com can be read with this tool." };
      }
      const path = target.pathname.replace(/\.md$/, "").replace(/\/+$/, "") || "/";
      const entry = (await loadIndex()).find((e) => e.path === path);
      if (!entry) return { error: `No page found at ${path}. Use search-site to find one.` };
      if (!entry.markdownPath) {
        return { ...toResult(entry), note: "This page has no Markdown version; open the URL to read it." };
      }
      const res = await fetch(entry.markdownPath);
      if (!res.ok) return { error: `Couldn't load ${entry.markdownPath} (${res.status}).` };
      return { ...toResult(entry), markdown: await res.text() };
    },
  },
]);
