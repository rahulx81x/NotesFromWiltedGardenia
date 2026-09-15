import { useState, useEffect } from "react";
import Papa from "papaparse";
import { ANTHOLOGIES_CSV_URL, FALLBACK_ANTHOLOGIES } from "./config";

/**
 * Hook to fetch and parse curated anthologies from Google Sheets CSV
 * or fall back gracefully to atmospheric sample volumes.
 */
export function useAnthologies() {
  const [anthologies, setAnthologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isUsingFallback, setIsUsingFallback] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadAnthologies() {
      setLoading(true);
      setError(null);

      const isPlaceholder =
        !ANTHOLOGIES_CSV_URL ||
        ANTHOLOGIES_CSV_URL.trim() === "" ||
        ANTHOLOGIES_CSV_URL.includes("YOUR_ANTHOLOGIES_CSV_URL_HERE");

      if (isPlaceholder) {
        if (isMounted) {
          setAnthologies(FALLBACK_ANTHOLOGIES);
          setIsUsingFallback(true);
          setLoading(false);
        }
        return;
      }

      try {
        const response = await fetch(ANTHOLOGIES_CSV_URL);
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

            const parsedItems = (results.data || [])
              .map((row) => ({
                id: (row.id || "").trim() || (row.title ? row.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") : `anthology-${Math.random()}`),
                title: (row.title || row.name || "Untitled Collection").trim(),
                author: (row.author || row.curator || "Rahul Gouri").trim(),
                subtitle: (row.subtitle || "").trim(),
                description: (row.description || row.synopsis || "").trim(),
                link_url: (row.link_url || row.url || row.link || "").trim(),
                status_or_tag: (row.status_or_tag || row.tag || row.status || "").trim()
              }))
              .filter((item) => item.title && item.title !== "Untitled Collection");

            if (parsedItems.length === 0) {
              setAnthologies(FALLBACK_ANTHOLOGIES);
              setIsUsingFallback(true);
            } else {
              setAnthologies(parsedItems);
              setIsUsingFallback(false);
            }
            setLoading(false);
          },
          error: (err) => {
            if (!isMounted) return;
            console.error("PapaParse error in anthologies:", err);
            setAnthologies(FALLBACK_ANTHOLOGIES);
            setIsUsingFallback(true);
            setError(err.message || "Could not parse anthologies CSV");
            setLoading(false);
          }
        });
      } catch (err) {
        if (!isMounted) return;
        console.error("Fetch error in anthologies:", err);
        setAnthologies(FALLBACK_ANTHOLOGIES);
        setIsUsingFallback(true);
        setError(err.message || "Failed to fetch anthologies");
        setLoading(false);
      }
    }

    loadAnthologies();

    return () => {
      isMounted = false;
    };
  }, []);

  return { anthologies, loading, error, isUsingFallback };
}
