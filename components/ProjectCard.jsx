import { useState, useEffect, useRef } from "react";
import { contentFont, cardheaderFont } from "@/styles/fonts";

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
    <div className={`${contentFont.className} text-sm bg-gray-200 rounded-md overflow-hidden`}>
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
          <div
            className="text-md p-2 px-3 text-[15px]"
            dangerouslySetInnerHTML={{
              __html: hyperlinks ? createHyperLinks(description, hyperlinks) : description,
            }}></div>
        </div>
      )}
      {imageOrientation && imageOrientation === "horizontal" && (
        <div>
          <Header title={title} github={github} deployment={deployment} demo={demo} />
          <div className="flex">
            <main
              className={`${github ? "cursor-pointer" : ""} w-[40%]`}
              onClick={() => {
                if (deployment) {
                  window.open(deployment, "_blank");
                } else if (github) {
                  window.open(github, "_blank");
                }
              }}>
              <img src={image} alt={description} width={"100%"} />
            </main>
            <div
              className="w-[60%] p-2 px-3 text-[15px]"
              dangerouslySetInnerHTML={{
                __html: hyperlinks ? createHyperLinks(description, hyperlinks) : description,
              }}></div>
          </div>
        </div>
      )}
    </div>
  );
};

const Header = ({ github, deployment, demo, title }) => {
  return (
    <header className={`flex justify-between p-2 px-3 text-base`}>
      <p className={`${cardheaderFont.className} text-md`}>{title}</p>
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
