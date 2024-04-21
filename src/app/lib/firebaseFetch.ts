import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "naturedex-420909.firebaseapp.com",
  projectId: "naturedex-420909",
  storageBucket: "naturedex-420909.appspot.com",
  messagingSenderId: "187123939060",
  appId: "1:187123939060:web:366416360adc640efbd0a1",
  measurementId: "G-LBG4E0GZBR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// Function to get reference to the storage
export function getStorageRef() {
  return ref(storage);
}

export async function fetchAllImages() {
    const imagesRef = getStorageRef();  // You can modify this if you store images in a specific folder
    try {
        const result = await listAll(imagesRef);
        const imageUrls = await Promise.all(result.items.map(async (item) => {
            // Return URLs for each image, you might need to adjust how you get URLs based on your requirements
            const downloadURL = await getDownloadURL(item);
            return downloadURL;
        }));
        return imageUrls;
    } catch (error) {
        console.error("Failed to retrieve images:", error);
        throw error;
    }
  }