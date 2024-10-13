import React from "react";
import { socials, resume } from "../info/info";
import Social from "./Social";
import { contentFont, subheaderFont } from "@/styles/fonts";

const Socials = () => {
  return (
    <div id="socials">
      <p className={`${subheaderFont.className} text-lg underline mb-3 text-center md:text-left`}>
        Socials
      </p>
      <p
        onClick={() => navigator.clipboard.writeText("abuah0821@gmail.com")}
        className={`${contentFont.className} cursor-pointer underline text-base mb-1 text-center md:text-left`}>
        abuah0821@gmail.com
      </p>
      <p
        className={`${contentFont.className} cursor-pointer underline text-base text-center md:text-left mb-4`}>
        <a href={resume} target="_blank">See my resume</a>
      </p>
      <div className="mx-auto flex justify-center md:block md:mx-0">
        <div className="flex">
          {socials.map((social) => (
            <Social key={social.name} {...social} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Socials;
