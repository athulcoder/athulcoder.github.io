"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaJava, FaJsSquare } from "react-icons/fa";
import { SiCplusplus, SiC } from "react-icons/si";
import { inter } from "@/lib/font";

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
    <div className=" max-w-5xl mx-auto px-4 py-6 mb-5 rounded-2xl  bg-black/30 border border-zinc-700 shadow-lg">
      <h2 className={`text-left text-sm text-gray-400 mb-4 ${inter.className}`}>
        Langauges
      </h2>

      <div className="flex justify-center flex-wrap gap-8">
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
    </div>
  );
}
