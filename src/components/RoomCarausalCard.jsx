import React from "react";

export default function RoomCarausalCard() {
  return (
    <div className="md:min-w-[410px] md:h-[550px] min-w-[400px] h-[590px] cursor-pointer border border-red-600 shadow-lg rounded overflow-hidden">
      <div className="w-full h-[300px]">
        <img
          src="https://a0.muscache.com/im/pictures/959f7a1d-6e52-4317-a2a5-4271b323e19c.jpg?im_w=720"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-5 py-8">
        <h1 className="text-2xl">Super Delux Room</h1>
        <p className="text-xl mt-2">5 adults and 6 children</p>
        <p className="mt-2 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          consequatur obcaecati delectus!
        </p>
      </div>
      <div className="px-5">
        <button className="w-full py-3 bg-red-600 hover:bg-black text-white rounded">
          Book Now $499.00
        </button>
      </div>
    </div>
  );
}
