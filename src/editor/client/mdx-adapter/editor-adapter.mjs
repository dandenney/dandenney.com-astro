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

/** Preview for a protected region Astro's rendering could not isolate: raw HTML parsed alone, else its source. */
function mountSourcePreview(region, target) {
  if (region.kind === "html") {
    const template = target.ownerDocument.createElement("template");
    template.innerHTML = region.source;
    target.replaceChildren(template.content);
    return;
  }
  const pre = target.ownerDocument.createElement("pre");
  pre.className = "editor-protected-source";
  pre.textContent = region.source.trim();
  target.replaceChildren(pre);
}

export function createMdxEditorAdapter({ document, renderedRoot = null }) {
  const regionsById = new Map(document.regions
    .filter((region) => region.protected)
    .map((region) => [region.id, region]));
  const rendered = renderedRoot ? createRenderedRegionRegistry(renderedRoot) : null;
  const registry = rendered ? {
    mount(regionId, target) {
      const region = regionsById.get(regionId);
      if (!region) throw new Error(`Unknown protected region ${regionId}`);
      if (region.renderKey && rendered.has(region.renderKey)) rendered.mount(region.renderKey, target);
      else mountSourcePreview(region, target);
    },
  } : null;
  let baselineMarkdown = null;
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
    markdown: visualMarkdownFor(document),
    plugins: [
      headingsPlugin(),
      listsPlugin(),
      quotePlugin(),
      linkPlugin(),
      linkDialogPlugin(),
      jsxPlugin({ jsxComponentDescriptors: [protectedDescriptor] }),
      markdownShortcutPlugin(),
    ],
    /** Record the editor's export of the unedited document, so untouched regions keep their source. */
    setBaseline(markdown) {
      baselineMarkdown = markdown;
    },
    hasBaseline() {
      return typeof baselineMarkdown === "string";
    },
    exportRegions(markdown) {
      return regionsFromVisualMarkdown(document, markdown, baselineMarkdown);
    },
  };
}
