import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE_TITLE } from "@/consts";

export const prerender = true;

export const GET: APIRoute = async (context) => {
  const blips = (await getCollection("blips")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
  return rss({
    title: `${SITE_TITLE} - Blips`,
    description: "Shorter than a blog post, longer than a tweet. Quick reactions or things I want to remember.",
    site: context.site!,
    items: blips.map((blip) => ({
      title: blip.data.title,
      description: blip.data.summary,
      pubDate: blip.data.pubDate,
      link: `/blips/${blip.id.replace(/\.mdx?$/, "")}/`,
    })),
  });
};
