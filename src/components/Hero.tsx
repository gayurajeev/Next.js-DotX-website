"use client";

import { motion } from "framer-motion";
import { Apple, Monitor } from "lucide-react";
import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
const WORDS = ["BUILD.", "DEPLOY.", "AUTOMATE."];

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
    <span className={`font-mono transition-opacity ${done ? "" : "text-neutral-300"}`}>
      {display}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white">

      {/* Main content */}
      <div className="z-10 flex flex-col items-center text-center px-6 max-w-4xl w-full">

        {/* Logo — the hero visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-10"
        >
          {/* The logo itself */}
          <motion.img
            src="/logo.jpeg"
            alt="DotX"
            className="w-28 h-28 md:w-36 md:h-36 object-cover block relative z-10"
            style={{ borderRadius: "4px" }}
            animate={{
              boxShadow: [
                "0 0 0px rgba(0,0,0,0.0)",
                "0 8px 40px rgba(0,0,0,0.10)",
                "0 0 0px rgba(0,0,0,0.0)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* DotX wordmark */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-xs font-mono font-black uppercase tracking-[0.4em] text-neutral-400 mb-10"
        >
          DotX
        </motion.p>

        {/* Scramble headline */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="text-5xl md:text-7xl lg:text-[6.5rem] font-black tracking-tighter mb-6 leading-[1.05] text-black uppercase w-full"
        >
          {WORDS.map((word, i) => (
            <div key={i} className="block">
              <ScrambleLine text={word} delay={900 + i * 350} />
            </div>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
          className="text-sm md:text-base text-neutral-500 max-w-lg mb-10 leading-relaxed font-mono"
        >
          An autonomous AI platform covering the complete software development lifecycle — from requirements to deployment.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button className="w-full sm:w-auto clip-button bg-black text-white px-8 py-4 font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-3 hover:bg-neutral-800 transition-colors">
            <Apple className="w-4 h-4" />
            Download for macOS
          </button>
          <button className="w-full sm:w-auto clip-button bg-white text-black px-8 py-4 font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-3 border border-black/20 hover:border-black hover:bg-black hover:text-white transition-all">
            <Monitor className="w-4 h-4" />
            Download for Windows
          </button>
        </motion.div>

      </div>

      {/* Subtle corner marks */}
      <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-black/20 pointer-events-none" />
      <div className="absolute top-6 right-6 w-4 h-4 border-t border-r border-black/20 pointer-events-none" />
      <div className="absolute bottom-6 left-6 w-4 h-4 border-b border-l border-black/20 pointer-events-none" />
      <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-black/20 pointer-events-none" />

    </section>
  );
}
