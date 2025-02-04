import { NextResponse } from "next/server";
// import { QAGenerationChain } from "langchain/chains";
// import { GoogleGenerativeAI } from "langchain/llms/google_generative_ai";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

export async function POST(req: Request) {
  const { text } = await req.json();

  const llm = new ChatGoogleGenerativeAI({
    model: "gemini-1.5-pro",
    temperature: 0,
    maxRetries: 2,
    // other params...
  });
  const qaChain = new QAGenerationChain({ llm });

  const qaPairs = await qaChain.run(text);

  return NextResponse.json({ qaPairs });
}
