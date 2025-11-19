export { renderers } from '../../../renderers.mjs';

const prerender = false;
const client_id = "f8abe47c4b8d483fa1d18176d7f7ba3c";
const client_secret = "e3a180aa284040238eebfde9c19449b6";
const refresh_token = "AQCa1bEAlr-wciXpB0bUO6Mzd4x_1BqToPDa8bqnlEklaOVwFwg2L23uVuH-6DTR1dgRdnhGoiiwyGbHbtq9ZuDAxCc6ngKPyQXrGxvFSR7SgyV5HuBsOVDDHGGbj8ZS_q4";
const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const TOP_TRACKS_ENDPOINT = "https://api.spotify.com/v1/me/top/tracks";
const TOP_ARTISTS_ENDPOINT = "https://api.spotify.com/v1/me/top/artists";
async function getAccessToken() {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token
    })
  });
  return response.json();
}
async function getTopItems(access_token, type, time_range) {
  const endpoint = type === "tracks" ? TOP_TRACKS_ENDPOINT : TOP_ARTISTS_ENDPOINT;
  const response = await fetch(`${endpoint}?time_range=${time_range}&limit=10`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
  return response.json();
}
const GET = async ({ request }) => {
  try {
    const url = new URL(request.url);
    console.log("Full URL:", request.url);
    console.log("Search params:", url.search);
    console.log("All params:", Array.from(url.searchParams.entries()));
    const type = url.searchParams.get("type") || "tracks";
    const time_range = url.searchParams.get("time_range") || "short_term";
    console.log(`API Request: Type=${type}, Time Range=${time_range}`);
    const { access_token } = await getAccessToken();
    const data = await getTopItems(access_token, type, time_range);
    console.log(`First ${type} for ${time_range}:`, data.items?.[0]?.name);
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate"
      }
    });
  } catch (error) {
    console.error("Error fetching top items:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch top items" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
