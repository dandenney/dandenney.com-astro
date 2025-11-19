import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://www.dandenney.com",
  output: "server",
  adapter: netlify(),
  markdown: { shikiConfig: { theme: "nord" } },
  integrations: [mdx(), sitemap(), tailwind()],
});
