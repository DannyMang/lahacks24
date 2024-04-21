"use client";
import Image from "next/image";
import {useState, useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import FeedPost from "@/components/feed/feedpost";
import MainHeader from "@/components/main/mainheader";
import { useSearchParams } from "next/navigation";
import { fetchAllImages } from "../lib/firebaseFetch";

export default function Component() {
  const searchParams = useSearchParams();
  const userId: string | null = searchParams?.get("userId") ?? null;
  const [images, setImages] = useState<string[]>([]);
  const [uploadStatus, setUploadStatus] = useState("");
  const [open, setOpen] = useState(false);
  console.log(userId);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const imageUrls = await fetchAllImages(); // Fetch images from Firebase
        setImages(imageUrls); // Store image URLs in state
      } catch (error) {
        console.error("Failed to load images:", error);
        setOpen(true);
        setUploadStatus("Failed to load images");
      }
    };

    loadImages();
  }, []);

  const feedData = [
    {
      postId: 0,
      object: "Nerd",
      username: "Ryan Nguyen",
      profileImageUrl: "https://via.placeholder.com/50",
      postImage: "https://via.placeholder.com/800",
      description: "This is a very rare Pokemon called a \"Nerdling\". It is a very intelligent Pokemon that is said to be able to learn any move. It is also said to be very shy and only comes out of its hiding spot when it feels safe.",
      health: 30,
      attack: 60,
      level: 5,
      timestamp: new Date().toISOString(),
    },
    {
      postId: 1,
      object: "DawgCat",
      username: "John Doe",
      profileImageUrl: "https://via.placeholder.com/50",
      postImage: "https://via.placeholder.com/800",
      description: "description will be here",
      health: 100,
      attack: 50,
      level: 5,
      timestamp: new Date().toISOString(),
    },
    {
      postId: 2,
      object: "DawgCat",
      username: "John Doe",
      profileImageUrl: "https://via.placeholder.com/50",
      postImage: "https://via.placeholder.com/800",
      description: "description will be here",
      health: 100,
      attack: 50,
      level: 5,
      timestamp: new Date().toISOString(),
    },
  ];

  return (
    <div className="bg-gradient-to-r from-green-100 to-green-200">
      <MainHeader userId={userId as string} />
      {images.map((src, index) => ( //fix later
        <FeedPost
          key={index} // Use postId instead of index for a unique key if postId is guaranteed unique
          postId={index}
          object={feedData.find(item => item.postId === index)?.object}
          username={feedData.find(item => item.postId === index)?.username}
          postImage={src}
          profileImageUrl="https://via.placeholder.com/50"
          description={feedData.find(item => item.postId === index)?.description}
          health={feedData.find(item => item.postId === index)?.health}
          attack={feedData.find(item => item.postId === index)?.attack}
          level={feedData.find(item => item.postId === index)?.level}
          timestamp= {new Date().toISOString()}
        />
      ))}
      <h1 className="w-full text-center text-xl font-bold mt-20">
        Go Outside For A Break :)
      </h1>
      <div className="h-20 bg-gradient-to-r from-green-100 to-green-200"></div>
    </div>
  );
}
