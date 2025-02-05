"use server";

import { PDFDocument } from "pdf-lib";
import { revalidatePath } from "next/cache";
import { addDocuments, searchSimilarDocuments } from "../db/vector-store";
import { generateQAPairs } from "@/lib/ai/question-chain";
import { ProcessError } from "@/lib/utils";
import pdfParse from "pdf-parse"; // Default import

// Process the uploaded PDF
export async function processPDFUpload(formData: FormData) {
  try {
    const file = formData.get("file") as File;
    if (!file) {
      throw new ProcessError("No file provided");
    }

    // Convert File to Buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Parse PDF
    const pdfData = await pdfParse(buffer);
    const texts = [pdfData.text]; // pdf-parse extracts text directly

    // Rest of your existing code remains the same
    await addDocuments(texts);
    const qaPairs = await generateQAPairs(texts.join("\n"));

    return {
      success: true,
      qaPairs,
      stats: {
        pageCount: pdfData.numpages,
        textLength: texts.join("\n").length,
      },
    };
  } catch (error) {
    console.error("PDF processing error:", error);
    throw new ProcessError(
      error instanceof Error ? error.message : "Failed to process PDF"
    );
  }
}

// Search through processed documents
export async function searchDocuments(query: string) {
  try {
    const results = await searchSimilarDocuments(query);
    return {
      success: true,
      results,
    };
  } catch (error) {
    console.error("Search error:", error);
    throw new ProcessError("Failed to search documents");
  }
}
