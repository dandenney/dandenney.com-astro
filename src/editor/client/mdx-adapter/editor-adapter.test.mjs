import assert from "node:assert/strict";
import test from "node:test";
import { parseSourceDocument } from "../../source/document.mjs";
import { createMdxEditorAdapter } from "./editor-adapter.mjs";

const source = `---
title: Adapter
summary: Visual
---
Editable **prose**.

<img class="wide" src="/x.png" alt="x" />
`;

test("MDXEditor adapter imports visual Markdown and exports source-safe regions", () => {
  const document = parseSourceDocument(source, "posts");
  const adapter = createMdxEditorAdapter({ document });

  assert.match(adapter.markdown, /Editable \*\*prose\*\*/);
  assert.match(adapter.markdown, /<EditorProtected regionId="body-2" \/>/);
  assert.ok(adapter.plugins.length >= 6);
  assert.equal(adapter.protectedDescriptor.name, "EditorProtected");
  assert.equal(adapter.protectedDescriptor.hasChildren, false);
  assert.deepEqual(
    adapter.exportRegions(adapter.markdown).map(({ id, source, protected: isProtected }) => ({ id, source, protected: isProtected })),
    document.regions.map(({ id, source, protected: isProtected }) => ({ id, source, protected: isProtected })),
  );
});
