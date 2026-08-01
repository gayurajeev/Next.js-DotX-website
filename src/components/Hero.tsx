"use client";

import { motion } from "framer-motion";
import { Download, ChevronRight } from "lucide-react";

const lifecycleStages = [
  "Requirement Analysis",
  "Planning",
  "Coding",
  "Testing",
  "Documentation",
  "Debugging",
  "Deployment"
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#000000] pt-24 pb-12">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] opacity-50 pointer-events-none" />

      <div className="z-10 container mx-auto px-4 flex flex-col items-center text-center mt-4">
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src="/logo.jpeg"
          alt="DotX Logo"
          className="w-24 h-auto mb-8 rounded-3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/30 bg-white/10 text-white text-sm font-medium mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]"></span>
          DotX version 1.0 is now live
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 max-w-5xl leading-tight text-white"
        >
          The Autonomous <span className="text-white/60">Multi-Agent</span> AI Platform for Software Engineering Sector
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl text-neutral-400 max-w-3xl mb-8 leading-relaxed"
        >
          DotX automates the complete software development lifecycle using intelligent AI agents—from requirement analysis to planning, coding, testing, documentation, debugging, and deployment.
        </motion.p>

        {/* Buttons (Moved up) */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
          <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <Download className="w-5 h-5" />
            Download for macOS
          </button>

          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors hover:scale-105 active:scale-95">
            <Download className="w-5 h-5" />
            Download for Windows
          </button>
          
          <button className="inline-flex items-center justify-center gap-2 px-4 py-4 text-neutral-400 font-medium hover:text-white transition-colors sm:ml-2">
            View Documentation
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Dashboard mockup preview (Moved down below fold) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-48 md:mt-64 w-full max-w-6xl relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-b from-white/20 to-transparent blur-2xl opacity-30" />
          <div className="relative rounded-xl md:rounded-2xl border border-white/20 shadow-2xl overflow-hidden bg-[#050505]">
            <img 
              src="/screenshot.jpeg" 
              alt="DotX Dashboard Interface" 
              className="w-[calc(100%+16px)] max-w-none h-auto -mt-8 md:-mt-10"
            />
          </div>
        </motion.div>

        {/* Lifecycle stages pills (Moved down below fold) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-3 max-w-3xl mt-48 mb-12"
        >
          {lifecycleStages.map((stage, i) => (
            <motion.span
              key={stage}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="px-4 py-1.5 bg-white/[0.03] border border-white/10 rounded-full text-sm text-neutral-300 shadow-sm backdrop-blur-md hover:bg-white/10 hover:text-white transition-colors cursor-default"
            >
              {stage}
            </motion.span>
          ))}
        </motion.div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}} />
    </section>
  );
}
