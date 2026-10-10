import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { MDXEditor } from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import "./editor.css";
import { createEditorSession } from "./session.mjs";
import { createMdxEditorAdapter, RenderedRegionContext } from "./mdx-adapter/editor-adapter.mjs";

const endpoint = "/__editor/api/document";

async function request(initial, method, payload) {
  const response = await fetch(method === "GET" ? `${endpoint}?id=${encodeURIComponent(initial.documentId)}` : endpoint, {
    method,
    headers: {
      "X-Local-Editor-Token": initial.token,
      ...(method === "POST" ? { "Content-Type": "application/json" } : {}),
    },
    body: method === "POST" ? JSON.stringify(payload) : undefined,
    cache: "no-store",
  });
  const body = await response.json();
  if (!response.ok) {
    const error = new Error(body.error?.message ?? "Editor request failed");
    error.status = response.status;
    error.code = body.error?.code;
    error.details = body.error?.details;
    throw error;
  }
  return body;
}

function metadataValue(field, value) {
  return field === "tags" ? (Array.isArray(value) ? value.join(", ") : "") : String(value ?? "");
}

function MetadataField({ field, value, onChange }) {
  return React.createElement("label", { className: "editor-metadata-field" },
    React.createElement("span", null, field),
    React.createElement("span", {
      className: "editor-metadata-value",
      contentEditable: "plaintext-only",
      suppressContentEditableWarning: true,
      role: "textbox",
      "aria-label": field,
      spellCheck: true,
      onInput: (event) => onChange(event.currentTarget.innerText),
    }, metadataValue(field, value)));
}

function EditorDock({ state, metadata, fields, onMetadata, onSave, onCopy, onReload }) {
  const detail = state.status === "conflict"
    ? "The file changed on disk. Copy the browser version before loading the disk version."
    : state.error?.message;
  return React.createElement("aside", { className: "editor-dock", "data-state": state.status, "aria-label": "Writing editor" },
    React.createElement("div", { className: "editor-dock-row" },
      React.createElement("a", { href: state.previewUrl }, "← Page"),
      React.createElement("strong", null, "Visual editor"),
      React.createElement("span", { className: "editor-save-status", role: "status" }, state.status),
      React.createElement("button", { type: "button", onClick: onSave,
        disabled: state.status === "saved" || state.status === "saving" || state.status === "conflict" }, "Save")),
    fields.length > 0 && React.createElement("div", { className: "editor-metadata" },
      fields.map((field) => React.createElement(MetadataField, {
        key: field, field, value: metadata[field], onChange: (value) => onMetadata(field, value),
      }))),
    detail && React.createElement("p", { className: "editor-error", role: "alert" }, detail),
    state.status === "conflict" && React.createElement("div", { className: "editor-conflict-actions" },
      React.createElement("button", { type: "button", onClick: onCopy }, "Copy browser version"),
      React.createElement("button", { type: "button", onClick: onReload }, "Load disk version")));
}

function WritingEditor({ initial, original, titleElement }) {
  const metadataRef = useRef({ ...initial.metadata });
  const editorRef = useRef(null);
  const sessionRef = useRef(null);
  if (!sessionRef.current) {
    sessionRef.current = createEditorSession({
      document: initial,
      storage: localStorage,
      save: (payload) => request(initial, "POST", payload),
    });
  }
  const session = sessionRef.current;
  const restored = session.snapshot();
  const adapterRef = useRef(null);
  if (!adapterRef.current) {
    adapterRef.current = createMdxEditorAdapter({
      document: { ...initial, regions: restored.regions },
      renderedRoot: original,
    });
  }
  const adapter = adapterRef.current;
  const [state, setState] = useState({ ...restored, previewUrl: initial.previewUrl });
  const [metadata, setMetadata] = useState({ ...restored.metadata });
  metadataRef.current = metadata;

  function update(nextMetadata, regions = session.snapshot().regions) {
    session.update({ metadata: nextMetadata, regions });
  }
  function metadataChanged(field, rawValue) {
    const next = { ...metadataRef.current };
    if (field === "tags") next.tags = rawValue.split(",").map((tag) => tag.trim()).filter(Boolean);
    else next[field] = rawValue;
    metadataRef.current = next;
    setMetadata(next);
    update(next);
  }

  useEffect(() => {
    const unsubscribe = session.subscribe((snapshot) => setState({ ...snapshot, previewUrl: initial.previewUrl }));
    const titleChanged = () => metadataChanged("title", titleElement.innerText);
    titleElement.innerText = metadataValue("title", restored.metadata.title);
    titleElement.contentEditable = "plaintext-only";
    titleElement.setAttribute("role", "textbox");
    titleElement.setAttribute("aria-label", "title");
    titleElement.setAttribute("spellcheck", "true");
    titleElement.addEventListener("keydown", preventEnter);
    titleElement.addEventListener("input", titleChanged);
    const keyboardSave = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "s") {
        event.preventDefault();
        void session.saveNow();
      }
    };
    window.addEventListener("keydown", keyboardSave);
    const poll = setInterval(async () => {
      try { session.externalRevision((await request(initial, "GET")).revision); } catch { /* dev restart */ }
    }, 3000);
    return () => {
      unsubscribe();
      clearInterval(poll);
      window.removeEventListener("keydown", keyboardSave);
      titleElement.removeEventListener("keydown", preventEnter);
      titleElement.removeEventListener("input", titleChanged);
    };
  }, []);

  const secondaryFields = initial.editableFields.filter((field) => field !== "title"
    && (field === "tags" || Object.hasOwn(metadata, field)));
  return React.createElement(RenderedRegionContext.Provider, { value: adapter.registry },
    React.createElement(EditorDock, {
      state, metadata, fields: secondaryFields, onMetadata: metadataChanged,
      onSave: () => session.saveNow(),
      onCopy: () => navigator.clipboard.writeText(JSON.stringify({ metadata, regions: state.regions }, null, 2)),
      onReload: () => location.reload(),
    }),
    React.createElement(MDXEditor, {
      ref: editorRef,
      markdown: adapter.markdown,
      plugins: adapter.plugins,
      contentEditableClassName: "editor-body",
      onChange(markdown, initialSet) {
        if (initialSet) return;
        try { update(metadataRef.current, adapter.exportRegions(markdown)); }
        catch (error) { setState((current) => ({ ...current, status: "error", error })); }
      },
    }));
}

function preventEnter(event) {
  if (event.key === "Enter") event.preventDefault();
}

export function mountWritingEditor() {
  const data = document.querySelector("#editor-data");
  const original = document.querySelector("#local-editor-original");
  const titleElement = document.querySelector(".rev-title, main article h1");
  if (!data || !original || !titleElement) return;
  const initial = JSON.parse(data.textContent);
  const staging = document.createElement("div");
  staging.hidden = true;
  staging.id = "local-editor-staging";
  while (original.firstChild) staging.append(original.firstChild);
  document.body.append(staging);
  createRoot(original).render(React.createElement(WritingEditor, { initial, original: staging, titleElement }));
}
