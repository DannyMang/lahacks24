"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import FeedPost from "@/components/feed/feedpost";
import MainHeader from "@/components/main/mainheader";
import { useSearchParams } from "next/navigation";
export default function Component() {
  const searchParams = useSearchParams();
  const userId: string | null = searchParams.get("userId");
  console.log(userId);
  const feedData = [
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
    {
      postId: 3,
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
      {feedData.map((data, index) => (
        <FeedPost
          key={data.postId} // Use postId instead of index for a unique key if postId is guaranteed unique
          postId={data.postId}
          object={data.object}
          username={data.username}
          postImage={data.postImage}
          profileImageUrl={data.profileImageUrl}
          description={data.description}
          health={data.health}
          attack={data.attack}
          level={data.level}
          timestamp={data.timestamp}
        />
      ))}
      <h1 className="w-full text-center text-xl font-bold mt-20">
        Go Outside For A Break :)
      </h1>
      <div className="h-20 bg-gradient-to-r from-green-100 to-green-200"></div>
    </div>
  );
}
