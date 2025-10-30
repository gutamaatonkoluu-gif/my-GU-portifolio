import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [name] = useState("Gutema Tonkolu");
  const [bio] = useState(
    "A passionate Computer Science student specialized in web development and AI."
  );

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-[#180e01]"
    >
      {/* 👋 Greeting */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-3"
      >
        Hi, I'm <span className="text-[#f57c00]">{name}</span>
      </motion.h1>

      {/* 💬 Bio */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-[#b0b0b0] text-base sm:text-lg md:text-xl max-w-2xl mb-6 leading-relaxed"
      >
        {bio}
      </motion.p>

      {/* 🖼️ Animated Profile Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, -10, 0], // Floating up & down
          boxShadow: [
            "0 0 10px #f57c00",
            "0 0 25px #f57c00",
            "0 0 10px #f57c00",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="rounded-full p-1"
      >
        <motion.img
          src="/image.png" // ✅ image from public folder
          alt="Profile"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-[#f57c00] object-cover"
        />
      </motion.div>

      {/* 🎓 Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          className="bg-[#f57c00] text-white px-6 py-3 rounded-lg hover:bg-[#ffa726] transition-all"
        >
          View My Work
        </motion.a>

        <motion.a
          href="/resume.pdf" // ✅ replace with your actual resume file in /public
          download
          whileHover={{ scale: 1.05 }}
          className="bg-transparent border-2 border-[#f57c00] text-[#f57c00] px-6 py-3 rounded-lg hover:bg-[#f57c00] hover:text-white transition-all"
        >
          Resume
        </motion.a>
      </div>
    </section>
  );
}
