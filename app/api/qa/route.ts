import { NextResponse } from "next/server";
import { QAGenerationChain } from "langchain/chains";
import { GoogleGenerativeAI } from "langchain/llms/google_generative_ai";

export async function POST(req: Request) {
  const { text } = await req.json();

  const llm = new GoogleGenerativeAI();
  const qaChain = new QAGenerationChain({ llm });

  const qaPairs = await qaChain.run(text);

  return NextResponse.json({ qaPairs });
}
