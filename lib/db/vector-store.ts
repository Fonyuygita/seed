// src/lib/ai/embeddings.ts
import { ChromaClient, Collection } from "chromadb";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { Chroma } from "@langchain/community/vectorstores/chroma";
import { Document } from "langchain/document";
import { v4 as uuidv4 } from "uuid";

// Initialize ChromaDB client
const initializeChromaClient = () => {
  return new ChromaClient({
    path: "http://localhost:8000", // Default ChromaDB server URL
  });
};

// Initialize embeddings model
const createEmbeddings = () =>
  new GoogleGenerativeAIEmbeddings({
    apiKey: process.env.GOOGLE_API_KEY!,
    modelName: "embedding-001",
  });

// Create or get collection
const getCollection = async (collectionName: string = "pdf_qa") => {
  const client = initializeChromaClient();
  const embeddings = createEmbeddings();

  try {
    const collection = await Chroma.fromExistingCollection(embeddings, {
      collectionName,
    });
    return collection;
  } catch {
    return await Chroma.fromDocuments(
      [], // Start with empty documents
      embeddings,
      { collectionName }
    );
  }
};

// Add documents to collection
export const addDocuments = async (texts: string[]) => {
  const collection = await getCollection();

  const documents = texts.map(
    (text) =>
      new Document({
        pageContent: text,
        metadata: {
          id: uuidv4(),
          timestamp: new Date().toISOString(),
        },
      })
  );

  await collection.addDocuments(documents);
  return collection;
};

// Search similar documents
export const searchSimilarDocuments = async (query: string, k: number = 4) => {
  const collection = await getCollection();
  return collection.similaritySearch(query, k);
};

// Delete collection
export const deleteCollection = async (collectionName: string = "pdf_qa") => {
  const client = initializeChromaClient();
  await client.deleteCollection({ name: collectionName });
};

// Batch process documents
export const batchProcessDocuments = async (
  texts: string[],
  batchSize: number = 5
) => {
  const batches = chunk(texts, batchSize);
  const results = [];
  for (const batch of batches) {
    const result = await addDocuments(batch);
    results.push(result);
  }

  return results;
};

// Helper function to chunk array
const chunk = <T>(array: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

// Get collection stats
export const getCollectionStats = async (
  collectionName: string | any = "pdf_qa"
) => {
  const client = initializeChromaClient();
  // @ts-ignore
  const collection = await client.getCollection({ name: collectionName });

  // Get the count of documents in the collection
  const count = await collection.count();

  return {
    documentCount: count,
    collectionName,
  };
};
