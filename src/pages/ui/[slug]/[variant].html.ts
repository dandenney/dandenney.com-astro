import type { APIRoute, GetStaticPaths } from "astro";
import { buildFrame } from "@/lib/ui-lab";
import { allVariants, type UiVariant } from "@/lib/ui-variants";

export const prerender = true;

export const getStaticPaths: GetStaticPaths = () =>
  allVariants.map((v) => ({ params: { slug: v.slug, variant: v.variant }, props: v }));

export const GET: APIRoute = async ({ props }) => {
  const html = await buildFrame(await (props as UiVariant).load());
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
};
