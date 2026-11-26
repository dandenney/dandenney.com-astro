import type { CollectionEntry } from "astro:content";
import { variantFromPath } from "@/lib/ui-lab";

const sources = import.meta.glob<string>("/ui/*/*.html", { query: "?raw", import: "default" });

export type UiVariant = {
  slug: string;
  variant: string;
  load: () => Promise<string>;
};

export const allVariants: UiVariant[] = Object.entries(sources)
  .map(([path, load]) => ({ ...variantFromPath(path), load }))
  .sort((a, b) => a.variant.localeCompare(b.variant));

export function variantsFor(slug: string): UiVariant[] {
  return allVariants.filter((v) => v.slug === slug);
}

/** The variant a visitor sees first: the brief's `shipped` one, else the only (or first) one. */
export function shownVariant(entry: CollectionEntry<"ui">): string | undefined {
  const variants = variantsFor(entry.id);
  const { shipped } = entry.data;
  if (shipped) {
    if (!variants.some((v) => v.variant === shipped)) {
      throw new Error(`ui/${entry.id}/BRIEF.md ships "${shipped}", but ui/${entry.id}/${shipped}.html doesn't exist`);
    }
    return shipped;
  }
  return variants[0]?.variant;
}

export const frameUrl = (slug: string, variant: string) => `/ui/${slug}/${variant}.html`;
export const sourceUrl = (slug: string, variant: string) =>
  `https://github.com/dandenney/dandenney.com-astro/blob/main/ui/${slug}/${variant}.html`;
