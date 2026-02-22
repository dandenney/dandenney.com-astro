# Agent Content Pipeline (Leif → Quillan → Watten)

Purpose: replace ad-hoc GitHub Action prompting with a structured, agent-first flow for generating and publishing:
- No Reservaitions reviews
- Music reviews

## Roles
- **Leif (Research/Data):** produce structured content packet with sources + confidence
- **Quillan (Writer):** draft markdown body in section-specific style, grounded in packet
- **Watten (Publisher):** validate frontmatter/path/slug/schema, write file, open PR
- **Shelby (Orchestrator):** route, enforce contracts, QA gate, summarize run

## Flow
1. Intake from Dan
2. Leif creates packet JSON
3. Quillan drafts review body from packet + style pack
4. Watten publishes file and opens PR
5. Shelby posts summary + risks/assumptions

## Primary Decision
- Agent pipeline is primary path
- GitHub Actions retained as temporary fallback

## Pilot Plan
- 1 No Reservaitions item
- 1 Music review item
- Measure:
  - formatting correctness
  - frontmatter validity
  - edit distance after Dan review
  - time-to-PR

If both pilots pass, keep this pipeline as default and deprecate old generation workflows.
