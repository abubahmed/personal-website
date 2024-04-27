import React from "react";

const Social = ({ icon, name, link }) => {
  return (
    <a target="_blank" href={link}>
      <img src={icon} alt={name} height={24} width={24} priority={true} className="mr-6" />
    </a>
  );
};

export default Social;
