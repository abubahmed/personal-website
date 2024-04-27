"use client";
import React from "react";
import Image from "next/image";
import { JetBrains_Mono, Roboto } from "next/font/google";
import TextTransition, { presets } from "react-text-transition";
import { useEffect, useState } from "react";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import Social from "./components/Social";
import projects from "./info/projects";
import socials, { email } from "./info/socials";

const jetbrainsRegular = JetBrains_Mono({ subsets: ["latin"], weight: "400" });
const jetbrainsExtralight = JetBrains_Mono({ subsets: ["latin"], weight: "200" });
const jetbrainsSemibold = JetBrains_Mono({ subsets: ["latin"], weight: "600" });
const TEXTS = ["Abu Ahmed", "a programmer", "a student", "an engineer"];

const App = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 5000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="w-full px-10">
      <ul className="flex max-w-[500px] justify-between ml-auto mt-6">
        <li className={`${jetbrainsRegular.className} cursor-pointer`}>
          <a href="#about">about</a>
        </li>
        <li className={`${jetbrainsRegular.className} cursor-pointer`}>
          <a href="#socials">socials</a>
        </li>
        <li className={`${jetbrainsRegular.className} cursor-pointer`}>
          <a href="#projects">projects</a>
        </li>
        <li className={`${jetbrainsRegular.className} cursor-pointer`}>
          <a>skills</a>
        </li>
      </ul>
      <h1 className={`${jetbrainsSemibold.className} text-[22px] my-6 flex`}>
        Hi, I'm&nbsp;
        <span>
          <TextTransition
            springConfig={presets.wobbly}
            className={`${jetbrainsSemibold.className}`}>
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </span>
        !
      </h1>
      <div id="about">
        <p className={`${jetbrainsRegular.className} text-lg mb-3 underline`}>about me</p>
        <p className={`${jetbrainsExtralight.className} text-md`}>
          I'm an incoming CS major interested in website/mobile app development, machine learning,
          and data analysis. I'm currently a senior at The Bronx High School of Science in NYC and I
          like to work on personal projects and compete in hackathons in my free time. Feel free to
          learn more about me through my socials or my projects!
        </p>
      </div>
      <div id="socials" className="my-8">
        <p className={`${jetbrainsRegular.className} text-lg underline mb-3`}>more</p>
        <div className="mb-3 flex">
          {socials.map((social) => (
            <Social key={social.name} {...social} />
          ))}
        </div>
        <p
          onClick={() => navigator.clipboard.writeText(email)}
          className={`${jetbrainsExtralight.className} cursor-pointer underline text-md mb-1`}>
          {email}
        </p>
        <p className={`${jetbrainsExtralight.className} cursor-pointer underline text-md`}>
          <a href="#">See my resume</a>
        </p>
      </div>
      <div id="projects">
        <p className={`${jetbrainsRegular.className} text-lg mb-3 underline`}></p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, 300px)", gap: "30px" }}>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
