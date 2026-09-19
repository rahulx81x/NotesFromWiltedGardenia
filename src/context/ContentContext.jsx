import { useState, useEffect } from "react";
import Papa from "papaparse";
import { ContentContext } from "./contextDefinition";
import {
  NOTES_CSV_URL,
  ANTHOLOGIES_CSV_URL,
  DEFAULT_AUTHOR,
  DEFAULT_CURATOR,
  FALLBACK_POEMS,
  FALLBACK_ANTHOLOGIES
} from "../data/config";

export function ContentProvider({ children }) {
  const [poems, setPoems] = useState([]);
  const [poemsLoading, setPoemsLoading] = useState(true);
  const [poemsError, setPoemsError] = useState(null);
  const [poemsFallback, setPoemsFallback] = useState(false);

  const [anthologies, setAnthologies] = useState([]);
  const [anthologiesLoading, setAnthologiesLoading] = useState(true);
  const [anthologiesError, setAnthologiesError] = useState(null);
  const [anthologiesFallback, setAnthologiesFallback] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadPoems() {
      setPoemsLoading(true);
      setPoemsError(null);

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
          setPoemsFallback(true);
          setPoemsLoading(false);
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
                author: (row.author || row.poet || DEFAULT_AUTHOR).trim(),
                intro: (row.intro || row.excerpt || "").trim(),
                contents: (row.contents || row.content || row.body || "").replace(/\\n/g, "\n"),
                publish_date: (row.publish_date || row.date || "").trim(),
                tags: (row.tags || row.tag || "")
                  .split(";")
                  .map((t) => t.trim())
                  .filter(Boolean)
              }))
              .filter((item) => item.name && item.name !== "Untitled");

            parsedItems.sort((a, b) => new Date(b.publish_date) - new Date(a.publish_date));

            if (parsedItems.length === 0) {
              setPoems(FALLBACK_POEMS);
              setPoemsFallback(true);
            } else {
              setPoems(parsedItems);
              setPoemsFallback(false);
            }
            setPoemsLoading(false);
          },
          error: (err) => {
            if (!isMounted) return;
            console.error("PapaParse error in poems:", err);
            setPoems(FALLBACK_POEMS);
            setPoemsFallback(true);
            setPoemsError(err.message || "Could not parse poems CSV");
            setPoemsLoading(false);
          }
        });
      } catch (err) {
        if (!isMounted) return;
        console.error("Fetch error in poems:", err);
        setPoems(FALLBACK_POEMS);
        setPoemsFallback(true);
        setPoemsError(err.message || "Failed to fetch poems");
        setPoemsLoading(false);
      }
    }

    async function loadAnthologies() {
      setAnthologiesLoading(true);
      setAnthologiesError(null);

      const isPlaceholder =
        !ANTHOLOGIES_CSV_URL ||
        ANTHOLOGIES_CSV_URL.trim() === "" ||
        ANTHOLOGIES_CSV_URL.includes("YOUR_ANTHOLOGIES_CSV_URL_HERE");

      if (isPlaceholder) {
        if (isMounted) {
          setAnthologies(FALLBACK_ANTHOLOGIES);
          setAnthologiesFallback(true);
          setAnthologiesLoading(false);
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
                author: (row.author || row.curator || DEFAULT_CURATOR).trim(),
                subtitle: (row.subtitle || "").trim(),
                description: (row.description || row.synopsis || "").trim(),
                link_url: (row.link_url || row.url || row.link || "").trim(),
                status_or_tag: (row.status_or_tag || row.tag || row.status || "").trim()
              }))
              .filter((item) => item.title && item.title !== "Untitled Collection");

            if (parsedItems.length === 0) {
              setAnthologies(FALLBACK_ANTHOLOGIES);
              setAnthologiesFallback(true);
            } else {
              setAnthologies(parsedItems);
              setAnthologiesFallback(false);
            }
            setAnthologiesLoading(false);
          },
          error: (err) => {
            if (!isMounted) return;
            console.error("PapaParse error in anthologies:", err);
            setAnthologies(FALLBACK_ANTHOLOGIES);
            setAnthologiesFallback(true);
            setAnthologiesError(err.message || "Could not parse anthologies CSV");
            setAnthologiesLoading(false);
          }
        });
      } catch (err) {
        if (!isMounted) return;
        console.error("Fetch error in anthologies:", err);
        setAnthologies(FALLBACK_ANTHOLOGIES);
        setAnthologiesFallback(true);
        setAnthologiesError(err.message || "Failed to fetch anthologies");
        setAnthologiesLoading(false);
      }
    }

    loadPoems();
    loadAnthologies();

    return () => {
      isMounted = false;
    };
  }, []);

  const value = {
    poems,
    poemsLoading,
    poemsError,
    poemsFallback,
    anthologies,
    anthologiesLoading,
    anthologiesError,
    anthologiesFallback,
    loading: poemsLoading || anthologiesLoading,
    error: poemsError || anthologiesError,
    isUsingFallback: poemsFallback || anthologiesFallback
  };

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  );
}
