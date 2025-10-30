import React from "react";
import { motion, useScroll } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-[#180e01] text-[#f5f5f5] font-poppins overflow-x-hidden">
      {/* 🔶 Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-[#f57c00] z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Page Sections */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}
