const COLLECTIONS = new Set(["posts", "blips", "reviews"]);

function validEntryId(entryId) {
  return typeof entryId === "string" && entryId.length > 0 && !entryId.includes("\\")
    && !/[\0-\x1f\x7f]/.test(entryId)
    && entryId.split("/").every((segment) => segment && segment !== "." && segment !== "..");
}

export function editorUrl(collection, entryId) {
  if (!COLLECTIONS.has(collection)) throw new Error(`Unsupported editor collection ${collection}`);
  if (!validEntryId(entryId)) throw new Error("Invalid editor entry id");
  const id = entryId.replace(/\.mdx?$/, "");
  return `/__editor/${collection}/${id.split("/").map(encodeURIComponent).join("/")}`;
}
