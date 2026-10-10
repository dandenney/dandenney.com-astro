import YAML from "yaml";
import { load as loadYaml } from "js-yaml";

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

function splitLines(source) {
  return source.match(/.*?(?:\r\n|\n|$)/g).filter(Boolean);
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

function bodyRegions(body) {
  const renderOffset = body.match(/^(?:\r?\n)*/)?.[0].length ?? 0;
  const lines = splitLines(body);
  const blocks = [];
  let current = "";
  let currentStart = 0;
  let offset = 0;
  let fence = null;
  function flush() {
    if (!current) return;
    blocks.push({ source: current, start: currentStart, end: currentStart + current.length });
    current = "";
  }
  for (const line of lines) {
    if (!current) currentStart = offset;
    const plain = line.replace(/\r?\n$/, "");
    if (fence) {
      current += line;
      if (new RegExp(`^\\s*${fence}`).test(plain)) fence = null;
      offset += line.length;
      continue;
    }
    const opening = plain.match(/^\s*(```|~~~)/);
    if (opening) {
      flush();
      current = line;
      fence = opening[1];
      offset += line.length;
      continue;
    }
    current += line;
    offset += line.length;
    if (!plain.trim()) flush();
  }
  flush();
  const grouped = [];
  for (const block of blocks) {
    const kind = protectedKind(block.source);
    const previous = grouped.at(-1);
    if (!kind && previous && !previous.protected) {
      previous.source += block.source;
      previous.end = block.end;
      continue;
    }
    grouped.push({ ...block, kind: kind ?? "markdown", protected: Boolean(kind) });
  }
  return grouped.map((region, index) => {
    const leading = region.source.length - region.source.trimStart().length;
    const trailing = region.source.length - region.source.trimEnd().length;
    return { id: `body-${index + 1}`, ...region,
      renderKey: region.protected
        ? `${region.start + leading - renderOffset}:${region.end - trailing - renderOffset}` : null };
  });
}

function same(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function scalar(value) {
  if (typeof value !== "string") throw new TypeError("Metadata value must be a string");
  if (!value.trim()) throw new Error("Editable metadata cannot be blank");
  return JSON.stringify(value);
}

function encodedValue(value, newline) {
  if (Array.isArray(value)) {
    if (!value.every((item) => typeof item === "string")) throw new TypeError("Tags must be strings");
    return value.length ? value.map((item) => `- ${JSON.stringify(item)}`).join(`${newline}  `) : "[]";
  }
  return scalar(value);
}

function rawValueRange(text, key) {
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = new RegExp(`^${escaped}:[ \\t]*(.*?)(?:\\r?\\n|$)`, "m").exec(text);
  if (!match) return null;
  const lineWithoutNewline = match[0].replace(/\r?\n$/, "");
  const lineEnd = match.index + lineWithoutNewline.length;
  const valueStart = match.index + match[0].indexOf(match[1]);
  if (match[1].trim()) return [valueStart, lineEnd];
  const after = match.index + match[0].length;
  const sequence = /^(\s*-\s+.*(?:\r?\n|$))+/m.exec(text.slice(after));
  if (!sequence || sequence.index !== 0) return [lineEnd, lineEnd];
  const leading = sequence[0].match(/^\s*/)?.[0].length ?? 0;
  return [after + leading, after + sequence[0].replace(/\r?\n$/, "").length];
}

function metadataPatches(document, proposed) {
  const allowed = new Set(document.editableFields);
  for (const key of new Set([...Object.keys(document.metadata), ...Object.keys(proposed)])) {
    if (!allowed.has(key) && !same(document.metadata[key], proposed[key])) {
      throw new Error(`Cannot change read-only metadata field ${key}`);
    }
  }
  const patches = [];
  for (const key of allowed) {
    if (same(document.metadata[key], proposed[key])) continue;
    if (!(key in proposed)) throw new Error(`Cannot remove editable metadata field ${key}`);
    const pair = document.yaml?.contents?.items.find((item) => item.key?.value === key);
    const range = pair?.value?.range ?? rawValueRange(document.frontmatter.text, key);
    if (!range) {
      const value = encodedValue(proposed[key], document.frontmatter.newline);
      const rendered = Array.isArray(proposed[key])
        ? `${key}:${document.frontmatter.newline}  ${value}${document.frontmatter.newline}`
        : `${key}: ${value}${document.frontmatter.newline}`;
      patches.push({ start: document.frontmatter.closingStart, end: document.frontmatter.closingStart, text: rendered });
      continue;
    }
    const [start, end] = range;
    patches.push({
      start: document.frontmatter.innerStart + start,
      end: document.frontmatter.innerStart + end,
      text: encodedValue(proposed[key], document.frontmatter.newline),
    });
  }
  return patches;
}

export function parseSourceDocument(source, collection) {
  const editableFields = EDITABLE_FIELDS[collection];
  if (!editableFields) throw new Error(`Unsupported collection ${collection}`);
  if (typeof source !== "string") throw new TypeError("Document source must be a string");
  const frontmatter = frontmatterRegion(source);
  const yaml = YAML.parseDocument(frontmatter.text, { keepSourceTokens: true, uniqueKeys: true });
  let metadata;
  try {
    metadata = loadYaml(frontmatter.text);
  } catch (error) {
    throw new Error(`Invalid YAML frontmatter: ${error.message}`);
  }
  if (!metadata || typeof metadata !== "object" || Array.isArray(metadata)) throw new Error("Frontmatter must be a YAML mapping");
  return {
    source,
    collection,
    editableFields: [...editableFields],
    metadata,
    regions: bodyRegions(source.slice(frontmatter.bodyStart)),
    frontmatter,
    yaml: yaml.errors.length || !YAML.isMap(yaml.contents) ? null : yaml,
  };
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
  return result;
}
