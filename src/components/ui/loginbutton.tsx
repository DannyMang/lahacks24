"use client";
import React from "react";
import { signInWithPopup } from "firebase/auth";
import { googleAuth, provider } from "@/app/lib/firebase"; // Adjust the import path as necessary
interface loginButtonProps {
  text: string;
}

const LoginButton = (props: loginButtonProps) => {
  const handleLogin = () => {
    signInWithPopup(googleAuth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        console.log(result);
      })
      .catch((error) => {
        // Handle Errors here.
        console.error(error);
      });
  };

  return <button onClick={handleLogin}>{props.text}</button>;
};

export default LoginButton;
