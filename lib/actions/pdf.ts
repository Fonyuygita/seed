// src/lib/actions/pdf.ts
"use server";

import { PDFDocument } from "pdf-lib";
import { revalidatePath } from "next/cache";
import { addDocuments } from "../db/vector-store";
import { generateQAPairs } from "@/lib/ai/question-chain";
import { ProcessError } from "@/lib/utils";

// Process the uploaded PDF
export async function processPDFUpload(formData: FormData) {
  try {
    const file = formData.get("file") as File;
    if (!file) {
      throw new ProcessError("No file provided");
    }

    // Read PDF and extract text
    const buffer = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(buffer);
    const pages = await pdfDoc.getPages();

    // Extract text from all pages
    const texts = await Promise.all(
      pages.map(async (page) => {
        const content = await page.getTextContent();
        return content.items
          .map((item) => item.str)
          .join(" ")
          .trim();
      })
    );

    // Store embeddings in ChromaDB
    await addDocuments(texts);

    // Generate Q&A pairs
    const qaPairs = await generateQAPairs(texts.join("\n"));

    revalidatePath("/dashboard");

    return {
      success: true,
      qaPairs,
      stats: {
        pageCount: pages.length,
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
