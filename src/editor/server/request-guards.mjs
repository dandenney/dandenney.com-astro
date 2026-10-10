import { EditorError } from "./errors.mjs";

function reject(status, code, message) {
  throw new EditorError(status, code, message);
}

function isLoopback(hostname) {
  return hostname === "127.0.0.1" || hostname === "[::1]" || hostname === "localhost";
}

export function parseEditorOrigins(value) {
  return String(value ?? "").split(/\s+/).filter(Boolean);
}

/** True when the URL's origin is one of the configured loopback editor origins. */
export function isEditorOrigin(url, origins) {
  let actual;
  try {
    actual = new URL(url).origin;
  } catch {
    return false;
  }
  return origins.some((origin) => {
    try {
      const expected = new URL(origin);
      return isLoopback(expected.hostname) && expected.origin === actual;
    } catch {
      return false;
    }
  });
}

export async function assertEditorRequest(request, { origins, token, methods = [] }) {
  if (!isEditorOrigin(request.url, origins ?? [])) {
    reject(403, "forbidden_origin", "This request is outside the local editor origin");
  }
  const expected = new URL(request.url);
  if (!token || request.headers.get("X-Local-Editor-Token") !== token) {
    reject(403, "invalid_editor_token", "The local editor session has expired");
  }
  if (request.method !== "GET" && !methods.includes(request.method)) {
    reject(405, "method_not_allowed", "This editor method is not allowed");
  }
  if (request.method !== "GET") {
    if (request.headers.get("Origin") !== expected.origin) {
      reject(403, "forbidden_write_origin", "A local editor write needs the same origin");
    }
    if (!/^application\/json(?:\s*;\s*charset=utf-8)?$/i.test(request.headers.get("Content-Type") ?? "")) {
      reject(415, "unsupported_content_type", "Editor writes require JSON");
    }
  }
}

export async function readEditorJson(request, { limit = 2 * 1024 * 1024 } = {}) {
  if (!Number.isSafeInteger(limit) || limit < 1) throw new TypeError("JSON body limit must be positive");
  const declared = Number(request.headers.get("Content-Length"));
  if (Number.isFinite(declared) && declared > limit) reject(413, "request_too_large", "Editor request is too large");
  const reader = request.body?.getReader();
  if (!reader) reject(400, "invalid_json", "Editor request needs a JSON body");
  const decoder = new TextDecoder("utf-8", { fatal: true });
  let bytes = 0;
  let text = "";
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > limit) {
        try { await reader.cancel(); } catch { /* size error wins */ }
        reject(413, "request_too_large", "Editor request is too large");
      }
      text += decoder.decode(value, { stream: true });
    }
    text += decoder.decode();
    return JSON.parse(text);
  } catch (error) {
    if (error instanceof EditorError) throw error;
    reject(400, "invalid_json", "Editor request contains invalid JSON");
  } finally {
    reader.releaseLock();
  }
}
