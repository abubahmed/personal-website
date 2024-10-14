import React from "react";
import { ReactTyped } from "react-typed";
import { headerFont } from "@/styles/fonts";

const TEXTS = ["Abu!", "a programmer!", "a student!", "an engineer!", "a designer!"];

const Hero = () => {
  return (
    <h1
      className={`${headerFont.className} text-xl my-10 mb-6 md:text-left text-center`}
      style={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        direction: "rtl",
        textAlign: "left",
      }}>
      <span style={{ direction: "ltr", display: "inline-block" }}>
        Hi, I'm&nbsp;
        <ReactTyped
          strings={TEXTS}
          typeSpeed={70}
          backSpeed={80}
          loop
          style={{
            color: "rgb(96,165,250)",
          }}
        />
      </span>
    </h1>
  );
};

export default Hero;
