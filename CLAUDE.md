# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a TypeScript/Astro project with CSS styling. Always use TypeScript for new files. The site uses Astro components with `.astro` files.

## Commands

```bash
yarn dev          # Start dev server (localhost:4321)
yarn build        # Production build
yarn preview      # Preview production build
yarn tina         # Dev server with TinaCMS editing enabled
npx astro check   # TypeScript type checking (no separate test suite)
```

## Architecture

This is an Astro 5 personal site with SSR (server output) deployed on Netlify. Tailwind CSS v4 is configured via `@tailwindcss/vite` — not the legacy Astro integration.

**Path alias:** `@/` maps to `src/` (configured in `tsconfig.json`).

**Styling:** Tailwind v4 utility classes plus a single `src/styles/global.css` for theme variables and base overrides. Dark mode uses the `.dark` class variant (`&:is(.dark *)`). Scoped styles in `.astro` files are common for component-specific rules.

### Content Collections (`src/content/config.ts`)

Five collections, each backed by Markdown/MDX files:
- `posts` — long-form blog posts with tags, thumbnails, optional Cloudinary images
- `blips` — short-form notes
- `tinkerings` — side project writeups
- `reviews` — restaurant/venue reviews ("No Reservaitions"), with city/state/coordinates for map rendering; `aiGenerated` flag tracks AI-assisted entries
- `songs` — music reviews with Spotify metadata; almost all `aiGenerated: true`

Most pages use `export const prerender = true` for static generation, even in SSR mode. Dynamic pages (martingale tracker) run server-side.

### Layouts

- `BlogPost.astro` — long-form posts
- `Blip.astro` — short notes
- `Review.astro` — No Reservaitions reviews (includes map/coordinates)
- `SongReview.astro` — music reviews
- `Tinkering.astro` — side project posts

### Key Data Files

- `src/data/martingaleBets.ts` — all bet records; contains logic helpers (`getNewSeriesStake`, `getStakeOut`, `getReturnAmount`, `getNetImpact`)

### Martingale Tracker (`/martingale-tracker`)

Full instructions for adding bets and settling results are in `docs/adding-martingale-bets.md`. Short version:
1. Append to `src/data/martingaleBets.ts` — use the next sequential `id`
2. Settle by updating `result` and adding `returnAmount`; odd-penny splits go to GardenOf

### Agent Content Pipeline

`docs/agent-content-pipeline/README.md` describes the Leif → Quillan → Watten → Shelby agent workflow for generating No Reservaitions and music reviews. Scripts are in `scripts/agent-content/`. Use `yarn agent:packet:validate` and `yarn agent:content:publish` to drive the pipeline.

### GitHub Actions

- `settle-pending-bets.yml` — daily auto-settlement via ESPN APIs; run manually with `--bet-id <id>`
- `generate-review.yml` / `generate-song-review.yml` — legacy AI content generation (being replaced by agent pipeline)

## CSS / Styling

When working with CSS selectors, always check for unintended side effects on other elements sharing the same selector. Prefer scoped/specific selectors over broad element selectors.

When applying styles to specific elements, confirm the exact target element with the user if there's any ambiguity (e.g., `body` vs `main`, `figcaption h3` vs `article h3`).

## Git Workflow

Before committing, verify all new/modified assets (images, fonts, etc.) are staged. It's easy to miss referenced images that aren't yet tracked.

## Debugging

When debugging integration issues (Notion, Spotify), check `.env.local` for required API keys before diving into code changes.
