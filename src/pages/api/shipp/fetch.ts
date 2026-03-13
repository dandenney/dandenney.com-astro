import type { APIRoute } from "astro";
import { pollShippConnections } from "@/server/shipp/service";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request
      .json()
      .catch(() => ({} as { connectionIds?: string[]; limit?: number; useMock?: boolean }));

    const result = await pollShippConnections({
      connectionIds: Array.isArray(body.connectionIds) ? body.connectionIds : undefined,
      limit: typeof body.limit === "number" ? body.limit : undefined,
      useMock: body.useMock === true,
    });

    return new Response(JSON.stringify({ ok: true, ...result }, null, 2), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify(
        {
          ok: false,
          error: error instanceof Error ? error.message : "Unknown error",
        },
        null,
        2,
      ),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
};
