import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import fs from "fs";
import { File } from "formidable";
import { firebaseConfig } from "./firebase";

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export function getStorageRef() {
  const storage = getStorage();
  return ref(storage);
}

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
        .then((snapshot) => {
          console.log("Successfully uploaded:", snapshot);
          resolve(snapshot);
        })
        .catch((error) => {
          console.log("Image upload failed", error);
          reject(error);
        });
    });
  });
}
