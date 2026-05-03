# YIL — Yesterday I Learned

This workflow is now split into two steps so the design can be reviewed before the page is built.

## Workflow

1. `/yil-design YYYY-MM-DD` — reads the Obsidian inbox file, generates a DESIGN.md spec, and stops
2. Review (and optionally edit) `src/pages/yil/_design/YYYY-MM-DD.md`
3. `/yil-build YYYY-MM-DD` — reads the DESIGN.md as strict spec, builds the `.astro` page and image prompts

## Why two steps?

`/yil-design` makes all the creative decisions: light vs dark, accent palette, section structure. You can see and change those decisions before any code is written. `/yil-build` then follows the spec exactly — it reads the saved DESIGN.md first and maps every token to a Tailwind class before writing a line of HTML.
