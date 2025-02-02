import { NextResponse } from "next/server";
import { GoogleGenerativeAIEmbeddings } from "langchain/embeddings/google_generative_ai";
import { FaissStore } from "faiss-node";

export async function POST(req: Request) {
  const { text } = await req.json();

  const embeddings = new GoogleGenerativeAIEmbeddings();
  const vector = await embeddings.embedQuery(text);

  const index = new FaissStore(768); // 768-dimensional embeddings
  index.add([vector]);

  return NextResponse.json({ success: true });
}
