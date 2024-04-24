import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Description } from "@radix-ui/react-dialog";
import { time } from "console";

function PostDetails({
  description,
  timestamp,
  health,
  attack,
  level,
}: {
  description: string;
  timestamp: string;
  health: number;
  attack: number;
  level: number;
}) {
  return (
    <div>
      <p className="text-black text-xl mt-5 mb-5">{description}</p>
      <div className="flex flex-row justify-between stats-container text-xl mt-10">
        <p className="text-black stat">Health: {health}</p>
        <p className="text-black stat">Attack: {attack}</p>
        <p className="text-black stat">Level: {level}</p>
      </div>
    </div>
  );
}

export default function FeedPost({
  postId,
  object,
  username,
  profileImageUrl,
  postImage,
  description,
  health,
  attack,
  level,
  timestamp,
}: {
  postId: any;
  object: any;
  username: any;
  profileImageUrl: any;
  postImage: any;
  description: any;
  health: any;
  attack: any;
  level: any;
  timestamp: any;
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[40rem] min-h-[900px] rounded-xl p-6 border-2 border-green-300">
        <div className="flex justify-between items-start">
          <CardItem
            translateZ="25"
            className="text-2xl font-bold text-neutral-600 text-black"
          >
            {object}
          </CardItem>
          <span className="text-sm text-neutral-400 self-start">
            {new Date(timestamp).toLocaleDateString()}{" "}
            {new Date(timestamp).toLocaleTimeString()}
          </span>
        </div>
        <CardItem
          translateZ="20"
          className="w-full mt-4 relative overflow-hidden rounded-xl"
        >
          <Image
            src={postImage}
            height="800"
            width="1000"
            className="h-[50vh] w-full object-cover rounded-xl"
            alt="thumbnail"
          />
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-start p-2 bg-gray-200 text-gray-800 text-sm rounded-b-xl">
            <div className="flex items-center">
              <Image
                src={profileImageUrl}
                width={1000}
                height={800}
                alt="Profile Image"
                className="w-10 h-10 rounded-full mr-2"
              />
              <span>
                <strong>{username}</strong> found {object}
              </span>
            </div>
          </div>
        </CardItem>
        <PostDetails
          description={description}
          health={health}
          attack={attack}
          level={level}
          timestamp={timestamp}
        />
      </CardBody>
    </CardContainer>
  );
}
