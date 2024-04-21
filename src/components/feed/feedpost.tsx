import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

function PostDetails({ title, description, timestamp, health, attack, level }) {
    return (
      <>
        <div className="flex justify-between items-center mt-10">
        </div>
        <p className="text-neutral-500">Health: {health}</p>
        <p className="text-neutral-500">Attack: {attack}</p>
        <p className="text-neutral-500">Level: {level}</p>
      </>
    );
  }
  
  export default function FeedPost({ postId, object, username, profileImageUrl, postImage, health, attack, level, timestamp }) {
    return (
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[40rem] min-h-[900px] rounded-xl p-6 border-2 border-green-300">
          <div className="flex justify-between items-start">
            <CardItem translateZ="60" className="text-2xl font-bold text-neutral-600 text-black">
              {object}
            </CardItem>
            <span className="text-sm text-neutral-400 self-start">
              {new Date(timestamp).toLocaleDateString()} {new Date(timestamp).toLocaleTimeString()}
            </span>
          </div>
          <CardItem translateZ="60" className="w-full mt-4 relative overflow-hidden rounded-xl">
            <Image
              src={postImage}
              height="800"
              width="1000"
              className="h-[50vh] w-full object-cover rounded-xl"
              alt="thumbnail"
            />
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-start p-2 bg-gray-200 text-gray-800 text-sm rounded-b-xl">
              <div className="flex items-center">
                <img src={profileImageUrl} alt="Profile Image" className="w-10 h-10 rounded-full mr-2" />
                <span><strong>{username}</strong> found blank</span>
              </div>
            </div>
          </CardItem>
          <PostDetails
            title={object}
            description="Dynamic description based on object details."
            health={health}
            attack={attack}
            level={level}
          />
        </CardBody>
      </CardContainer>
    );
  }
  