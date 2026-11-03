/** Shape of /agent-index.json, shared by the endpoint and the site-wide WebMCP tools. */

export const AGENT_SECTIONS = [
  "Posts",
  "Blips",
  "No Reserv-AI-tions",
  "Heavy Rotation",
  "Plus EV",
  "Artificially Intelligent",
  "Tinkerings",
  "Factory",
] as const;

export type AgentSection = (typeof AGENT_SECTIONS)[number];

export interface AgentIndexEntry {
  section: AgentSection;
  title: string;
  summary?: string;
  /** YYYY-MM-DD */
  date?: string;
  /** Site-relative path without a trailing slash, e.g. /posts/foo */
  path: string;
  /** Site-relative Markdown twin, e.g. /posts/foo.md */
  markdownPath?: string;
  /** Lowercased text the search tool matches against (title, metadata, summary) */
  keywords: string;
}
