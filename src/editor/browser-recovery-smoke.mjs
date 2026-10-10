import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";
import { chromiumCandidates } from "./browser-support.mjs";

const baseUrl = process.env.EDITOR_SMOKE_BASE_URL ?? "http://127.0.0.1:4321";
const route = "/__editor/posts/front-end-dev/adding-tinacms-to-my-astro-site";
const chrome = chromiumCandidates().find((candidate) => candidate.exists);
if (!chrome) throw new Error("Chromium is required. Set CHROME_PATH to its executable.");

const profile = mkdtempSync(path.join(tmpdir(), "editor-recovery-"));
const browser = spawn(chrome.path, [
  "--headless=new",
  "--no-sandbox",
  "--disable-gpu",
  "--remote-debugging-port=0",
  `--user-data-dir=${profile}`,
  "about:blank",
], { stdio: ["ignore", "ignore", "pipe"] });

function devtoolsUrl() {
  return new Promise((resolve, reject) => {
    let stderr = "";
    const timeout = setTimeout(() => reject(new Error(`Timed out starting Chromium: ${stderr}`)), 10_000);
    browser.stderr.setEncoding("utf8");
    browser.stderr.on("data", (chunk) => {
      stderr += chunk;
      const match = stderr.match(/DevTools listening on (ws:\/\/[^\s]+)/);
      if (match) {
        clearTimeout(timeout);
        resolve(match[1]);
      }
    });
    browser.once("exit", (code) => reject(new Error(`Chromium exited ${code}: ${stderr}`)));
  });
}

function cdp(socket) {
  let id = 0;
  const pending = new Map();
  const events = new Map();
  socket.addEventListener("message", ({ data }) => {
    const message = JSON.parse(data);
    if (message.id) {
      const request = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) request.reject(new Error(message.error.message));
      else request.resolve(message.result);
      return;
    }
    const listeners = events.get(message.method) ?? [];
    events.delete(message.method);
    for (const listener of listeners) listener(message.params);
  });
  return {
    send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const requestId = ++id;
        pending.set(requestId, { resolve, reject });
        socket.send(JSON.stringify({ id: requestId, method, params }));
      });
    },
    once(method) {
      return new Promise((resolve) => events.set(method, [...(events.get(method) ?? []), resolve]));
    },
  };
}

async function evaluate(client, expression) {
  const { result, exceptionDetails } = await client.send("Runtime.evaluate", {
    expression, awaitPromise: true, returnByValue: true,
  });
  if (exceptionDetails) throw new Error(exceptionDetails.text);
  return result.value;
}

async function navigate(client, url) {
  const loaded = client.once("Page.loadEventFired");
  await client.send("Page.navigate", { url });
  await loaded;
}

async function waitFor(client, expression) {
  for (let attempt = 0; attempt < 100; attempt += 1) {
    if (await evaluate(client, expression)) return;
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
  throw new Error(`Timed out waiting for ${expression}`);
}

try {
  const browserSocketUrl = await devtoolsUrl();
  const endpoint = new URL(browserSocketUrl);
  const targets = await (await fetch(`http://${endpoint.host}/json/list`)).json();
  const socket = new WebSocket(targets[0].webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    socket.addEventListener("open", resolve, { once: true });
    socket.addEventListener("error", reject, { once: true });
  });
  const client = cdp(socket);
  await client.send("Page.enable");
  await client.send("Runtime.enable");

  const editorUrl = new URL(route, baseUrl).href;
  await navigate(client, editorUrl);
  await waitFor(client, "document.querySelector('[role=status]') !== null");
  const initial = await evaluate(client, "JSON.parse(document.querySelector('#editor-data').textContent)");
  await navigate(client, baseUrl);
  await evaluate(client, `localStorage.setItem(${JSON.stringify(`local-writing-editor:${initial.documentId}`)}, ${JSON.stringify(JSON.stringify({
    baseRevision: initial.revision,
    metadata: { ...initial.metadata, title: "Recovered browser title" },
    regions: initial.regions,
  }))})`);
  await navigate(client, editorUrl);
  await waitFor(client, "document.querySelector('[role=status]')?.textContent === 'unsaved'");

  assert.equal(await evaluate(client, "document.querySelector('.rev-title, main article h1').innerText.trim()"),
    "Recovered browser title", "recovered metadata title must render in the real layout heading");
  socket.close();
  console.log("Editor browser recovery smoke passed.");
} finally {
  browser.kill("SIGTERM");
  rmSync(profile, { recursive: true, force: true });
}
