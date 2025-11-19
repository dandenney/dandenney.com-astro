/* empty css                                  */
import { c as createComponent, r as renderComponent, a as renderHead, b as addAttribute, d as renderTemplate } from '../chunks/astro/server_P91Fz5pH.mjs';
import { $ as $$BaseHead } from '../chunks/BaseHead_BitrlgCW.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_BDU9wtE4.mjs';
import { g as getCollection } from '../chunks/_astro_content_vuRDs4s-.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const blips = (await getCollection("blips")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": "Blips | Dan Denney", "description": "Shorter than a blog post, longer than a tweet" })}${renderHead()}</head> <body class="bg-white dark:bg-slate-900"> ${renderComponent($$result, "Header", $$Header, {})} <main class="bg-white relative shadow z-10 dark:bg-slate-900 dark:text-slate-200"> <section class="pt-16 pb-24 shadow sm:pb-32"> <div class="mx-auto max-w-7xl px-6 lg:px-8"> <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"> <div> <div class="md:sticky md:left-0 md:top-8"> <p class="text-lg font-semibold leading-8 tracking-tight text-slate-400 dark:text-slate-400">Quick Hits</p> <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-slate-100">Blips</h1> <p class="mt-6 text-base leading-7 text-gray-600 dark:text-slate-100">Shorter than a blog post, longer than a tweet. This is where I share quick reactions or stash things I want to remember.</p> </div> </div> <ul class="has-links grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:col-span-2 lg:gap-y-8 lg:grid-cols-2"> ${blips.map((blip) => renderTemplate`<li class="border-b border-solid border-slate-200 pb-8 dark:border-slate-600"> <a class="link"${addAttribute(`/blips/${blip.slug}/`, "href")}> ${blip.data.title} </a> <p class="text-sm dark:text-slate-300">${blip.data.summary}</p> </li>`)} </ul></div> </div> </section> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/dandenney/Repos/dandenney.com-astro/src/pages/blips/index.astro", void 0);

const $$file = "/Users/dandenney/Repos/dandenney.com-astro/src/pages/blips/index.astro";
const $$url = "/blips";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
