import { NextResponse } from "next/server";
import { PDFDocument } from "pdf-lib";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const buffer = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(buffer);
  const text = (await pdfDoc.getPages())[0]
    .getTextContent()
    .items.map((item) => item.str)
    .join(" ");

  return NextResponse.json({ text });
}
