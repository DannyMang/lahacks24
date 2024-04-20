// Import necessary types from Next.js
import type { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";

// Import your image analysis function
import { analyzeImage } from '../app/services/gemini';

export const config = {
  api: {
    bodyParser: false,  // Disable body parsing; use formidable for file uploads
  },
};
/**
 * Next.js API handler for uploading an image and processing it.
 * @param req NextApiRequest, expecting a file in 'image' field.
 * @param res NextApiResponse, returns JSON with analysis result or error.
 */
export default async function analyze(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Only allow POST method
    if (req.method !== "POST") {
      return res.status(405).send("Method Not Allowed");
    }

    // Formidable to parse form data including file uploads
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
        if (err) {
            return res.status(500).json({ error: "Error parsing the form data." });
        }

        // Check if the file was uploaded
        const file: Express.Multer.File = files.image as unknown as Express.Multer.File;
        if (!file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        // Process the uploaded file
        const result = await analyzeImage(file);
        res.status(200).json({ data: result });
    });
  } catch (error) {
    // Handle errors safely
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
}
