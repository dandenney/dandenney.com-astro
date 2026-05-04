# YIL Build — Build the page from the DESIGN.md

Read the saved DESIGN.md and implement it exactly. Do not make design decisions — every color, layout choice, and section structure must come from the spec.

## Usage

`/yil-build YYYY-MM-DD`

`$ARGUMENTS` = the date, e.g. `2026-05-02`

## Steps

### 1. Read the spec (required before writing any code)

Read `src/pages/yil/_design/$ARGUMENTS.md`. If it doesn't exist, stop and tell the user to run `/yil-design $ARGUMENTS` first.

Also read `/Users/dandenney/Documents/claw/TIL/Inbox/$ARGUMENTS.md` for the actual content to populate the sections.

### 2. Extract the design tokens and page shape

Before writing HTML, list out:
- Background mode: `[light/dark]`
- `bg-main` → [value from tailwind.bg-main]
- `bg-surface` → [value from tailwind.bg-surface]
- `text-primary` → [value]
- Accent classes for each section (accent-1 through accent-N)
- Section order from `sections:` list
- Layout type per section
- `page-shape.opening` → determines how the hero section is structured
- `page-shape.quote-treatment` → determines if/how the quote is rendered
- `page-shape.section-headers` → determines the header pattern for every content section
- `page-shape.surface-rhythm` → determines background alternation across sections
- `page-shape.decorative-numbers` → whether to show large background section numbers

You will use these exact classes and shape values in the implementation. Do not substitute or improvise alternatives.

### 3. Build the page

Create `src/pages/yil/$ARGUMENTS.astro`:

**Required exports:**
```ts
export const prerender = true;
export const yilMeta = {
  date: '$ARGUMENTS',
  headline: '[from sections.hero.headline in DESIGN.md]',
  summary: '[from sections.hero.subhead in DESIGN.md]',
};
```

**Imports:**
```ts
import BaseHead from '@/components/BaseHead.astro';
import Header from '@/components/Header.astro';
import Footer from '@/components/Footer.astro';
```

**Revealing footer layout (required):**
```html
<body>
  <main class="relative shadow-xs z-10 [bg-main from DESIGN.md]">
    <Header />
    <!-- all sections -->
  </main>
  <Footer />
</body>
```

**Build each section in the order listed in `sections:` using the page-shape values from the DESIGN.md:**

**Opening (`page-shape.opening`):**
- `2col-hero-image` → left: badge + date + h1 + subhead; right: `<img>` placeholder in rounded card
- `2col-hero-code` → left: badge + date + h1 + subhead; right: dark terminal-style window with syntax-highlighted content
- `full-width-statement` → centered single column, large h1, no right-side visual
- `centered-editorial` → centered, narrow max-width, date + h1 stacked, generous top padding
- `asymmetric-large-text` → h1 spanning ~70% of width, subhead offset to the right beneath it

**Quote treatment (`page-shape.quote-treatment`):**
- `standalone-dark-band` → full-bleed dark background section, large decorative `"`, quote at 2xl–3xl
- `standalone-light-band` → full-bleed light accent-tinted background, same treatment
- `inline-with-section` → blockquote inside a content section, not its own `<section>` element
- `hero-integrated` → quote appears within the hero section itself, below the subhead
- `none` → skip entirely

**Section headers (`page-shape.section-headers`) — applied consistently to every content section:**
- `pill-h2-bar` → small accent pill label, then h2, then short accent-colored underline bar below h2
- `large-numbered` → oversized sequential number (text-8xl, low opacity) above h2, no pill
- `editorial-label-only` → small all-caps label in text-muted, then large h2 with no bar or pill
- `centered-h2` → label and h2 center-aligned, accent underline centered
- `full-bleed-label` → label spans full section width as a top border treatment, h2 below

**Decorative numbers (`page-shape.decorative-numbers`):**
- `true` → add a large background section number (text-[11rem], low opacity, absolute positioned) per content section
- `false` → omit entirely

**Section content layouts:**
- `cards` → content in rounded card elements with accent border/bg
- `prose` → flowing paragraphs with max-width constraint
- `steps` → numbered card grid (number displayed inside each card)
- `split` → text/content left column, visual or callout card right column (lg:grid-cols-2)
- `feature` → large centered statement (text-3xl–5xl), minimal surrounding chrome
- `full-bleed-callout` → section gets edge-to-edge accent background; content centered inside
- `code-window` → dark rounded-xl container, monospace content with syntax color hints
- `timeline` → items with a vertical connecting line, dot markers, and chronological labels

**For `references`:** tagged pill per item using that item's accent color key.

**After `references`, add a Design Notes section** (see below).

The exact Tailwind color classes from `tailwind:` in the DESIGN.md must be used throughout — not hex values, not guesses.

**For images listed in `images:`:**
Add `<img alt="[description]" data-needs-image src="" />` placeholder at the specified placement.

**Design Notes section** — place after references, before closing `</main>`:

This section surfaces the DESIGN.md so the design rationale is visible on the page. Pull these values directly from the spec:
- `name` from DESIGN.md frontmatter
- `description` from DESIGN.md frontmatter
- `background` (light/dark) from frontmatter
- The `## Overview` prose section verbatim
- Each accent color: render as a small filled circle swatch (`rounded-full w-3 h-3`) using an inline `style="background: [hex]"` beside the accent's Tailwind label and its section name

Structure:
```html
<section class="border-t border-[surface-border] bg-[bg-surface]">
  <div class="mx-auto max-w-5xl px-6 py-12">
    <p class="font-mono text-[10px] uppercase tracking-[0.25em] text-[text-muted]">Design Notes</p>
    <p class="mt-2 text-sm font-medium text-[text-secondary]">[name from DESIGN.md]</p>
    <p class="mt-1 text-sm text-[text-muted]">[description from DESIGN.md]</p>
    <!-- accent swatches: one per accent color -->
    <div class="mt-4 flex flex-wrap gap-3">
      <!-- repeat per accent -->
      <div class="flex items-center gap-1.5">
        <span class="h-3 w-3 rounded-full" style="background: [hex from colors]"></span>
        <span class="font-mono text-[10px] text-[text-muted]">[accent-N label] / [section name]</span>
      </div>
    </div>
    <!-- Overview prose from DESIGN.md -->
    <p class="mt-6 max-w-2xl text-sm leading-relaxed text-[text-muted]">[## Overview text from DESIGN.md]</p>
  </div>
</section>
```

**Style rules:**
- All Tailwind utility classes only — no `<style>` blocks
- Dark mode: only use `dark:` variants if `background: light` in the DESIGN.md (dark pages are already dark)

### 4. Generate image prompts

For each item in `images:` from the DESIGN.md, write a prompt to `src/pages/yil/_prompts/$ARGUMENTS.md`:

```markdown
## [image id]
**Subject:** ...
**Style:** ...
**Mood:** ...
**Palette:** (reference the DESIGN.md accent colors)
**Aspect ratio:** ...
**Notes:** no text in image
```

### 5. Type check

Run `npx astro check`. Fix any errors before finishing.
