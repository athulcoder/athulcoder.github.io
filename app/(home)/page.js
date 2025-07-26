"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { NavigationBar } from "@/components/Navbar";
import Image from "next/image";
import { inter } from "@/lib/font";

function BackgroundBeamsDemo() {
  return (
    <div className="h-[100vh] w-full  bg-neutral-950 relative flex flex-col  antialiased">
      <div className="flex flex-col my-5 mx-5  justify-center items-center">
        <div className="flex justify-center items-center p-1 bg-pink-600 h-fit w-fit rounded-full ">
          <Image
            src="./athul_sabu.jpg"
            width={300}
            height={300}
            alt="athul sabu"
            className="rounded-full w-[150px] h-[150px]"
          />
        </div>
        <div className="flex-col justify-center items-center">
          <h1 className={`text-3xl font-bold text-zinc-200 ${inter.className}`}>
            Athul Sabu
          </h1>
          <h1
            className={`text-sm  text-gray-600 text-center ${inter.className}`}
          >
            athulcoder
          </h1>
        </div>

        <div className="flex flex-col">
          <p className={`text-sm  text-gray-400 ${inter.className}`}>
            I am self made developer and tech enthusiase who tries find small
            problems that never exist.I started my tech journey from the 8th
            grade.Starting from my very first language Python I have worked with
            15+ languages throughtout my entire career.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BackgroundBeamsDemo;
