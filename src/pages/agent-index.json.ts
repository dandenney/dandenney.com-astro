import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { getAllTwins } from "@/lib/markdownTwin";
import { AGENT_SECTIONS, type AgentIndexEntry, type AgentSection } from "@/lib/agentIndex";

export const prerender = true;

const day = (d: Date) => d.toISOString().slice(0, 10);
const slugOf = (id: string) => id.replace(/\.mdx?$/, "");

function asSection(name: string): AgentSection {
  const section = AGENT_SECTIONS.find((s) => s === name);
  if (!section) throw new Error(`agent-index: unknown section "${name}"; add it to AGENT_SECTIONS`);
  return section;
}

export const GET: APIRoute = async () => {
  const twins = await getAllTwins();
  const twinEntries: AgentIndexEntry[] = twins.map((twin) => ({
    section: asSection(twin.section),
    title: twin.title,
    summary: twin.summary,
    date: twin.date,
    path: `/${twin.path}`,
    markdownPath: `/${twin.path}.md`,
    // The twin header holds title, date, location, artist, tags, and summary.
    keywords: twin.markdown
      .split("\n---\n")[0]
      .split("\n")
      .filter((line) => !line.startsWith("Source: "))
      .join(" ")
      .toLowerCase(),
  }));

  const tinkerings = (await getCollection("tinkerings")).map(
    (e): AgentIndexEntry => ({
      section: "Tinkerings",
      title: e.data.title,
      summary: e.data.summary,
      date: day(e.data.pubDate),
      path: `/tinkerings/${slugOf(e.id)}`,
      keywords: [e.data.title, e.data.summary].join(" ").toLowerCase(),
    }),
  );

  const factory = (await getCollection("factory")).map(
    (e): AgentIndexEntry => ({
      section: "Factory",
      title: e.data.title,
      summary: e.data.summary,
      date: day(e.data.pubDate),
      path: `/factory/${slugOf(e.id)}`,
      keywords: [e.data.title, e.data.summary, e.data.pitch, e.data.kind].join(" ").toLowerCase(),
    }),
  );

  return new Response(JSON.stringify([...twinEntries, ...tinkerings, ...factory]), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};
