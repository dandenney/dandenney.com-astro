# Plus EV — Daily Recap Pipeline

Gale writes a daily recap post from the day's Obsidian betting log.

## Flow

1. Bets settle
2. Dan reconciles — results and bankroll updates are added to the Obsidian daily file
3. Ask Claude: _"Write a Plus EV recap for YYYY-MM-DD using the Gale brief at `docs/plus-ev/gale-brief.md`"_

## Input

One file:

```
/Users/clawfather/Obsidian/Claw/Betting/Daily/YYYY-MM-DD.md
```

## Output

One file, written directly to the main repo:

```
/Users/clawfather/Projects/dandenney.com-astro/src/content/plus-ev/YYYY-MM-DD.md
```

The filename uses the `pubDate` (day after the games).

## Known gotchas

- **Always use the absolute output path** — relative paths resolve to the worktree when Claude runs in one, making the file invisible to `yarn dev` in the main repo.
- **Quote `recapDate` in frontmatter** — bare YAML dates (`2026-04-06`) are parsed as date objects; the schema expects a string. Always write `recapDate: "YYYY-MM-DD"`.

## Writing brief

`docs/plus-ev/gale-brief.md`
