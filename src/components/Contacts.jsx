import React from "react";
import { motion } from "framer-motion";

export default function Contacts() {
  return (
    <section id="contact" className="py-16 bg-[#180e01] text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold text-[#f57c00] mb-8"
      >
        Contact Me
      </motion.h2>

      <motion.form
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto bg-[#3e2723] p-8 rounded-xl shadow-lg space-y-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-[#4e342e] text-[#f5f5f5] focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded bg-[#4e342e] text-[#f5f5f5] focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 rounded bg-[#4e342e] text-[#f5f5f5] focus:outline-none"
        ></textarea>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-[#f57c00] hover:bg-[#ffa726] text-white py-3 rounded-lg font-bold transition-all"
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
}
