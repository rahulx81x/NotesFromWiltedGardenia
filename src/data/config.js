/**
 * Configuration for Google Sheets CSV Data Sources
 * 
 * To publish your Google Sheet tabs as CSV:
 * 1. Open your Google Sheet
 * 2. Go to File > Share > Publish to web
 * 3. Choose the specific tab ("notes" or "anthologies")
 * 4. Choose "Comma-separated values (.csv)" as the format
 * 5. Click Publish and copy the generated link into the variables below
 */

export const NOTES_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQgFCuylzhYDLLgWbwsYN0KzcpwP6Hd9G9VHGu0hdMDRc70ayewFTroL_HE91Jmrr0sFiKA4MslkNbg/pub?gid=302744447&single=true&output=csv";
export const ANTHOLOGIES_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQgFCuylzhYDLLgWbwsYN0KzcpwP6Hd9G9VHGu0hdMDRc70ayewFTroL_HE91Jmrr0sFiKA4MslkNbg/pub?gid=118497514&single=true&output=csv";

export const DEFAULT_AUTHOR = "Unrecorded Author";
export const DEFAULT_CURATOR = "Rahul Gouri";

/**
 * Atmospheric fallback poems matching the exact schema:
 * - id: string slug
 * - name: title of the piece
 * - author: poet/author name
 * - intro: 1-2 line excerpt, dedication, or setup note
 * - contents: full poem text (with multiline stanzas and intentional spacing)
 * - publish_date: YYYY-MM-DD
 */
export const FALLBACK_POEMS = [
];

export const FALLBACK_ANTHOLOGIES = [
];

/**
 * Mood / emotional theme buckets mapping broad sentiments to poem tags.
 */
export const MOOD_MAP = {
  "Heartbreak & Longing": ["heartbreak", "longing", "separation", "regret", "sorrow", "loss", "grief", "melancholy"],
  "Love & Devotion": ["love", "romance", "devotion", "admiration", "tenderness", "passion", "affection"],
  "Solitude & Introspection": ["solitude", "introspection", "insomnia", "silence", "night", "midnight", "shadows", "quiet"],
  "Resilience & Hope": ["resilience", "hope", "determination", "empowerment", "healing", "dawn", "renewal", "strength"],
  "Memory & Ephemera": ["memory", "nostalgia", "time", "decay", "autumn", "winter", "petals", "leaves", "fragrance"],
};

/**
 * Curated "Start Here" reading path for first-time arrivals.
 * Format: array of { id, note } objects
 */
export const START_HERE_IDS = [
  {
    id: "note-1",
    note: "An introductory contemplation on silence, bruised parchment, and memory.",
  },
  {
    id: "note-2",
    note: "Where words brush against the solitary cadence of nightfall.",
  },
  {
    id: "note-3",
    note: "The central motif piece of things left unsaid.",
  },
  {
    id: "note-4",
    note: "A late-night observation preserved beneath candlelight.",
  },
];

