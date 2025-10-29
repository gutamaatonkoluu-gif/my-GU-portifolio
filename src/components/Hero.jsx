import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [name, setName] = useState("Gutema Tonkolu");
  const [bio, setBio] = useState(
    "A passionate Computer Science student specialized in web development and AI."
  );

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-[#180e01]"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-2"
      >
        Hi, I'm <span className="text-[#f57c00]">{name}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-[#b0b0b0] text-lg max-w-xl mb-6"
      >
        {bio}
      </motion.p>

      {/* 🖼️ Your Profile Picture Below Hero Text */}
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        src="/myphoto.jpg" // ✅ path from public folder
        alt="My Profile Picture"
        className="w-48 h-48 rounded-full border-4 border-[#f57c00] shadow-lg object-cover mb-6"
      />

      <motion.a
        href="#projects"
        whileHover={{ scale: 1.05 }}
        className="mt-4 inline-block bg-[#f57c00] text-white px-6 py-3 rounded-lg hover:bg-[#ffa726] transition-all"
      >
        View My Work
      </motion.a>
    </section>
  );
}
