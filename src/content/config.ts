import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()),
    thumb: z.string().optional(),
    thumbAlt: z.string().optional(),
    title: z.string(),
  }),
});

const blips = defineCollection({
  schema: z.object({
    date: z.coerce.date(),
    summary: z.string().optional(),
    title: z.string(),
  }),
});

const tinkerings = defineCollection({
  schema: z.object({
    date: z.coerce.date(),
    summary: z.string().optional(),
    title: z.string(),
  }),
});

export const collections = { blips, posts, tinkerings };
