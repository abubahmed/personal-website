import React from "react";
import { contentFont, subheaderFont } from "@/styles/fonts";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { MdOutlineContentCopy } from "react-icons/md";

const Socials = () => {
  return (
    <div id="socials">
      <p className={`${subheaderFont.className} text-xl mb-5 text-left text-[rgb(250,250,250)]`}>Socials</p>
      <div className="flex gap-2 items-center mb-2">
        <p
          onClick={() => navigator.clipboard.writeText("abuahmed0821@gmail.com")}
          className={`${contentFont.className} cursor-pointer text-base text-left hover:underline text-[rgb(250,250,250)]`}>
          abuahmed0821@gmail.com
        </p>
        <MdOutlineContentCopy
          onClick={() => navigator.clipboard.writeText("abuahmed0821@gmail.com")}
          size={16}
          className="cursor-pointer"
        />
      </div>
      <div className="flex gap-2 items-center mb-5">
        <p
          onClick={() => navigator.clipboard.writeText("aa0765@princeton.edu")}
          className={`${contentFont.className} cursor-pointer text-base text-left hover:underline text-[rgb(250,250,250)]`}>
          aa0765@princeton.edu
        </p>
        <MdOutlineContentCopy
          onClick={() => navigator.clipboard.writeText("aa0765@princeton.edu")}
          size={16}
          className="cursor-pointer"
        />
      </div>
      <div className="mx-auto md:mx-0">
        <div className="flex">
          <a target="_blank" href={"https://github.com/abubahmed"}>
            <AiFillGithub size={22} className="mr-4 ml-0" />
          </a>
          <a target="_blank" href={"https://www.linkedin.com/in/abu-ahmed-b5469b249/"}>
            <FaLinkedin size={22} className="mr-4 ml-0" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Socials;
