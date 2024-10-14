import React from "react";
import { navbarFont } from "@/styles/fonts";

const Navbar = () => {
  return (
    <ul className="flex max-w-[280px] justify-between ml-auto mr-0 mt-6">
      <li
        className={`${navbarFont.className} cursor-pointer text-md hover:text-gray-300 transition duration-300`}>
        <a href="#about">ABOUT</a>
      </li>
      <li
        className={`${navbarFont.className} cursor-pointer text-md hover:text-gray-300 transition duration-300`}>
        <a href="#socials">SOCIALS</a>
      </li>
      <li
        className={`${navbarFont.className} cursor-pointer text-md hover:text-gray-300 transition duration-300`}>
        <a href="#projects">PROJECTS</a>
      </li>
    </ul>
  );
};

export default Navbar;
