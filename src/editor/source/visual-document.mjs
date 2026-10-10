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
    return { ...region, source: unchanged ? region.source : withOriginalWhitespace(region.source, part) };
  });
}
