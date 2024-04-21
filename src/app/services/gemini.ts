import { GoogleGenerativeAI, InlineDataPart } from "@google/generative-ai";
import fs from 'fs';
import util from 'util';
import formidable from 'formidable';

const readFile = util.promisify(fs.readFile);

const genAI = new GoogleGenerativeAI(
  process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string
);

export async function analyzeImage(file: formidable.File): Promise<string> {
  // Convert the file to an InlineDataPart object
  async function fileToGenerativePart(file: formidable.File): Promise<InlineDataPart> {
    const fileData = await readFile(file.filepath);
    const base64EncodedData = fileData.toString('base64');

    return {
      inlineData: {
        data: base64EncodedData,
        mimeType: file.mimetype || 'application/octet-stream',
      },
    } as InlineDataPart; // Ensuring type compatibility
  }

  // Prepare and make the AI model call
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
  const prompt = "Please analyze this image and provide details.";
  
  const imagePart = await fileToGenerativePart(file);
  const result = await model.generateContent([prompt, imagePart]);
  const response = await result.response.text(); 
  return response;
}
