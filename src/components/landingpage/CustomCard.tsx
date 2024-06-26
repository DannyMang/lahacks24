"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

export function CustomCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="20"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Capture and Collect Nature Cards
        </CardItem>
        <CardItem
          as="p"
          translateZ="30"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Upload and share your nature photography with your friends! Utilize AI
          Image Recognition to identify the flora and fauna in your photos.
        </CardItem>
        <CardItem translateZ="50" className="w-full mt-4">
          <Image
            src="/placeholder.svg"
            height="500"
            width="500"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Stats Placeholder
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
