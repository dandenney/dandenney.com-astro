import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://www.dandenney.com",
  markdown: { shikiConfig: { theme: "nord" } },
  integrations: [sitemap(), tailwind(), starlight({
    title: 'Dev Docs',
    description: 'Docs related to web development',
  }), mdx()],
});