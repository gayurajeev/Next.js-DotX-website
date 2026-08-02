"use client";

import { motion } from "framer-motion";
import { MacLogo, WindowsLogo } from "@/components/OsLogos";
import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
const WORDS = ["BUILD.", "DELIVER.", "AUTOMATE."];

function ScrambleLine({ text, delay = 0 }: { text: string; delay?: number }) {
  const [display, setDisplay] = useState(() => text.replace(/./g, " "));
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let iteration = 0;
      const total = text.length * 6;
      const interval = setInterval(() => {
        setDisplay(
          text
            .split("")
            .map((char, idx) => {
              if (char === " " || char === "\n") return char;
              if (idx < iteration / 6) return char;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );
        iteration++;
        if (iteration > total) {
          clearInterval(interval);
          setDisplay(text);
          setDone(true);
        }
      }, 28);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span className={`font-mono transition-opacity ${done ? "" : "text-neutral-600"}`}>
      {display}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white">

      {/* Main content */}
      <div className="z-10 flex flex-col items-center text-center px-6 max-w-5xl w-full">

        {/* Logo Brand Mark (Original Emblem + Bold White Wordmark stacked underneath) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 flex flex-col items-center justify-center gap-3 sm:gap-4"
        >
          <img
            src="/logo-original-unmodified.png"
            alt="DotX Logo"
            className="w-18 h-18 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain block"
          />
          <span className="font-black text-white text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none">
            DotX
          </span>
        </motion.div>

        {/* Scramble headline */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="text-base sm:text-3xl md:text-5xl lg:text-6xl xl:text-[4.5rem] 2xl:text-[5.5rem] font-black tracking-tight mb-6 leading-tight text-white uppercase w-full flex flex-row items-center justify-center gap-1.5 sm:gap-4 md:gap-6 whitespace-nowrap max-w-full px-2 pl-4 sm:pl-12 md:pl-20 lg:pl-32"
        >
          <span className="flex-1 text-right">
            <ScrambleLine text={WORDS[0]} delay={900} />
          </span>
          <span className="shrink-0 text-center font-black">
            <ScrambleLine text={WORDS[1]} delay={1250} />
          </span>
          <span className="flex-1 text-left">
            <ScrambleLine text={WORDS[2]} delay={1600} />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
          className="text-sm md:text-base text-neutral-400 max-w-lg mb-10 leading-relaxed font-mono"
        >
          An autonomous AI platform covering the complete software development lifecycle — from requirements to work completed.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.3 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto max-w-sm sm:max-w-none"
        >
          <button className="w-full sm:w-auto clip-button bg-white text-black px-6 sm:px-8 py-3.5 sm:py-4 font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-2.5 sm:gap-3 border border-white hover:bg-black hover:text-white transition-all cursor-pointer">
            <MacLogo className="w-4 h-4 shrink-0" />
            Download for macOS
          </button>
          <button className="w-full sm:w-auto clip-button bg-black text-white px-6 sm:px-8 py-3.5 sm:py-4 font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-2.5 sm:gap-3 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all cursor-pointer">
            <WindowsLogo className="w-4 h-4 shrink-0" />
            Download for Windows
          </button>
        </motion.div>

      </div>

    </section>
  );
}
