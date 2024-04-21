import { db } from "./db";
import { UserCredential, signOut } from "firebase/auth";
import { doc, getDocs, setDoc, collection, getDoc } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
} from "firebase/storage";
import { storage, app } from "./firebase";
import { File } from "formidable";
import fs from "fs";

// creates a user profile in the database
export async function createUser(result: UserCredential) {
  if (await checkUserExists(result.user.uid)) {
    const userProfileRef = doc(db, "users", result.user.uid);
    await setDoc(userProfileRef, {
      userID: result.user.uid,
      name: result.user.displayName,
      email: result.user.email,
      posts: [],
      currentStreak: 0,
    });
  } else {
  }
}
// just checks to see if a user already exists
const checkUserExists = async (userId: string) => {
  const userRef = doc(db, "users", userId);
  const userDoc = await getDoc(userRef);
  return userDoc.exists;
};

export function uploadImage(file: File) {
  const uniqueName = Date.now() + "_" + file.originalFilename;
  const storageRef = ref(storage, uniqueName);

  return new Promise((resolve, reject) => {
    fs.readFile(file.filepath, (err, buffer) => {
      if (err) {
        reject(err);
        return;
      }
      uploadBytes(storageRef, buffer)
        .then(async (snapshot) => {
          console.log("Successfully uploaded:", snapshot);
          const downloadURL = await getDownloadURL(snapshot.ref);
          return { url: downloadURL };
        })
        .catch((error) => {
          console.log("Image upload failed", error);
          reject(error);
        });
    });
  });
}

export async function fetchAllImages() {
  const imagesRef = ref(getStorage(app)); // You can modify this if you store images in a specific folder
  try {
    const result = await listAll(imagesRef);
    const imageUrls = await Promise.all(
      result.items.map(async (item) => {
        // Return URLs for each image, you might need to adjust how you get URLs based on your requirements
        const downloadURL = await getDownloadURL(item);
        return downloadURL;
      })
    );
    return imageUrls;
  } catch (error) {
    console.error("Failed to retrieve images:", error);
    throw error;
  }
}
