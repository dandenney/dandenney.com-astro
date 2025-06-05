import { pipeline } from "@huggingface/transformers"
import chalk from "chalk"
import fs from "fs"
import { glob } from "glob"
import matter from "gray-matter"
import { remark } from "remark"
import strip from "strip-markdown"
import path from "path"

// --------- Configurations ---------
const GLOB = "../../src/content/posts/front-end-dev/*.{md,mdx}" // Where to find Markdown content
const OUT = "../../src/assets/similarities.json" // Output file for results
const TOP_N = 5 // Number of similar docs to keep
const MODEL = "sentence-transformers/all-MiniLM-L6-v2" // Smaller, more efficient model
const BATCH_SIZE = 5 // Process documents in smaller batches

// --------- Utils ---------

/**
 * Normalizes a vector to unit length (L2 norm == 1)
 * This makes cosine similarity a simple dot product!
 */
function normalize(vec) {
  let len = Math.hypot(...vec) // L2 norm
  if (!len) return vec
  return new Float32Array(vec.map(x => x / len))
}

/**
 * Computes dot product of two same-length vectors.
 * Vectors MUST be normalized before using this for cosine similarity!
 */
const dot = (a, b) => a.reduce((sum, ai, i) => sum + ai * b[i], 0)

/**
 * Strips markdown formatting, import/export lines, headings, tables, etc.
 * Returns plain text for semantic analysis.
 */
const getPlainText = async md => {
  let txt = String(
    await remark()
      .use(strip)
      .process(md)
  )
    .replace(/^import .*?$/gm, "")
    .replace(/^export .*?$/gm, "")
    .replace(
      /^\s*(TLDR|Introduction|Conclusion|Summary|Quick Setup Guide|Rules?)\s*$/gim,
      ""
    )
    .replace(/^[A-Z\s]{4,}$/gm, "")
    .replace(/^\|.*\|$/gm, "")
    .replace(/(Rule\s\d+:.*)(?=\s*Rule\s\d+:)/g, "$1\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/\n{2}/g, "\n\n")
    .replace(/\n/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim()
  return txt
}

/**
 * Parses and validates a single Markdown file.
 * - Extracts frontmatter (slug, etc.)
 * - Converts content to plain text
 * - Skips drafts or files with no slug
 */
async function processFile(path) {
  try {
    const { content, data } = matter(fs.readFileSync(path, "utf-8"))
    if (data.draft) return null
    
    // Use the file path as the identifier if no slug is provided
    const pathParts = path.split('/')
    const fileName = pathParts[pathParts.length - 1].replace(/\.(md|mdx)$/, '')
    const identifier = data.slug || fileName
    
    const plain = await getPlainText(content)
    return { 
      path, 
      content: plain, 
      frontmatter: {
        ...data,
        identifier // Add identifier to frontmatter
      }
    }
  } catch {
    return null
  }
}

/**
 * Processes an array of Markdown file paths into Documents
 */
async function loadDocs(paths) {
  const docs = []
  for (const p of paths) {
    const d = await processFile(p)
    if (d) docs.push(d)
  }
  return docs
}

/**
 * Generates vector embeddings for each document's plain text.
 * - Uses HuggingFace model
 * - Normalizes each vector for fast cosine similarity search
 * - Processes in batches to manage memory
 */
async function embedDocs(docs, extractor) {
  if (!docs.length) return []
  
  const allEmbeddings = []
  const totalBatches = Math.ceil(docs.length / BATCH_SIZE)
  
  for (let i = 0; i < docs.length; i += BATCH_SIZE) {
    const batch = docs.slice(i, i + BATCH_SIZE)
    console.log(chalk.blue(`Processing batch ${Math.floor(i/BATCH_SIZE) + 1}/${totalBatches} (${batch.length} documents)`))
    
    try {
      // Process each document in the batch
      const batchTexts = batch.map(d => d.content)
      console.log(chalk.gray(`Batch text lengths: ${batchTexts.map(t => t.length).join(', ')}`))
      
      const res = await extractor(batchTexts, {
        pooling: "mean",
        normalize: false,
        max_length: 512 // Limit sequence length to save memory
      })
      
      const [n, dim] = res.dims
      console.log(chalk.gray(`Generated embeddings: ${n}x${dim}`))
      
      // Each embedding vector is normalized for performance
      const batchEmbeddings = Array.from({ length: n }, (_, j) =>
        normalize(res.data.slice(j * dim, (j + 1) * dim))
      )
      
      allEmbeddings.push(...batchEmbeddings)
      
      // Clear some memory
      batchTexts.length = 0
      if (global.gc) {
        global.gc()
      }
      
      // Add a small delay between batches to allow memory cleanup
      await new Promise(resolve => setTimeout(resolve, 100))
      
    } catch (error) {
      console.error(chalk.red(`Error processing batch ${Math.floor(i/BATCH_SIZE) + 1}:`), error)
      throw error
    }
  }
  
  return allEmbeddings
}

/**
 * Computes the top-N most similar documents for the given document index.
 * - Uses dot product of normalized vectors for cosine similarity
 * - Returns only the top-N
 */
function topSimilar(idx, docs, embs, n) {
  return docs
    .map((d, j) =>
      j === idx
        ? null
        : {
          ...d.frontmatter,
          path: d.path,
          url: `/posts/${d.frontmatter.identifier}/`,
          similarity: +dot(embs[idx], embs[j]).toFixed(2) // higher = more similar
        }
    )
    .filter(Boolean)
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, n)
}

/**
 * Computes all similarities for every document, returns as {identifier: SimilarityResult[]} map.
 */
function allSimilarities(docs, embs, n) {
  return Object.fromEntries(
    docs.map((d, i) => [d.frontmatter.identifier, topSimilar(i, docs, embs, n)])
  )
}

/**
 * Saves result object as JSON file.
 * - Ensures output directory exists.
 */
async function saveJson(obj, out) {
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, JSON.stringify(obj, null, 2))
}

// --------- Main Execution Flow ---------
async function main() {
  try {
    console.log(chalk.blue("Starting document similarity analysis..."))
    
    // 1. Load transformer model for embeddings
    console.log(chalk.blue(`Loading model: ${MODEL}`))
    const extractor = await pipeline("feature-extraction", MODEL, {
      revision: "main",
      quantized: true // Use quantized model for better memory efficiency
    })
    console.log(chalk.green("Model loaded successfully"))

    // 2. Find all Markdown files
    console.log(chalk.blue("Finding markdown files..."))
    const files = await glob(GLOB)
    if (!files.length) {
      console.log(chalk.yellow("No content files found."))
      return
    }
    console.log(chalk.green(`Found ${files.length} files`))

    // 3. Parse and process all files
    console.log(chalk.blue("Processing files..."))
    const docs = await loadDocs(files)
    if (!docs.length) {
      console.log(chalk.red("No documents loaded."))
      return
    }
    console.log(chalk.green(`Loaded ${docs.length} documents`))

    // 4. Generate & normalize embeddings
    console.log(chalk.blue("Generating embeddings..."))
    const embs = await embedDocs(docs, extractor)
    if (!embs.length) {
      console.log(chalk.red("No embeddings generated."))
      return
    }
    console.log(chalk.green(`Generated ${embs.length} embeddings`))

    // 5. Calculate similarities for each doc
    console.log(chalk.blue("Calculating similarities..."))
    const results = allSimilarities(docs, embs, TOP_N)

    // 6. Save results to disk
    await saveJson(results, OUT)
    console.log(chalk.green(`Similarity results saved to ${OUT}`))
  } catch (e) {
    console.error(chalk.red("Error:"), e)
    process.exitCode = 1
  }
}

// Run with --expose-gc flag to enable garbage collection
main()
