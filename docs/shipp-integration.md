# Shipp MVP Integration (Capital Game Dashboard)

This project includes a server-side Shipp integration for manual signal ingestion.

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

Signals are also shown in `/capital-game-dashboard` under **Shipp Signal Feed (Debug)**.

## 4) Persistence/state files

State is stored in:

- `src/data/shipp-state.json`

It tracks:
- per-connection `sinceEventId` cursor
- last run/success/error metadata
- `latestSignals` (normalized, deduped, capped)

## 5) Non-breaking behavior

- Dashboard keeps existing capital game logic intact.
- Shipp section is read-only/debug-only.
- No automatic bet placement is performed.
