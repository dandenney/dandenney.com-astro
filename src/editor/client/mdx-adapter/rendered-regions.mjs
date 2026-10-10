/**
 * Pairs Astro's start/end markers around protected regions. A region whose markers do not share
 * a parent (raw HTML that opens in one block and closes in another) is left out, and the caller
 * previews it from source instead.
 */
export function createRenderedRegionRegistry(originalRoot) {
  const endings = new Map([...originalRoot.querySelectorAll("[data-editor-end]")]
    .map((element) => [element.dataset.editorEnd, element]));
  const regions = new Map();
  for (const start of originalRoot.querySelectorAll("[data-editor-start]")) {
    const key = start.dataset.editorStart;
    const end = endings.get(key);
    if (!key || !end || start.parentNode !== end.parentNode || regions.has(key)) continue;
    const nodes = [];
    let cursor = start.nextSibling;
    while (cursor && cursor !== end) {
      nodes.push(cursor);
      cursor = cursor.nextSibling;
    }
    if (cursor !== end) continue;
    regions.set(key, { start, end, nodes, mounted: false });
  }
  return {
    has(key) { return regions.has(key); },
    mount(key, target) {
      const region = regions.get(key);
      if (!region) throw new Error(`No Astro-rendered protected region for ${key}`);
      if (!region.mounted) {
        region.start.remove();
        region.end.remove();
        region.mounted = true;
      }
      target.replaceChildren(...region.nodes);
    },
  };
}
