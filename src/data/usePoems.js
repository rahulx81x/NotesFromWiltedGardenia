import { useContent } from "../context/useContent";

/**
 * Hook to access standalone poems from the centralized ContentContext
 */
export function usePoems() {
  const { poems, poemsLoading, poemsError, poemsFallback } = useContent();
  return {
    poems,
    loading: poemsLoading,
    error: poemsError,
    isUsingFallback: poemsFallback
  };
}
