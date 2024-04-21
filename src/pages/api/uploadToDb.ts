import IncomingForm from "formidable/Formidable";
import type { NextApiRequest, NextApiResponse } from "next";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/app/lib/db";

export default async function uploadToDb(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send("method not allowed");
  }
  const { name, description, health, timestamp, imageURL, userID } = req.body;
  const docRef = await addDoc(collection(db, "images"), {
    name,
    description,
    health,
    timestamp,
    imageURL,
    userID,
  });
  res
    .status(200)
    .json({ message: "info successfuly received and added to db" });
}
