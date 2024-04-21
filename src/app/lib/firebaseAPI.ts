import { app, firebaseConfig } from "./firebase";
import { db } from "./db";
import { UserCredential } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { fromTheme } from "tailwind-merge";

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

const checkUserExists = async (userId: string) => {
  const userRef = doc(db, "users", userId);
  const userDoc = await getDoc(userRef);
  return userDoc.exists;
};
