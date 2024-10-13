import React from "react";
import { ReactTyped } from "react-typed";
import { headerFont } from "@/styles/fonts";

const TEXTS = [
  "Abu!",
  "a programmer!",
  "a student!",
  "an engineer!",
  "a designer!",
];

const Hero = () => {
  return (
    <h1 className={`${headerFont.className} text-3xl my-12 md:text-left text-center`}>
      Hi, I'm&nbsp;
      <ReactTyped strings={TEXTS} typeSpeed={70} backSpeed={80} loop />
    </h1>
  );
};

export default Hero;
