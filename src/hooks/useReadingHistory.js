import { useState, useCallback, useEffect } from "react";

const STORAGE_KEY = "wilted_reading_history";
const MAX_HISTORY = 20;

export function useReadingHistory() {
  const [history, setHistory] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    } catch (e) {
      console.warn("Failed to persist reading history to localStorage", e);
    }
  }, [history]);

  const recordRead = useCallback((id) => {
    if (!id) return;
    setHistory((prev) => {
      const filtered = prev.filter((entry) => entry.id !== id);
      const newEntry = { id, readAt: new Date().toISOString() };
      return [newEntry, ...filtered].slice(0, MAX_HISTORY);
    });
  }, []);

  return { history, recordRead };
}
