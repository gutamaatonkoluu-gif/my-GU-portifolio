import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 bg-[#3e2723] text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-[#f57c00] mb-6">About Me</h2>
        <p className="text-[#f5f5f5] max-w-3xl mx-auto leading-relaxed">
          I’m a dedicated developer with a love for building intuitive,
          responsive, and user-friendly applications. My goal is to leverage
          technology to solve real-world problems with elegance and efficiency.
        </p>
      </motion.div>
    </section>
  );
}
