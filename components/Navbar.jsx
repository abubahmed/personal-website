import React from "react";
import { JetBrains_Mono } from "next/font/google";
const jetbrainsLight = JetBrains_Mono({ subsets: ["latin"], weight: "300" });
const jetbrainsExtralight = JetBrains_Mono({ subsets: ["latin"], weight: "200" });

const Navbar = () => {
  return (
    <ul className="flex max-w-[350px] justify-between mx-auto md:ml-auto md:mr-0 mt-6">
      <li className={`${jetbrainsExtralight.className} cursor-pointer hover:underline text-md`}>
        <a href="#about">about</a>
      </li>
      <li className={`${jetbrainsExtralight.className} cursor-pointer hover:underline text-md`}>
        <a href="#socials">socials</a>
      </li>
      <li className={`${jetbrainsExtralight.className} cursor-pointer hover:underline text-md`}>
        <a href="#projects">projects</a>
      </li>
    </ul>
  );
};

export default Navbar;
