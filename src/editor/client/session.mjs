function validRecovery(recovery, document) {
  if (!recovery || recovery.baseRevision !== document.revision || !recovery.metadata || !Array.isArray(recovery.regions)) return false;
  if (recovery.regions.length !== document.regions.length) return false;
  return document.regions.every((region, index) => {
    const recovered = recovery.regions[index];
    return recovered?.id === region.id && typeof recovered.source === "string" && (!region.protected || recovered.source === region.source);
  });
}

export function createEditorSession({
  document,
  save,
  storage,
  debounce = 700,
  schedule = setTimeout,
  clearSchedule = clearTimeout,
}) {
  if (!document?.documentId || typeof save !== "function") throw new TypeError("Editor session needs a document and save function");
  const recoveryKey = `local-writing-editor:${document.documentId}`;
  const listeners = new Set();
  let timer;
  let generation = 0;
  let inFlight = false;
  let saveStarts = 0;
  let state = {
    status: "saved",
    revision: document.revision,
    metadata: document.metadata,
    regions: document.regions,
    error: null,
  };
  try {
    const recovery = JSON.parse(storage?.getItem(recoveryKey) ?? "null");
    if (validRecovery(recovery, document)) {
      state = { ...state, status: "unsaved", metadata: recovery.metadata, regions: recovery.regions };
    }
  } catch {
    storage?.removeItem(recoveryKey);
  }

  function emit() {
    const value = api.snapshot();
    for (const listener of listeners) listener(value);
  }

  function storeRecovery() {
    storage?.setItem(recoveryKey, JSON.stringify({
      baseRevision: state.revision,
      metadata: state.metadata,
      regions: state.regions,
    }));
  }

  async function saveNow() {
    if (state.status === "conflict" || state.status === "saved") return;
    if (timer) clearSchedule(timer);
    timer = undefined;
    // One save at a time: edits made meanwhile are picked up when this save settles.
    if (inFlight) return;
    inFlight = true;
    saveStarts += 1;
    const savingGeneration = generation;
    state = { ...state, status: "saving", error: null };
    emit();
    try {
      const result = await save({
        documentId: document.documentId,
        baseRevision: state.revision,
        requestId: globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`,
        metadata: state.metadata,
        regions: state.regions,
      });
      if (generation === savingGeneration) {
        state = { ...state, status: "saved", revision: result.revision, error: null };
        storage?.removeItem(recoveryKey);
      } else {
        state = { ...state, status: "unsaved", revision: result.revision };
        storeRecovery();
        timer = schedule(saveNow, debounce);
      }
    } catch (error) {
      state = { ...state, status: error?.status === 409 ? "conflict" : "error", error };
      storeRecovery();
    } finally {
      inFlight = false;
    }
    emit();
  }

  const api = {
    recoveryKey,
    snapshot: () => ({ ...state, metadata: { ...state.metadata }, regions: state.regions.map((region) => ({ ...region })) }),
    subscribe(listener) { listeners.add(listener); listener(api.snapshot()); return () => listeners.delete(listener); },
    update({ metadata, regions }) {
      if (state.status === "conflict") return;
      generation += 1;
      state = { ...state, status: "unsaved", metadata, regions, error: null };
      storeRecovery();
      if (timer) clearSchedule(timer);
      timer = schedule(saveNow, debounce);
      emit();
    },
    saveNow,
    /**
     * Start a disk revision poll. The returned callback reports the polled revision, and is
     * ignored when a save overlapped the poll, since the poll may have read either side of it.
     */
    beginRevisionCheck() {
      const startedDuringSave = inFlight;
      const startedAt = saveStarts;
      return (revision) => {
        if (startedDuringSave || inFlight || saveStarts !== startedAt) return;
        api.externalRevision(revision);
      };
    },
    externalRevision(revision) {
      if (revision && revision !== state.revision) {
        if (timer) clearSchedule(timer);
        timer = undefined;
        state = { ...state, status: "conflict", error: new Error("The document changed on disk") };
        storeRecovery();
        emit();
      }
    },
  };
  return api;
}
