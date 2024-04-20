import { GoogleGenerativeAI, InlineDataPart } from "@google/generative-ai";

// Assuming the API_KEY is defined elsewhere or should be imported if needed

const genAI = new GoogleGenerativeAI(
  process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string
);

// Converts a File object to an InlineDataPart object.
async function fileToGenerativePart(file: File): Promise<InlineDataPart> {
  const base64EncodedDataPromise = new Promise<string | ArrayBuffer | null>(
    (resolve) => {
      const reader = new FileReader();
      reader.onloadend = () =>
        resolve(reader.result ? reader.result.toString().split(",")[1] : null);
      reader.readAsDataURL(file);
    }
  );

  return {
    inlineData: {
      data: await base64EncodedDataPromise,
      mimeType: file.type,
    },
  } as InlineDataPart; // Cast as InlineDataPart explicitly if needed
}

export async function run(): Promise<string> {
  // For text-and-images input (multimodal), use the gemini-pro-vision model
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

  const prompt = "What's different between these pictures?";

  const fileInputEl = document.querySelector(
    "input[type=file]"
  ) as HTMLInputElement;
  if (!fileInputEl.files) {
    console.error("No files selected.");
    return "";
  }

  const imageParts = await Promise.all(
    Array.from(fileInputEl.files).map(fileToGenerativePart)
  );

  const result = await model.generateContent([prompt, ...imageParts]);
  const response = await result.response;
  const text = await response.text();
  return text;
}
