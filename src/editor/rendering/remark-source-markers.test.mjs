import assert from "node:assert/strict";
import test from "node:test";
import { remarkEditorSourceMarkers } from "./remark-source-markers.mjs";

function node(type, start, end) {
  return { type, position: { start: { offset: start }, end: { offset: end } }, children: [] };
}

test("marks source-sensitive top-level blocks around Astro-rendered content", () => {
  const source = "Editable.\n\n<img class=\"wide\" src=\"/x.png\" />\n\nAfter.\n";
  const imageStart = source.indexOf("<img");
  const imageEnd = source.indexOf("\n", imageStart);
  const tree = { type: "root", children: [
    node("paragraph", 0, source.indexOf("\n")),
    node("html", imageStart, imageEnd),
    node("paragraph", source.indexOf("After"), source.indexOf("After") + 6),
  ] };

  remarkEditorSourceMarkers()(tree, { value: source });

  assert.equal(tree.children.length, 5);
  assert.equal(tree.children[1].value, `<span hidden data-editor-start="${imageStart}:${imageEnd}"></span>`);
  assert.equal(tree.children[2].type, "html");
  assert.equal(tree.children[3].value, `<span hidden data-editor-end="${imageStart}:${imageEnd}"></span>`);
});

test("does not mark ordinary Markdown prose", () => {
  const source = "Editable **prose**.\n";
  const tree = { type: "root", children: [node("paragraph", 0, source.trimEnd().length)] };
  remarkEditorSourceMarkers()(tree, { value: source });
  assert.equal(tree.children.length, 1);
});
