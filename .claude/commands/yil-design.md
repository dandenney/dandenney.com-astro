# YIL Design — Generate the DESIGN.md for a date

Analyze the day's TIL notes and produce a DESIGN.md spec. Stop after saving the file — do not build the page.

## Usage

`/yil-design YYYY-MM-DD`

`$ARGUMENTS` = the date, e.g. `2026-05-02`

## Steps

### 1. Read the inbox

Read `/Users/dandenney/Documents/claw/TIL/Inbox/$ARGUMENTS.md`. If the file doesn't exist, stop and tell the user.

### 2. Check for a reference design file

Check whether `/Users/dandenney/Documents/claw/TIL/Inbox/$ARGUMENTS-design-md.md` exists. If it does, read it. This file contains a detailed visual analysis of an external site (colors, typography, surfaces, components) and is the **primary source for all design decisions** — palette, type, spacing, surface modes, component patterns. You are porting that site's visual language to the YIL page; the TIL content fills the sections, but the aesthetic comes entirely from the reference.

If no reference file exists, derive the design from the tone of the day's notes (see step 3).

### 3. Analyze the content

Identify:
- 2–4 dominant themes (these become the page's sections)
- The emotional/intellectual tone of the day (energetic? reflective? technical? playful?)
- Any standout quote worth featuring
- Whether the day leans light or dark — **only relevant if no reference file was found**; if a reference exists, its surface mode governs

### 3.5. Decide the page shape

Before choosing colors or fonts, decide how the PAGE ITSELF should be structured. Different days call for different shapes — a day of scattered discoveries is not the same as a day with one big insight. Ask:

- **Opening**: Does the day have a single strong visual idea (use a 2-col hero with that visual on the right)? Or is it more editorial/text-driven (use a full-width centered opening or an asymmetric large-text layout)? Or is there a code/terminal artifact that IS the story (2-col with code window right)?
- **Quote placement**: Should the standout quote anchor the whole page as a standalone full-bleed band? Or is it better woven into a specific section? Or is there no real standout quote and it should be skipped?
- **Section headers**: Do sections feel like categories (pill + h2 + underline bar is right)? Or is the day more of a single narrative arc (numbered large headers or editorial-only labels are better)? Or is it one big insight with sub-points (feature header + inline items)?
- **Surface rhythm**: Does the page need visual breathing room through alternating dark/light bands? Or does it stay on one canvas with color coming only from accents?
- **Decorative numbers**: Should sections be numbered visually, or does numbering feel forced when the topics are parallel rather than sequential?

The goal is that the page SHAPE should be legible before a single color is chosen. Two pages with different shapes feel different even if they share a color palette.

### 4. Write the DESIGN.md

Save to `src/pages/yil/_design/$ARGUMENTS.md` using this exact structure:

```markdown
---
version: alpha
name: YIL $ARGUMENTS — [thematic headline]
description: [one sentence summary of the day's learning arc]
background: light | dark
colors:
  background-main: "[hex]"
  background-surface: "[hex]"
  text-primary: "[hex]"
  text-secondary: "[hex]"
  text-muted: "[hex]"
  accent-1: "[hex]"   # for section 1
  accent-2: "[hex]"   # for section 2
  accent-3: "[hex]"   # for section 3
  accent-4: "[hex]"   # for section 4 (if needed)
  accent-5: "[hex]"   # for section 5 (if needed)
tailwind:
  bg-main: "bg-[class]"           # e.g. bg-white or bg-slate-950
  bg-surface: "bg-[class]"        # e.g. bg-gray-50 or bg-slate-900
  text-primary: "text-[class]"    # e.g. text-gray-900 or text-white
  text-secondary: "text-[class]"  # e.g. text-gray-600 or text-slate-400
  text-muted: "text-[class]"      # e.g. text-gray-400 or text-slate-600
  accent-1: "text-[class]"        # Tailwind text class for accent 1
  accent-2: "text-[class]"
  accent-3: "text-[class]"
  accent-4: "text-[class]"        # omit if fewer than 4 sections
  accent-5: "text-[class]"        # omit if fewer than 5 sections
  accent-1-bg: "bg-[class]/[opacity]"   # e.g. bg-amber-500/10
  accent-2-bg: "bg-[class]/[opacity]"
  accent-3-bg: "bg-[class]/[opacity]"
  accent-4-bg: "bg-[class]/[opacity]"   # omit if fewer than 4 sections
  accent-5-bg: "bg-[class]/[opacity]"   # omit if fewer than 5 sections
  accent-1-border: "border-[class]/[opacity]"
  accent-2-border: "border-[class]/[opacity]"
  accent-3-border: "border-[class]/[opacity]"
  accent-4-border: "border-[class]/[opacity]"  # omit if fewer than 4 sections
  accent-5-border: "border-[class]/[opacity]"  # omit if fewer than 5 sections
typography:
  family-heading: "[stack]"
  family-mono: "[stack]"
  size-hero: "[clamp value]"
  weight-hero: "[700 or 800]"
spacing:
  container-max: "max-w-[class]"  # e.g. max-w-5xl
  section-py: "py-[class]"        # e.g. py-24
page-shape:
  opening: "2col-hero-image | 2col-hero-code | full-width-statement | centered-editorial | asymmetric-large-text"
  quote-treatment: "standalone-dark-band | standalone-light-band | inline-with-section | hero-integrated | none"
  section-headers: "pill-h2-bar | large-numbered | editorial-label-only | centered-h2 | full-bleed-label"
  surface-rhythm: "[describe how backgrounds alternate across the page, e.g. 'cream → dark-navy → cream → surface → cream']"
  decorative-numbers: true | false
sections:
  - id: hero
    headline: "[page headline]"
    subhead: "[1–2 sentence intro]"
    visual: "[describe any background treatment, glow, pattern]"
  - id: quote           # only if there's a standout quote
    text: "[exact quote]"
    attribution: "[name, source title]"
    url: "[link]"
  - id: [theme-slug]    # one entry per learning theme
    label: "[short category label, e.g. Delivery]"
    headline: "[section headline]"
    accent: accent-1    # which accent color key to use
    layout: cards | prose | steps | split | feature | full-bleed-callout | code-window | timeline
    # cards = content in rounded card elements with accent border/bg
    # prose = flowing paragraphs with a max-width constraint
    # steps = numbered card grid (use only when the content IS a process)
    # split = text/content left, visual or callout card right (or vice versa)
    # feature = large centered statement, minimal chrome — for one big insight
    # full-bleed-callout = edge-to-edge accent background with centered content
    # code-window = technical content in a dark terminal-style window
    # timeline = chronological items with a connecting vertical line
    content: "[brief description of what goes in this section]"
  # repeat for each theme
  - id: references
    items:
      - label: "[category tag, e.g. delivery]"
        accent: accent-1
        title: "[link text]"
        url: "[url]"
      # repeat for each link
images:
  - id: [slug]
    placement: "[where on page, e.g. hero background]"
    description: "[what the image shows]"
---

## Overview

[2–3 sentences on the visual personality: the mood, what makes this day's design distinct from a generic blog post, why these color choices fit the content. If a reference design file was used, name the source and describe how its visual language maps to the day's content.]

## Do's and Don'ts

### Do's
- [3 specific rules for this day's design]

### Don'ts
- [3 specific anti-patterns to avoid]
```

### 5. Report back

Tell the user:
- The headline and color direction (light/dark, accent palette)
- The section list in order
- Any images that were identified
- How to proceed: `/yil-build $ARGUMENTS`
