import React from "react";

const Social = ({ icon, name, link }) => {
  return (
    <a target="_blank" href={link}>
      {icon && <img
        src={icon}
        alt={name}
        height={22}
        width={22}
        priority={true}
        className="md:mr-4 mx-2 md:ml-0"
      />}
    </a>
  );
};

export default Social;
