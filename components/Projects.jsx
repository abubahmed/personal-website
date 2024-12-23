import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { projects } from "../info/info";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";
import { subheaderFont } from "@/styles/fonts";

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
    <div id="projects" className="my-10 text-left">
      <p className={`${subheaderFont.className} text-xl mb-8 text-[rgb(250,250,250)]`}>Personal Projects</p>
      <ResponsiveMasonry>
        <Masonry gutter="36px" columnsCount={columnsCount}>
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
      </ResponsiveMasonry>
    </div>
  );
};

export default Projects;
