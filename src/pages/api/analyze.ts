import type { NextApiRequest, NextApiResponse } from "next";
import formidable, {IncomingForm} from "formidable";

// Import your image analysis function
import { analyzeImage } from '../../app/services/gemini';

export const config = {
  api: {
    bodyParser: false,  // Disable body parsing; use formidable for file uploads
  },
};

function parseForm(req: NextApiRequest): Promise<{ fields: formidable.Fields; files: formidable.Files }> {
  return new Promise((resolve, reject) => {
    const form = new IncomingForm();
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

export default async function analyze(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "POST") {
      res.status(405).send("Method Not Allowed");
      return;
    }

    const { files } = await parseForm(req);
    const fileList = files.image;
    
    // Handling potential multiple file uploads under the same name "image"
    const file = Array.isArray(fileList) ? fileList[0] : fileList;

    if (!file) {
      res.status(400).json({ error: 'No file uploaded' });
      return;
    }

    // Process the uploaded file
    const result = await analyzeImage(file);
    res.status(200).json({ data: result });
  } catch (error) {
    console.error("API error:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
