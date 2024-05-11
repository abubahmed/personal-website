import { useState, useEffect, useRef } from "react";
import { JetBrains_Mono } from "next/font/google";
const jetbrainsExtralight = JetBrains_Mono({ subsets: ["latin"], weight: "200" });
const jetbrainsLight = JetBrains_Mono({ subsets: ["latin"], weight: "300" });

const ProjectCard = ({ title, description, github, deployment, demo, image, hyperlinks }) => {
  const [imageOrientation, setImageOrientation] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      const height = img.naturalHeight;
      const width = img.naturalWidth;
      const ratio = height / width;
      if (ratio > 1.25) {
        setImageOrientation("horizontal");
      } else {
        setImageOrientation("vertical");
      }
    };
    img.src = image;
  }, [image]);

  useEffect(() => {
    if (imageOrientation) {
      setImageLoaded(true);
    }
  }, [imageOrientation]);

  if (!imageLoaded) {
    return null;
  }

  const createHyperLinks = (description, links) => {
    let result = description;
    links.forEach(({ text, link }) => {
      const regex = new RegExp(text, "g");
      result = result.replace(
        regex,
        `<a href="${link}" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">${text}</a>`
      );
    });
    return result;
  };

  return (
    <div className={`${jetbrainsExtralight.className} text-sm bg-gray-200`}>
      {imageOrientation && imageOrientation != "horizontal" && (
        <div>
          <Header title={title} github={github} deployment={deployment} demo={demo} />
          <main
            className={`${github ? "cursor-pointer" : ""} w-full`}
            onClick={() => {
              if (deployment) {
                window.open(deployment, "_blank");
              } else if (github) {
                window.open(github, "_blank");
              }
            }}>
            <img src={image} ref={imgRef} alt={description} width={"100%"} />
          </main>
          <footer className="p-2">
            <p
              dangerouslySetInnerHTML={{
                __html: hyperlinks ? createHyperLinks(description, hyperlinks) : description,
              }}></p>
          </footer>
        </div>
      )}
      {imageOrientation && imageOrientation === "horizontal" && (
        <div>
          <Header title={title} github={github} deployment={deployment} demo={demo} />
          <div className="flex">
            <main
              className={`${github ? "cursor-pointer" : ""} w-1/2`}
              onClick={() => {
                if (deployment) {
                  window.open(deployment, "_blank");
                } else if (github) {
                  window.open(github, "_blank");
                }
              }}>
              <img src={image} alt={description} width={"100%"} />
            </main>
            <footer className="w-1/2 p-2 pt-0">
              <p
                dangerouslySetInnerHTML={{
                  __html: hyperlinks ? createHyperLinks(description, hyperlinks) : description,
                }}></p>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
};

const Header = ({ github, deployment, demo, title }) => {
  return (
    <header className={`flex justify-between p-2`}>
      <p className={`${jetbrainsLight.className}`}>{title}</p>
      <div className="flex items-center">
        {github && (
          <a target="_blank" className="underline" href={github}>
            <img
              className="mx-[5px]"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="Github repository"
              width={18}
            />
          </a>
        )}
        {deployment && (
          <a target="_blank" className="underline" href={deployment}>
            <img
              className="mx-[5px]"
              src="https://cdn-icons-png.freepik.com/256/1006/1006771.png?semt=ais_hybrid"
              alt="Deployment link"
              width={18}
            />
          </a>
        )}
        {demo && (
          <a target="_blank" className="underline" href={demo}>
            <img
              className="mx-[5px]"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/YouTube_dark_icon_%282017%29.svg/2560px-YouTube_dark_icon_%282017%29.svg.png"
              alt="Demo link"
              width={20}
            />
          </a>
        )}
      </div>
    </header>
  );
};

export default ProjectCard;
