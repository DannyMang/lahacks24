import { db } from "./db";
import { UserCredential, signOut } from "firebase/auth";
import { doc, getDocs, setDoc, collection, getDoc } from "firebase/firestore";

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
