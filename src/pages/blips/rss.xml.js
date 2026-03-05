import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE } from "../../consts";

export async function GET(context) {
  const blips = await getCollection("blips");
  return rss({
    title: `${SITE_TITLE} - Blips`,
    description: "Shorter than a blog post, longer than a tweet. Quick reactions or things I want to remember.",
    site: context.site,
    items: blips
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((blip) => ({
        title: blip.data.title,
        description: blip.data.summary,
        pubDate: blip.data.pubDate,
        link: `/blips/${blip.slug}/`,
      })),
  });
}
