import { randomBytes } from "node:crypto";
import { remarkEditorSourceMarkers } from "./rendering/remark-source-markers.mjs";

export function localWritingEditor() {
  return {
    name: "local-writing-editor",
    hooks: {
      "astro:config:setup"({ command, injectRoute, updateConfig }) {
        if (command !== "dev") return;
        updateConfig?.({ markdown: { remarkPlugins: [remarkEditorSourceMarkers] } });
        injectRoute({
          pattern: "/__editor/[collection]/[...id]",
          entrypoint: new URL("./routes/editor.astro", import.meta.url),
          prerender: false,
        });
        injectRoute({
          pattern: "/__editor/api/document",
          entrypoint: new URL("./routes/document.js", import.meta.url),
          prerender: false,
        });
      },
      "astro:server:start"({ address }) {
        delete process.env.LOCAL_WRITING_EDITOR_ORIGINS;
        delete process.env.LOCAL_WRITING_EDITOR_TOKEN;
        const host = address.address === "::1" ? "[::1]" : address.address === "127.0.0.1" ? "127.0.0.1" : null;
        if (!host) return;
        // `astro dev` defaults to `localhost`, so accept that alias for the same loopback port.
        process.env.LOCAL_WRITING_EDITOR_ORIGINS = [`http://${host}:${address.port}`, `http://localhost:${address.port}`].join(" ");
        process.env.LOCAL_WRITING_EDITOR_TOKEN = randomBytes(32).toString("base64url");
      },
      "astro:server:done"() {
        delete process.env.LOCAL_WRITING_EDITOR_ORIGINS;
        delete process.env.LOCAL_WRITING_EDITOR_TOKEN;
      },
    },
  };
}
