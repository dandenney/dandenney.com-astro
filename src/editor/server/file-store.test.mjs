import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, readdir, rm, symlink, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { createDocumentIndex } from "./document-index.mjs";
import { createFileStore } from "./file-store.mjs";

async function setup(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), "local-editor-store-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  const directory = path.join(root, "src/content/posts");
  await mkdir(directory, { recursive: true });
  const file = path.join(directory, "entry.md");
  await writeFile(file, "---\ntitle: Original\nsummary: Summary\ntags: []\n---\nBody\n", { mode: 0o640 });
  const index = createDocumentIndex({ projectRoot: root });
  await index.refresh();
  const store = createFileStore({ index, validateCandidate: async () => {} });
  return { root, directory, file, index, store };
}

test("returns unchanged without replacing an identical source", async (t) => {
  const { store } = await setup(t);
  const current = await store.readDocument("posts:entry");
  const result = await store.saveDocument({
    documentId: "posts:entry", baseRevision: current.revision, requestId: "same", source: current.source,
  });
  assert.equal(result.unchanged, true);
  assert.equal(result.revision, current.revision);
});

test("refuses a stale revision and returns the latest disk source", async (t) => {
  const { file, store } = await setup(t);
  const current = await store.readDocument("posts:entry");
  const diskSource = current.source.replace("Body", "External edit");
  await writeFile(file, diskSource);
  await assert.rejects(
    () => store.saveDocument({
      documentId: "posts:entry", baseRevision: current.revision, requestId: "stale", source: current.source.replace("Body", "Browser edit"),
    }),
    (error) => error.status === 409 && error.code === "document_conflict" && error.details.source === diskSource,
  );
});

test("atomically replaces in the same directory and cleans temp files after failure", async (t) => {
  const { directory, file, store } = await setup(t);
  const current = await store.readDocument("posts:entry");
  const changed = current.source.replace("Body", "Saved");
  const result = await store.saveDocument({
    documentId: "posts:entry", baseRevision: current.revision, requestId: "save", source: changed,
  });
  assert.equal(result.unchanged, false);
  assert.equal(await readFile(file, "utf8"), changed);
  assert.deepEqual((await readdir(directory)).filter((name) => name.endsWith(".tmp")), []);

  const latest = await store.readDocument("posts:entry");
  const rejecting = createFileStore({ index: store.index, validateCandidate: async () => { throw new Error("invalid candidate"); } });
  await assert.rejects(
    () => rejecting.saveDocument({ documentId: "posts:entry", baseRevision: latest.revision, requestId: "bad", source: `${latest.source}bad` }),
    /invalid candidate/,
  );
  assert.deepEqual((await readdir(directory)).filter((name) => name.endsWith(".tmp")), []);
});

test("rejects a file replaced by a symlink after indexing", async (t) => {
  const { root, file, store } = await setup(t);
  const outside = path.join(root, "outside.md");
  await writeFile(outside, "outside");
  await rm(file);
  await symlink(outside, file);
  await assert.rejects(() => store.readDocument("posts:entry"), { code: "unsafe_document_path" });
});
