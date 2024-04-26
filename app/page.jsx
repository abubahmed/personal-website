"use client";
import React from "react";
import Image from "next/image";
import { JetBrains_Mono, Roboto } from "next/font/google";
import TextTransition, { presets } from "react-text-transition";
import { useEffect, useState } from "react";
import Link from "next/link";
import github from "../public/github.png";
import linkedin from "../public/linkedin.png";
import leetcode from "../public/leetcode.png";
import devpost from "../public/devpost.png";
import { ReactOriginal } from "devicons-react";

const jetbrainsRegular = JetBrains_Mono({ subsets: ["latin"], weight: "400" });
const jetbrainsExtralight = JetBrains_Mono({ subsets: ["latin"], weight: "200" });
const jetbrainsBold = JetBrains_Mono({ subsets: ["latin"], weight: "700" });
const robotoBold = Roboto({ subsets: ["latin"], weight: "700" });
const TEXTS = ["Abu Ahmed", "a programmer", "a student", "an engineer"];

const App = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 5000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="w-full px-14">
      <ul className="flex max-w-[600px] justify-between ml-auto mt-6">
        <li className={`${jetbrainsRegular.className} cursor-pointer`}>
          <a>about</a>
        </li>
        <li className={`${jetbrainsRegular.className} cursor-pointer`}>
          <a>socials</a>
        </li>
        <li className={`${jetbrainsRegular.className} cursor-pointer`}>
          <a>projects</a>
        </li>
        <li className={`${jetbrainsRegular.className} cursor-pointer`}>
          <a>skills</a>
        </li>
        <li className={`${jetbrainsRegular.className} cursor-pointer`}>
          <a>experiences</a>
        </li>
      </ul>
      <h1 className={`${jetbrainsBold.className} text-2xl my-12 flex`}>
        Hi, I'm&nbsp;
        <span>
          <TextTransition springConfig={presets.wobbly} className={`${jetbrainsBold.className}`}>
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </span>!
      </h1>
      <div>
        <p className={`${jetbrainsRegular.className} text-lg mb-4`}>about me</p>
        <p className={`${jetbrainsExtralight.className} text-md`}>
          I'm an incoming CS major interested in website/mobile app development, machine learning,
          and data analysis. I'm currently a senior at The Bronx High School of Science in NYC and I
          like to work on personal projects and compete in hackathons in my free time. Feel free to
          learn more about me through my socials or my projects!
        </p>
      </div>
      <div className="my-12">
        <p className={`${jetbrainsRegular.className} text-lg`}>more</p>
        <div className="my-4 flex">
          <a target="_blank" href="https://github.com/adb8">
            <Image src={github} alt="Github profile" height={25} priority={true} className="mr-6" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/abu-ahmed-b5469b249/">
            <Image
              src={linkedin}
              alt="Linkedin profile"
              height={25}
              priority={true}
              className="mr-6"
            />
          </a>
          <a target="_blank" href="https://devpost.com/abuahmed0821">
            <Image
              src={devpost}
              alt="Devpost profile"
              height={25}
              priority={true}
              className="mr-6"
            />
          </a>
          <a target="_blank" href="https://leetcode.com/u/adb8/">
            <Image
              src={leetcode}
              alt="Leetcode profile"
              height={25}
              priority={true}
              className="mr-6"
            />
          </a>
        </div>
        <p
          onClick={() => navigator.clipboard.writeText("abuahmed0821@gmail.com")}
          className={`${jetbrainsExtralight.className} cursor-pointer underline text-md`}>
          abuahmed0821@gmail.com
        </p>
        <p className={`${jetbrainsExtralight.className} cursor-pointer underline text-md mt-3`}>
          <a href="#">See my resume</a>
        </p>
      </div>
      <div>
        <p className={`${jetbrainsRegular.className} text-lg mb-4`}>projects</p>
        <div className="grid grid-cols-4 gap-10 w-[1320px]">
          <div className="w-[300px] h-[300px] bg-gray-300"></div>
          <div className="w-[300px] h-[300px] bg-gray-300"></div>
          <div className="w-[300px] h-[300px] bg-gray-300"></div>
          <div className="w-[300px] h-[300px] bg-gray-300"></div>
          <div className="w-[300px] h-[300px] bg-gray-300"></div>
          <div className="w-[300px] h-[300px] bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
