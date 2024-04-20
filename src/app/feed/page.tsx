import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import FeedPost from "@/components/feed/feedpost";
import MainHeader from "@/components/main/mainheader";

export default function Component() {
  const feedData = [
    {
      mainTitle: "DawgCat",
      username: "John Doe",
      profileImageUrl: "https://via.placeholder.com/50",
      posts: [
        { title: "First Detail", description: "Detail one description" },
        { title: "Second Detail", description: "Detail two description" },
        { title: "Third Detail", description: "Detail three description" }
      ]
    },
    {
      mainTitle: "DawgCat",
      username: "John Doe",
      profileImageUrl: "https://via.placeholder.com/50",
      posts: [
        { title: "First Detail", description: "Detail one description" },
        { title: "Second Detail", description: "Detail two description" },
        { title: "Third Detail", description: "Detail three description" }
      ]
    },
    {
      mainTitle: "DawgCat",
      username: "John Doe",
      profileImageUrl: "https://via.placeholder.com/50",
      posts: [
        { title: "First Detail", description: "Detail one description" },
        { title: "Second Detail", description: "Detail two description" },
        { title: "Third Detail", description: "Detail three description" }
      ]
    },
  ];

  return (
    <div className="bg-gradient-to-r from-green-100 to-green-100">
      <MainHeader/>
      {feedData.map((data, index) => (
        <FeedPost
          key={index}
          mainTitle={data.mainTitle}
          username={data.username}
          profileImageUrl={data.profileImageUrl}
          posts={data.posts}
        />
      ))}
      <h1 className="w-full text-center mt-20">Go Outside For A Break :) </h1>
      <div className="h-20 bg-gradient-to-r from-green-100 to-green-100"></div>
    </div>
  );
}
