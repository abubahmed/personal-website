import React from "react";
import { ReactTyped } from "react-typed";
import { headerFont } from "@/styles/fonts";

const TEXTS = ["Abu!", "a programmer!", "a student!", "an engineer!", "a designer!"];

const Hero = () => {
  return (
    <h1
      className={`${headerFont.className} text-2xl mt-12 mb-8 md:text-left text-center text-[rgb(250,250,250)]`}
      style={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        direction: "rtl",
        textAlign: "left",
      }}>
      <span style={{ direction: "ltr", display: "inline-block" }}>
        Hi, I'm&nbsp;
        <ReactTyped strings={TEXTS} typeSpeed={70} backSpeed={80} loop />
      </span>
    </h1>
  );
};

export default Hero;
