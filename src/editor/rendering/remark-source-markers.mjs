import { protectedKind } from "../source/document.mjs";

function marker(key, edge) {
  return { type: "html", value: `<span hidden data-editor-${edge}="${key}"></span>` };
}

/** Dev-only source markers bracket Astro's rendering of protected Markdown regions. */
export function remarkEditorSourceMarkers() {
  if (process.env.NODE_ENV === "production") return () => {};
  return (tree, file) => {
    const source = String(file.value ?? file);
    const children = [];
    for (const child of tree.children ?? []) {
      const start = child.position?.start?.offset;
      const end = child.position?.end?.offset;
      if (Number.isInteger(start) && Number.isInteger(end)
        && protectedKind(source.slice(start, end))) {
        const key = `${start}:${end}`;
        children.push(marker(key, "start"), child, marker(key, "end"));
      } else children.push(child);
    }
    tree.children = children;
  };
}