"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SparklesCore } from "@/components/ui/sparkles";
import { Spotlight } from "@/components/ui/spotlight";
import { inter } from "@/lib/font";

export default function AboutPage() {
  const story = `
In 8th standard, I started coding on an Android phone using Pydroid, learning basic Python. With that knowledge, I built a complete calculator using Tkinter—all on the phone itself.

Then COVID-19 hit. At 14, I explored HTML and CSS and created my personal blog, hosted on GitHub Pages. I even built ecommerce-like sites. To breathe life into them, I picked up JavaScript and mastered DOM manipulation, which let me craft stunning websites.

After 10th grade, I got my first laptop. I had already decided to pursue a Bachelor's in Computer Engineering after 9th, so this was my next-level leap. That summer vacation, I learned PHP and backend development. I built a website to fetch public exam results using just the registration number and date of birth. I used MySQL and PHP for the backend and HTML/CSS for the frontend.

For 11th grade, I chose Computer Science and started learning C++. Our school labs gave me a great foundation in problem-solving.

During the summer after 11th, I jumped into mobile development with Flutter. In one month, I built a full-featured Instagram clone using Flutter and Firebase. At just 16, that was my most advanced project yet.

In 12th, I participated in a web development competition and won 2nd place in the sub-district and 3rd at the district level. That recognition boosted my confidence immensely.

After 12th, I focused on entrance exam prep for two months. I secured admission to one of Kochi's top colleges—Muthoot Institute of Technology and Science—for BTech in Computer Science and Engineering. And my journey continues...`;

  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      <Spotlight className="absolute top-0 left-0 w-full h-full" />
      <SparklesCore
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={120}
        className="absolute w-full h-full z-0"
        particleColor="#ffffff"
      />

      <div className="relative z-10 px-4 md:px-32 py-24 space-y-14">
        <motion.h1
          className={cn(
            "text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-pink-500 via-orange-400 to-purple-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]",
            inter.className
          )}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          My Tech Journey
        </motion.h1>

        <motion.div
          className="relative max-w-5xl mx-auto p-[2px] rounded-2xl overflow-hidden animate-border"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 text-lg md:text-xl text-zinc-300 leading-8 md:leading-10 whitespace-pre-line">
            {story}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
