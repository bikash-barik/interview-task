import React from "react";
import banner from "../assets/banner.png";
import Navbar from "./Navbar";
import {
  HerosectionHeading,
  HerosectionSubHeading,
} from "../Textfiles/webiste-Content";
import SearchBar from "./SearchBar";
import { HeroSectioncardData } from "../Textfiles/webiste-Content";

const cardData = [
  {
    imageUrl: "./images/imageOne.png",
    firstHeading: "no credit card",
    secondHeading: "Must required",
  },
  {
    imageUrl: "./images/imageTwo.png",
    firstHeading: "Money Back",
    secondHeading: "100% Guarantee",
  },
  {
    imageUrl: "./images/imageThree.png",
    firstHeading: "Best Price",
    secondHeading: "Good Discount",
  },
  {
    imageUrl: "./images/imageFour.png",
    firstHeading: "Customer care",
    secondHeading: "24/7 free Support",
  },
];

export default function Herosection() {
  return (
    <div className="w-full md:h-[500px] h-[860px] bg-hero-background z-[998] relative flex items-center justify-center ">
      <div className="max-w-7xl md:px-0 px-4">
        <p className=" text-black md:text-2xl md:mt-10">
          {HerosectionSubHeading}
        </p>
        <h1 className="md:text-7xl text-3xl  mb-4 text-black">
          {HerosectionHeading}
        </h1>
        <div className="mt-4">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export const HeroSectionCard = ({ imgUrl, heading, subHeading }) => {
  return (
    <div className="flex md:flex-row flex-col items-center gap-4">
      <div className="transition-all duration-300">
        <img src={imgUrl} alt="" className="md:h-auto h-8" />
      </div>
      <div className="items-center text-white">
        <h1 className="md:text-xl text-sm font-semibold uppercase ">
          {heading}
        </h1>
        <h1 className="md:text-2xl font-semibold capitalize">{subHeading}</h1>
      </div>
    </div>
  );
};
