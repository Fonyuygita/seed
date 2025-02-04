//v03.api.js.langchain.com/classes/_langchain_google_genai.ChatGoogleGenerativeAI.html
// src/lib/ai/prompts.ts
// https: import { PromptTemplate } from "langchain/prompts";
import { ChatPromptTemplate } from "@langchain/core/prompts";

export const QA_PROMPT = ChatPromptTemplate.fromTemplate(`
You are a highly knowledgeable AI assistant tasked with generating accurate Q&A pairs from PDF content.
Based on the following context, generate a comprehensive and accurate question-answer pair.
The answer should be detailed but concise, and directly address the question.

Context: {context}

Guidelines:
- Generate questions that test understanding rather than just recall
- Ensure answers are factual and directly supported by the context
- Use clear, professional language
- Include relevant technical details when appropriate
- Avoid ambiguous or overly broad questions

Question: Create a specific, well-formed question about a key concept from the context.
Answer: Provide a clear, accurate answer supported by the context.
`);

export const QA_REFINE_PROMPT = ChatPromptTemplate.fromTemplate(`
You are a helpful AI assistant tasked with refining Q&A pairs for better clarity and accuracy.

Original Q&A Pair:
Question: {question}
Answer: {current_answer}

Additional Context: {context}

Please refine the answer considering the following:
1. Accuracy: Ensure all information is factually correct and supported by the context
2. Completeness: Add any missing relevant information
3. Clarity: Improve the explanation if needed
4. Conciseness: Remove any unnecessary information

Refined Answer:
`);
