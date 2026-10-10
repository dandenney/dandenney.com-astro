import assert from "node:assert/strict";
import test from "node:test";
import { assertEditorRequest, readEditorJson } from "./request-guards.mjs";

const origin = "http://127.0.0.1:4321";
const origins = [origin, "http://localhost:4321"];
const token = "secret-capability";
function request(method = "GET", options = {}) {
  return new Request(`${origin}/__editor/api/document`, {
    method,
    headers: {
      "X-Local-Editor-Token": token,
      ...(method === "POST" ? { Origin: origin, "Content-Type": "application/json" } : {}),
      ...options.headers,
    },
    body: method === "POST" ? (options.body ?? "{}") : undefined,
  });
}

test("accepts exact loopback origin and capability token", async () => {
  await assert.doesNotReject(() => assertEditorRequest(request(), { origins, token, methods: ["POST"] }));
  await assert.doesNotReject(() => assertEditorRequest(request("POST"), { origins, token, methods: ["POST"] }));
});

test("accepts the localhost alias for the same loopback port", async () => {
  const url = "http://localhost:4321/__editor/api/document";
  await assert.doesNotReject(() => assertEditorRequest(new Request(url, { headers: { "X-Local-Editor-Token": token } }), { origins, token }));
  await assert.rejects(
    () => assertEditorRequest(new Request(url, {
      method: "POST",
      headers: { "X-Local-Editor-Token": token, Origin: origin, "Content-Type": "application/json" },
      body: "{}",
    }), { origins, token, methods: ["POST"] }),
    { code: "forbidden_write_origin" },
  );
  await assert.rejects(
    () => assertEditorRequest(new Request("http://evil.test:4321/__editor/api/document", { headers: { "X-Local-Editor-Token": token } }), { origins: [...origins, "http://evil.test:4321"], token }),
    { code: "forbidden_origin" },
  );
});

test("rejects cross-origin, wrong-token, and non-JSON writes", async () => {
  await assert.rejects(
    () => assertEditorRequest(new Request("http://localhost:4322/__editor/api/document", { headers: { "X-Local-Editor-Token": token } }), { origins, token }),
    { code: "forbidden_origin" },
  );
  await assert.rejects(
    () => assertEditorRequest(request("GET", { headers: { "X-Local-Editor-Token": "wrong" } }), { origins, token }),
    { code: "invalid_editor_token" },
  );
  await assert.rejects(
    () => assertEditorRequest(request("POST", { headers: { Origin: "http://evil.test" } }), { origins, token, methods: ["POST"] }),
    { code: "forbidden_write_origin" },
  );
  await assert.rejects(
    () => assertEditorRequest(request("POST", { headers: { "Content-Type": "text/plain" } }), { origins, token, methods: ["POST"] }),
    { code: "unsupported_content_type" },
  );
});

test("parses bounded JSON and rejects oversized or invalid bodies", async () => {
  assert.deepEqual(await readEditorJson(request("POST", { body: '{"ok":true}' }), { limit: 64 }), { ok: true });
  await assert.rejects(() => readEditorJson(request("POST", { body: "x".repeat(65) }), { limit: 64 }), { code: "request_too_large" });
  await assert.rejects(() => readEditorJson(request("POST", { body: "{" }), { limit: 64 }), { code: "invalid_json" });
});
