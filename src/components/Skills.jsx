import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Tailwind CSS", level: 88 },
  { name: "Python", level: 80 },
  { name: "Machine Learning", level: 75 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-[#180e01] text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold text-[#f57c00] mb-10"
      >
        Skills
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-6">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-[#3e2723] rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
                className="bg-[#f57c00] h-3 rounded-full"
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
