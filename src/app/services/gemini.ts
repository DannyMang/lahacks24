import { GoogleGenerativeAI, InlineDataPart } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string
);

export async function analyzeImage(file: Express.Multer.File): Promise<string> {
  // Convert the file to an InlineDataPart object
  async function fileToGenerativePart(file: File): Promise<InlineDataPart> {
    const reader = new FileReader();

    const base64EncodedDataPromise: Promise<string> = new Promise((resolve, reject) => {
      reader.onloadend = () => {
        if (reader.result) {
          resolve(reader.result.toString().split(",")[1]);
        } else {
          reject(new Error("Failed to read file"));
        }
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

    return {
      inlineData: {
        data: await base64EncodedDataPromise,
        mimeType: file.type,
      },
    } as InlineDataPart; // Ensuring type compatibility
  }

  // Prepare and make the AI model call
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
  const prompt = "Please analyze this image and provide details.";
  
  const imagePart = await fileToGenerativePart(file as unknown as File);
  const result = await model.generateContent([prompt, imagePart]);
  const response = await result.response.text(); 
  return response;
}