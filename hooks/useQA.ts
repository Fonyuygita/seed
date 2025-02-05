// src/hooks/useQA.ts
import { useState, useCallback } from "react";
import { QAPair } from "@/components/qa/QaList";

interface UseQAReturn {
  qaPairs: QAPair[];
  loading: boolean;
  error: string | null;
  addQAPair: (pair: Omit<QAPair, "id" | "timestamp">) => void;
  deleteQAPair: (id: string) => void;
  clearQAPairs: () => void;
}

export function useQA(initialPairs: QAPair[] = []): UseQAReturn {
  const [qaPairs, setQAPairs] = useState<QAPair[]>(initialPairs);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addQAPair = useCallback((pair: Omit<QAPair, "id" | "timestamp">) => {
    const newPair: QAPair = {
      ...pair,
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
    };
    setQAPairs((prev) => [...prev, newPair]);
  }, []);

  const deleteQAPair = useCallback((id: string) => {
    setQAPairs((prev) => prev.filter((pair) => pair.id !== id));
  }, []);

  const clearQAPairs = useCallback(() => {
    setQAPairs([]);
  }, []);

  return {
    qaPairs,
    loading,
    error,
    addQAPair,
    deleteQAPair,
    clearQAPairs,
  };
}
