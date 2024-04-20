import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "naturedex-420909.firebaseapp.com",
  projectId: "naturedex-420909",
  storageBucket: "naturedex-420909.appspot.com",
  messagingSenderId: "187123939060",
  appId: "1:187123939060:web:366416360adc640efbd0a1",
  measurementId: "G-LBG4E0GZBR",
};

export function getStorageRef(){ 
  const storage = getStorage();
  return ref(storage);
}

export function uploadImage(file: File){
  const uniqueName = Date.now() + ' ' + file.name;
  const ref = getStorageRef();
  uploadBytes(ref, file).then((snapshot) => { 
    console.log('successfuly uploaded ')
  }).catch((error)=>{
    console.log("image upload failed", error);
  });
}
