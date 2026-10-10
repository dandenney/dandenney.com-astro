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
