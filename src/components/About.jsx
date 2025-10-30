import React from "react";
import { motion } from "framer-motion";
// You will need to install 'react-icons' if you don't have it: npm install react-icons
import {
  FaGraduationCap,
  FaUser,
  FaBriefcase,
  FaBullseye,
} from "react-icons/fa";

// Data structure for the four cards, adapted for a DARK THEME
const aboutSections = [
  {
    icon: FaGraduationCap,
    title: "Education",
    content: (
      <>
        I am currently Computer Science student at Haramaya University.
        Alongside my formal studies, I have invested significant time in
        learning modern web development and working on diverse projects in both
        academic and private contexts. Through over a year of dedicated
        practice, I have developed strong foundational skills.
      </>
    ),
    // Using darker background colors for the dark theme
    color: "bg-[#01579b]", // Darker Blue (similar to the original image's blue tone)
    iconColor: "text-[#b3e5fc]", // Light blue for icons/titles
  },
  {
    icon: FaUser,
    title: "Who I Am",
    content: (
      <>
        My name is Gutema, and I am a passionate full-stack web developer. With
        a strong academic foundation and years of disciplined learning, I am now
        fully committed to building innovative, user-focused technology
        solutions.
      </>
    ),
    color: "bg-[#2e7d32]", // Darker Green
    iconColor: "text-[#c8e6c9]", // Light green for icons/titles
  },
  {
    icon: FaBriefcase,
    title: "Experience",
    content: (
      <>
        I have over one years of hands-on experience with the MERN stack,
        developing real-world projects such as Ethio Ai and Online Clinic
        systems.
      </>
    ),
    color: "bg-[#4a148c]", // Darker Purple
    iconColor: "text-[#e1bee7]", // Light purple for icons/titles
  },
  {
    icon: FaBullseye,
    title: "Future Drives",
    content: (
      <>
        Looking ahead, I am eager to expand my expertise in artificial
        intelligence and digital marketing. I have already begun studying AI in
        my spare time and aim to integrate these skills into future projects
        that create meaningful impact.
      </>
    ),
    color: "bg-[#880e4f]", // Darker Pink/Rose
    iconColor: "text-[#f8bbd0]", // Light pink/rose for icons/titles
  },
];

// Reusable Card Component
const Card = ({ icon: Icon, title, content, color, iconColor, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: delay }}
    viewport={{ once: true }}
    // The main card background uses the section's color
    className={`p-6 rounded-xl shadow-2xl h-full flex flex-col text-left ${color} text-white`}
  >
    <div
      className={`text-3xl mb-4 p-3 rounded-full ${iconColor} bg-black bg-opacity-10`}
    >
      <Icon />
    </div>
    <h3 className={`text-xl font-bold mb-3 ${iconColor}`}>{title}</h3>
    {/* Content text remains white/light for the dark background */}
    <div className={`text-base leading-relaxed flex-grow text-gray-100`}>
      {content}
    </div>
  </motion.div>
);

export default function About() {
  return (
    // **YOUR ORIGINAL SECTION STYLES RETAINED**
    <section id="about" className="py-20 bg-[#3e2723] text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-extrabold text-[#f57c00] mb-12 text-center">
          About Me
        </h2>
        {/* Removed the original single paragraph */}
      </motion.div>

      {/* Main Grid Container for the Four Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {aboutSections.map((section, index) => (
          <div key={index} className="flex flex-col relative">
            {/* The actual Card component */}
            <Card
              icon={section.icon}
              title={section.title}
              content={section.content}
              color={section.color}
              iconColor={section.iconColor}
              delay={index * 0.2} // Stagger the animation
            />
            {/* Arrow connecting the cards (Hidden on small screens) */}
            {index < aboutSections.length - 1 && (
              <div className="absolute right-[-2.5rem] top-1/2 transform -translate-y-1/2 w-8 h-1 hidden lg:block">
                <svg
                  className="w-full h-full text-gray-400"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0"
                    y1="50"
                    x2="85"
                    y2="50"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <polygon points="85,45 100,50 85,55" fill="currentColor" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
