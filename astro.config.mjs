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
  trailingSlash: "never",
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
  integrations: [
    mdx(),
    sitemap({
      serialize(item) {
        const betsLogDate = item.url.match(/\/betting\/bets-log\/(\d{4}-\d{2}-\d{2})/);
        if (betsLogDate) {
          return { ...item, changefreq: "weekly", priority: 0.7, lastmod: new Date(betsLogDate[1]) };
        }
        const yilDate = item.url.match(/\/yil\/(\d{4}-\d{2}-\d{2})/);
        if (yilDate) {
          return { ...item, changefreq: "monthly", priority: 0.7, lastmod: new Date(yilDate[1]) };
        }
        if (item.url.includes("/posts/")) {
          return { ...item, changefreq: "yearly", priority: 0.5 };
        }
        return { ...item, changefreq: "monthly", priority: 0.5 };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
