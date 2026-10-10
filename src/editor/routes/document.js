import { getEditorRuntime } from "../server/runtime.mjs";
import { assertEditorRequest, parseEditorOrigins, readEditorJson } from "../server/request-guards.mjs";

export const prerender = false;

function json(body, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });
}

async function guarded(request, action) {
  try {
    await assertEditorRequest(request, {
      origins: parseEditorOrigins(process.env.LOCAL_WRITING_EDITOR_ORIGINS),
      token: process.env.LOCAL_WRITING_EDITOR_TOKEN,
      methods: ["POST"],
    });
    return await action();
  } catch (error) {
    return json({ error: { code: error.code ?? "editor_error", message: error.message, details: error.details } }, error.status ?? 500);
  }
}

export async function GET({ request }) {
  return guarded(request, async () => {
    const documentId = new URL(request.url).searchParams.get("id");
    return json(await (await getEditorRuntime()).read(documentId));
  });
}

export async function POST({ request }) {
  return guarded(request, async () => {
    const payload = await readEditorJson(request);
    return json(await (await getEditorRuntime()).save(payload));
  });
}
