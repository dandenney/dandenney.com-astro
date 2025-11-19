/* empty css                                  */
import { c as createComponent, r as renderComponent, a as renderHead, b as addAttribute, d as renderTemplate } from '../chunks/astro/server_P91Fz5pH.mjs';
import { $ as $$BaseHead } from '../chunks/BaseHead_BitrlgCW.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_BDU9wtE4.mjs';
import { g as getCollection } from '../chunks/_astro_content_vuRDs4s-.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const tinkerings = (await getCollection("tinkerings")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": "Tinkerings | Dan Denney", "description": "Projects with some technical bit that I learned in order to create" })}${renderHead()}</head> <body class="bg-white dark:bg-slate-900"> ${renderComponent($$result, "Header", $$Header, {})} <main class="bg-white relative shadow z-10 dark:bg-slate-900 dark:text-slate-200"> <section class="pb-24 pt-16 relative shadow z-10 sm:pb-32"> <div class="mx-auto max-w-7xl px-6 lg:px-8"> <div class="mx-auto max-w-2xl lg:max-w-4xl"> <p class="text-lg font-semibold leading-8 tracking-tight text-slate-400 dark:text-slate-400">This Used To Be My Playground</p> <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-slate-100">Tinkerings</h1> <p class="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none dark:text-slate-100">
The projects are all scratching some itch, either technical or part of my interests. Each has some technical bit that I learned in order to build, but they're focused on things like my love for music and trying to beat number systems.
</p> <div class="mt-16 space-y-20 lg:mt-20 lg:space-y-20"> ${tinkerings.map((tinkering) => renderTemplate`<article class="relative isolate flex flex-col gap-8 lg:flex-row lg:items-center"> <div class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-48 lg:shrink-0"> <img${addAttribute(`https://res.cloudinary.com/dtlow08pj/image/upload/f_auto,c_limit,w_880,q_auto/${tinkering.data.thumb ? tinkering.data.thumb : "posts/slackin.png"}`, "src")} alt="{% if tinkering.data.thumb %}{{ tinkering.data.thumbAlt }}{% else %}slacking on my imagin'{% endif %}" class="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"> <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div> </div> <div> <div class="group relative max-w-xl"> <h3 class="has-links mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"> <a${addAttribute(`/tinkerings/${tinkering.slug}/`, "href")}> <span class="absolute inset-0"></span> ${tinkering.data.title} </a> </h3> <p class="mt-2 text-sm leading-6 text-gray-600 dark:text-slate-300"> ${tinkering.data.summary} </p> </div> </div> </article>`)} </div> </div> </div> </section> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/dandenney/Repos/dandenney.com-astro/src/pages/tinkerings/index.astro", void 0);

const $$file = "/Users/dandenney/Repos/dandenney.com-astro/src/pages/tinkerings/index.astro";
const $$url = "/tinkerings";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
