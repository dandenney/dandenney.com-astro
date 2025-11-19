import rss from '@astrojs/rss';
import { g as getCollection } from '../chunks/_astro_content_vuRDs4s-.mjs';
import { a as SITE_DESCRIPTION, S as SITE_TITLE } from '../chunks/consts_BmF5LO0i.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  const posts = await getCollection("posts");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/posts/${post.slug}/`,
    })),
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
