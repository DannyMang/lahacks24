// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import Error from "next/error";
import { useState, useEffect } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const useFirebaseApiKey = () => {
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    fetch("../api/keys")
      .then((response) => response.json())
      .then((data) => {
        setApiKey(data.apiKey);
        console.log(data.apiKey);
      })
      .catch((error) => {
        console.error("Error fetching API key:", error);
      });
  }, []);

  return apiKey;
};

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "naturedex-420909.firebaseapp.com",
  projectId: "naturedex-420909",
  storageBucket: "naturedex-420909.appspot.com",
  messagingSenderId: "187123939060",
  appId: "1:187123939060:web:366416360adc640efbd0a1",
  measurementId: "G-LBG4E0GZBR",
};
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const googleAuth = getAuth(app);

/*
export const signIn = (provider: GoogleAuthProvider) => {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

console.log(process.env.FIREBASE_API_KEY);
*/
