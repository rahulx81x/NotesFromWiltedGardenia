/**
 * Date utility helpers for parsing and formatting publish_date values
 * coming from Google Sheets CSV exports.
 *
 * Sheets may export dates in various formats:
 *   - "YYYY-MM-DD"        (ISO standard, preferred)
 *   - "M/D/YYYY"          (US locale short)
 *   - "DD/MM/YYYY"        (EU locale short)
 *   - "Month D, YYYY"     (long English)
 *   - plain year "YYYY"   (year-only)
 *
 * Strategy: parse to a JS Date for sorting; format separately for display.
 */

/**
 * Attempts to parse a raw date string from CSV into a JS Date object.
 * Returns a valid Date or null if unparseable.
 */
export function parsePublishDate(raw) {
  if (!raw || typeof raw !== "string") return null;
  const s = raw.trim();
  if (!s) return null;

  // ISO YYYY-MM-DD
  const isoMatch = s.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (isoMatch) {
    const [, y, m, d] = isoMatch.map(Number);
    const date = new Date(y, m - 1, d);
    if (!isNaN(date.getTime())) return date;
  }

  // M/D/YYYY or MM/DD/YYYY (US)
  const usMatch = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (usMatch) {
    const [, m, d, y] = usMatch.map(Number);
    const date = new Date(y, m - 1, d);
    if (!isNaN(date.getTime())) return date;
  }

  // D.M.YYYY (European dot-separated)
  const dotMatch = s.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
  if (dotMatch) {
    const [, d, m, y] = dotMatch.map(Number);
    const date = new Date(y, m - 1, d);
    if (!isNaN(date.getTime())) return date;
  }

  // Plain year "YYYY"
  const yearOnly = s.match(/^(\d{4})$/);
  if (yearOnly) {
    const date = new Date(Number(yearOnly[1]), 0, 1);
    if (!isNaN(date.getTime())) return date;
  }

  // Fallback: let JS engine try (handles "Month D, YYYY", etc.)
  const fallback = new Date(s);
  if (!isNaN(fallback.getTime())) return fallback;

  return null;
}

/**
 * Formats a date value into a human-readable display string.
 * @param {Date|string|null} value
 * @param {"long"|"medium"|"short"|"year"} [style="long"]
 * @returns {string}
 */
export function formatDisplayDate(value, style = "long") {
  const date = value instanceof Date ? value : parsePublishDate(value);
  if (!date || isNaN(date.getTime())) return "Undated";

  switch (style) {
    case "year":
      return String(date.getFullYear());
    case "short":
      return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    case "medium":
      return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
    case "long":
    default:
      return date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  }
}

/**
 * Returns an ISO string (YYYY-MM-DD) for use in HTML dateTime attributes.
 * @param {Date|string|null} value
 * @returns {string}
 */
export function toISODateString(value) {
  const date = value instanceof Date ? value : parsePublishDate(value);
  if (!date || isNaN(date.getTime())) return "";
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/**
 * Extracts a 4-digit year string from a raw date string.
 * @param {string|null} raw
 * @returns {string|null}
 */
export function extractYear(raw) {
  const date = parsePublishDate(raw);
  if (!date) return null;
  return String(date.getFullYear());
}
