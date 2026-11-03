/**
 * Thin wrapper over the WebMCP browser API (document.modelContext), which lets
 * in-browser agents call tools a page registers. See
 * https://github.com/webmachinelearning/webmcp. Browsers without it skip
 * registration entirely.
 */

export interface AgentTool {
  name: string;
  title?: string;
  description: string;
  inputSchema?: object;
  annotations?: { readOnlyHint?: boolean; untrustedContentHint?: boolean };
  execute: (input: Record<string, unknown>) => unknown;
}

interface ModelContext {
  registerTool(tool: AgentTool, options?: { signal?: AbortSignal }): Promise<void>;
}

function modelContext(): ModelContext | undefined {
  return (document as Document & { modelContext?: ModelContext }).modelContext;
}

export function registerAgentTools(tools: AgentTool[], signal?: AbortSignal): void {
  const context = modelContext();
  if (!context) return;
  for (const tool of tools) {
    context
      .registerTool(tool, { signal })
      .catch((error) => console.warn(`WebMCP: couldn't register ${tool.name}`, error));
  }
}

/** Page-specific tools: unregistered when ClientRouter swaps to another page. */
export function registerPageTools(tools: AgentTool[]): void {
  if (!modelContext()) return;
  const controller = new AbortController();
  document.addEventListener("astro:before-swap", () => controller.abort(), { once: true });
  registerAgentTools(tools, controller.signal);
}

export const asText = (value: unknown): string =>
  typeof value === "string" ? value.trim() : value == null ? "" : String(value).trim();

export function asLimit(value: unknown, fallback: number, max: number): number {
  const n = Math.floor(Number(value));
  if (!Number.isFinite(n) || n < 1) return fallback;
  return Math.min(n, max);
}

/** "St. Petersburg" / "new york" → "st-petersburg" / "new-york", matching content slugs. */
export const toSlug = (value: string): string =>
  value
    .toLowerCase()
    .replace(/[.']/g, "")
    .trim()
    .replace(/[\s_]+/g, "-");
