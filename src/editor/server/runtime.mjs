import { createDocumentIndex } from "./document-index.mjs";
import { createFileStore } from "./file-store.mjs";
import { applyDocumentEdits, parseSourceDocument } from "../source/document.mjs";
import { EditorError } from "./errors.mjs";

let runtime;

export async function createEditorRuntime(projectRoot = process.cwd()) {
  const index = createDocumentIndex({ projectRoot });
  await index.refresh();
  const store = createFileStore({
    index,
    validateCandidate: async ({ candidateSource, record }) => {
      parseSourceDocument(candidateSource, record.collection);
    },
  });
  return {
    index,
    store,
    async read(documentId) {
      const current = await store.readDocument(documentId);
      const parsed = parseSourceDocument(current.source, current.collection);
      return {
        documentId,
        revision: current.revision,
        previewUrl: current.previewUrl,
        collection: current.collection,
        metadata: parsed.metadata,
        editableFields: parsed.editableFields,
        regions: parsed.regions,
      };
    },
    async save(request) {
      const current = await store.readDocument(request?.documentId);
      if (current.revision !== request?.baseRevision) {
        throw new EditorError(409, "document_conflict", "The document changed on disk", {
          revision: current.revision,
          source: current.source,
        });
      }
      const parsed = parseSourceDocument(current.source, current.collection);
      const source = applyDocumentEdits(parsed, { metadata: request.metadata, regions: request.regions });
      return store.saveDocument({ ...request, source });
    },
  };
}

export async function getEditorRuntime() {
  runtime ??= createEditorRuntime();
  return runtime;
}
