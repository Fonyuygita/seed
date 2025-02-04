// src/hooks/useChroma.ts
import { searchDocuments } from "@/lib/actions/pdf";
import { useState, useCallback } from "react";
// import { searchDocuments } from "@/lib/actions/pdf";

interface SearchResult {
  pageContent: string;
  metadata: {
    id: string;
    timestamp: string;
  };
}

interface UseChromaReturn {
  results: SearchResult[];
  loading: boolean;
  error: string | null;
  search: (query: string) => Promise<void>;
}

export function useChroma(): UseChromaReturn {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = useCallback(async (query: string) => {
    try {
      setLoading(true);
      setError(null);
      const { results } = await searchDocuments(query);
      setResults(results);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    results,
    loading,
    error,
    search,
  };
}
