import * as defaultFs from "node:fs/promises";
import { createHash, randomUUID } from "node:crypto";
import path from "node:path";
import { EditorError } from "./errors.mjs";

const hash = (value) => createHash("sha256").update(value).digest("hex");

function mapIoError(error) {
  if (error instanceof EditorError || error?.status) return error;
  if (error?.code === "ENOENT") return new EditorError(404, "document_missing", "Document no longer exists");
  return new EditorError(500, "file_io_error", "The document could not be accessed");
}

export function createFileStore({ index, fs = defaultFs, validateCandidate } = {}) {
  if (!index || typeof validateCandidate !== "function") throw new TypeError("File store needs an index and candidate validator");
  const queues = new Map();

  async function readCurrent(record) {
    try {
      const actual = await fs.realpath(record.path);
      if (actual !== index.expectedRealPath(record.documentId)) {
        throw new EditorError(400, "unsafe_document_path", "The indexed document path has changed");
      }
      const stat = await fs.stat(record.path);
      if (!stat.isFile()) throw new EditorError(400, "unsafe_document_path", "The indexed document is not a file");
      const bytes = await fs.readFile(record.path);
      return { source: bytes.toString("utf8"), revision: hash(bytes), stat };
    } catch (error) {
      throw mapIoError(error);
    }
  }

  async function readDocument(documentId) {
    const record = await index.resolve(documentId);
    const current = await readCurrent(record);
    return { documentId, revision: current.revision, source: current.source, previewUrl: record.previewUrl, collection: record.collection };
  }

  async function saveOne({ documentId, baseRevision, requestId, source }) {
    if (typeof documentId !== "string" || typeof baseRevision !== "string" || typeof requestId !== "string" || !requestId.trim() || typeof source !== "string") {
      throw new EditorError(400, "invalid_save_request", "Invalid document save request");
    }
    const record = await index.resolve(documentId);
    const current = await readCurrent(record);
    if (current.source === source) {
      return { documentId, requestId, revision: current.revision, unchanged: true };
    }
    if (current.revision !== baseRevision) {
      throw new EditorError(409, "document_conflict", "The document changed on disk", { source: current.source, revision: current.revision });
    }
    await validateCandidate({ originalSource: current.source, candidateSource: source, record });
    const tempPath = path.join(path.dirname(record.path), `.${path.basename(record.path)}.${randomUUID()}.tmp`);
    let handle;
    try {
      handle = await fs.open(tempPath, "wx", current.stat.mode & 0o777);
      await handle.writeFile(source, "utf8");
      await handle.chmod(current.stat.mode & 0o777);
      await handle.sync();
      await handle.close();
      handle = null;
      const latest = await readCurrent(record);
      if (latest.revision !== current.revision) {
        throw new EditorError(409, "document_conflict", "The document changed on disk", { source: latest.source, revision: latest.revision });
      }
      await fs.rename(tempPath, record.path);
    } catch (error) {
      try { await handle?.close(); } catch { /* original error wins */ }
      try { await fs.unlink(tempPath); } catch { /* temp may not exist */ }
      throw mapIoError(error);
    }
    return { documentId, requestId, revision: hash(Buffer.from(source)), unchanged: false };
  }

  function saveDocument(request) {
    const key = request?.documentId;
    const previous = queues.get(key) ?? Promise.resolve();
    const result = previous.catch(() => {}).then(() => saveOne(request));
    queues.set(key, result);
    const clear = () => { if (queues.get(key) === result) queues.delete(key); };
    result.then(clear, clear);
    return result;
  }

  return { index, readDocument, saveDocument };
}
