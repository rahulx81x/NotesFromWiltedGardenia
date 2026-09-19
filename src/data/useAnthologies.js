import { useContent } from "../context/useContent";

/**
 * Hook to access curated anthologies from the centralized ContentContext
 */
export function useAnthologies() {
  const { anthologies, anthologiesLoading, anthologiesError, anthologiesFallback } = useContent();
  return {
    anthologies,
    loading: anthologiesLoading,
    error: anthologiesError,
    isUsingFallback: anthologiesFallback
  };
}
