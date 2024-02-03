import React, { useRef } from "react";
import RoomCarausalCard from "./RoomCarausalCard";
import { FaAngleLeft, FaAnglesLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

export default function RoomsCarausalSection() {
  const boxxRef = useRef(null);
  const handlePressPrevious = () => {
    const box = boxxRef.current;
    if (box) {
      const width = box?.clientWidth;
      box.scrollLeft -= width;
    }
  };

  const handlePressNext = () => {
    const box = boxxRef.current;
    if (box) {
      const width = box?.clientWidth;
      box.scrollLeft += width;
    }
  };

  return (
    <div className="w-full h-auto md:mb-10  md:px-16 px-7 py-20">
      <div className="w-full my-8">
        <h1 className="text-4xl   underline decoration-red-600 w-full text-center tracking-wide">
          Best Rooms
        </h1>
      </div>
      <div
        ref={boxxRef}
        id="container"
        className="w-full overflow-hidden scroll-smooth flex space-x-10 md:px-10 "
      >
        {[1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
          <RoomCarausalCard key={index} />
        ))}
      </div>
      <div className="w-full mt-8 text-center ">
        <button
          onClick={handlePressNext}
          className=" text-center px-4 py-2 border border-black text-red-600 text-xl font-bold rounded hover:bg-red-600 hover:text-white hover:border-none transition-all duration-75"
        >
          <FaAngleRight />
        </button>
        <button
          onClick={handlePressPrevious}
          className=" px-4 py-2 ml-3 border border-black text-red-600 text-xl font-bold rounded hover:bg-red-600 hover:text-white hover:border-none"
        >
          <FaAngleLeft />
        </button>
      </div>
    </div>
  );
}
