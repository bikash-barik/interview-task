import React from "react";
import logo from "../assets/logos/download.png";
import { FooterSection_one } from "../Textfiles/webiste-Content";
import { FooterLiks } from "../Textfiles/webiste-Content";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { phoneNumber } from "../Textfiles/webiste-Content";
import { email } from "../Textfiles/webiste-Content";
import { IoMdSend } from "react-icons/io";

export default function Footer() {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-7 py-10 px-10 bg-black">
      <section className="w-full space-y-4">
        <img src={logo} alt="" />
        <p className="text-white md:max-w-[500px] ">{FooterSection_one}</p>
      </section>

      <section className="w-full  md:px-44 ">
        <h1 className="text-white text-4xl md:text-2xl font-semibold mb-4">
          Links
        </h1>
        <ul className="space-y-2">
          {FooterLiks.map((item, index) => (
            <li key={index} className="text-white  hover:text-red-500">
              {item.name}
            </li>
          ))}
        </ul>
      </section>

      <section className="w-full md:px-10 space-y-7">
        <h1 className="text-white text-4xl md:text-2xl font-semibold mb-4">
          Contact us
        </h1>
        <div className="flex items-center gap-5">
          <FaPhoneFlip className="text-red-600 text-3xl" />
          <p className="text-white text-xl font-semibold">{phoneNumber}</p>
        </div>

        <div className="flex items-center gap-5">
          <MdMarkEmailUnread className="text-red-600 text-3xl" />
          <p className="text-white text-xl font-semibold">{email}</p>
        </div>

        <div className="w-full flex relative md:gap-0 gap-4">
          <input
            type="text"
            className="w-full text-sm bg-transparent outline-none border border-white p-4 rounded-full"
            placeholder="Enter your email we will reach out to you "
          />
          <button>
            <IoMdSend className=" text-red-500 absolute  md:right-4 right-8 md:bottom-5 top-5 text-xl " />
          </button>
        </div>
      </section>
    </div>
  );
}
