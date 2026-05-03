# YIL Build — Build the page from the DESIGN.md

Read the saved DESIGN.md and implement it exactly. Do not make design decisions — every color, layout choice, and section structure must come from the spec.

## Usage

`/yil-build YYYY-MM-DD`

`$ARGUMENTS` = the date, e.g. `2026-05-02`

## Steps

### 1. Read the spec (required before writing any code)

Read `src/pages/yil/_design/$ARGUMENTS.md`. If it doesn't exist, stop and tell the user to run `/yil-design $ARGUMENTS` first.

Also read `/Users/dandenney/Documents/claw/TIL/Inbox/$ARGUMENTS.md` for the actual content to populate the sections.

### 2. Extract the design tokens

Before writing HTML, list out:
- Background mode: `[light/dark]`
- `bg-main` → [value from tailwind.bg-main]
- `bg-surface` → [value from tailwind.bg-surface]
- `text-primary` → [value]
- Accent classes for each section (accent-1 through accent-N)
- Section order from `sections:` list
- Layout type per section (cards / prose / steps)

You will use these exact classes in the implementation. Do not substitute or improvise alternatives.

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

**Build each section in the order listed in `sections:` using:**
- The exact Tailwind color classes from `tailwind:` in the DESIGN.md — not hex values, not guesses
- The layout type specified per section:
  - `cards` → content in rounded card elements with accent border/bg
  - `prose` → flowing paragraphs with a max-width constraint
  - `steps` → numbered card grid
- For `quote` sections: full-bleed panel with large decorative quotation mark, quote text at 2xl–3xl
- For `references`: tagged pill per item using that item's accent color key
- After `references`, add a **Design Notes** section (see below)
- For any section with `accent: accent-N`, apply that accent to: the category pill, the h2 underline bar, inline code chips, bold highlights, and the decorative section number

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
