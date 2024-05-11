import React from "react";
import { JetBrains_Mono } from "next/font/google";
import { socials, email } from "../info/info";
import Social from "./Social";
const jetbrainsExtralight = JetBrains_Mono({ subsets: ["latin"], weight: "200" });
const jetbrainsLight = JetBrains_Mono({ subsets: ["latin"], weight: "300" });

const Socials = () => {
  return (
    <div id="socials" className="my-6">
      <p className={`${jetbrainsLight.className} text-lg underline mb-2 text-center md:text-left`}>
        more
      </p>
      <p
        onClick={() => navigator.clipboard.writeText(email)}
        className={`${jetbrainsExtralight.className} cursor-pointer underline text-md mb-1 text-center md:text-left`}>
        {email}
      </p>
      <p
        className={`${jetbrainsExtralight.className} cursor-pointer underline text-md text-center md:text-left mb-3`}>
        <a href="/Abu Ahmed - Resume.pdf" target="_blank">See my resume</a>
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
