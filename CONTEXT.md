# dandenney.com

Dan Denney's personal site — blog posts, short notes, restaurant/music reviews, and betting trackers. This file captures domain language that isn't obvious from the code.

## Language

### Agent-readable content

**Markdown twin**:
A companion URL for a content page (e.g. `/posts/slug.md`) that returns the raw markdown source as `text/plain`, rendering inline in a browser rather than downloading. Serves both humans (via a toggle) and agents (via direct fetch) from one artifact.
_Avoid_: "raw view", "markdown export", ".md endpoint"

**Agent toggle**:
The on-page control that links from the rendered HTML article to its **Markdown twin**. Modeled on Every.to's "agent" toggle. It is a navigation link, not a client-side DOM swap. Rendered as a shared, neutrally-styled component labeled "View as markdown", sitting in the top meta row (next to date/byline) so it doesn't fight each section's distinct theme. (An earlier `.md` label tested too subtle in practice.)
_Avoid_: "raw toggle", "markdown button"

**Agent view**:
The experience of consuming a page as its **Markdown twin** — whether a human clicked the **Agent toggle** or an automated client fetched the `.md` URL directly.

## Scope

Collections that get a **Markdown twin** (implemented): `posts`, `blips`, `reviews`, `songs`, `plus-ev`, `artificially-intelligent`.

Excluded:
- `tinkerings` — every body is inline `<style>` CSS plus embedded HTML widget markup, not prose; a twin would be unusable noise.
- `yil` — not a content collection (hardcoded `.astro` pages), so no `body` to emit.

Deferred:
- `true-crime` — in-scope conceptually (its body is prose), but it has **no standard collection route**; its single entry is rendered by bespoke hand-built pages (`src/pages/true-crime/.../carnival-of-lies/`), so there's no slug→URL pattern to derive a twin from. Wire it specially if/when it grows a real `[...slug]` route.

**llms.txt**:
A generated markdown index at `/llms.txt` listing all twin-eligible content (grouped by section, each linking to its **Markdown twin**), giving agents a single corpus-level entry point. Follows the llmstxt.org convention.

## Relationships

- Every **eligible** content page has exactly one **Markdown twin**.
- The **Agent toggle** points to the page's **Markdown twin**; it does not generate markdown itself (the source is already markdown on disk).
- **llms.txt** links to every **Markdown twin**; it is the site-wide discovery surface, complementing the per-page `<link rel="alternate">` and the visible **Agent toggle**.

## Flagged ambiguities

- "serve markdown to agents by default" was used to mean two different things — (a) exposing a fetchable **Markdown twin** that agents *can* find, vs. (b) content-negotiating the *same* URL to auto-return markdown when an agent is detected. These are distinct; (a) is adopted, (b) is **rejected** (no UA sniffing — see Decisions).

## Decisions

- **Markdown twins are served as `text/plain; charset=utf-8`** to render inline and never trigger a browser download. `text/markdown` was rejected because Chrome treats it as a download.
- **Access path is a `.md` URL twin**, not an in-page DOM-swap toggle, so the markdown is a real fetchable artifact for agents and is discoverable via `<link rel="alternate">`.
- **No content negotiation / no user-agent sniffing.** The HTML URL always returns HTML and stays prerendered; agents reach markdown only via the discoverable **Markdown twin**. Rejected auto-serving to avoid SSR on content pages, fragile bot-detection lists, and search-engine cloaking signals.
- **Twins are indexable — no `noindex`, no canonical HTTP header.** Deliberate: a personal site favors discovery/exploration over SEO duplicate-content hygiene. The known cost (Google could occasionally surface the raw `.md` instead of the HTML page) is accepted. Do not add `X-Robots-Tag: noindex` later assuming it was an oversight.
- **A twin is a synthesized header + body**, not body-only. The header is generated from frontmatter (title, date, canonical source URL, plus collection-specific fields such as `spotifyUrl` or map `coordinates`) so frontmatter-rich types (reviews, songs) produce self-contained twins. All collections are 100% `.md`, so bodies are clean prose with no JSX/import noise.
- **Header format is plain readable lines**, not a YAML frontmatter block: `# Title`, then `Key: value` lines, then a `---` rule, then the body. The header is a *curated* subset of frontmatter — machine-noise fields (`cloudinaryThumb`, `socialImageFilename`, `spotifyId`, `duration`, `aiGenerated`, raw thumbnails) are omitted.
- **Per-collection header fields.** Every twin: `# Title`, `Date`, `Source` (canonical HTML URL), and `Summary`/`description` when present. Additions: `posts` → Tags; `blips` → none; `true-crime` → Tags; `reviews` → Location (city/state/country), Address, More info (`infoUrl`); `songs` → Artist, Album, Released, Spotify, Tags; `plus-ev` → Sport, Recap date; `artificially-intelligent` → GitHub, Tags. Deliberately omitted: review `coordinates` (map-only; human-readable Location is better for agents) and `aiGenerated` (kept out for cleanliness).
