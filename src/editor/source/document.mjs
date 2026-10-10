import { load as loadYaml } from "js-yaml";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";

const EDITABLE_FIELDS = Object.freeze({
  posts: ["title", "tags", "summary"],
  blips: ["title", "tags", "summary"],
  reviews: ["title", "tags", "description"],
});

function frontmatterRegion(source) {
  const opening = source.match(/^---(?:\r?\n)/);
  if (!opening) throw new Error("Document needs YAML frontmatter");
  const newline = opening[0].includes("\r\n") ? "\r\n" : "\n";
  const innerStart = opening[0].length;
  const closingExpression = new RegExp(`^---(?:${newline === "\r\n" ? "\\r\\n" : "\\n"}|$)`, "m");
  const remainder = source.slice(innerStart);
  const closing = closingExpression.exec(remainder);
  if (!closing) throw new Error("Document needs a closing frontmatter fence");
  const closingStart = innerStart + closing.index;
  return {
    innerStart,
    closingStart,
    bodyStart: closingStart + closing[0].length,
    text: source.slice(innerStart, closingStart),
    newline,
  };
}

export function protectedKind(block) {
  const trimmed = block.trim();
  if (/^(```|~~~)/.test(trimmed)) return "fenced-code";
  const lines = trimmed.split(/\r?\n/);
  if (lines.length > 1 && /^\s*\|?.+\|.+\|?\s*$/.test(lines[0]) && /^\s*\|?\s*:?-{1,}:?/.test(lines[1])) return "table";
  if (/!\[[^\]]*\]\([^\n]+\)/.test(trimmed) || /<img\b/i.test(trimmed)) return "image";
  if (/<\/?[A-Za-z][^>]*>/.test(trimmed) || /^(?:<[/!?A-Za-z]|import\s|export\s|\{[#:@]|:::+|\$\$)/.test(trimmed)) return "unsupported";
  if (/^\[[^\]]+\]:\s*\S+/.test(trimmed) || /\{[^\n]*\}/.test(trimmed)) return "unsupported";
  return null;
}

// Node types the visual editor can round-trip; anything else in a block makes it read-only.
const EDITABLE_NODE_TYPES = new Set([
  "paragraph", "heading", "list", "listItem", "blockquote",
  "text", "emphasis", "strong", "link", "inlineCode", "break",
]);

function editableTree(node) {
  return EDITABLE_NODE_TYPES.has(node.type) && (node.children ?? []).every(editableTree);
}

/**
 * Whether a top-level Markdown node must stay read-only, and why. Shared by the source
 * splitter and the dev remark plugin so both bracket exactly the same blocks.
 */
export function protectedNodeKind(node, source) {
  const start = node.position?.start?.offset;
  const end = node.position?.end?.offset;
  if (!Number.isInteger(start) || !Number.isInteger(end)) return null;
  if (node.type === "code") return "fenced-code";
  if (node.type === "table") return "table";
  if (node.type === "html") return /^<img\b/i.test(source.slice(start, end).trim()) ? "image" : "html";
  return protectedKind(source.slice(start, end)) ?? (editableTree(node) ? null : "unsupported");
}

// Same parser and GFM extension Astro uses, so node offsets match the rendered markers.
const markdownParser = unified().use(remarkParse).use(remarkGfm);

function bodyRegions(body) {
  const renderOffset = body.match(/^(?:\r?\n)*/)?.[0].length ?? 0;
  const text = body.slice(renderOffset);
  const nodes = markdownParser.parse(text).children;
  if (!nodes.length) return body ? [{ id: "body-1", source: body, start: 0, end: body.length, kind: "markdown", protected: false, renderKey: null }] : [];
  const grouped = [];
  nodes.forEach((node, index) => {
    // Each region runs to the next node's start, so regions tile the body exactly.
    const start = index === 0 ? 0 : renderOffset + node.position.start.offset;
    const end = index === nodes.length - 1 ? body.length : renderOffset + nodes[index + 1].position.start.offset;
    const kind = protectedNodeKind(node, text);
    const previous = grouped.at(-1);
    if (!kind && previous && !previous.protected) {
      previous.source += body.slice(start, end);
      previous.end = end;
      return;
    }
    grouped.push({
      source: body.slice(start, end), start, end,
      kind: kind ?? "markdown",
      protected: Boolean(kind),
      renderKey: kind ? `${node.position.start.offset}:${node.position.end.offset}` : null,
    });
  });
  // The visual editor has a slot before, between, and after protected regions. Give every slot an
  // editable region (empty when the source has none) so edited text always maps back to its place.
  const regions = [];
  for (const region of grouped) {
    const previous = regions.at(-1);
    if (region.protected && (!previous || previous.protected)) regions.push(emptyRegion(region.start));
    regions.push(region);
  }
  if (regions.at(-1).protected) regions.push(emptyRegion(body.length));
  return regions.map((region, index) => ({ id: `body-${index + 1}`, ...region }));
}

function emptyRegion(offset) {
  return { source: "", start: offset, end: offset, kind: "markdown", protected: false, renderKey: null };
}

function same(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function scalar(value) {
  if (typeof value !== "string") throw new TypeError("Metadata value must be a string");
  if (!value.trim()) throw new Error("Editable metadata cannot be blank");
  return JSON.stringify(value);
}

/** Edited values are always written on one line: a quoted scalar or a flow sequence of quoted strings. */
function encodedValue(value) {
  if (Array.isArray(value)) {
    if (!value.every((item) => typeof item === "string")) throw new TypeError("Tags must be strings");
    return `[${value.map((item) => JSON.stringify(item)).join(", ")}]`;
  }
  return scalar(value);
}

/**
 * Range of a top-level key's value, from just after `key:` through its continuation lines
 * (indented lines or column-zero block sequence items), excluding the final line break.
 */
function valueRange(text, key) {
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = new RegExp(`^${escaped}:`, "m").exec(text);
  if (!match) return null;
  const lineEnd = (from) => {
    const newline = text.indexOf("\n", from);
    return newline === -1 ? text.length : newline;
  };
  const start = match.index + match[0].length;
  let end = start + text.slice(start, lineEnd(start)).replace(/\r$/, "").length;
  let cursor = lineEnd(start) + 1;
  while (cursor < text.length) {
    const next = lineEnd(cursor);
    const line = text.slice(cursor, next).replace(/\r$/, "");
    if (line.trim()) {
      if (!/^[ \t]|^-(?:[ \t]|$)/.test(line)) break;
      end = cursor + line.length;
    }
    cursor = next + 1;
  }
  return [start, end];
}

function metadataPatches(document, proposed) {
  const allowed = new Set(document.editableFields);
  for (const key of new Set([...Object.keys(document.metadata), ...Object.keys(proposed)])) {
    if (!allowed.has(key) && !same(document.metadata[key], proposed[key])) {
      throw new Error(`Cannot change read-only metadata field ${key}`);
    }
  }
  const { frontmatter } = document;
  const patches = [];
  for (const key of allowed) {
    if (same(document.metadata[key], proposed[key])) continue;
    if (!(key in proposed)) throw new Error(`Cannot remove editable metadata field ${key}`);
    const value = encodedValue(proposed[key]);
    const range = valueRange(frontmatter.text, key);
    if (!range) {
      patches.push({ start: frontmatter.closingStart, end: frontmatter.closingStart, text: `${key}: ${value}${frontmatter.newline}` });
      continue;
    }
    const [start, end] = range;
    patches.push({ start: frontmatter.innerStart + start, end: frontmatter.innerStart + end, text: ` ${value}` });
  }
  return patches;
}

export function parseSourceDocument(source, collection) {
  const editableFields = EDITABLE_FIELDS[collection];
  if (!editableFields) throw new Error(`Unsupported collection ${collection}`);
  if (typeof source !== "string") throw new TypeError("Document source must be a string");
  const frontmatter = frontmatterRegion(source);
  return {
    source,
    collection,
    editableFields: [...editableFields],
    metadata: parseMetadata(frontmatter.text),
    regions: bodyRegions(source.slice(frontmatter.bodyStart)),
    frontmatter,
  };
}

function parseMetadata(text) {
  let metadata;
  try {
    metadata = loadYaml(text);
  } catch (error) {
    throw new Error(`Invalid YAML frontmatter: ${error.message}`);
  }
  if (!metadata || typeof metadata !== "object" || Array.isArray(metadata)) throw new Error("Frontmatter must be a YAML mapping");
  return metadata;
}

export function applyDocumentEdits(document, { metadata, regions }) {
  if (!metadata || !Array.isArray(regions)) throw new TypeError("Document edits need metadata and regions");
  if (regions.length !== document.regions.length) throw new Error("Body regions cannot be added or removed");
  const byId = new Map(regions.map((region) => [region.id, region]));
  const body = document.regions.map((original) => {
    const edited = byId.get(original.id);
    if (!edited) throw new Error(`Body region ${original.id} is missing`);
    if (original.protected && edited.source !== original.source) {
      throw new Error(`Protected ${original.kind} source cannot be edited`);
    }
    if (typeof edited.source !== "string") throw new TypeError("Body region source must be a string");
    return edited.source;
  }).join("");
  const patches = metadataPatches(document, metadata);
  patches.push({ start: document.frontmatter.bodyStart, end: document.source.length, text: body });
  let result = document.source;
  for (const patch of patches.sort((a, b) => b.start - a.start)) {
    result = result.slice(0, patch.start) + patch.text + result.slice(patch.end);
  }
  const written = parseMetadata(frontmatterRegion(result).text);
  for (const key of new Set([...Object.keys(document.metadata), ...Object.keys(metadata)])) {
    if (!same(written[key], metadata[key])) throw new Error(`Metadata field ${key} did not round-trip`);
  }
  return result;
}
