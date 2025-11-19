export { renderers } from '../../renderers.mjs';

const GET = async ({ url, request }) => {
  const params = {
    contextUrl: url.toString(),
    contextSearch: url.search,
    contextSearchParams: Object.fromEntries(url.searchParams),
    requestUrl: request.url,
    requestUrlParsed: new URL(request.url).search,
    testParam: url.searchParams.get("test")
  };
  return new Response(JSON.stringify(params, null, 2), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
