// import { NextResponse } from "next/server";
// // import { QAGenerationChain } from "langchain/chains";
// // import { GoogleGenerativeAI } from "langchain/llms/google_generative_ai";

// export async function POST(req: Request) {
//   const { text } = await req.json();

//   const llm = new GoogleGenerativeAI();
//   const qaChain = new QAGenerationChain({ llm });

//   const qaPairs = await qaChain.run(text);

//   return NextResponse.json({ qaPairs });
// }

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

  const aiMsg = await llm.invoke([
    [
      "system",
      "You are a helpful assistant that translates English to French. Translate the user sentence.",
    ],
    ["human", "I love programming."],
  ]);
  // const qaChain = new QAGenerationChain({ llm });
  console.log(aiMsg.content);
  const qaPairs = await aiMsg.content;

  // const qaPairs = await qaChain.run(text);

  return NextResponse.json({ qaPairs });
}
