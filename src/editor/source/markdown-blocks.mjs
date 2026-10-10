import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";

// Same parser and GFM extension Astro uses, so node offsets match the rendered markers.
const markdownParser = unified().use(remarkParse).use(remarkGfm);

/** Top-level Markdown nodes, each with its source offsets. */
export function topLevelNodes(markdown) {
  return markdownParser.parse(markdown).children;
}
