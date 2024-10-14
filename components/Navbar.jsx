import React from "react";
import { navbarFont } from "@/styles/fonts";

const Navbar = () => {
  return (
    <ul className="flex max-w-[220px] justify-between mx-auto md:ml-auto md:mr-0 mt-6">
      <li className={`${navbarFont.className} cursor-pointer hover:underline text-[17px]`}>
        <a href="#about">About</a>
      </li>
      <li className={`${navbarFont.className} cursor-pointer hover:underline text-[17px]`}>
        <a href="#socials">Socials</a>
      </li>
      <li className={`${navbarFont.className} cursor-pointer hover:underline text-[17px]`}>
        <a href="#projects">Projects</a>
      </li>
    </ul>
  );
};

export default Navbar;
