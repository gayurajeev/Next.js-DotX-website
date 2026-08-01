"use client";

import { motion } from "framer-motion";
import { Sparkles, ClipboardList, Settings, Rocket } from "lucide-react";

const cards = [
  {
    title: "Plan",
    description: "Analyze requirements and create implementation strategies.",
    icon: ClipboardList,
  },
  {
    title: "Build",
    description: "Generate production-ready software using intelligent AI agents.",
    icon: Settings,
  },
  {
    title: "Deliver",
    description: "Test, document, debug, and deploy projects efficiently.",
    icon: Rocket,
  },
];

export default function WhatIsDotX() {
  return (
    <section className="py-32 relative bg-black border-t border-white/10 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 text-white font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span className="uppercase tracking-widest text-xs text-neutral-400">The Platform</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white tracking-tight"
            >
              What is DotX?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-neutral-300 text-lg md:text-xl leading-relaxed mb-6"
            >
              DotX is an AI-powered desktop platform that coordinates specialized AI agents to automate the complete software development lifecycle.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-neutral-500 text-lg leading-relaxed"
            >
              Instead of relying on a single assistant, DotX enables intelligent collaboration between multiple autonomous agents that analyze requirements, create implementation plans, generate code, perform testing, write documentation, assist debugging, and prepare deployment.
            </motion.p>
          </div>

          {/* Right Column: Feature Cards */}
          <div className="flex flex-col gap-6 relative">
            {/* Ambient background glow behind cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
            
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
                  className="relative z-10 flex items-start gap-6 p-6 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:bg-white/[0.03] hover:border-white/20 transition-all duration-300 group shadow-xl"
                >
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{card.title}</h3>
                    <p className="text-neutral-400 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}
