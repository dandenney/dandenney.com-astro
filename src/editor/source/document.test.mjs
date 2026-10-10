import assert from "node:assert/strict";
import test from "node:test";
import { applyDocumentEdits, parseSourceDocument } from "./document.mjs";

const source = `---\r
title: 'Original title'\r
summary: Original summary\r
pubDate: 2024-01-02\r
tags:\r
  - one\r
  - two\r
custom: { keep: "exactly" } # untouched\r
---\r
\r
A plain **editable** paragraph.\r
\r
\`\`\`js\r
const untouched = true;\r
\`\`\`\r
\r
| A | B |\r
| - | - |\r
| 1 | 2 |\r
\r
![alt](/image.png)\r
\r
Final paragraph.\r
`;

test("no-op edits preserve the complete source byte-for-byte", () => {
  const document = parseSourceDocument(source, "posts");
  assert.equal(applyDocumentEdits(document, { metadata: document.metadata, regions: document.regions }), source);
});

test("patches only collection-allowed metadata and preserves read-only frontmatter", () => {
  const document = parseSourceDocument(source, "posts");
  const edited = applyDocumentEdits(document, {
    metadata: { ...document.metadata, title: "Changed", summary: "New summary", tags: ["alpha", "beta"] },
    regions: document.regions,
  });
  assert.match(edited, /title: "Changed"/);
  assert.match(edited, /summary: "New summary"/);
  assert.match(edited, /tags: \["alpha", "beta"\]\r\ncustom:/);
  assert.match(edited, /pubDate: 2024-01-02\r\n/);
  assert.match(edited, /custom: \{ keep: "exactly" \} # untouched/);
  assert.throws(
    () => applyDocumentEdits(document, { metadata: { ...document.metadata, pubDate: "2030-01-01" }, regions: document.regions }),
    /read-only metadata field pubDate/,
  );
});

test("preserves protected unsupported body regions exactly", () => {
  const document = parseSourceDocument(source, "posts");
  const editable = document.regions.filter((region) => !region.protected);
  const protectedRegions = document.regions.filter((region) => region.protected);
  assert.equal(protectedRegions.length, 3);
  assert.ok(protectedRegions.some((region) => region.kind === "fenced-code"));
  assert.ok(protectedRegions.some((region) => region.kind === "table"));
  assert.ok(protectedRegions.some((region) => region.kind === "image"));

  const edits = document.regions.map((region) =>
    region.id === editable[0].id ? { ...region, source: "Edited paragraph.\r\n" } : region,
  );
  const edited = applyDocumentEdits(document, { metadata: document.metadata, regions: edits });
  for (const region of protectedRegions) assert.ok(edited.includes(region.source));

  const tampered = document.regions.map((region) =>
    region.protected && region.kind === "table" ? { ...region, source: "changed" } : region,
  );
  assert.throws(
    () => applyDocumentEdits(document, { metadata: document.metadata, regions: tampered }),
    /Protected table source cannot be edited/,
  );
});

test("protects raw HTML and images even when embedded in prose", () => {
  const document = parseSourceDocument("---\ntitle: Hi\nsummary: Summary\ntags: []\n---\nBefore <span>raw</span> after.\n\nText ![alt](/x.png) after.\n", "posts");
  assert.deepEqual(document.regions.map((region) => region.protected), [true, true]);
});

test("preserves malformed legacy read-only frontmatter while editing supported fields", () => {
  const legacy = `---\nthumbAlt: "\nA legacy unindented continuation"\ntitle: Legacy\nsummary: Keep going\ntags:\n  - old\n---\nBody\n`;
  const document = parseSourceDocument(legacy, "posts");
  const edited = applyDocumentEdits(document, {
    metadata: { ...document.metadata, title: "Updated" },
    regions: document.regions,
  });
  assert.match(edited, /thumbAlt: "\nA legacy unindented continuation"/);
  assert.match(edited, /title: "Updated"/);
});

test("adds an optional editable field without rewriting existing frontmatter", () => {
  const source = "---\ntitle: Hi\npubDate: 2024-01-01\n---\nBody\n";
  const document = parseSourceDocument(source, "blips");
  const edited = applyDocumentEdits(document, {
    metadata: { ...document.metadata, tags: ["notes", "food: places"] },
    regions: document.regions,
  });
  assert.equal(edited, "---\ntitle: Hi\npubDate: 2024-01-01\ntags: [\"notes\", \"food: places\"]\n---\nBody\n");
});

test("uses each collection's metadata allowlist", () => {
  const blip = parseSourceDocument("---\ntitle: Hi\nsummary: Optional\n---\nBody\n", "blips");
  assert.deepEqual(blip.editableFields, ["title", "tags", "summary"]);
  const review = parseSourceDocument("---\ntitle: Place\ndescription: Desc\ntags: [food]\ncity: Here\n---\nBody\n", "reviews");
  assert.deepEqual(review.editableFields, ["title", "tags", "description"]);
  assert.throws(() => parseSourceDocument(source, "songs"), /Unsupported collection/);
});

test("rewrites flow, block, and column-zero tag lists without breaking the next key", () => {
  const cases = [
    "tags: [american]\n",
    "tags:\n  - one\n  - two\n",
    "tags:\n- one\n\n- two\n",
  ];
  for (const tags of cases) {
    const source = `---\ntitle: Place\ndescription: Desc\n${tags}city: Here\n---\nBody\n`;
    const document = parseSourceDocument(source, "reviews");
    const edited = applyDocumentEdits(document, {
      metadata: { ...document.metadata, tags: ["one", "new: tag"] },
      regions: document.regions,
    });
    assert.equal(edited, `---\ntitle: Place\ndescription: Desc\ntags: ["one", "new: tag"]\ncity: Here\n---\nBody\n`);
  }
});
