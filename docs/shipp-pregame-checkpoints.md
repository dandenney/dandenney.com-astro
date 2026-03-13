# Shipp Pregame Checkpoint Workflow

This workflow replaces continuous live-feed review with pregame-only checkpoint packets for **pending bets**.

## Checkpoints

- `T-120` (about 2 hours before game start): initial snapshot
- `T-30` (about 30 minutes before): confirmation packet
- `T-10` (about 10 minutes before): final pre-lock check
- `LOCK`: lock packet for final manual decision

## Human-in-loop guardrail

- Recommendations are advisory only (`Bet`, `No Bet`, `Reduce Stake`)
- **No auto-betting is implemented**
- If data is insufficient, fallback is explicit: **No Bet**

## Endpoints

### 1) Run a checkpoint (and fetch latest Shipp data)

`POST /api/shipp/checkpoints`

Body:

```json
{
  "checkpoint": "T-120"
}
```

Optional body fields:

- `betIds: number[]` to scope to specific pending bet IDs
- `skipFetch: true` to generate from already-saved Shipp state
- `useMock: true` for local validation packets

### 2) Read current checkpoint packets

`GET /api/shipp/checkpoints`

Returns `checkpoints.byBetId` map with checkpoint history per pending bet.

## Exact curl commands

Run from project root while `astro dev` is running:

```bash
curl -sS -X POST http://localhost:4321/api/shipp/checkpoints \
  -H 'content-type: application/json' \
  -d '{"checkpoint":"T-120"}'
```

```bash
curl -sS -X POST http://localhost:4321/api/shipp/checkpoints \
  -H 'content-type: application/json' \
  -d '{"checkpoint":"T-30"}'
```

```bash
curl -sS -X POST http://localhost:4321/api/shipp/checkpoints \
  -H 'content-type: application/json' \
  -d '{"checkpoint":"T-10"}'
```

```bash
curl -sS -X POST http://localhost:4321/api/shipp/checkpoints \
  -H 'content-type: application/json' \
  -d '{"checkpoint":"LOCK"}'
```

Inspect packets:

```bash
curl -sS http://localhost:4321/api/shipp/checkpoints
```

## UI behavior in `/martingale-tracker`

- Shows **current checkpoint status** for each pending bet
- Shows **key deltas** from previous checkpoint (confidence/evidence/new packets)
- Shows recommendation + confidence
- Shows explicit fallback when data is insufficient
- De-emphasizes in-game signals in this path

## Leif framework alignment

No dedicated Leif scoring/framework file was found in this repository at implementation time.

TODO:
- If/when Leif scoring framework is added, align recommendation labels and confidence scale to that schema.
