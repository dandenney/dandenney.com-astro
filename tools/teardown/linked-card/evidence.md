# Evidence record: linked card with actions

**Intended use:** Interactive explanatory illustration for a dandenney.com Tinkering, paired with the "Modern linked card with actions" blip.

**Output:** A3 landscape concept drawing in the standalone teardown viewer, embedded in the tinkering page, with SVG, PNG and PDF exports.

| Feature group | Evidence kind | Treatment |
| --- | --- | --- |
| Card article | CSS in the blip: `.clickable-card { position: relative }` | Base plate; it is the containing block the overlay stretches to |
| Title link | Markup and CSS in the blip: `<h3><a class="card-link">`, `position: static` | Content plate with an underline; static so its `::before` escapes to the card |
| Supporting text | Markup in the blip: `<p>` | Content plate with three text lines, painted in normal flow |
| Stretched `::before` | CSS in the blip: `content: ""; position: absolute; inset: 0` | Transparent, hatched plate the size of the card; hatching marks the hit area |
| Action button and secondary link | CSS in the blip: nested interactive elements get `position: relative; z-index: 1` | Two plates lifted above the overlay |
| Focus ring | CSS in the blip: `:focus-within { outline: 2px solid; outline-offset: 2px }` | Ring 2 units outside the card edge, 1.6 units wide; stays with the card because the card draws it |
| Plate thickness, spacing and card proportions | A concept with no physical form | Invented to make paint order legible; not to scale |

## Assumptions

- Layers read bottom to top in paint order: card, static content, positioned `::before`, `z-index: 1` actions.
- Title and supporting text share one layer because both are non-positioned flow content.
- The focus ring is an outline the card paints, so it explodes with the card instead of floating as its own layer.
- Hues only tell layers apart.

## Rebuild and proof

```sh
npm --prefix tools/teardown install
node tools/teardown/scripts/proof.cjs tools/teardown/linked-card/drawing.json tools/teardown/linked-card/proof/
node tools/teardown/scripts/build-viewer.cjs tools/teardown/linked-card/drawing.json public/tinkerings/linked-card-teardown/viewer.html
node tools/teardown/scripts/check-viewer.cjs public/tinkerings/linked-card-teardown/viewer.html tools/teardown/linked-card/check/
```
