import React from "react";
import { resume } from "../info/info";
import { contentFont, subheaderFont } from "@/styles/fonts";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { MdOutlineContentCopy } from "react-icons/md";

const Socials = () => {
  return (
    <div id="socials">
      <p className={`${subheaderFont.className} text-xl mb-3 text-center md:text-left`}>Socials</p>
      <div className="flex gap-2 items-center mb-1" >
        <p
          onClick={() => navigator.clipboard.writeText("abuah0821@gmail.com")}
          className={`${contentFont.className} cursor-pointer text-[17px] text-center md:text-left`}>
          abuah0821@gmail.com
        </p>
        <MdOutlineContentCopy
          onClick={() => navigator.clipboard.writeText("abuah0821@gmail.com")}
          size={16}
          className="cursor-pointer mx-auto md:mx-0"
        />
      </div>
      <p
        className={`${contentFont.className} underline cursor-pointer text-[17px] text-center md:text-left mb-4`}>
        <a href={resume} target="_blank">
          See my resume
        </a>
      </p>
      <div className="mx-auto flex justify-center md:block md:mx-0">
        <div className="flex">
          <a target="_blank" href={"https://github.com/adb8"}>
            <AiFillGithub size={22} className="md:mr-4 mx-2 md:ml-0" />
          </a>
          <a target="_blank" href={"https://www.linkedin.com/in/abu-ahmed-b5469b249/"}>
            <FaLinkedin size={22} className="md:mr-4 mx-2 md:ml-0" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Socials;
