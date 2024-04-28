import React from "react";
import { ReactTyped } from "react-typed";
import { JetBrains_Mono } from "next/font/google";
import { name } from "../info/info";

const jetbrainsSemibold = JetBrains_Mono({ subsets: ["latin"], weight: "600" });
const TEXTS = [`${name}!`, "a programmer!", "a student!", "an engineer!", "a designer!"];

const Hero = () => {
  return (
    <h1 className={`${jetbrainsSemibold.className} text-[22px] my-6 mt-8 text-center md:text-left`}>
      Hi, I'm&nbsp;
      <ReactTyped strings={TEXTS} typeSpeed={70} backSpeed={80} loop />
    </h1>
  );
};

export default Hero;
