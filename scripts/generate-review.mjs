#!/usr/bin/env node

/**
 * Restaurant/Activity Review Generator
 *
 * Generates AI-powered reviews in the style of Anthony Bourdain
 * Uses a two-step process:
 * 1. Generate metadata (tags, description)
 * 2. Generate full review
 *
 * Usage:
 *   GitHub Actions: Triggered by workflow dispatch
 *   Local: node scripts/generate-review.mjs --location "Place Name" --city "city" --items "item1, item2, item3"
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Environment variables
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// OpenAI API endpoint
const OPENAI_ENDPOINT = 'https://api.openai.com/v1/chat/completions';

/**
 * Parse command-line arguments
 */
function parseArguments() {
  const args = process.argv.slice(2);
  const params = {};

  for (let i = 0; i < args.length; i += 2) {
    const key = args[i].replace(/^--/, '');
    params[key] = args[i + 1];
  }

  // Validate required parameters
  const required = ['location', 'city', 'items'];
  for (const param of required) {
    if (!params[param]) {
      throw new Error(`Missing required parameter: --${param}`);
    }
  }

  return params;
}

/**
 * Search for location information using AI
 */
async function searchLocationInfo(location, city) {
  try {
    const prompt = `Search for "${location}" in ${city}.

This output feeds a Mapbox map, so formatting must be strict.
Return JSON with these exact fields:
- infoUrl (string or null)
- address (string or null)
- coordinates (string or null) in EXACT format: "<longitude>, <latitude>" using decimal degrees (example: "-86.7816, 36.1627")
- state (string or null) in lowercase words/hyphen format (example: "new-york")
- country (string or null) as canonical country name (example: "United States")

Rules:
- If uncertain, return null for that field.
- Never wrap numeric coordinates in quotes inside the coordinate string.
- Never return extra keys.`;

    const response = await fetch(OPENAI_ENDPOINT, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are a location research assistant. Provide accurate information about restaurants and attractions including their geographic details. Return data as JSON.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.3,
        max_tokens: 300,
        response_format: { type: "json_object" },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`OpenAI API error (location search): ${data.error?.message || 'Unknown error'}`);
    }

    return JSON.parse(data.choices[0].message.content.trim());
  } catch (error) {
    console.warn(`   ⚠️  Location search failed: ${error.message}`);
    return { infoUrl: null, address: null, coordinates: null, state: null, country: null };
  }
}

/**
 * Generate metadata using OpenAI API (Step 1)
 */
async function generateMetadata(params) {
  // First, get location info
  const locationInfo = await searchLocationInfo(params.location, params.city);

  // Use location info to fill in state/country if not provided
  params.state = normalizeState(params.state || locationInfo.state);
  params.country = params.country || locationInfo.country || 'United States';

  const prompt = `You are analyzing a location for a food/travel review. Based on the following information, generate metadata:

Location: ${params.location}
City: ${params.city}
${params.state ? `State: ${params.state}` : ''}
${params.country ? `Country: ${params.country}` : ''}
Items experienced: ${params.items}

Generate the following in JSON format:
1. "tags": Array of 2-4 relevant tags (cuisine types, activity types, etc.) - lowercase, no spaces, use hyphens
2. "description": A single compelling sentence (10-15 words) that captures the essence of this place

Return ONLY valid JSON with these fields. Be concise and accurate.`;

  const response = await fetch(OPENAI_ENDPOINT, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a metadata specialist for food and travel content. You provide accurate, concise metadata in valid JSON format.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 300,
      response_format: { type: "json_object" },
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`OpenAI API error (metadata): ${data.error?.message || 'Unknown error'}`);
  }

  const aiMetadata = JSON.parse(data.choices[0].message.content.trim());

  // Merge location info with AI-generated metadata
  return {
    ...aiMetadata,
    address: locationInfo.address,
    coordinates: locationInfo.coordinates,
    infoUrl: locationInfo.infoUrl,
  };
}

/**
 * Generate review using OpenAI API (Step 2)
 */
async function generateReview(params, metadata) {
  const itemsList = params.items.split(',').map(i => i.trim()).join(', ');

  const prompt = `I'm going to give you a place with food and drink for you to review:

Location: ${params.location}
City: ${params.city}
${params.state ? `State: ${params.state}` : ''}
Country: ${params.country}
Items experienced: ${itemsList}

Write only the review text, no title or metadata.`;

  const response = await fetch(OPENAI_ENDPOINT, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a writer and you will write as if you are Anthony Bourdain.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.9,
      max_tokens: 800,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`OpenAI API error (review): ${data.error?.message || 'Unknown error'}`);
  }

  return data.choices[0].message.content.trim();
}

/**
 * Create slugified string for filenames
 */
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
}

function normalizeState(value) {
  if (!value) return null;
  return String(value).toLowerCase().trim().replace(/\s+/g, '-');
}

function normalizeCoordinates(value) {
  if (!value) return null;
  const cleaned = String(value).replace(/["']/g, '').trim();
  const parts = cleaned.split(',').map((p) => p.trim());
  if (parts.length !== 2) return null;
  const lng = Number(parts[0]);
  const lat = Number(parts[1]);
  if (Number.isNaN(lng) || Number.isNaN(lat)) return null;
  if (lng < -180 || lng > 180 || lat < -90 || lat > 90) return null;
  return `${lng.toFixed(6)}, ${lat.toFixed(6)}`;
}

/**
 * Create markdown file with frontmatter and review
 */
function createMarkdownFile(params, metadata, review) {
  const slug = slugify(params.location);
  const filename = `${slug}.md`;

  const normalizedState = normalizeState(params.state);
  const normalizedCoordinates = normalizeCoordinates(metadata.coordinates);
  const normalizedCountry = params.country || 'United States';

  const frontmatter = `---
${metadata.address ? `address: "${metadata.address.replace(/"/g, '\\"')}"` : '# address: ""'}
city: "${params.city.toLowerCase()}"
${normalizedCoordinates ? `coordinates: ${normalizedCoordinates}` : '# coordinates: -86.781600, 36.162700'}
country: "${normalizedCountry.replace(/"/g, '\\"')}"
description: "${String(metadata.description || '').replace(/"/g, '\\"')}"
heroImageAlt: "Placeholder image"
heroImage: "placeholder"
${metadata.infoUrl ? `infoUrl: "${metadata.infoUrl}"` : '# infoUrl: ""'}
pubDate: ${new Date().toISOString().split('T')[0]}
${normalizedState ? `state: "${normalizedState}"` : '# state: ""'}
tags: [${metadata.tags.join(', ')}]
title: "${params.location.replace(/"/g, '\\"')}"
aiGenerated: true
---

${review}
`;

  const outputPath = path.join(__dirname, '..', 'src', 'content', 'reviews', filename);

  fs.writeFileSync(outputPath, frontmatter, 'utf8');

  console.log(`✅ Created review: ${filename}`);
  console.log(`   Location: ${params.location}`);
  console.log(`   City: ${params.city}`);
  console.log(`   Tags: ${metadata.tags.join(', ')}`);
  console.log(`   Path: ${outputPath}`);

  return filename;
}

/**
 * Main execution
 */
async function main() {
  console.log('🍽️  Restaurant/Activity Review Generator\n');

  // Validate environment variables
  if (!OPENAI_API_KEY) {
    console.error('❌ Missing OpenAI API key. Set OPENAI_API_KEY.');
    process.exit(1);
  }

  try {
    // Parse command-line arguments
    console.log('📍 Parsing input parameters...\n');
    const params = parseArguments();

    console.log('Input:');
    console.log(`  Location: ${params.location}`);
    console.log(`  City: ${params.city}`);
    if (params.state) console.log(`  State: ${params.state}`);
    console.log(`  Country: ${params.country}`);
    console.log(`  Items: ${params.items}\n`);

    // Step 1: Generate metadata
    console.log('🔍 Step 1: Generating metadata...');
    const metadata = await generateMetadata(params);
    console.log('   ✓ Metadata generated');
    console.log(`   Tags: ${metadata.tags.join(', ')}`);
    console.log(`   Description: ${metadata.description}\n`);

    // Step 2: Generate review
    console.log('✍️  Step 2: Generating review in Bourdain style...');
    const review = await generateReview(params, metadata);
    console.log('   ✓ Review generated\n');

    // Create markdown file
    console.log('📝 Creating markdown file...');
    createMarkdownFile(params, metadata, review);

    console.log('\n✨ Done!\n');

  } catch (error) {
    console.error(`\n❌ Error:`, error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

main();
