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
    CRITIQUE.md        optional: a design critique of the shown variant, from yarn ui:critique
public/ui/<slug>/og.png  social image, from yarn ui:og
```

The site reads `BRIEF.md` as the `ui` collection, `NOTES.md` as `ui-notes` and `CRITIQUE.md` as `ui-critiques` (`src/content.config.ts`). Each variant is served as a self-contained frame at `/ui/<slug>/<variant>.html`: the Tailwind browser script is swapped for CSS compiled at build time (`src/lib/ui-lab.ts`), so nothing loads Tailwind at runtime on the site. An exploration with no variant yet stays off the site.

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

## Critiquing it

```sh
yarn ui:critique <slug> --agent claude [--model opus]        # same --agent / --cmd / --as / --print-prompt as generate
yarn ui:critique <slug> --variant other-model                # defaults to the shipped (or first) variant
```

The prompt is `ui/AGENTS.md`, Impeccable's aesthetics guidelines (`.agents/skills/impeccable/SKILL.md`), its heuristics scoring guide (`.agents/skills/critique/reference/heuristics-scoring.md`), the brief and the variant's source. The reply becomes `ui/<slug>/CRITIQUE.md`: a verdict, brief coverage, a scored heuristics table, what's working, P0–P3 issues and questions. Frontmatter records the variant, the critic and the date, and the exploration's page shows it under the brief. `--force` replaces an existing one.

`style: free` briefs skip the critique. `--anyway` runs it on function and communication only, with no house taste.

## Publishing

1. `yarn ui:og <slug>` renders `public/ui/<slug>/og.png` from the shown variant.
2. `yarn build` and check `/ui/` and `/ui/<slug>/`.
3. Commit the folder and the og image to `main`.
