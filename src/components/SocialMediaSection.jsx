import React from "react";
import { InstagramCardData } from "../Textfiles/webiste-Content";
import { SocialMediaCard } from "./SocialMediaCard";


export default function SocialMediaSection() {
  return (
    <div className="w-full h-auto md:mb-10 mb-2 border md:pt-32">
      <h1 className="text-4xl underline decoration-red-600 w-full text-center tracking-wide">
        Our Instagram
      </h1>
      <div className="flex w-full justify-around mt-10 overflow-x-scroll md:overflow-hidden">
        {
            InstagramCardData.map((item,index) =>{
                return <SocialMediaCard key={index} imgUrl={item.imgurl} />
            })
        }
       
      </div>
    </div>
  );
}


