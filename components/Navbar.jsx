import React from "react";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsRegular = JetBrains_Mono({ subsets: ["latin"], weight: "400" });
const jetbrainsLight = JetBrains_Mono({ subsets: ["latin"], weight: "300" });

const Navbar = () => {
  return (
    <ul className="flex max-w-[400px] justify-between mx-auto md:ml-auto md:mr-0 mt-6">
      <li className={`${jetbrainsLight.className} cursor-pointer hover:underline`}>
        <a href="#about">about</a>
      </li>
      <li className={`${jetbrainsLight.className} cursor-pointer hover:underline`}>
        <a href="#socials">socials</a>
      </li>
      <li className={`${jetbrainsLight.className} cursor-pointer hover:underline`}>
        <a href="#projects">projects</a>
      </li>
      <li className={`${jetbrainsLight.className} cursor-pointer hover:underline`}>
        <a href="#">skills</a>
      </li>
    </ul>
  );
};

export default Navbar;
