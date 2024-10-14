import React from "react";
import { contentFont } from "@/styles/fonts";

const About = () => {
  return (
    <div id="about" className="lg:max-w-[60%] lg:mb-0 mb-10">
      <p className={`${contentFont.className} text-[17px] text-center md:text-left`}>
        I'm Abu, a CS major passionate about using tech to solve problems! <br />
        <br />I'm interested in web/mobile app development and machine learning and enjoy working
        on projects and competing in hackathons in my free time. <br />
        <br />
        Learn more about me through my socials and my projects! Free free to reach out to me
        with any inquiries!
      </p>
    </div>
  );
};

export default About;
