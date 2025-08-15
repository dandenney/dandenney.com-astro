/**
 * Calculate estimated reading time for content
 * @param {string} content - The text content to analyze
 * @param {number} wordsPerMinute - Average words per minute (default: 200)
 * @returns {number} Estimated reading time in minutes
 */
export function calculateReadingTime(content, wordsPerMinute = 200) {
  if (!content || typeof content !== 'string') {
    return 0;
  }

  // Remove HTML tags and clean up the content
  const cleanContent = content
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();

  // Count words (split by whitespace and filter out empty strings)
  const wordCount = cleanContent
    .split(/\s+/)
    .filter(word => word.length > 0).length;

  // Calculate reading time in minutes, minimum 1 minute
  const readingTimeMinutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  
  return readingTimeMinutes;
}

/**
 * Format reading time for display
 * @param {number} minutes - Reading time in minutes
 * @returns {string} Formatted reading time string
 */
export function formatReadingTime(minutes) {
  if (minutes === 1) {
    return '1 min read';
  }
  return `${minutes} min read`;
}