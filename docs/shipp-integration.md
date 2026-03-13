# Shipp MVP Integration (Sports Betting Tracker First)

This project includes a server-side Shipp integration for manual signal ingestion.

Primary scope: sports betting UX on `/martingale-tracker`.
Secondary future scope: optional reuse on capital-game dashboards.

## 1) Add API key + connection IDs

Add these values to `.env.local`:

```bash
SHIPP_API_KEY=your_real_shipp_api_key
# one option:
SHIPP_CONNECTION_ID=01ABC...
# or multiple:
SHIPP_CONNECTION_IDS=01ABC...,01DEF...
```

Notes:
- `SHIPP_API_KEY` is required for live Shipp calls.
- Signals are fetched server-side only (key is never exposed to browser code).

## 2) Manual fetch trigger (safe / human-in-loop)

### Live Shipp fetch

```bash
curl -sS -X POST http://localhost:4321/api/shipp/fetch \
  -H 'Content-Type: application/json' \
  -d '{"limit":100}'
```

### Local mock fetch (no API key required)

```bash
curl -sS -X POST http://localhost:4321/api/shipp/fetch \
  -H 'Content-Type: application/json' \
  -d '{"useMock":true}'
```

## 3) Read latest normalized signals

```bash
curl -sS http://localhost:4321/api/shipp/signals
```

Signals are shown in `/martingale-tracker` under **Pending Bet Signal Panel**.

## 4) Persistence/state files

State is stored in:

- `src/data/shipp-state.json`

It tracks:
- per-connection `sinceEventId` cursor
- last run/success/error metadata
- `latestSignals` (normalized, deduped, capped)

## 5) Bet-to-signal matching assumptions (lightweight MVP)

Current matching is intentionally conservative and simple:

- only **pending** bets are evaluated
- signal relevance is based on:
  - overlap between bet pick tokens and normalized signal team/game tokens
  - inferred sport alignment (`NBA` inference only in MVP)
- if no match is found, UI explicitly shows: **"No relevant updates yet"**
- optional per-match debug details are available via a collapsible "Matching notes" row

Why this approach:
- keeps the UX clear and non-debuggy by default
- avoids duplicate Shipp ingestion logic (reuses existing normalized state)
- keeps humans in the loop with zero auto-bet execution

## 6) Non-breaking behavior

- Existing capital-game logic remains intact.
- Shipp bet panel is read-only decision support.
- No automatic bet placement is performed.
