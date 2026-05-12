import rss from "@astrojs/rss";

export const prerender = true;

export async function GET(context) {
  const pages = import.meta.glob("./*.astro", { eager: true });

  const entries = Object.entries(pages)
    .filter(([path]) => !path.endsWith("index.astro"))
    .map(([path, mod]) => ({
      url: path.replace("./", "/yil/").replace(".astro", "/"),
      ...mod.yilMeta,
    }))
    .filter((entry) => entry.date && entry.headline)
    .sort((a, b) => b.date.localeCompare(a.date));

  return rss({
    title: "Dan Denney — Yesterday I Learned",
    description:
      "Daily captures turned into landing pages — AI engineering, agents, front-end development, and learning in public.",
    site: context.site,
    items: entries.map((entry) => ({
      title: entry.headline,
      description: entry.summary,
      pubDate: new Date(entry.date + "T12:00:00Z"),
      link: entry.url,
    })),
  });
}
