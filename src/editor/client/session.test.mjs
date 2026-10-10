import assert from "node:assert/strict";
import test from "node:test";
import { createEditorSession } from "./session.mjs";

function memoryStorage(seed = {}) {
  const values = new Map(Object.entries(seed));
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
    removeItem: (key) => values.delete(key),
    values,
  };
}

const document = {
  documentId: "posts:entry",
  revision: "rev-1",
  metadata: { title: "Original", summary: "Summary", tags: [] },
  regions: [{ id: "body-1", source: "Body\n", protected: false, kind: "markdown" }],
};

test("marks edits unsaved, stores recovery, and autosaves after debounce", async () => {
  let scheduled;
  const storage = memoryStorage();
  const saves = [];
  const session = createEditorSession({
    document,
    storage,
    schedule: (callback, delay) => { scheduled = { callback, delay }; return 1; },
    clearSchedule: () => {},
    save: async (payload) => { saves.push(payload); return { revision: "rev-2" }; },
  });
  session.update({ metadata: { ...document.metadata, title: "Changed" }, regions: document.regions });
  assert.equal(session.snapshot().status, "unsaved");
  assert.equal(scheduled.delay, 700);
  assert.ok(storage.getItem(session.recoveryKey).includes("Changed"));
  await scheduled.callback();
  assert.equal(saves.length, 1);
  assert.equal(session.snapshot().status, "saved");
  assert.equal(session.snapshot().revision, "rev-2");
  assert.equal(storage.getItem(session.recoveryKey), null);
});

test("restores a valid recovery copy for the same revision", () => {
  const key = "local-writing-editor:posts:entry";
  const storage = memoryStorage({
    [key]: JSON.stringify({
      baseRevision: "rev-1",
      metadata: { ...document.metadata, title: "Recovered" },
      regions: document.regions,
    }),
  });
  const session = createEditorSession({ document, storage, save: async () => ({ revision: "unused" }) });
  assert.equal(session.snapshot().metadata.title, "Recovered");
  assert.equal(session.snapshot().status, "unsaved");
});

test("enters conflict state on external revision or stale save and refuses overwrite", async () => {
  const storage = memoryStorage();
  let saves = 0;
  const session = createEditorSession({
    document,
    storage,
    save: async () => { saves += 1; const error = new Error("stale"); error.status = 409; throw error; },
  });
  session.update({ metadata: { ...document.metadata, title: "Changed" }, regions: document.regions });
  await session.saveNow();
  assert.equal(session.snapshot().status, "conflict");
  await session.saveNow();
  assert.equal(saves, 1);

  const other = createEditorSession({ document, storage: memoryStorage(), save: async () => ({ revision: "none" }) });
  other.externalRevision("rev-external");
  assert.equal(other.snapshot().status, "conflict");
});
