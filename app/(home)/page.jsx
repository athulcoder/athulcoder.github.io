"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { NavigationBar } from "@/components/Navbar";
import Image from "next/image";
import { inter, plusJakarta } from "@/lib/font";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import GithubCalendar from "@/components/GithubCalender";
import Languages from "@/components/Language";
import Skills from "@/components/Skill";
import HeroContent from "@/components/HeroSection";
import LangCircle from "@/components/LangCricle";

function BackgroundBeamsDemo() {
  return (
    <div className="h-fit w-full  bg-neutral-950 relative flex flex-col  antialiased ">
      <div className="flex flex-col my-14 mx-5   justify-center items-center">
        <div className="flex justify-center items-center p-1 bg-cyan-600 h-fit w-fit rounded-full ">
          <Image
            src="./athul_sabu.jpg"
            width={300}
            height={300}
            alt="athul sabu"
            className="rounded-full w-[140px] h-[140px]"
          />
        </div>
        <div className="flex-col justify-center items-center">
          <h1
            className={`text-3xl font-bold text-zinc-300 z-50 ${inter.className}`}
          >
            <TextHoverEffect text="Athul Sabu" />
          </h1>
        </div>
        <HeroContent />
        <LangCircle />
        <Languages />
        <Skills />
        <GithubCalendar />
      </div>
    </div>
  );
}

export default BackgroundBeamsDemo;
