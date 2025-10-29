import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Data Platform",
    description:
      "An intelligent data labeling and analytics system built with React and Node.js.",
    img: "/project1.jpg",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern personal website showcasing skills, projects, and contact form.",
    img: "/project2.jpg",
  },
  {
    title: "Online Clinic System",
    description:
      "A web-based patient record and prescription management system for clinics.",
    img: "/project3.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-[#3e2723] px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold text-[#f57c00] mb-10"
      >
        Projects
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#4e342e] rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-[#f5f5f5]">
                {p.title}
              </h3>
              <p className="text-[#b0b0b0] text-sm">{p.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
