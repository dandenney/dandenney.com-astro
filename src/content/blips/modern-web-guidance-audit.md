---
summary: Using a Chrome-published Claude Code plugin to audit the site for modern web best practices
title: Modern Web Guidance Audit
pubDate: '2026-05-23'
---

Some of my favorite Google folks started sharing the new [Modern Web Guidance](https://x.com/sarah_edo/status/2056846557924712664?s=20) they've shipped. I was curious and I haven't used a Claude Code plugin yet, so I installed that. Despite having a few other skills review my site in this way, it still found a handful of issues

Installing it was three commands in Claude Code:

```
/plugin marketplace add GoogleChrome/modern-web-guidance
/plugin install modern-web-guidance@googlechrome
/reload-plugins
```

I asked it to start with the shared layout components (BaseHead, Header, Footer, global.css) and the home page. It read all the files, searched the guidance library for relevant topics (font loading, LCP images, nav accessibility), retrieved the full guides, then cross-referenced them against the actual code.

It found six issues:

1. Missing `preconnect` hints for Google Fonts: the font stylesheet was loading without pre-establishing the connection to `fonts.googleapis.com` and `fonts.gstatic.com`, adding two extra round-trips before any text could render
2. No skip link: keyboard users had no way to bypass the nav on every page load
3. Missing `color-scheme` CSS property: dark mode was handled via `.dark` class but native browser controls stayed light regardless, so scrollbars and form inputs weren't adapting
4. Footer nav lacked `aria-label`: two `<nav>` elements on every page with nothing to distinguish them to screen readers
5. Nav links not in list markup: both the header and footer links were bare `<a>` tags instead of `<ul>/<li>`, which screen readers use to announce item counts and allow group skipping
6. Footer avatar image missing `loading="lazy"`: small thing, but easy to fix

All six were pretty fixable. The biggest one to get right was the skip link, which needed a visible-on-focus style in global.css, an `href="#main-content"` in the Header component, and then a matching `id="main-content" tabindex="-1"` target in every layout and on the home page. That ended up touching seven files:

- `src/pages/index.astro` — the hero text div (since Header lives inside `<main>` there)
- `src/layouts/BlogPost.astro`
- `src/layouts/Blip.astro`
- `src/layouts/Review.astro`
- `src/layouts/SongReview.astro`
- `src/layouts/ArtificiallyIntelligent.astro`
- `src/layouts/PlusEVPost.astro`

`Tinkering.astro` doesn't include the Header component, so it was exempt.

Everything passed `npx astro check` with zero errors after. The whole thing took maybe 20 minutes including reading the guides and writing the fixes. The plugin approach is a nice way to do this kind of audit — it's not just a linter flagging patterns, it pulls the actual rationale and implementation guidance for each finding.
