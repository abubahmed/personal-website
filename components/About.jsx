import React from "react";
import { contentFont } from "@/styles/fonts";

const About = () => {
  return (
    <div id="about" className="lg:max-w-[60%] lg:mb-0 mb-10">
      <p className={`${contentFont.className} text-base text-center md:text-left`}>
        Hi! I'm Abu, an incoming CS major passionate about using tech to solve problems! <br />
        <br /> I am currently a senior at{" "}
        <span className="underline">The Bronx High School of Science</span> in NYC entering my first
        year of college.
        <br />
        <br /> I have interests in web/mobile app development and machine learning and I enjoy
        working on personal projects and competing in hackathons in my free time. <br />
        <br />
        You can learn more about me through my socials and my projects! If you have any questions or
        inquiries, feel free to reach out to me at{" "}
        <span className="underline">abuah0821@gmail.com</span>!
      </p>
    </div>
  );
};

export default About;
