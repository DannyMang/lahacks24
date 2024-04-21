import fetch from "node-fetch";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Access environment variable on the server-side
  const firebaseapikey = process.env.FIREBASE_API_KEY;
  // Return only what is necessary and safe to expose
  res.status(200).json({ apiKey: firebaseapikey });
}
