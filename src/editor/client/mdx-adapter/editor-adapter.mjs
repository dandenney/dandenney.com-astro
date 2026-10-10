import React, { createContext, useContext, useLayoutEffect, useRef } from "react";
import {
  headingsPlugin,
  jsxPlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
} from "@mdxeditor/editor";
import { regionsFromVisualMarkdown, visualMarkdownFor } from "../../source/visual-document.mjs";
import { createRenderedRegionRegistry } from "./rendered-regions.mjs";

export const RenderedRegionContext = createContext(null);

function attribute(node, name) {
  return node.attributes?.find((item) => item.type === "mdxJsxAttribute" && item.name === name)?.value;
}

function ProtectedRegion({ mdastNode }) {
  const registry = useContext(RenderedRegionContext);
  const mount = useRef(null);
  const regionId = attribute(mdastNode, "regionId");
  useLayoutEffect(() => {
    if (mount.current && regionId) registry?.mount(regionId, mount.current);
  }, [registry, regionId]);
  return React.createElement("span", {
    ref: mount,
    className: "editor-protected-region",
    contentEditable: false,
    "data-editor-protected-region": regionId,
  }, registry ? null : "Protected content");
}

export function createMdxEditorAdapter({ document, renderedRoot = null }) {
  const sourceKeyById = new Map(document.regions
    .filter((region) => region.protected)
    .map((region) => [region.id, region.renderKey]));
  let visualDocument = document;
  let exportRegions = (markdown) => regionsFromVisualMarkdown(document, markdown);
  let rawRegistry = null;
  if (renderedRoot) {
    try {
      rawRegistry = createRenderedRegionRegistry(renderedRoot);
      if ([...sourceKeyById.values()].some((key) => !key || !rawRegistry.has(key))) {
        throw new Error("Rendered source is missing protected-region markers");
      }
    } catch {
      const fallbackRegion = {
        id: "document-read-only",
        source: "",
        protected: true,
        kind: "unsupported",
        renderKey: null,
      };
      visualDocument = { ...document, regions: [fallbackRegion] };
      rawRegistry = {
        mount(key, target) {
          if (key !== fallbackRegion.id) throw new Error(`No rendered document fallback for ${key}`);
          target.replaceChildren(...renderedRoot.childNodes);
        },
      };
      exportRegions = (markdown) => {
        regionsFromVisualMarkdown(visualDocument, markdown);
        return document.regions.map((region) => ({ ...region }));
      };
      sourceKeyById.clear();
      sourceKeyById.set(fallbackRegion.id, fallbackRegion.id);
    }
  }
  const registry = rawRegistry ? {
    mount(regionId, target) {
      const key = sourceKeyById.get(regionId);
      if (!key) throw new Error(`Unknown protected region ${regionId}`);
      rawRegistry.mount(key, target);
    },
  } : null;
  const protectedDescriptor = {
    name: "EditorProtected",
    kind: "flow",
    props: [{ name: "regionId", type: "string" }],
    hasChildren: false,
    Editor: ProtectedRegion,
  };
  return {
    document,
    registry,
    protectedDescriptor,
    markdown: visualMarkdownFor(visualDocument),
    plugins: [
      headingsPlugin(),
      listsPlugin(),
      quotePlugin(),
      linkPlugin(),
      linkDialogPlugin(),
      jsxPlugin({ jsxComponentDescriptors: [protectedDescriptor] }),
      markdownShortcutPlugin(),
    ],
    exportRegions(markdown) {
      return exportRegions(markdown);
    },
  };
}
