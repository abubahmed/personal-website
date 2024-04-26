"use client";
import React from "react";
import bronx from "../../public/bronx.jpg";
import location from "../../public/location.png";
import Image from "next/image";
import { JetBrains_Mono, Roboto } from "next/font/google";
import TextTransition, { presets } from "react-text-transition";
import { useEffect, useState } from "react";
import Link from "next/link";

const jetbrainsRegular = JetBrains_Mono({ subsets: ["latin"], weight: "400" });
const robotoBold = Roboto({ subsets: ["latin"], weight: "700" });
const TEXTS = ["a programmer", "a student", "a builder", "a designer", "an engineer"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 4000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <div className="w-full h-[90vh] bg-black absolute top-0 left-0"></div>
      <div className="w-full h-[90vh] overflow-hidden relative">
        <Image
          src={bronx}
          alt="bronx"
          layout="fill"
          priority={true}
          className="opacity-90"
          objectFit="cover"
        />
        <div className="absolute w-full h-full top-0 left-0 flex flex-col">
          <ul className="flex justify-around md:justify-between md:ml-auto md:mr-[5%] my-6">
            <li className={`text-white ${jetbrainsRegular.className} mx-5 underline`}>about</li>
            <li className={`text-white ${jetbrainsRegular.className} mx-5 underline`}>socials</li>
            <li className={`text-white ${jetbrainsRegular.className} mx-5 underline`}>projects</li>
            <li className={`text-white ${jetbrainsRegular.className} mx-5 underline`}>skills</li>
          </ul>
          <div className="flex flex-col flex-grow justify-center">
            <h1
              className={`${robotoBold.className} text-6xl text-white md:ml-20 text-center md:text-left`}>
              Hi, I'm Abu Ahmed,
            </h1>
            <h1 className="md:ml-20 mx-auto md:mx-0">
              <TextTransition
                springConfig={presets.wobbly}
                className={`${robotoBold.className} text-6xl text-white`}>
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
            </h1>
            <div className="flex flex-col md:ml-20 mt-[5vh]">
              <a
                href="#"
                className={`${jetbrainsRegular.className} text-white my-2 text-md underline text-center md:text-left`}>
                See my resume
              </a>
              <Link
                href="/about"
                className={`${jetbrainsRegular.className} text-white text-md underline text-center md:text-left`}>
                Learn more
              </Link>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 flex items-center mb-3 mr-10">
            <Image src={location} alt="location" width={15} height={15} priority={true} />
            <p className={`text-white ${jetbrainsRegular.className} text-md ml-4`}>Bronx, NY</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
