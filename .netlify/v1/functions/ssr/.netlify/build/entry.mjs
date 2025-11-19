import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CZL9Cosm.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/spotify/token.astro.mjs');
const _page2 = () => import('./pages/api/spotify/top-items.astro.mjs');
const _page3 = () => import('./pages/api/spotify/_type_/_time_range_.astro.mjs');
const _page4 = () => import('./pages/api/test-query.astro.mjs');
const _page5 = () => import('./pages/blips.astro.mjs');
const _page6 = () => import('./pages/blips/_---slug_.astro.mjs');
const _page7 = () => import('./pages/library.astro.mjs');
const _page8 = () => import('./pages/music.astro.mjs');
const _page9 = () => import('./pages/music-reviews.astro.mjs');
const _page10 = () => import('./pages/music-reviews/_---slug_.astro.mjs');
const _page11 = () => import('./pages/no-reserv-ai-tions/cities/_city_.astro.mjs');
const _page12 = () => import('./pages/no-reserv-ai-tions/cities.astro.mjs');
const _page13 = () => import('./pages/no-reserv-ai-tions/states/_state_.astro.mjs');
const _page14 = () => import('./pages/no-reserv-ai-tions/states.astro.mjs');
const _page15 = () => import('./pages/no-reserv-ai-tions/tags.astro.mjs');
const _page16 = () => import('./pages/no-reserv-ai-tions/_page_.astro.mjs');
const _page17 = () => import('./pages/no-reserv-ai-tions/_tag_.astro.mjs');
const _page18 = () => import('./pages/no-reserv-ai-tions.astro.mjs');
const _page19 = () => import('./pages/no-reserv-ai-tions/_---slug_.astro.mjs');
const _page20 = () => import('./pages/posts.astro.mjs');
const _page21 = () => import('./pages/posts/_---slug_.astro.mjs');
const _page22 = () => import('./pages/rss.xml.astro.mjs');
const _page23 = () => import('./pages/tinkerings.astro.mjs');
const _page24 = () => import('./pages/tinkerings/_---slug_.astro.mjs');
const _page25 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/spotify/token.ts", _page1],
    ["src/pages/api/spotify/top-items.ts", _page2],
    ["src/pages/api/spotify/[type]/[time_range].ts", _page3],
    ["src/pages/api/test-query.ts", _page4],
    ["src/pages/blips/index.astro", _page5],
    ["src/pages/blips/[...slug].astro", _page6],
    ["src/pages/library.astro", _page7],
    ["src/pages/music.astro", _page8],
    ["src/pages/music-reviews/index.astro", _page9],
    ["src/pages/music-reviews/[...slug].astro", _page10],
    ["src/pages/no-reserv-ai-tions/cities/[city].astro", _page11],
    ["src/pages/no-reserv-ai-tions/cities/index.astro", _page12],
    ["src/pages/no-reserv-ai-tions/states/[state].astro", _page13],
    ["src/pages/no-reserv-ai-tions/states/index.astro", _page14],
    ["src/pages/no-reserv-ai-tions/tags.astro", _page15],
    ["src/pages/no-reserv-ai-tions/[page].astro", _page16],
    ["src/pages/no-reserv-ai-tions/[tag].astro", _page17],
    ["src/pages/no-reserv-ai-tions/index.astro", _page18],
    ["src/pages/no-reserv-ai-tions/[...slug].astro", _page19],
    ["src/pages/posts/index.astro", _page20],
    ["src/pages/posts/[...slug].astro", _page21],
    ["src/pages/rss.xml.js", _page22],
    ["src/pages/tinkerings/index.astro", _page23],
    ["src/pages/tinkerings/[...slug].astro", _page24],
    ["src/pages/index.astro", _page25]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "7f4db5d3-5afb-43c1-b456-57cd069218cf"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
