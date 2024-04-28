import React from "react";

const Social = ({ icon, name, link }) => {
  return (
    <a target="_blank" href={link}>
      <img src={icon} alt={name} height={24} width={24} priority={true} className="md:mr-6 mx-3" />
    </a>
  );
};

export default Social;
