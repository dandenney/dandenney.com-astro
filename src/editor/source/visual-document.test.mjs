import assert from "node:assert/strict";
import test from "node:test";
import { applyDocumentEdits, parseSourceDocument } from "./document.mjs";
import { regionsFromVisualMarkdown, visualMarkdownFor } from "./visual-document.mjs";

const source = `---
title: Visual editing
summary: Summary
tags: [editor]
---

Editable **before**.

<img class="full-bleed" src="/protected.png" alt="Protected" />

Editable after.
`;

test("visual markdown round-trips editable prose around protected source", () => {
  const document = parseSourceDocument(source, "posts");
  assert.equal(document.regions.find((region) => region.protected).renderKey, "22:85");
  const markdown = visualMarkdownFor(document);

  assert.match(markdown, /Editable \*\*before\*\*/);
  assert.match(markdown, /<EditorProtected regionId="body-2" \/>/);
  assert.doesNotMatch(markdown, /full-bleed/);

  const editedMarkdown = markdown
    .replace("Editable **before**.", "Edited **visually**.")
    .replace("Editable after.", "Edited after.");
  const regions = regionsFromVisualMarkdown(document, editedMarkdown);
  const edited = applyDocumentEdits(document, { metadata: document.metadata, regions });

  assert.match(edited, /Edited \*\*visually\*\*\./);
  assert.match(edited, /Edited after\./);
  assert.match(edited, /<img class="full-bleed" src="\/protected\.png" alt="Protected" \/>/);
});

test("visual markdown no-op preserves the complete source byte-for-byte", () => {
  const document = parseSourceDocument(source, "posts");
  const regions = regionsFromVisualMarkdown(document, visualMarkdownFor(document));
  assert.equal(applyDocumentEdits(document, { metadata: document.metadata, regions }), source);
});

test("visual markdown cannot remove, duplicate, or reorder protected source", () => {
  const document = parseSourceDocument(`${source}\n\`\`\`js\nprotected();\n\`\`\`\n`, "posts");
  const markdown = visualMarkdownFor(document);
  assert.throws(() => regionsFromVisualMarkdown(document, markdown.replace(/<EditorProtected[^>]+>\s*/, "")), /protected regions/i);
  assert.throws(() => regionsFromVisualMarkdown(document, `${markdown}\n<EditorProtected regionId="body-2" />\n`), /protected regions/i);
  const reversed = markdown.replace(/regionId="body-2"/, 'regionId="swap"')
    .replace(/regionId="body-4"/, 'regionId="body-2"')
    .replace(/regionId="swap"/, 'regionId="body-4"');
  assert.throws(() => regionsFromVisualMarkdown(document, reversed), /protected regions/i);
});

test("edits after adjacent protected regions stay in place", () => {
  const source = `---
title: Adjacent
summary: S
tags: []
---
Intro.

<article>
  <h3>One</h3>

First talk.
</article>

<article>
  <h3>Two</h3>

Second talk.
</article>
`;
  const document = parseSourceDocument(source, "posts");
  const markdown = visualMarkdownFor(document).replace("Second talk.", "Second talk, edited.");
  const edited = applyDocumentEdits(document, { metadata: document.metadata, regions: regionsFromVisualMarkdown(document, markdown) });
  assert.equal(edited, source.replace("Second talk.", "Second talk, edited."));
});

test("refuses to map visual text that does not line up with editable regions", () => {
  const document = { regions: [
    { id: "body-1", source: "<a>\n\n", protected: true },
    { id: "body-2", source: "<b>\n", protected: true },
  ] };
  assert.throws(() => regionsFromVisualMarkdown(document, visualMarkdownFor(document)), /does not line up/);
});

test("untouched regions keep their source and edits keep surrounding whitespace", () => {
  const source = "---\ntitle: T\nsummary: S\ntags: []\n---\n<article>\n\nFirst *one*.\n</article>\n\n<article>\n\nSecond.\n</article>\n";
  const document = parseSourceDocument(source, "posts");
  // Simulate the editor's normalized export: blank line after every block, `_` emphasis.
  const normalize = (markdown) => markdown.replace(/\*one\*/, "_one_").replace(/\.\n(?!\n)/g, ".\n\n");
  const baseline = normalize(visualMarkdownFor(document));
  const markdown = baseline.replace("Second.", "Second, edited.");
  const edited = applyDocumentEdits(document, {
    metadata: document.metadata,
    regions: regionsFromVisualMarkdown(document, markdown, baseline),
  });
  assert.equal(edited, source.replace("Second.", "Second, edited."));
});

test("editing one block leaves the editor's reformatting of its neighbours out of the source", () => {
  const source = "---\ntitle: T\nsummary: S\ntags: []\n---\n* first item\n* second item\n\nA *quiet* paragraph.\n\nEdit me.\n";
  const document = parseSourceDocument(source, "posts");
  // Simulate the editor's normalized export: `-` bullets and `_` emphasis.
  const baseline = visualMarkdownFor(document).replaceAll("* ", "- ").replace("*quiet*", "_quiet_");
  const markdown = baseline.replace("Edit me.", "Edited.");
  const edited = applyDocumentEdits(document, {
    metadata: document.metadata,
    regions: regionsFromVisualMarkdown(document, markdown, baseline),
  });
  assert.equal(edited, source.replace("Edit me.", "Edited."));
});
