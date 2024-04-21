"use client";
import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { googleAuth, provider } from "@/app/lib/firebase"; // Adjust the import path as necessary
import { createUser } from "@/app/lib/firebaseAPI";
import { Button } from "./button";
import { useRouter } from "next/navigation";
interface loginButtonProps {
  text: string;
}

const LoginButton = (props: loginButtonProps) => {
  const router = useRouter();
  const handleLogin = () => {
    signInWithPopup(googleAuth, provider)
      .then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        console.log(result);
        createUser(result);
        let token: string = result.user.uid;
        console.log(token);
        router.push(`/feed/${token}`);
      })
      .catch((error) => {
        // Handle Errors here.
        console.error(error);
      });
  };

  return <Button onClick={handleLogin}>{props.text}</Button>;
};

export default LoginButton;
