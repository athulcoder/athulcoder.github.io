"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaJava, FaJsSquare } from "react-icons/fa";
import { SiCplusplus, SiC } from "react-icons/si";

const icons = [
  { icon: <SiCplusplus />, color: "text-sky-400" },
  { icon: <SiC />, color: "text-blue-400" },
  { icon: <FaJsSquare />, color: "text-yellow-400" },
  { icon: <FaPython />, color: "text-green-400" },
  { icon: <FaJava />, color: "text-red-400" },
];

// Framer animation variant
const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      type: "spring",
      stiffness: 100,
    },
  }),
};

export default function Languages() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 mb-5 rounded-2xl backdrop-blur-md bg-black/30 border border-zinc-700 shadow-lg flex justify-center space-x-8">
      {icons.map((lang, i) => (
        <motion.div
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={iconVariants}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
          className={`text-3xl transition-colors duration-1000 ${lang.color}`}
        >
          {lang.icon}
        </motion.div>
      ))}
    </div>
  );
}
