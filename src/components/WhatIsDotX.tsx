"use client";

import { motion } from "framer-motion";

const dotxFeatures = [
  {
    num: "01",
    title: "REQUIREMENTS ANALYSIS",
    desc: "Parses and interprets requirements documents — PRD, FRD, NFR — to establish architectural constraints before a single line of code is written."
  },
  {
    num: "02",
    title: "IMPLEMENTATION PLANNING",
    desc: "Generates granular implementation plans and coordinates specialized AI agents to execute tasks across the full development lifecycle."
  },
  {
    num: "03",
    title: "CODING & DEBUGGING",
    desc: "Assists developers with code generation, real-time debugging, and automated test writing across multiple languages and frameworks."
  },
  {
    num: "04",
    title: "WORK COMPLETION",
    desc: "Handles documentation, code verification, and project handover — delivering fully completed and tested software deliverables."
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
              className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 md:mb-6 leading-none"
            >
              DOTX
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="w-16 h-2 bg-white mb-6"
            />
            <p className="text-neutral-400 font-mono text-sm leading-relaxed max-w-xs">
              FROM REQUIREMENTS TO WORK COMPLETED — ALL DRIVEN BY SPECIALIZED AI AGENTS.
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
                <div className="text-3xl font-black text-white/20 mb-4 font-mono">{feature.num}</div>
                <h3 className="font-bold text-xl tracking-tight uppercase mb-4">{feature.title}</h3>
                <p className="text-neutral-400 font-mono text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
