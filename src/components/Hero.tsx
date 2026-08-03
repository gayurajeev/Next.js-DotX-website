"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MacLogo, WindowsLogo, LinuxLogo } from "@/components/OsLogos";

const XYPHX_CHARS = ["X", "Y", "P", "H"];

function ScrambleLine({
  text,
  fromText = "XYPH",
  delay = 0,
}: {
  text: string;
  fromText?: string;
  delay?: number;
}) {
  const [display, setDisplay] = useState(fromText || text);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let step = 0;
      const totalSteps = 15;

      const interval = setInterval(() => {
        if (step >= totalSteps) {
          clearInterval(interval);
          setDisplay(text);
          setDone(true);
        } else {
          const progress = step / totalSteps;
          const lockedCount = Math.floor(progress * (text.length + 1));

          const scrambled = Array.from({ length: text.length }, (_, idx) => {
            if (idx < lockedCount && idx < text.length) {
              return text[idx];
            }
            return XYPHX_CHARS[Math.floor(Math.random() * XYPHX_CHARS.length)];
          }).join("");

          setDisplay(scrambled);
        }
        step++;
      }, 33);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, fromText, delay]);

  return (
    <span className={`font-mono inline-block transition-opacity ${done ? "" : "text-neutral-300"}`}>
      {display}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden bg-black text-white">

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-5xl w-full"
      >

        {/* Logo Image */}
        <div className="relative mb-3 flex items-center justify-center w-36 sm:w-48 md:w-56 lg:w-64 aspect-[1024/917]">
          <img
            src="/logo-highres-seamless.png"
            alt="DotX Logo"
            width={1024}
            height={917}
            fetchPriority="high"
            className="w-full h-full object-contain block"
          />
        </div>

        {/* DotX writing under the logo */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[6rem] 2xl:text-[7.5rem] font-black font-mono tracking-tight leading-none text-white mb-6">
          <ScrambleLine text="DOTX" fromText="XYPH" delay={0} />
        </h1>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-neutral-400 max-w-lg mb-8 leading-relaxed font-mono">
          An autonomous AI platform covering the complete software development lifecycle — from requirements to work completed.
        </p>

        {/* Download Buttons for macOS, Windows, Linux */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6">
          <a
            href="#"
            className="clip-button border-2 border-white bg-white px-5 py-2.5 sm:px-6 sm:py-3 font-mono font-black text-xs sm:text-sm uppercase tracking-widest text-black hover:bg-black hover:text-white hover:border-[#59008C] transition-all cursor-pointer flex items-center gap-2 sm:gap-2.5 shadow-lg"
          >
            <MacLogo className="w-4 h-4 shrink-0" />
            Download macOS
          </a>
          <a
            href="#"
            className="clip-button border-2 border-white bg-white px-5 py-2.5 sm:px-6 sm:py-3 font-mono font-black text-xs sm:text-sm uppercase tracking-widest text-black hover:bg-black hover:text-white hover:border-[#59008C] transition-all cursor-pointer flex items-center gap-2 sm:gap-2.5 shadow-lg"
          >
            <WindowsLogo className="w-4 h-4 shrink-0" />
            Download Windows
          </a>
          <a
            href="#"
            className="clip-button border-2 border-white bg-white px-5 py-2.5 sm:px-6 sm:py-3 font-mono font-black text-xs sm:text-sm uppercase tracking-widest text-black hover:bg-black hover:text-white hover:border-[#59008C] transition-all cursor-pointer flex items-center gap-2 sm:gap-2.5 shadow-lg"
          >
            <LinuxLogo className="w-4 h-4 shrink-0" />
            Download Linux
          </a>
        </div>

      </motion.div>

    </section>
  );
}
