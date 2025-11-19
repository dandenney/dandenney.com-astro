import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ url, request }) => {
  const params = {
    contextUrl: url.toString(),
    contextSearch: url.search,
    contextSearchParams: Object.fromEntries(url.searchParams),
    requestUrl: request.url,
    requestUrlParsed: new URL(request.url).search,
    testParam: url.searchParams.get('test'),
  };

  return new Response(JSON.stringify(params, null, 2), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
