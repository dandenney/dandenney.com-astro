// Shared by the /ui pages and scripts/ui. Imports only packages so node scripts can load it directly.
import { compile, optimize } from "@tailwindcss/node";
import { Scanner } from "@tailwindcss/oxide";

export const TAILWIND_BROWSER_SCRIPT =
  '<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>';

const browserScript = /<script\b[^>]*src=["'][^"']*@tailwindcss\/browser[^"']*["'][^>]*>\s*<\/script>\s*/gi;
const tailwindStyle = /<style\b[^>]*type=["']text\/tailwindcss["'][^>]*>([\s\S]*?)<\/style>\s*/gi;

/** A variant's file name, minus `.html`, is its label: usually the model that made it. */
export function variantFromPath(path: string): { slug: string; variant: string } {
  const [slug, file] = path.split("/").slice(-2);
  return { slug, variant: file.replace(/\.html$/, "") };
}

/**
 * Turns an exploration's source HTML (which loads the Tailwind browser build so it opens
 * straight from disk) into a self-contained frame with the CSS compiled inline.
 */
export async function buildFrame(source: string): Promise<string> {
  const usesTailwind = /@tailwindcss\/browser|type=["']text\/tailwindcss["']/i.test(source);
  const blocks: string[] = [];
  let html = source
    .replace(browserScript, "")
    .replace(tailwindStyle, (_, css: string) => {
      blocks.push(css);
      return "";
    });

  if (usesTailwind) {
    const compiler = await compile(['@import "tailwindcss";', ...blocks].join("\n"), {
      base: process.cwd(),
      onDependency() {},
    });
    const candidates = new Scanner({}).scanFiles([{ content: html, extension: "html" }]);
    const css = optimize(compiler.build(candidates), { minify: true }).code;
    html = injectHead(html, `<style>${css}</style>`);
  }

  return injectHead(html, '<meta name="robots" content="noindex">');
}

function injectHead(html: string, tag: string): string {
  return /<\/head>/i.test(html) ? html.replace(/<\/head>/i, `${tag}\n</head>`) : `${tag}\n${html}`;
}

/** Pulls one complete HTML document out of an agent's reply, which may wrap it in prose or fences. */
export function extractHtmlDocument(reply: string): string | undefined {
  const start = reply.search(/<!doctype html/i);
  const end = reply.toLowerCase().lastIndexOf("</html>");
  if (start === -1 || end === -1 || end < start) return undefined;
  return `${reply.slice(start, end + "</html>".length).trim()}\n`;
}
