import { useState, useCallback } from "react";
import { ProcessError } from "@/lib/utils";
import { processPDFUpload } from "@/lib/actions/pdf";
import { useQA } from "./useQA";
// import { useToast } from "@/components/ui/use-toast";
import { useToast } from "@/hooks/use-toast";

interface UsePDFUploadReturn {
  uploading: boolean;
  progress: number;
  handleUpload: (file: File) => Promise<void>;
}

export function usePDFUpload(): UsePDFUploadReturn {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const { addQAPair } = useQA();
  const { toast } = useToast();

  const handleUpload = useCallback(
    async (file: File) => {
      if (file.size > 2 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a PDF file smaller than 2MB",
          variant: "destructive",
        });
        return;
      }

      try {
        setUploading(true);
        const formData = new FormData();
        formData.append("file", file);

        // Simulate upload progress
        const interval = setInterval(() => {
          setProgress((prev) => Math.min(prev + 5, 95));
        }, 100);

        const { qaPairs } = await processPDFUpload(formData);

        clearInterval(interval);
        setProgress(100);

        // Add the generated Q&A pairs
        qaPairs.forEach((pair) => addQAPair(pair));

        toast({
          title: "Upload successful",
          description: `Generated ${qaPairs.length} Q&A pairs from your PDF`,
        });
      } catch (error) {
        toast({
          title: "Upload failed",
          description:
            error instanceof ProcessError
              ? error.message
              : "Failed to process PDF",
          variant: "destructive",
        });
        console.log("failed to upload pdf", error);
      } finally {
        setUploading(false);
        setProgress(0);
      }
    },
    [addQAPair, toast]
  );

  return {
    uploading,
    progress,
    handleUpload,
  };
}
