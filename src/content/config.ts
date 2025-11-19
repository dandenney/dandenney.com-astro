import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  // Type-check frontmatter using a schema
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

const songs = defineCollection({
  schema: z.object({
    title: z.string(), // Track name
    artist: z.string(), // Primary artist
    artists: z.array(z.string()), // All artists
    album: z.string(), // Album name
    releaseDate: z.string(), // YYYY-MM-DD
    spotifyUrl: z.string().url(), // Track URL
    spotifyId: z.string(), // Track ID
    albumArt: z.string().optional(), // Album cover URL
    duration: z.number(), // Duration in ms
    genres: z.array(z.string()), // From artist data
    preview: z.string().url().optional(), // 30s preview URL
    pubDate: z.coerce.date(), // Review publish date
    rating: z.number().min(1).max(5).optional(), // Star rating
    tags: z.array(z.string()), // Custom tags
    aiGenerated: z.boolean().default(true), // Flag for AI reviews
  }),
});

export const collections = { blips, posts, reviews, songs, tinkerings };
