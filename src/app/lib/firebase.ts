// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "naturedex-3ba35.firebaseapp.com",
  projectId: "naturedex-3ba35",
  storageBucket: "naturedex-3ba35.appspot.com",
  messagingSenderId: "320817284554",
  appId: "1:320817284554:web:6746ea02ad13c2ee2a7b33",
  measurementId: "G-QZ8BBHLQN4",
};
export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const googleAuth = getAuth(app);
export const credential = GoogleAuthProvider.credential;
export const storage = getStorage(app);
