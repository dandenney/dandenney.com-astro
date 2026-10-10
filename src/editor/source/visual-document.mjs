import { topLevelNodes } from "./markdown-blocks.mjs";

const PLACEHOLDER = /<EditorProtected\s+regionId=["']([^"']+)["']\s*\/>\s*/g;

function placeholder(region) {
  return `<EditorProtected regionId="${region.id}" />\n\n`;
}

/** Markdown imported into MDXEditor, with source-sensitive regions represented by protected nodes. */
export function visualMarkdownFor(document) {
  return document.regions.map((region) => region.protected ? placeholder(region) : region.source).join("");
}

function editableParts(document, markdown) {
  if (typeof markdown !== "string") throw new TypeError("Visual markdown must be a string");
  const protectedRegions = document.regions.filter((region) => region.protected);
  const matches = [...markdown.matchAll(PLACEHOLDER)];
  if (matches.length !== protectedRegions.length
    || matches.some((match, index) => match[1] !== protectedRegions[index].id)) {
    throw new Error("Visual editor protected regions were removed, duplicated, or reordered");
  }
  const parts = [];
  let cursor = 0;
  for (const match of matches) {
    parts.push(markdown.slice(cursor, match.index));
    cursor = match.index + match[0].length;
  }
  parts.push(markdown.slice(cursor));
  if (parts.length !== document.regions.filter((region) => !region.protected).length) {
    // Assigning parts in order would shift text into the wrong regions.
    throw new Error("Visual editor text does not line up with the document's editable regions");
  }
  return parts;
}

/** Keep the original region's surrounding whitespace so an edit only touches its own text. */
function withOriginalWhitespace(original, edited) {
  const text = edited.trim();
  if (!text) return "";
  if (!original.trim()) return `${text}\n\n`;
  const leading = original.slice(0, original.length - original.trimStart().length);
  const trailing = original.slice(original.trimEnd().length);
  return `${leading}${text}${trailing}`;
}

function blocks(markdown) {
  return topLevelNodes(markdown).map((node) => ({ start: node.position.start.offset, end: node.position.end.offset }));
}

/**
 * Apply an edited region block by block: blocks whose editor export did not change keep their
 * original source, so editing one paragraph doesn't let the editor reformat its neighbours.
 * Falls back to the whole region when blocks were added, removed, or can't be matched.
 */
function editedRegionSource(original, baselinePart, part) {
  if (baselinePart === null) return withOriginalWhitespace(original, part);
  const originalBlocks = blocks(original);
  const baselineBlocks = blocks(baselinePart);
  const editedBlocks = blocks(part);
  if (originalBlocks.length !== baselineBlocks.length || editedBlocks.length !== baselineBlocks.length) {
    return withOriginalWhitespace(original, part);
  }
  let result = original;
  for (let index = originalBlocks.length - 1; index >= 0; index -= 1) {
    const baselineText = baselinePart.slice(baselineBlocks[index].start, baselineBlocks[index].end);
    const editedText = part.slice(editedBlocks[index].start, editedBlocks[index].end);
    if (editedText === baselineText) continue;
    const { start, end } = originalBlocks[index];
    result = result.slice(0, start) + editedText + result.slice(end);
  }
  return result;
}

/**
 * Rebuild the server's region payload while restoring every protected source byte-for-byte.
 * `baselineMarkdown` is the editor's own export of the unedited document: an editable region whose
 * export still matches it keeps its original source, so the editor's Markdown normalization never
 * rewrites text nobody touched.
 */
export function regionsFromVisualMarkdown(document, markdown, baselineMarkdown = null) {
  const parts = editableParts(document, markdown);
  let baseline = null;
  if (typeof baselineMarkdown === "string") {
    try { baseline = editableParts(document, baselineMarkdown); } catch { baseline = null; }
  }
  let editableIndex = 0;
  return document.regions.map((region) => {
    if (region.protected) return { ...region };
    const index = editableIndex++;
    const part = parts[index];
    const unchanged = baseline ? part === baseline[index] : part.trim() === region.source.trim();
    if (unchanged) return { ...region };
    return { ...region, source: editedRegionSource(region.source, baseline?.[index] ?? null, part) };
  });
}
