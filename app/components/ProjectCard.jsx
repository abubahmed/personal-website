import React from "react";

const ProjectCard = ({
  title,
  created,
  description,
  github,
  deployment,
  demo,
  images,
  madeUsing,
}) => {
  return (
    <div className="w-[300px] h-[300px] bg-gray-300">
      <p>{title}</p>
      <p>{created}</p>
      <p>{description}</p>
      <a href={github}>Github</a>
      <a href={deployment}>Deployment</a>
      <a href={demo}>Demo</a>
      <div>
        {madeUsing.map((tech) => (
          <p>{tech}</p>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
