"use client";

import { motion } from "framer-motion";

const dotxFeatures = [
  {
    num: "01",
    title: "REQUIREMENTS & PLANNING",
    desc: "Analyzes project requirements and generates granular implementation plans to establish architectural constraints before code execution."
  },
  {
    num: "02",
    title: "FULL SDLC AGENT SUITE",
    desc: "Coordinates specialized AI agents assisting developers across coding, testing, documentation, debugging, and project management."
  },
  {
    num: "03",
    title: "CROSS-PLATFORM DESKTOP",
    desc: "Powered by Avalonia UI for native performance across macOS, Windows, and Linux — zero cloud lock-in, data stays on your machine."
  },
  {
    num: "04",
    title: "MICROSERVICES & MULTI-LLM",
    desc: "Engineered on ASP.NET Core, Spring Boot, FastAPI, PostgreSQL, pgvector, Redis, Docker, and Multi-LLMs (GPT, Claude, Gemini)."
  },
];

export default function WhatIsDotX() {
  return (
    <section className="py-16 md:py-24 relative bg-black text-white border-y border-black/80">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">

        {/* DotX Block */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16">
          <div className="md:sticky md:top-24 h-fit">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 md:mb-6 leading-none text-white font-mono"
            >
              DOTX
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="w-16 h-2 bg-[#59008C] mb-6"
            />
            <p className="text-neutral-400 font-mono text-xs sm:text-sm leading-relaxed max-w-xs font-bold">
              AUTONOMOUS DESKTOP SDLC PLATFORM — POWERED BY MULTI-LLM INTELLIGENCE.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {dotxFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-white/10 p-8 hover:border-white/40 transition-colors bg-white/5 clip-chamfer"
              >
                <div className="text-3xl font-black text-[#59008C] mb-4 font-mono">{feature.num}</div>
                <h3 className="font-bold text-lg tracking-tight uppercase mb-4 text-white font-mono">{feature.title}</h3>
                <p className="text-neutral-400 font-mono text-xs sm:text-sm leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
