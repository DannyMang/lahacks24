// Import necessary types from Next.js
import type { NextApiRequest, NextApiResponse } from "next";
import {IncomingForm} from "formidable";
import { uploadImage } from "../app/lib/firebaseStorage";

export const config = {
  api: {
    bodyParser: false,  // Disable body parsing; use formidable for file uploads
  },
};
/**
 * Next.js API handler for uploading an image and processing it.
 * @param req NextApiRequest, expecting a file in 'image' field.
 * @param res NextApiResponse, status is returned 
 */
export default async function upload(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
      if (req.method !== "POST") {
        return res.status(405).send("Method Not Allowed");
      }
  
      const form = new IncomingForm({
        uploadDir: "/tmp", // Temporary directory to store files
        keepExtensions: true, // Retain the .jpg, .png extensions of uploaded files
        maxFileSize: 10 * 1024 * 1024 // 10MB limit for file size
      });
  
      form.on('fileBegin', (name, file) => {
          console.log(`Uploading ${file.originalFilename}...`);
      });
  
      form.on('file', (name, file) => {
          console.log(`Received ${file.originalFilename}`);
          uploadImage(file) // Replace 'File' with 'file'
              .then(() => {
                  res.status(200).json({ message: "Image successfully uploaded." });
              })
              .catch((error) => {
                  res.status(500).json({ error: error.message });
              });
      });
  
      form.on('error', (err) => {
          console.error('Error occurred during file upload:', err);
          res.status(500).json({ error: "File upload error." });
      });
  
      form.on('end', () => {
          console.log('File upload complete.');
      });
  
      form.parse(req);
  }