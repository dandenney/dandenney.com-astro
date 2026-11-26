# UI explorations

The source for [dandenney.com/ui](https://www.dandenney.com/ui/): sections, interactions, visual directions and the odd full page. Each one is a single HTML file that opens straight from disk.

## Layout

```
ui/
  AGENTS.md            the contract every generating agent gets (also the prompt for yarn ui:generate)
  <slug>/
    BRIEF.md           frontmatter for the site + what it's for, written before anything is built
    <variant>.html     one file per maker, named for the model or agent (claude-opus-4-5.html, devin.html)
    NOTES.md           optional: what worked, what didn't, why one shipped
public/ui/<slug>/og.png  social image, from yarn ui:og
```

The site reads `BRIEF.md` as the `ui` collection and `NOTES.md` as `ui-notes` (`src/content.config.ts`). Each variant is served as a self-contained frame at `/ui/<slug>/<variant>.html`: the Tailwind browser script is swapped for CSS compiled at build time (`src/lib/ui-lab.ts`), so nothing loads Tailwind at runtime on the site. An exploration with no variant yet stays off the site.

## BRIEF.md

```md
---
title: Hold to confirm
summary: One line for the gallery card and the page's description.
kind: interaction        # section | interaction | direction | page
tags: [buttons, destructive]
pubDate: 2026-11-26
shipped: devin           # optional: the variant shown first; defaults to the only (or first) one
style: house             # optional: "free" opts out of the house taste in AGENTS.md
height: 560              # optional: frame height on the exploration's page, in px
---

What it's for, who's using it, and what it has to communicate or do. Constraints, states to cover, references.
```

## Making a variant

Any agent works. It gets `ui/AGENTS.md` plus the brief and replies with one HTML document.

```sh
yarn ui:generate <slug> --agent claude [--model opus]       # also codex, gemini, opencode
yarn ui:generate <slug> --cmd "my-agent --stdin" --as label # anything that reads the prompt on stdin and prints the page
yarn ui:generate <slug> --print-prompt                      # paste into a chat UI, save the reply as ui/<slug>/<label>.html
```

The variant is named for `--as`, else `--model`, else the agent. `--force` replaces an existing one. Agents that can write files (Devin, Claude Code in a session) can follow `ui/AGENTS.md` directly and write `ui/<slug>/<label>.html` themselves.

When several variants exist, the exploration's page lets visitors switch between them; set `shipped` to the one you'd keep.

## Publishing

1. `yarn ui:og <slug>` renders `public/ui/<slug>/og.png` from the shown variant.
2. `yarn build` and check `/ui/` and `/ui/<slug>/`.
3. Commit the folder and the og image to `main`.
