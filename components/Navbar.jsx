import React from "react";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsRegular = JetBrains_Mono({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  return (
    <ul className="flex max-w-[500px] justify-between mx-auto md:ml-auto md:mr-0 mt-6">
      <li className={`${jetbrainsRegular.className} cursor-pointer`}>
        <a href="#about">about</a>
      </li>
      <li className={`${jetbrainsRegular.className} cursor-pointer`}>
        <a href="#socials">socials</a>
      </li>
      <li className={`${jetbrainsRegular.className} cursor-pointer`}>
        <a href="#projects">projects</a>
      </li>
      <li className={`${jetbrainsRegular.className} cursor-pointer`}>
        <a>skills</a>
      </li>
    </ul>
  );
};

export default Navbar;
