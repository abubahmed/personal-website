"use client";
import Socials from "../components/Socials";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

const App = () => {
  return (
    <div className="w-full px-10 overflow-auto custom-scrollbar">
      <Navbar />
      <Hero />
      <About />
      <Socials />
      <Projects />
    </div>
  );
};

export default App;
