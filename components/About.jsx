import React from "react";
import { JetBrains_Mono } from "next/font/google";
import { about } from "../info/info";

const jetbrainsExtralight = JetBrains_Mono({ subsets: ["latin"], weight: "200" });
const jetbrainsRegular = JetBrains_Mono({ subsets: ["latin"], weight: "400" });

const About = () => {
  return (
    <div id="about">
      <p
        className={`${jetbrainsRegular.className} text-lg mb-3 underline text-center md:text-left`}>
        about me
      </p>
      <p className={`${jetbrainsExtralight.className} text-md text-center md:text-left`}>{about}</p>
    </div>
  );
};

export default About;
