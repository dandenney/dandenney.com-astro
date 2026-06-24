import type { APIRoute, GetStaticPaths } from "astro";
import { getAllTwins } from "@/lib/markdownTwin";

export const prerender = true;

export const getStaticPaths: GetStaticPaths = async () => {
  const twins = await getAllTwins();
  return twins.map((twin) => ({
    params: { path: twin.path },
    props: { markdown: twin.markdown },
  }));
};

export const GET: APIRoute = ({ props }) => {
  return new Response(props.markdown as string, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
