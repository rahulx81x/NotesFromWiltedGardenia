import { useEffect } from "react";

const DEFAULT_TITLE = "Notes from a Wilted Gardenia — the silence of things left unsaid";

/**
 * Custom hook to update document title per-route / per-poem and restore on unmount.
 * @param {string} [title] - Specific page or poem title to display
 */
export function useDocumentTitle(title) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title
      ? `${title} — Notes from a Wilted Gardenia`
      : DEFAULT_TITLE;

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}
