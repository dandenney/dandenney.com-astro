# YIL Design — Generate the DESIGN.md for a date

Analyze the day's TIL notes and produce a DESIGN.md spec. Stop after saving the file — do not build the page.

## Usage

`/yil-design YYYY-MM-DD`

`$ARGUMENTS` = the date, e.g. `2026-05-02`

## Steps

### 1. Read the inbox

Read `/Users/dandenney/Documents/claw/TIL/Inbox/$ARGUMENTS.md`. If the file doesn't exist, stop and tell the user.

### 2. Analyze the content

Identify:
- 2–4 dominant themes (these become the page's sections)
- The emotional/intellectual tone of the day (energetic? reflective? technical? playful?)
- Any standout quote worth featuring
- Whether the day leans light or dark (light = airy, optimistic, reference-heavy; dark = focused, technical, late-night)

### 3. Write the DESIGN.md

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
    layout: cards | prose | steps  # cards = content cards, prose = paragraphs, steps = numbered process
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

[2–3 sentences on the visual personality: the mood, what makes this day's design distinct from a generic blog post, why these color choices fit the content.]

## Do's and Don'ts

### Do's
- [3 specific rules for this day's design]

### Don'ts
- [3 specific anti-patterns to avoid]
```

### 4. Report back

Tell the user:
- The headline and color direction (light/dark, accent palette)
- The section list in order
- Any images that were identified
- How to proceed: `/yil-build $ARGUMENTS`
