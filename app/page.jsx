"use client";
import { JetBrains_Mono } from "next/font/google";
import { ReactTyped } from "react-typed";
import { useEffect, useRef, useState } from "react";
import ProjectCard from "./components/ProjectCard";
import Social from "./components/Social";
import projects from "./info/projects";
import socials, { email } from "./info/socials";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const jetbrainsRegular = JetBrains_Mono({ subsets: ["latin"], weight: "400" });
const jetbrainsExtralight = JetBrains_Mono({ subsets: ["latin"], weight: "200" });
const jetbrainsSemibold = JetBrains_Mono({ subsets: ["latin"], weight: "600" });
const TEXTS = ["Abu Ahmed!", "a programmer!", "a student!", "an engineer!", "a designer!"];

const App = () => {
  const gridRef = useRef(null);
  const [columnsCount, setColumnsCount] = useState(4);

  useEffect(() => {
    new Masonry(gridRef.current, {
      itemSelector: ".grid-item",
      columnWidth: ".grid-sizer",
      percentPosition: true,
      gutter: 30,
    });
  }, []);

  useEffect(() => {
    const updateColumnsCount = () => {
      if (window.innerWidth < 768) {
        setColumnsCount(1);
      } else if (window.innerWidth < 1024) {
        setColumnsCount(2);
      } else if (window.innerWidth < 1366) {
        setColumnsCount(3);
      } else {
        setColumnsCount(4);
      }
    };
    window.addEventListener("resize", updateColumnsCount);
    updateColumnsCount();
    return () => {
      window.removeEventListener("resize", updateColumnsCount);
    };
  }, []);

  return (
    <div className="w-full px-10 overflow-auto custom-scrollbar">
      <ul className="flex max-w-[500px] justify-between mx-auto md:ml-auto md:mr-0 mt-6">
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
      <h1 className={`${jetbrainsSemibold.className} text-[22px] my-6 mt-8 text-center md:text-left`}>
        Hi, I'm&nbsp;
        <ReactTyped strings={TEXTS} typeSpeed={70} backSpeed={80} loop />
      </h1>
      <div id="about">
        <p
          className={`${jetbrainsRegular.className} text-lg mb-3 underline text-center md:text-left`}>
          about me
        </p>
        <p className={`${jetbrainsExtralight.className} text-md text-center md:text-left`}>
          I'm an incoming CS major interested in website/mobile app development, machine learning,
          and data analysis. I'm currently a senior at The Bronx High School of Science in NYC and I
          like to work on personal projects and compete in hackathons in my free time. Feel free to
          learn more about me through my socials or my projects!
        </p>
      </div>
      <div id="socials" className="my-8">
        <p
          className={`${jetbrainsRegular.className} text-lg underline mb-3 text-center md:text-left`}>
          more
        </p>
        <div className="mx-auto flex justify-center md:block md:mx-0 mb-2">
          <div className="flex">
            {socials.map((social) => (
              <Social key={social.name} {...social} />
            ))}
          </div>
        </div>
        <p
          onClick={() => navigator.clipboard.writeText(email)}
          className={`${jetbrainsExtralight.className} cursor-pointer underline text-md mb-1 text-center md:text-left`}>
          {email}
        </p>
        <p className={`${jetbrainsExtralight.className} cursor-pointer underline text-md text-center md:text-left`}>
          <a href="#">See my resume</a>
        </p>
      </div>
      <div id="projects" className="mb-8 text-center md:text-left">
        <p className={`${jetbrainsRegular.className} text-lg mb-3 underline`}>projects</p>
        <Masonry gutter="25px" columnsCount={columnsCount}>
          {[...projects]
            .sort((a, b) => {
              const aDate = a.created.split("/").reverse().join("");
              const bDate = b.created.split("/").reverse().join("");
              return bDate.localeCompare(aDate);
            })
            .map((project) => (
              <ProjectCard {...project} key={project.title} />
            ))}
        </Masonry>
      </div>
    </div>
  );
};

export default App;
