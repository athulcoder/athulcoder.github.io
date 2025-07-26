"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaJava,
  FaVuejs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiShadcnui,
  SiAceternity,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiPyqt,
  SiPostman,
  SiIntellijidea,
  SiVisualstudiocode,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import { DiJavascript1, DiPython } from "react-icons/di";
import { inter } from "@/lib/font";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 100,
    },
  }),
};

function SkillsBlock({ title, skills }) {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-6 mb-5 rounded-2xl  bg-black/30 border border-zinc-700 shadow-lg">
      <h2 className={`text-left text-sm text-gray-400 mb-4 ${inter.className}`}>
        {title}
      </h2>
      <div className="flex justify-center flex-wrap gap-8">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
            className={`text-3xl ${skill.color}`}
          >
            {skill.icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="flex flex-col items-center gap-4">
      <SkillsBlock
        title="Frontend"
        skills={[
          { icon: <FaReact />, color: "text-cyan-400" },
          { icon: <SiNextdotjs />, color: "text-white" },
          { icon: <SiTailwindcss />, color: "text-sky-400" },
        ]}
      />

      <SkillsBlock
        title="Backend"
        skills={[
          { icon: <FaNodeJs />, color: "text-green-400" },
          { icon: <SiExpress />, color: "text-gray-300" },
          { icon: <SiMongodb />, color: "text-green-600" },
          { icon: <SiFirebase />, color: "text-yellow-400" },
        ]}
      />

      <SkillsBlock
        title="Tools"
        skills={[
          { icon: <FaGitAlt />, color: "text-orange-500" },
          { icon: <FaGithub />, color: "text-white" },
          { icon: <SiIntellijidea />, color: "text-purple-400" },
          { icon: <VscVscode />, color: "text-blue-500" },
          { icon: <SiPostman />, color: "text-orange-400" },
        ]}
      />
    </div>
  );
}
