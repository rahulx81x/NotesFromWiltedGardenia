import { useState, useEffect } from "react";
import Papa from "papaparse";
import { NOTES_CSV_URL, FALLBACK_POEMS } from "./config";

/**
 * Hook to fetch and parse standalone poems from Google Sheets CSV
 * or fall back gracefully to atmospheric sample data.
 */
export function usePoems() {
  const [poems, setPoems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isUsingFallback, setIsUsingFallback] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadPoems() {
      setLoading(true);
      setError(null);

      const isPlaceholder =
        !NOTES_CSV_URL ||
        NOTES_CSV_URL.trim() === "" ||
        NOTES_CSV_URL.includes("YOUR_NOTES_CSV_URL_HERE");

      if (isPlaceholder) {
        if (isMounted) {
          const sorted = [...FALLBACK_POEMS].sort((a, b) =>
            new Date(b.publish_date) - new Date(a.publish_date)
          );
          setPoems(sorted);
          setIsUsingFallback(true);
          setLoading(false);
        }
        return;
      }

      try {
        const response = await fetch(NOTES_CSV_URL);
        if (!response.ok) {
          throw new Error(`Failed to fetch CSV: ${response.status} ${response.statusText}`);
        }
        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          transformHeader: (header) => header.trim().toLowerCase(),
          complete: (results) => {
            if (!isMounted) return;

            if (results.errors && results.errors.length > 0) {
              console.warn("CSV parsing notices:", results.errors);
            }

            const parsedItems = (results.data || [])
              .map((row) => ({
                id: (row.id || "").trim() || (row.name ? row.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") : `poem-${Math.random()}`),
                name: (row.name || row.title || "Untitled").trim(),
                author: (row.author || row.poet || "Rahul Gouri").trim(),
                intro: (row.intro || row.excerpt || "").trim(),
                contents: (row.contents || row.content || row.body || "").replace(/\\n/g, "\n"),
                publish_date: (row.publish_date || row.date || "").trim(),
                tags: (row.tags || row.tag || "")
                  .split(";")
                  .map((t) => t.trim())
                  .filter(Boolean)
              }))
              .filter((item) => item.name && item.name !== "Untitled");

            // Sort by publish_date descending
            parsedItems.sort((a, b) => new Date(b.publish_date) - new Date(a.publish_date));

            if (parsedItems.length === 0) {
              // If CSV parsed but was empty, use fallbacks
              setPoems(FALLBACK_POEMS);
              setIsUsingFallback(true);
            } else {
              setPoems(parsedItems);
              setIsUsingFallback(false);
            }
            setLoading(false);
          },
          error: (err) => {
            if (!isMounted) return;
            console.error("PapaParse error:", err);
            // Fall back gracefully so reader is never empty
            setPoems(FALLBACK_POEMS);
            setIsUsingFallback(true);
            setError(err.message || "Could not parse poems CSV");
            setLoading(false);
          }
        });
      } catch (err) {
        if (!isMounted) return;
        console.error("Fetch error:", err);
        setPoems(FALLBACK_POEMS);
        setIsUsingFallback(true);
        setError(err.message || "Failed to fetch poems");
        setLoading(false);
      }
    }

    loadPoems();

    return () => {
      isMounted = false;
    };
  }, []);

  return { poems, loading, error, isUsingFallback };
}
