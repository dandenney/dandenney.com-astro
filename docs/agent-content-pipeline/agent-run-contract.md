# Agent Run Contract (Single Request)

Use this contract when asking Shelby to run end-to-end content generation.

## Inputs
- `type`: `no-reservaitions` or `music-review`
- `sourceInput`: section-specific intake
- `notes`: optional personal context
- `publishMode`: `dry-run` or `publish`

## Required artifacts per run
1. `packet.json` (Leif output)
2. `body.md` (Quillan output)
3. Published markdown file in collection path (Watten output)
4. PR summary with assumptions, confidence, and source list

### Music-specific requirement (Leif)
Before Quillan writes, Leif must perform lyrics research and set packet fields:
- `lyrics.status`: `provided|fetched|missing`
- `lyrics.text`: full lyrics or `null`
- `lyrics.source`: URL or `null`

Leif must append source evidence in `sources[]` and include a `lyrics-missing` flag when unresolved.

## Standard paths
- Temporary run files: `docs/agent-content-pipeline/runs/<timestamp>/`
- Final content:
  - No Reservaitions: `src/content/reviews/*.md`
  - Music reviews: `src/content/songs/*.md`

## Commands
Validate packet:
```bash
yarn agent:packet:validate docs/agent-content-pipeline/runs/<run>/packet.json
```

Dry publish check:
```bash
yarn agent:content:publish --packet docs/agent-content-pipeline/runs/<run>/packet.json --body docs/agent-content-pipeline/runs/<run>/body.md --dry-run
```

Publish file:
```bash
yarn agent:content:publish --packet docs/agent-content-pipeline/runs/<run>/packet.json --body docs/agent-content-pipeline/runs/<run>/body.md
```

## Acceptance criteria
- Packet validates
- Dry-run succeeds
- Output file path and slug match conventions
- Astro build passes before PR
