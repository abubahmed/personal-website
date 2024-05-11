import React from "react";
import { ReactTyped } from "react-typed";
import { JetBrains_Mono } from "next/font/google";
import { name } from "../info/info";
const jetbrainsMedium = JetBrains_Mono({ subsets: ["latin"], weight: "500" });
const TEXTS = [
  `${name.split(" ")[0]}!`,
  "a programmer!",
  "a student!",
  "an engineer!",
  "a designer!",
];

const Hero = () => {
  return (
    <h1 className={`${jetbrainsMedium.className} text-xl my-6 text-center md:text-left`}>
      Hi, I'm&nbsp;
      <ReactTyped strings={TEXTS} typeSpeed={70} backSpeed={80} loop />
    </h1>
  );
};

export default Hero;
