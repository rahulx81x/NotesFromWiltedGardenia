import { useState, useCallback, useEffect } from "react";

const STORAGE_KEY = "wilted_bookmarks";

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
    } catch (e) {
      console.warn("Failed to persist bookmarks to localStorage", e);
    }
  }, [bookmarks]);

  const isBookmarked = useCallback((id) => bookmarks.includes(id), [bookmarks]);

  const toggleBookmark = useCallback((id) => {
    if (!id) return;
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
    );
  }, []);

  return { bookmarks, isBookmarked, toggleBookmark };
}
