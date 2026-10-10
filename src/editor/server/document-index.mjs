import * as defaultFs from "node:fs/promises";
import path from "node:path";
import { EditorError } from "./errors.mjs";

const COLLECTIONS = new Set(["posts", "blips", "reviews"]);

function validDocumentId(documentId) {
  if (typeof documentId !== "string") return false;
  const separator = documentId.indexOf(":");
  if (separator < 1 || !COLLECTIONS.has(documentId.slice(0, separator))) return false;
  const id = documentId.slice(separator + 1);
  return id.length > 0 && !id.includes("\\") && !/[\0-\x1f\x7f]/.test(id)
    && id.split("/").every((segment) => segment && segment !== "." && segment !== "..");
}

function astroEntryId(id) {
  return id.toLowerCase().replaceAll(" ", "-");
}

function previewUrl(collection, id) {
  if (collection === "posts") return `/posts/${id}`;
  if (collection === "blips") return `/blips/${id}`;
  return `/no-reserv-ai-tions/${id}`;
}

async function scan(fs, directory, collection, collectionRoot, records, trustedPaths) {
  let entries;
  try {
    entries = await fs.readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error.code === "ENOENT") return;
    throw error;
  }
  for (const entry of entries) {
    if (entry.isSymbolicLink()) continue;
    const candidate = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await scan(fs, candidate, collection, collectionRoot, records, trustedPaths);
      continue;
    }
    const extension = path.extname(entry.name);
    if (!entry.isFile() || (extension !== ".md" && extension !== ".mdx")) continue;
    const actual = await fs.realpath(candidate);
    if (actual !== candidate) continue;
    const relative = path.relative(collectionRoot, candidate).split(path.sep).join("/");
    const id = relative.slice(0, -extension.length);
    const documentId = `${collection}:${id}`;
    if (!validDocumentId(documentId) || records.has(documentId)) continue;
    const entryId = astroEntryId(id);
    const record = { documentId, collection, id, entryId, extension, path: candidate,
      previewUrl: previewUrl(collection, entryId) };
    records.set(documentId, record);
    trustedPaths.set(documentId, actual);
    const entryDocumentId = `${collection}:${entryId}`;
    if (!records.has(entryDocumentId)) {
      records.set(entryDocumentId, record);
      trustedPaths.set(entryDocumentId, actual);
    }
  }
}

export function createDocumentIndex({ projectRoot, fs = defaultFs } = {}) {
  if (!projectRoot) throw new TypeError("Document index needs a project root");
  let rootReal;
  let records = new Map();
  let trustedPaths = new Map();
  return {
    get projectRoot() { return rootReal ?? path.resolve(projectRoot); },
    async refresh() {
      rootReal = await fs.realpath(projectRoot);
      const next = new Map();
      const nextTrusted = new Map();
      for (const collection of COLLECTIONS) {
        const root = path.join(rootReal, "src", "content", collection);
        await scan(fs, root, collection, root, next, nextTrusted);
      }
      records = next;
      trustedPaths = nextTrusted;
      return this.list();
    },
    async resolve(documentId) {
      if (!validDocumentId(documentId)) {
        throw new EditorError(400, "invalid_document_id", "Invalid document identity");
      }
      const record = records.get(documentId);
      if (!record) throw new EditorError(404, "document_missing", "Document is not indexed");
      return { ...record };
    },
    list() { return [...new Map([...records.values()].map((record) => [record.documentId, record])).values()]
      .map((record) => ({ ...record })); },
    expectedRealPath(documentId) { return trustedPaths.get(documentId); },
  };
}
