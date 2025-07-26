"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroContent() {
  return (
    <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-4">
      {/* Animated Title */}
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
        Started coding in 8th grade, now building beautiful products & powerful
        solutions as a BTech CSE student at MITS Kochi.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        className="mt-6 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <Button asChild variant="secondary" className="gap-2">
          <a
            href="mailto:your@email.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </a>
        </Button>

        <Button
          asChild
          variant="outline"
          className="gap-2 border-white/30 hover:border-white"
        >
          <a
            href="https://github.com/athulcoder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </Button>

        <Button asChild variant="ghost" className="gap-2 hover:bg-white/10">
          <a
            href="https://linkedin.com/in/athul-sabu-84360a261/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </Button>
      </motion.div>
    </div>
  );
}
