# Parsing CBS SportsLine Expert Picks HTML

Instructions for converting manually scraped CBS SportsLine HTML into TypeScript data entries. This applies to both NBA (`src/data/expertPicks.ts`) and MLB (`src/data/mlbExpertPicks.ts`).

---

## How to scrape the HTML

1. Open the expert picks page on CBS SportsLine (e.g. the NBA or MLB picks tab).
2. Select all picks you want — scroll to load them if the page is paginated.
3. Open DevTools → select the outermost container wrapping all pick cards → right-click → **Copy → Copy outerHTML**.
4. Paste into a message to Claude along with the instruction: _"Parse this into expert picks entries starting at id: N"_ (check the current highest `id` in the data file first).

---

## HTML structure patterns

CBS SportsLine uses obfuscated class names that change over time. Rely on **semantic attributes** (e.g. `color`, `font-weight`) rather than class names.

### Game date/time
```html
<span font-weight="400" class="...bcSPbh">Mar 30 2026, 7:30 pm CDT</span>
```
→ `gameDateTime: "Mar 30 2026, 7:30 pm CDT"`

### Team names
```html
<span color="black" font-weight="400" class="...exlKJV">Timberwolves</span>
<span color="black" font-weight="400" class="...exlKJV">@ Mavericks</span>
```
The **`@` prefix** means that team is the **home team**. The first-listed team (no `@`) is the **away team**.

→ `awayTeam: "Timberwolves"`, `homeTeam: "Mavericks"`

### Scores
```html
<span color="black" font-weight="400" class="...fzhjOk">120</span>
```
Listed in the same order as the teams (away score first, home score second). Use `""` (empty string) for games not yet played.

### Pick result
```html
<span color="win" ...>W</span>
<span color="loss" ...>L</span>
```
The `color` attribute is the reliable signal: `"win"` → `"win"`, `"loss"` → `"loss"`. Push is rare; use `"push"` if you see a `P` or tie marker. If no win/loss indicator is present (game hasn't been played yet), use `"pending"` — this is valid for MLB picks only (`MlbExpertPickResult` includes `"pending"`; the NBA type does not).

### Bet title (the pick itself)
```html
<span ...>Naz Reid Over 14.5 Total Points +102</span>
```
Copy verbatim including the odds. This becomes `betTitle`.

### Bet type
Derive from the bet title:
| Title contains | `betType` value |
|---|---|
| `Over` / `Under` + points | `"Points"` |
| `Over` / `Under` + `PTS + AST` | `"PTS + AST"` |
| `Over` / `Under` + `PTS + REB` | `"PTS + REB"` |
| `Over` / `Under` + `REB + AST` | `"REB + AST"` |
| `Over` / `Under` + `PTS + AST + REB` | `"PTS + AST + REB"` |
| `Over` / `Under` + `Rebounds` | `"Rebounds"` |
| `Over` / `Under` + `Assists` | `"Assists"` |
| `Over` / `Under` (team total, no player) | `"Over/Under"` |
| `ML` or moneyline | `"Moneyline"` |
| `+` / `-` spread (no player name) | `"Spread"` |
| MLB: `Over` / `Under` + `Runs` | `"Runs"` |
| MLB: `Run Line` | `"Run Line"` |
| MLB: `Strikeouts` | `"Strikeouts"` |
| MLB: `Hits + Runs + RBIs` | `"H + R + RBI"` |

### Author name
```html
<span color="black" font-weight="400" class="...jTOUQL">Zack Cimini</span>
```
→ `authorName: "Zack Cimini"`

### Author other name (tagline/nickname)
Appears below the author name in a smaller style.
→ `authorOtherName: "Contrarian with Chutzpah"`

### Author image URL
```html
<img src="https://sports.cbsimg.net/images/sportsline/authors/90_zack_cimini.png" />
```
Copy verbatim. Use `null` if no image is present.

### Analysis text
The paragraph of reasoning below the pick. Copy verbatim. Escape any double quotes as `\"` inside the TypeScript string. Use `null` if absent.

### Pick made time
```html
<span ...>Wed 4:18 pm CDT</span>
```
Appears near the author byline. Use `null` if absent.

### Sportsbook
```html
<span ...>DraftKings</span>
```
The sportsbook logo or name shown on the card. Use `null` if absent.

---

## TypeScript entry format

### NBA (`src/data/expertPicks.ts`)

```ts
{
  id: 215,                                        // next sequential integer
  gameDateTime: "Mar 30 2026, 7:30 pm CDT",
  homeTeam: "Mavericks",
  homeScore: 110,                                 // number, or "" if not played
  awayTeam: "Timberwolves",
  awayScore: 108,
  betType: "Points",
  betTitle: "Naz Reid Over 14.5 Total Points +102",
  result: "loss",                                 // "win" | "loss" | "push"
  authorName: "Zack Cimini",
  authorOtherName: "Contrarian with Chutzpah",
  authorImageUrl: "https://sports.cbsimg.net/images/sportsline/authors/90_zack_cimini.png",
  analysisText: "Full analysis text here...",
  pickMadeTime: "Wed 4:18 pm CDT",
  sportsbook: "DraftKings",
},
```

### MLB (`src/data/mlbExpertPicks.ts`)

Same interface, same format. Common differences:
- `betType`: use `"Run Line"`, `"Runs"`, `"Moneyline"`, `"Strikeouts"`, `"H + R + RBI"` etc.
- `homeScore` / `awayScore`: runs scored (integer or `""`)
- Team names: use full city+nickname or just nickname, be consistent (e.g. `"Yankees"`, `"Dodgers"`)

---

## Finding the next `id`

Before appending, check the last entry in the data file:

```bash
grep "id:" src/data/expertPicks.ts | tail -1
# or for MLB:
grep "id:" src/data/mlbExpertPicks.ts | tail -1
```

Use the next integer.

---

## Common gotchas

- **Home/away**: the `@` in `@ TeamName` marks the **home** team. The first team listed is always **away**.
- **Scores for future games**: use `""` (empty string), not `0` or `null` — the interface is `number | string`.
- **Double quotes in analysis text**: escape as `\"` inside a regular string, or use a template literal.
- **New experts**: if an author hasn't appeared before, double-check their `authorOtherName` and `authorImageUrl` from the page — these only need to be correct once since they're consistent across picks.
- **Class names change**: don't rely on CBS class names between scraping sessions. Always identify elements by their `color` / `font-weight` semantic attributes or position in the card DOM.
