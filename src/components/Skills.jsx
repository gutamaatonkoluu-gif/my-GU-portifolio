import React from "react";
import { motion } from "framer-motion";

const technicalSkills = [
  { name: "HTML5", level: 90 },
  { name: "CSS3", level: 90 },
  { name: "JavaScript", level: 90 },
  { name: "Python", level: 90 },
  { name: "SQL", level: 90 },
  { name: "Django", level: 85 },
  { name: "React", level: 90 },
  { name: "Node.js", level: 85 },
];

const softSkills = [
  { name: "Effective Communication" },
  { name: "Problem-Solving" },
  { name: "Team Collaboration" },
  { name: "Leadership & Support" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-[#180e01] text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold text-[#f57c00] mb-10"
      >
        Skills
      </motion.h2>

      {/* Technical Skills */}
      <div className="max-w-3xl mx-auto mb-16 text-left">
        <h3 className="text-2xl font-semibold text-[#f5f5f5] mb-6">
          Technical Skills
        </h3>
        <div className="space-y-5">
          {technicalSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-[#f5f5f5] font-medium">{skill.name}</span>
                <span className="text-[#f5f5f5]/70 font-medium">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-[#3e2723] rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  className="bg-[#f57c00] h-3 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="max-w-3xl mx-auto text-left">
        <h3 className="text-2xl font-semibold text-[#f5f5f5] mb-6">
          Soft Skills
        </h3>
        <div className="grid gap-5 md:grid-cols-2">
          {softSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="
                p-4 rounded-lg flex items-center space-x-3
                bg-gradient-to-r from-[#f57c00] to-[#ffa726]
                text-white font-medium
                hover:from-[#ffa726] hover:to-[#ffb74d] transition-colors duration-200
              "
            >
              <div className="w-7 h-7 flex-none bg-white/15 rounded-full flex items-center justify-center text-white">
                ★
              </div>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
