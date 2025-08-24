"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaPython, FaJava, FaJs } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { FaC } from "react-icons/fa6";

const languages = [
  { name: "Python", icon: <FaPython size={28} />, color: "#FFD43B" },
  { name: "Java", icon: <FaJava size={28} />, color: "#f89820" },
  { name: "JavaScript", icon: <FaJs size={28} />, color: "#f7df1e" },
  { name: "C++", icon: <SiCplusplus size={28} />, color: "#00599C" },
  { name: "C", icon: <FaC size={28} />, color: "#A8B9CC" },
];

export default function LangCircle() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="relative min-h-[500px] flex items-center justify-center bg-transparent text-white overflow-hidden">
      {/* Rotating Ring */}
      <motion.div
        className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
        style={{
          willChange: "transform",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Language Icons around the ring */}
        {languages.map((lang, index) => {
          const angle = (index / languages.length) * 360;
          return (
            <motion.div
              key={lang.name}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `rotate(${angle}deg) translate(140px) rotate(-${angle}deg)`,
              }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="p-3 rounded-full backdrop-blur-md border border-white/10 bg-white/10 shadow-md cursor-pointer hover:scale-110 transition-transform duration-300"
                style={{ color: lang.color }}
              >
                {lang.icon}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Static Center Text */}
      <div className="absolute z-10 flex flex-col items-center justify-center">
        <div className="relative">
          {/* Soft background glow */}
          <div className="absolute inset-0 w-16 h-16 bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-400 blur-2xl opacity-20 rounded-full" />
          {/* Static text */}
          <h2 className="text-sm md:text-base font-medium text-white/80 z-10">
            Languages
          </h2>
        </div>
      </div>

      {/* Hover Tooltip */}
      <AnimatePresence>
        {hovered !== null && (
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-8 text-xs bg-white/10 text-white px-3 py-1 rounded-full backdrop-blur border border-white/10 shadow"
          >
            {languages[hovered].name}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
