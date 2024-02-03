import React, { useState } from "react";
import companyLogo from "../assets/logos/download.png";
import compnayLogo_Dark from "../assets/logos/logodark.png";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

let navData = [
  { name: "Home", link: "/" },
  { name: "Tours", link: "/" },
  { name: "Rooms & Suits", link: "/roomssuits" },
  { name: "Gallery", link: "/Gallery" },
  { name: "About us", link: "/aboutus" },
  { name: "Sign up", link: "/" },
];

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [open, setOpne] = useState(false);
  const handleNavbarBackgroud = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", handleNavbarBackgroud);

  return (
    <div className="w-full fixed top-0 left-0  z-[999]">
      <div
        className={`md:flex items-center justify-between ${
          navbar
            ? "md:bg-white md:text-black shadow-md"
            : "md:bg-transparent md:text-black"
        } bg-white py-4  px-12`}
      >
        {/* nav-section-1 logo */}
        <Link to="/">
          {navbar ? (
            <img src={compnayLogo_Dark} alt="" />
          ) : (
            <img src={companyLogo} alt="" />
          )}
        </Link>

        {/* nav section for mobile screen icon */}
        <div
          onClick={() => setOpne(!open)}
          className="text-3xl md:hidden absolute text-gray-800  right-8 top-6 cursor-pointer"
        >
          {open ? <IoIosClose /> : <IoMdMenu />}
        </div>

        {/* nav section 2 list items */}

        <ul
          className={`md:flex  md:items-center md:mb-0 mb-5 absolute md:static text-sm md:text-[16px] md:bg-transparent bg-white md:z-auto w-full left-0 md:w-auto z-[-1] pl-12 md:pl-0 transition-all duration-500 ease-in
        ${open ? "top-20" : "top-[-490px]"}
        `}
        >
          {navData.map((item, index) => (
            <li
              key={index}
              className=" md:ml-10 ml-0 md:my-0 my-7 font-semibold"
            >
              <Link to={item.link} className="hover:text-red-500">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* nav section 3 book-now button */}
        <button className="bg-red-500  hidden md:block  hover:bg-black py-2 text-white px-5 rounded md:mt-0 mt-12">
          Book Now
        </button>
      </div>
    </div>
  );
}
