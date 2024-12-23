import { useState, useEffect, useRef } from "react";
import { contentFont, cardheaderFont, subheaderFont } from "@/styles/fonts";

const ProjectCard = ({ title, description, github, deployment, demo, image, hyperlinks }) => {
  const [imageOrientation, setImageOrientation] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (!image) {
      setImageOrientation("vertical");
      setImageLoaded(true);
    }
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
    <div
      className={`${contentFont.className} text-sm rounded-sm overflow-hidden text-left project-card transition-transform transform hover:scale-105`}>
      {imageOrientation && imageOrientation != "horizontal" && (
        <div>
          <main
            className={`${github ? "cursor-pointer" : ""} w-full`}
            onClick={() => {
              if (deployment) {
                window.open(deployment, "_blank");
              } else if (github) {
                window.open(github, "_blank");
              }
            }}>
            {image && <img src={image} ref={imgRef} alt={description} width={"100%"} />}
          </main>
          <div className="text-md p-6 text-base">
            <div className={`${subheaderFont.className} mb-3 text-lg text-[rgb(250,250,250)]`}>{title}</div>
            <div
              className="mb-5"
              dangerouslySetInnerHTML={{
                __html: hyperlinks ? createHyperLinks(description, hyperlinks) : description,
              }}></div>
            <div className="text-base flex flex-row gap-4 text-[rgb(250,250,250)]">
              {github && (
                <strong>
                  <a className="text-blue-400 hover:underline" href={github}>
                    GITHUB
                  </a>
                </strong>
              )}
              {deployment && (
                <strong>
                  <a className="text-blue-400 hover:underline" href={deployment}>
                    DEPLOYMENT
                  </a>
                </strong>
              )}
              {demo && (
                <strong>
                  <a className="text-blue-400 hover:underline" href={demo}>
                    DEMO
                  </a>
                </strong>
              )}
            </div>
          </div>
        </div>
      )}
      {imageOrientation && imageOrientation === "horizontal" && (
        <div>
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
              {image && <img src={image} alt={description} width={"100%"} className="blue-tint" />}
            </main>
            <div className="w-[60%] p-6 text-base">
              <div className={`${subheaderFont.className} mb-3 text-lg text-[rgb(250,250,250)]`}>{title}</div>
              <div
                className="mb-5"
                dangerouslySetInnerHTML={{
                  __html: hyperlinks ? createHyperLinks(description, hyperlinks) : description,
                }}></div>
              <div className="text-base flex flex-row gap-4 text-[rgb(250,250,250)]">
                {github && (
                  <strong>
                    <a className="text-blue-400 hover:underline" href={github}>
                      GITHUB
                    </a>
                  </strong>
                )}
                {deployment && (
                  <strong>
                    <a className="text-blue-400 hover:underline" href={deployment}>
                      DEPLOYMENT
                    </a>
                  </strong>
                )}
                {demo && (
                  <strong>
                    <a className="text-blue-400 hover:underline" href={demo}>
                      DEMO
                    </a>
                  </strong>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
