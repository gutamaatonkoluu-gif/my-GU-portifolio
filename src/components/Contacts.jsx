import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaTelegram, FaPhoneAlt } from "react-icons/fa";

export default function Contacts() {
  const contacts = [
    {
      name: "GitHub",
      icon: <FaGithub className="text-3xl" />,
      link: "https://github.com/gutamaatonkoluu-gif",
      color: "bg-[#24292e]",
    },
    {
      name: "Telegram",
      icon: <FaTelegram className="text-3xl" />,
      link: "https://t.me/gut14sal_48",
      color: "bg-[#0088cc]",
    },
    {
      name: "Phone",
      icon: <FaPhoneAlt className="text-3xl" />,
      link: "tel:+251914488870",
      color: "bg-[#4caf50]",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-[#180e01] text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-semibold text-[#f57c00] mb-10"
      >
        Contact Me
      </motion.h2>

      {/* Contact Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row justify-center items-center gap-6"
      >
        {contacts.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className={`${item.color} text-white px-6 py-4 w-full sm:w-56 rounded-xl shadow-lg flex items-center justify-center gap-3 font-semibold hover:brightness-110 transition-all duration-300`}
          >
            {item.icon}
            {item.name}
          </motion.a>
        ))}
      </motion.div>

      {/* Subtext */}
      <p className="text-[#b0b0b0] text-sm mt-10">
        I’m always open to collaborations and new opportunities. Let’s connect!
      </p>
    </section>
  );
}
