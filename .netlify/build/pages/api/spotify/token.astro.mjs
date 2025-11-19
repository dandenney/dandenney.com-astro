export { renderers } from '../../../renderers.mjs';

const client_id = "f8abe47c4b8d483fa1d18176d7f7ba3c";
const client_secret = "e3a180aa284040238eebfde9c19449b6";
const refresh_token = "AQCa1bEAlr-wciXpB0bUO6Mzd4x_1BqToPDa8bqnlEklaOVwFwg2L23uVuH-6DTR1dgRdnhGoiiwyGbHbtq9ZuDAxCc6ngKPyQXrGxvFSR7SgyV5HuBsOVDDHGGbj8ZS_q4";
const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const GET = async () => {
  try {
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
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to get access token" }),
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
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
