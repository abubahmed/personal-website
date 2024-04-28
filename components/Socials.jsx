import React from "react";
import { JetBrains_Mono } from "next/font/google";
import { socials, email } from "../info/info";
import Social from "./Social";

const jetbrainsRegular = JetBrains_Mono({ subsets: ["latin"], weight: "400" });
const jetbrainsExtralight = JetBrains_Mono({ subsets: ["latin"], weight: "200" });

const Socials = () => {
  return (
    <div id="socials" className="my-8">
      <p
        className={`${jetbrainsRegular.className} text-lg underline mb-3 text-center md:text-left`}>
        more
      </p>
      <p
        onClick={() => navigator.clipboard.writeText(email)}
        className={`${jetbrainsExtralight.className} cursor-pointer underline text-md mb-1 text-center md:text-left`}>
        {email}
      </p>
      <p
        className={`${jetbrainsExtralight.className} cursor-pointer underline text-md text-center md:text-left mb-3`}>
        <a href="#">See my resume</a>
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