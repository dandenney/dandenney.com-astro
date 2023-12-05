import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    pubDate: z.coerce.date(),
    strapiSeries: z.boolean().optional(),
    summary: z.string(),
    tags: z.array(z.string()),
    cloudinaryThumb: z.string().optional(),
    thumb: z.string().optional(),
    thumbAlt: z.string().optional(),
    title: z.string(),
  }),
});

const blips = defineCollection({
  schema: z.object({
    pubDate: z.coerce.date(),
    summary: z.string().optional(),
    title: z.string(),
  }),
});

const tinkerings = defineCollection({
  schema: z.object({
    pubDate: z.coerce.date(),
    summary: z.string().optional(),
    thumb: z.string().optional(),
    title: z.string(),
  }),
});

const reviews = defineCollection({
  schema: z.object({
    city: z.string(),
    country: z.string(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    heroImageAttribution: z.string().optional(),
    heroImageUrl: z.string().optional(),
    state: z.string().optional(),
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = { blips, posts, reviews, tinkerings };
