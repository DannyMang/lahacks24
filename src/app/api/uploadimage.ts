// Import necessary types from Next.js
import type { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";

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
    }
    catch (error) {
        // Handle errors safely
        if (error instanceof Error) {
          res.status(500).json({ error: error.message });
        } else {
          res.status(500).json({ error: 'An unknown error occurred' });
        }
      }
    }
