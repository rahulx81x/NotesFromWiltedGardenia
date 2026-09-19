/**
 * Helper utility functions for poem calculations and formatting
 */

/**
 * Calculates the number of stanzas in a poem based on double newlines
 * @param {string} contents - Full poem body text
 * @returns {number} Count of stanzas (minimum 1)
 */
export function getStanzaCount(contents) {
  if (!contents) return 1;
  const stanzas = contents.trim().split(/\n\s*\n/).filter(Boolean);
  return stanzas.length || 1;
}

/**
 * Calculates the total word count of a piece
 * @param {string} contents - Full poem body text
 * @returns {number} Total word count
 */
export function getWordCount(contents) {
  if (!contents) return 0;
  const words = contents.trim().split(/\s+/).filter(Boolean);
  return words.length;
}

/**
 * Calculates estimated reading time in minutes (assuming ~120 words per minute for poetry)
 * @param {string} contents - Full poem body text
 * @returns {number} Estimated minutes to read (minimum 1)
 */
export function getReadMinutes(contents) {
  const words = getWordCount(contents);
  return Math.max(1, Math.round(words / 120));
}
