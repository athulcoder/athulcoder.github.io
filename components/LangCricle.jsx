"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaPython, FaJava, FaJs } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { useState } from "react";
import { FaC } from "react-icons/fa6";
const languages = [
  { name: "Python", icon: <FaPython size={40} />, color: "#FFD43B" },
  { name: "Java", icon: <FaJava size={40} />, color: "#f89820" },
  { name: "JavaScript", icon: <FaJs size={40} />, color: "#f7df1e" },
  { name: "C++", icon: <SiCplusplus size={40} />, color: "#00599C" },
  { name: "C", icon: <FaC size={40} />, color: "#A8B9CC" },
];
export default function LangCircle() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="relative min-h-[400px] flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Circular Icons */}
      <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
        {languages.map((lang, index) => {
          const angle = (index / languages.length) * (2 * Math.PI);
          const x = Math.cos(angle) * 140;
          const y = Math.sin(angle) * 140;

          return (
            <motion.div
              key={lang.name}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="absolute"
              animate={{
                x,
                y,
                scale: hovered === index ? 1.2 : 1,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <div
                className="p-3 rounded-full backdrop-blur-md border border-white/10 bg-white/10 shadow-lg cursor-pointer hover:scale-110 transition-transform"
                style={{ color: lang.color }}
              >
                {lang.icon}
              </div>
            </motion.div>
          );
        })}

        {/* Center Blur Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-28 h-28 bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-500 blur-2xl opacity-30 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Hover Tag */}
      <AnimatePresence>
        {hovered !== null && (
          <motion.div
            key="tag"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-6 bg-white/10 text-sm text-white px-4 py-1 rounded-full backdrop-blur border border-white/10 shadow-md"
          >
            {languages[hovered].name}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
