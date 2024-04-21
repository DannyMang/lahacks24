"use client";
import React from "react";
import { signIn, provider } from "@/app/lib/firebaseAuth";
import { Button } from "./button";

interface LoginButtonProps {
  text: string;
}

export default function LoginButton(props: LoginButtonProps) {
  function handleClick() {
    signIn(provider);
  }
  return (
    <Button
      className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
      onClick={handleClick}
    >
      {props.text}
    </Button>
  );
}
