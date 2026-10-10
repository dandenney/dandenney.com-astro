import assert from "node:assert/strict";
import test from "node:test";
import { editorUrl } from "./edit-link.mjs";

test("builds editor URLs only for supported document identities", () => {
  assert.equal(editorUrl("posts", "front-end/a-post.md"), "/__editor/posts/front-end/a-post");
  assert.equal(editorUrl("blips", "short.mdx"), "/__editor/blips/short");
  assert.equal(editorUrl("blips", "short"), "/__editor/blips/short");
  assert.equal(editorUrl("reviews", "place.md"), "/__editor/reviews/place");
  assert.equal(
    editorUrl("posts", "front-end-dev/Adding-TinaCMS-To-My-Astro-Site"),
    "/__editor/posts/front-end-dev/Adding-TinaCMS-To-My-Astro-Site",
  );
  assert.equal(
    editorUrl("blips", "notes-on-building ai-products-in-the-probabilistic-era"),
    "/__editor/blips/notes-on-building%20ai-products-in-the-probabilistic-era",
  );
  assert.equal(editorUrl("reviews", "Grand-Central-Brewing"), "/__editor/reviews/Grand-Central-Brewing");
  assert.throws(() => editorUrl("songs", "track.md"), /Unsupported editor collection/);
  assert.throws(() => editorUrl("posts", "../secret.md"), /Invalid editor entry id/);
});
