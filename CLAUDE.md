# CLAUDE.md

## Project

Dan Denney's personal site — blog posts, short notes, restaurant reviews, music reviews, and a martingale bet tracker.

## Stack

Astro 6 / TypeScript / Tailwind CSS v4 / Netlify (SSR)

**Node version manager:** `fnm` (Fast Node Manager). Node version is set in `.nvmrc`. When running commands that require a specific Node version, use `fnm exec --using=<version> <command>` or run `fnm use` first. Astro v6 requires Node 22+.

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

### Content Collections (`src/content.config.ts`)

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

## Agent autonomy

Once a task's scope is agreed, don't pause for confirmation on routine steps within it. Proceed without asking for:
- Starting/stopping the dev server, `npx astro check`, `graphify update .`
- Browser-based UI verification (screenshots) for design/UI changes
- Reading/searching the codebase, writing memory files
- Small fixes clearly within the agreed scope (e.g. a data typo found while building the agreed feature) — just do it and mention it in the summary

Still check in first for:
- `git commit` / `push` / opening PRs
- Anything in "Out of scope" below
- Destructive or hard-to-reverse git operations
- Ambiguous styling targets (see above)

## Out of scope

- `.env.local` — manually maintained, never commit
- `src/data/martingaleBets.ts` IDs — append only, never reorder or reassign IDs
- `generate-review.yml` / `generate-song-review.yml` — legacy actions being replaced; don't modify
- Agent content pipeline scripts (`scripts/agent-content/`) — don't modify without understanding the full Leif → Shelby workflow

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
