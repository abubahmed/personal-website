"use client";
import Socials from "../components/Socials";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Hero from "@/components/Hero";
// import Footer from "@/components/Footer";

const App = () => {
  return (
    <div className="w-full lg:px-24 px-8 overflow-auto pb-5">
      <Navbar />
      <Hero />
      <div className="flex lg:flex-row lg:mb-14 lg:gap-20 flex-col">
        <About />
        <Socials />
      </div>
      <Projects />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
