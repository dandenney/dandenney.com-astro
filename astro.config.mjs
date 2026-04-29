import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://www.dandenney.com",
  output: "server",
  adapter: netlify(),
  redirects: {
    "/martingale-tracker": "/betting/martingale-tracker",
    "/dk-tracker": "/betting/dk-tracker",
    "/expert-picks": "/betting/expert-picks",
    "/expert-picks-by-day": "/betting/expert-picks-by-day",
    "/expert-picks-flow": "/betting/expert-picks-flow",
    "/expert-picks-tree": "/betting/expert-picks-tree",
    "/harness-picks": "/betting/harness-picks",
    "/mlb-expert-picks": "/betting/mlb-expert-picks",
    "/rithmmm-picks": "/betting/rithmmm-picks",
  },
  markdown: { shikiConfig: { theme: "nord" } },
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
