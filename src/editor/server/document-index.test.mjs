import assert from "node:assert/strict";
import { mkdtemp, mkdir, rm, symlink, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { createDocumentIndex } from "./document-index.mjs";
import { localWritingEditor } from "../integration.mjs";

async function fixture() {
  const root = await mkdtemp(path.join(os.tmpdir(), "local-editor-index-"));
  for (const collection of ["posts", "blips", "reviews"]) {
    await mkdir(path.join(root, "src/content", collection), { recursive: true });
  }
  await mkdir(path.join(root, "src/content/posts", "nested"));
  await writeFile(path.join(root, "src/content/posts", "nested", "hello.md"), "---\ntitle: Hello\n---\nBody\n");
  await writeFile(path.join(root, "src/content/posts", "nested", "Adding-TinaCMS.md"), "---\ntitle: Tina\n---\nBody\n");
  await writeFile(path.join(root, "src/content/blips", "short.mdx"), "---\ntitle: Short\n---\nBody\n");
  await writeFile(path.join(root, "src/content/blips", "notes on AI.md"), "---\ntitle: AI\n---\nBody\n");
  await writeFile(path.join(root, "src/content/reviews", "place.md"), "---\ntitle: Place\n---\nBody\n");
  await writeFile(path.join(root, "src/content/reviews", "Grand-Central.md"), "---\ntitle: Grand\n---\nBody\n");
  return root;
}

test("indexes only supported existing Markdown identities", async (t) => {
  const root = await fixture();
  t.after(() => rm(root, { recursive: true, force: true }));
  const index = createDocumentIndex({ projectRoot: root });
  await index.refresh();

  assert.equal((await index.resolve("posts:nested/hello")).collection, "posts");
  assert.equal((await index.resolve("posts:nested/Adding-TinaCMS")).id, "nested/Adding-TinaCMS");
  assert.equal((await index.resolve("posts:nested/adding-tinacms")).id, "nested/Adding-TinaCMS");
  assert.equal((await index.resolve("blips:short")).extension, ".mdx");
  assert.equal((await index.resolve("blips:notes on AI")).id, "notes on AI");
  assert.equal((await index.resolve("blips:notes-on-ai")).id, "notes on AI");
  assert.equal((await index.resolve("reviews:Grand-Central")).id, "Grand-Central");
  assert.equal((await index.resolve("reviews:place")).previewUrl, "/no-reserv-ai-tions/place");
  await assert.rejects(() => index.resolve("posts:../secret"), { code: "invalid_document_id" });
  await assert.rejects(() => index.resolve("songs:track"), { code: "invalid_document_id" });
  await assert.rejects(() => index.resolve("posts:missing"), { code: "document_missing" });
});

test("skips symlinks even when they point inside a supported collection", async (t) => {
  const root = await fixture();
  t.after(() => rm(root, { recursive: true, force: true }));
  await symlink(
    path.join(root, "src/content/posts/nested/hello.md"),
    path.join(root, "src/content/posts/linked.md"),
  );
  const index = createDocumentIndex({ projectRoot: root });
  await index.refresh();
  await assert.rejects(() => index.resolve("posts:linked"), { code: "document_missing" });
});

test("injects editor routes only for the Astro dev command", () => {
  const integration = localWritingEditor();
  const devRoutes = [];
  integration.hooks["astro:config:setup"]({ command: "dev", injectRoute: (route) => devRoutes.push(route) });
  assert.deepEqual(devRoutes.map((route) => route.pattern), [
    "/__editor/[collection]/[...id]",
    "/__editor/api/document",
  ]);

  const buildRoutes = [];
  integration.hooks["astro:config:setup"]({ command: "build", injectRoute: (route) => buildRoutes.push(route) });
  assert.deepEqual(buildRoutes, []);
});
