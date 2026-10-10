const PLACEHOLDER = /<EditorProtected\s+regionId=["']([^"']+)["']\s*\/>\s*/g;

function placeholder(region) {
  return `<EditorProtected regionId="${region.id}" />\n\n`;
}

/** Markdown imported into MDXEditor, with source-sensitive regions represented by protected nodes. */
export function visualMarkdownFor(document) {
  return document.regions.map((region) => region.protected ? placeholder(region) : region.source).join("");
}

/** Rebuild the server's region payload while restoring every protected source byte-for-byte. */
export function regionsFromVisualMarkdown(document, markdown) {
  if (typeof markdown !== "string") throw new TypeError("Visual markdown must be a string");
  const protectedRegions = document.regions.filter((region) => region.protected);
  const matches = [...markdown.matchAll(PLACEHOLDER)];
  if (matches.length !== protectedRegions.length
    || matches.some((match, index) => match[1] !== protectedRegions[index].id)) {
    throw new Error("Visual editor protected regions were removed, duplicated, or reordered");
  }
  const editableParts = [];
  let cursor = 0;
  for (const match of matches) {
    editableParts.push(markdown.slice(cursor, match.index));
    cursor = match.index + match[0].length;
  }
  editableParts.push(markdown.slice(cursor));
  let editableIndex = 0;
  return document.regions.map((region) => region.protected
    ? { ...region }
    : { ...region, source: editableParts[editableIndex++] ?? "" });
}