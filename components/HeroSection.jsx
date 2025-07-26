"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import Button, { GradientButton } from "./Button";
import { TbFolderSearch } from "react-icons/tb";

export default function HeroContent() {
  return (
    <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-4">
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 animate-gradient bg-[length:300%_300%]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Crafting Code, Creating Experiences
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-4 text-lg md:text-xl text-zinc-300 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Full Stack Developer focused on building fast, scalable, and
        user-friendly web applications—bridging design and backend logic to
        deliver complete digital experiences.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-6 flex flex-wrap justify-center gap-4 my-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <Button
          label={"Projects"}
          icon={TbFolderSearch}
          onClick={() => console.log("hello")}
          className=""
          innerBg="bg-black/30"
        />

        <Button
          label="Github"
          icon={FaGithub}
          onClick={() =>
            (window.location.href = "https://github.com/athulcoder")
          }
        />
      </motion.div>
    </div>
  );
}
