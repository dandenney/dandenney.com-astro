# CLAUDE.md

## Project

Dan Denney's personal site — blog posts, short notes, restaurant reviews, music reviews, and a martingale bet tracker.

## Stack

Astro 5 / TypeScript / Tailwind CSS v4 / Netlify (SSR)

## Commands

- Dev: `yarn dev` (localhost:4321)
- Build: `yarn build`
- Preview: `yarn preview`
- TinaCMS dev: `yarn tina`
- Type check: `npx astro check` (no separate test suite — this is the gate)

## Architecture

SSR mode on Netlify; most pages use `export const prerender = true` for static generation. Dynamic pages (martingale tracker) run server-side.

**Path alias:** `@/` maps to `src/` (configured in `tsconfig.json`).

**Styling:** Tailwind v4 utility classes plus `src/styles/global.css` for theme variables and base overrides. Dark mode uses the `.dark` class variant (`&:is(.dark *)`). Scoped styles in `.astro` files are common for component-specific rules.

### Content Collections (`src/content/config.ts`)

- `posts` — long-form blog posts with tags, thumbnails, optional Cloudinary images
- `blips` — short-form notes
- `tinkerings` — side project writeups
- `reviews` — restaurant/venue reviews ("No Reservaitions"), city/state/coordinates for map rendering; `aiGenerated` flag tracks AI-assisted entries
- `songs` — music reviews with Spotify metadata; almost all `aiGenerated: true`

### Layouts

- `BlogPost.astro` — long-form posts
- `Blip.astro` — short notes
- `Review.astro` — No Reservaitions reviews (includes map/coordinates)
- `SongReview.astro` — music reviews
- `Tinkering.astro` — side project posts

### Key Data Files

- `src/data/martingaleBets.ts` — all bet records; contains logic helpers (`getNewSeriesStake`, `getStakeOut`, `getReturnAmount`, `getNetImpact`)

### Martingale Tracker (`/martingale-tracker`)

Full instructions in `docs/adding-martingale-bets.md`. Short version:
1. Append to `src/data/martingaleBets.ts` — use the next sequential `id`
2. Settle by updating `result` and adding `returnAmount`; odd-penny splits go to GardenOf

### Agent Content Pipeline

`docs/agent-content-pipeline/README.md` describes the Leif → Quillan → Watten → Shelby agent workflow for generating No Reservaitions and music reviews. Scripts are in `scripts/agent-content/`. Use `yarn agent:packet:validate` and `yarn agent:content:publish` to drive the pipeline.

### GitHub Actions

- `settle-pending-bets.yml` — daily auto-settlement via ESPN APIs; run manually with `--bet-id <id>`
- `generate-review.yml` / `generate-song-review.yml` — legacy AI content generation (being replaced by agent pipeline)

## Rules

- Always use TypeScript for new files
- Always use `@/` path alias, not relative imports
- CSS: check for unintended side effects on other elements sharing the same selector before applying styles
- CSS: prefer scoped/specific selectors over broad element selectors
- Before committing: verify all new/modified assets (images, fonts, etc.) are staged — referenced images are easy to miss
- When debugging Notion or Spotify integrations: check `.env.local` for required API keys before touching code
- IMPORTANT: All file edits must use the absolute main repo path — worktree-relative paths break `yarn dev`

## Workflow

- Commit convention: `feat(scope): message` / `fix(scope): message` (match existing git log style)
- Type checking is the only gate: run `npx astro check` before considering a task done
- Ask before applying styles when the target element is ambiguous (e.g., `body` vs `main`, `figcaption h3` vs `article h3`)
- Ask before touching anything in the Out of scope section below

## Out of scope

- `.env.local` — manually maintained, never commit
- `src/data/martingaleBets.ts` IDs — append only, never reorder or reassign IDs
- `generate-review.yml` / `generate-song-review.yml` — legacy actions being replaced; don't modify
- Agent content pipeline scripts (`scripts/agent-content/`) — don't modify without understanding the full Leif → Shelby workflow
