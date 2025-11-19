import { e as createAstro, c as createComponent, b as addAttribute, f as renderScript, d as renderTemplate } from './astro/server_P91Fz5pH.mjs';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro("https://www.dandenney.com");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/dandenney/Repos/dandenney.com-astro/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/dandenney/Repos/dandenney.com-astro/node_modules/astro/components/ClientRouter.astro", void 0);

export { $$ClientRouter as $ };
