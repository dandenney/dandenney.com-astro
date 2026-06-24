import type { APIRoute } from "astro";
import { getTwinSections } from "@/lib/markdownTwin";
import { blogroll } from "@/data/blogroll";

export const prerender = true;

export const GET: APIRoute = async () => {
  const sections = await getTwinSections();

  let out = "# Dan Denney\n\n";
  out +=
    "> Personal site: blog posts, short notes, restaurant and music reviews, " +
    "betting writeups, and AI experiments. Each link below points to the " +
    "Markdown version of the page.\n\n";

  for (const { section, description, items } of sections) {
    out += `## ${section}\n`;
    out += `${description}\n\n`;
    for (const item of items) {
      const suffix = item.summary ? `: ${item.summary}` : "";
      out += `- [${item.title}](${item.twinUrl})${suffix}\n`;
    }
    out += "\n";
  }

  out += "## Elsewhere\n";
  out += "Blogs I read.\n\n";
  for (const { name, url } of blogroll) {
    out += `- [${name}](${url})\n`;
  }

  return new Response(out.trimEnd() + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
