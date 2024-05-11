"use client";
import Socials from "../components/Socials";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Hero from "@/components/Hero";

const App = () => {
  return (
    <div className="w-full px-10 overflow-auto">
      <Navbar />
      <Hero />
      <About />
      <Socials />
      <Projects />
    </div>
  );
};

export default App;
