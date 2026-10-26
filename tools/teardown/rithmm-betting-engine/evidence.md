# Evidence record — Rithmm betting engine

**Intended use:** Interactive explanatory illustration for a dandenney.com Tinkering.

**Output:** A3 landscape concept drawing in a responsive standalone viewer, with SVG, PNG and PDF exports.

| Feature group | Evidence kind | Treatment |
| --- | --- | --- |
| Rithmm recommendation | Workflow fact supplied by Dan and documented in the existing betting notes | Illustrated as the first signal plate with probability lanes |
| Sportsbook ticket | Workflow fact supplied by Dan | Illustrated as a receipt-like plate; it remains distinct from the recommendation |
| Deterministic rules | Implemented workflow behavior | Illustrated as a gate plate for exact arithmetic, thresholds and the -160 cutoff |
| Hermes controller | Implemented workflow behavior | Illustrated as the central control plate that owns mutations and workflow decisions |
| Jev shadow review | Implemented workflow behavior | Illustrated as a separate sidecar plate; it never becomes the controller |
| Obsidian ledger | Existing durable record | Illustrated as a ruled storage plate |
| Published tracker | Existing dandenney.com output | Illustrated as the final dashboard plate |
| Physical enclosure and dimensions | Fictional concept | Invented only to make the software workflow legible as an exploded assembly |

## Assumptions

- The workflow has no literal physical internals; every layer is conceptual.
- Stack dimensions and spacing are illustrative and intentionally not to scale.
- The order reads from evidence at the bottom through published output at the top.
- Part colors distinguish responsibilities and do not encode materials or safety classes.

## Rebuild and proof

```sh
npm --prefix tools/teardown install
node tools/teardown/scripts/proof.cjs tools/teardown/rithmm-betting-engine/drawing.json tools/teardown/rithmm-betting-engine/proof/
node tools/teardown/scripts/build-viewer.cjs tools/teardown/rithmm-betting-engine/drawing.json public/tinkerings/rithmm-betting-engine/viewer.html
node tools/teardown/scripts/check-viewer.cjs public/tinkerings/rithmm-betting-engine/viewer.html tools/teardown/rithmm-betting-engine/check/
```
