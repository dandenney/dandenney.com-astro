import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "@/consts";

export const prerender = true;

export const GET: APIRoute = async (context) => {
  const posts = (await getCollection("posts")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: post.data.pubDate,
      categories: post.data.tags,
      link: `/posts/${post.id.replace(/\.mdx?$/, "")}/`,
    })),
  });
};
