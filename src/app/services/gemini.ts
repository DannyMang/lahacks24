import { GoogleGenerativeAI, InlineDataPart } from "generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string
);

async function fileToGenerativePart(file: File) {
  const base64EncodedDataPromise = new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve((reader.result as string).split(",")[1]);
    reader.readAsDataURL(file);
  });
  return {
    inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
  };
}

interface GenerativeModel {
  generateContent(parts: (string | GenerativePart)[]): Promise<AIResponse>;
}

interface AIResponse {
  response: Promise<Response>;
}

interface GenerativePart {
  // Define properties based on what the generative part should contain
}

async function analyzeImage(): Promise<string> {
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

  const prompt =
    "This might be an image of an animal or a plant. If so, identify it and return a string. ";
  const fileInputEl = document.querySelector(
    "input[type=file]"
  ) as HTMLInputElement;

  if (!fileInputEl?.files) {
    console.error("No files provided.");
    return "";
  }

  const fileToGenerativePart = async (file: File): Promise<InlineDataPart> => {
    const base64EncodedDataPromise: Promise<string> = new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve((reader.result as string).split(",")[1]);
      reader.readAsDataURL(file);
    });
    return {
      inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
    };
  };

  const imageParts: InlineDataPart[] = await Promise.all(
    Array.from(fileInputEl.files).map(fileToGenerativePart)
  );

  const result = await model.generateContentStream([prompt, ...imageParts]);
  let text = "";
  for await (const chunk of result.stream) {
    const chunkTest = chunk.text();
    text += chunkTest;
  }
  return text;
}
