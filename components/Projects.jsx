import React from "react";
import Masonry from "react-responsive-masonry";
import { projects } from "../info/info";
import ProjectCard from "./ProjectCard";
import { JetBrains_Mono } from "next/font/google";
import { useEffect, useState } from "react";
const jetbrainsLight = JetBrains_Mono({ subsets: ["latin"], weight: "300" });

const Projects = () => {
  const [columnsCount, setColumnsCount] = useState(4);
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
    <div id="projects" className="mb-6 text-center md:text-left">
      <p className={`${jetbrainsLight.className} text-lg mb-4 underline`}>projects</p>
      <Masonry gutter="24px" columnsCount={columnsCount}>
        {[...projects]
          .sort((a, b) => {
            const aDate = a.created.split("/").reverse().join("");
            const bDate = b.created.split("/").reverse().join("");
            return bDate.localeCompare(aDate);
          })
          .map((project) => (
            <ProjectCard {...project} key={project.title} className="m-0" />
          ))}
      </Masonry>
    </div>
  );
};

export default Projects;
