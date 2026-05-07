import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    pubDate: z.coerce.date(),
    strapiSeries: z.boolean().optional(),
    summary: z.string(),
    tags: z.array(z.string()),
    cloudinaryThumb: z.string().optional(),
    socialImageFilename: z.string().optional(),
    thumb: z.string().optional(),
    thumbAlt: z.string().optional(),
    title: z.string(),
  }),
});

const blips = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blips" }),
  schema: z.object({
    pubDate: z.coerce.date(),
    summary: z.string().optional(),
    title: z.string(),
  }),
});

const tinkerings = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/tinkerings" }),
  schema: z.object({
    pubDate: z.coerce.date(),
    summary: z.string().optional(),
    thumb: z.string().optional(),
    title: z.string(),
  }),
});

const reviews = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/reviews" }),
  schema: z.object({
    address: z.string().optional(),
    city: z.string(),
    coordinates: z.string().optional(),
    country: z.string(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    heroImageAttribution: z.string().optional(),
    heroImageUrl: z.string().optional(),
    infoUrl: z.string().optional(),
    state: z.string().optional(),
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()),
    aiGenerated: z.boolean().default(false),
  }),
});

const songs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/songs" }),
  schema: z.object({
    title: z.string(),
    artist: z.string(),
    artists: z.array(z.string()),
    album: z.string(),
    releaseDate: z.string(),
    spotifyUrl: z.string().url(),
    spotifyId: z.string(),
    albumArt: z.string().optional(),
    duration: z.number(),
    genres: z.array(z.string()),
    preview: z.string().url().optional(),
    pubDate: z.coerce.date(),
    rating: z.number().min(1).max(5).optional(),
    tags: z.array(z.string()),
    aiGenerated: z.boolean().default(true),
  }),
});

const plusEv = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/plus-ev" }),
  schema: z.object({
    pubDate: z.coerce.date(),
    title: z.string(),
    summary: z.string(),
    sport: z.enum(["nba", "mlb", "both"]).optional(),
    recapDate: z.string().optional(),
    picks: z
      .array(
        z.object({
          recommender: z.string(),
          pick: z.string(),
          result: z.enum(["win", "loss", "pending"]),
        })
      )
      .optional(),
  }),
});

const artificiallyIntelligent = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/artificially-intelligent" }),
  schema: z.object({
    pubDate: z.coerce.date(),
    title: z.string(),
    summary: z.string().optional(),
    githubPath: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  "artificially-intelligent": artificiallyIntelligent,
  blips,
  "plus-ev": plusEv,
  posts,
  reviews,
  songs,
  tinkerings,
};
