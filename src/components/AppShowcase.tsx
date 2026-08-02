"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const callouts = [
  { x: "18%",  y: "28%", label: "AI Agents Panel",   desc: "Live agent coordination" },
  { x: "62%",  y: "18%", label: "4-Step Workflow",   desc: "Requirements → Dev pipeline" },
  { x: "62%",  y: "62%", label: "Document Upload",   desc: "PRD, FRD, NFR ingestion" },
  { x: "90%",  y: "80%", label: "Project Progress",  desc: "Real-time status tracking" },
];

export default function AppShowcase() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.4, 0.6], [12, 0, 0]);
  const scale   = useTransform(scrollYProgress, [0, 0.4], [0.88, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  return (
    <section ref={ref} className="py-10 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 md:mb-8"
        >
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">
            The Desktop App
          </p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black">
            See DotX in Action
          </h2>
        </motion.div>

        {/* 3D perspective window */}
        <motion.div
          style={{ rotateX, scale, opacity }}
          className="relative mx-auto"
          initial={false}
          transition={{ type: "spring", stiffness: 60 }}
        >
          {/* macOS Window Chrome */}
          <div
            className="rounded-xl overflow-hidden border border-black/10"
            style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.06)", perspective: "1200px" }}
          >
            {/* Title bar */}
            <div className="bg-[#1a1a1a] h-9 flex items-center px-4 gap-2 shrink-0 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>

            {/* Screenshot — top bar cropped via overflow-hidden */}
            <div className="relative overflow-hidden">
              <img
                src="/screenshot.jpeg"
                alt="DotX IDE Screenshot"
                className="w-full block"
                style={{ marginTop: "-4.2%", display: "block" }}
                draggable={false}
              />

              {/* Callout pins — hidden on small screens */}
              {callouts.map((c, i) => (
                <motion.div
                  key={i}
                  className="absolute hidden md:block"
                  style={{ left: c.x, top: c.y }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.4, ease: "backOut" }}
                >
                  {/* Dot */}
                  <div className="relative">
                    <div className="w-3 h-3 bg-white border-2 border-black rounded-full -translate-x-1/2 -translate-y-1/2 z-10 relative" />
                    {/* Pulse ring */}
                    <motion.div
                      className="absolute inset-0 -translate-x-1/2 -translate-y-1/2 w-3 h-3 border-2 border-white/60 rounded-full"
                      animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                      transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.4 }}
                    />
                    {/* Label bubble */}
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-1.5 whitespace-nowrap" style={{ clipPath: "polygon(8px 0,100% 0,100% 100%,0 100%,0 8px)" }}>
                      <p className="font-black font-mono text-[10px] uppercase tracking-widest leading-none">{c.label}</p>
                      <p className="font-mono text-[9px] text-neutral-400 mt-0.5">{c.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Reflection / glow under window */}
          <div
            className="absolute -bottom-4 left-[10%] right-[10%] h-12 blur-xl rounded-full opacity-15 bg-black pointer-events-none"
          />
        </motion.div>

        {/* Feature tags directly below screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="flex flex-wrap justify-center gap-2.5 mt-5 md:mt-6"
        >
          {["Requirements Ingestion", "AI Agent Coordination", "4-Stage Pipeline", "Real-time Progress", "Document Upload"].map((tag) => (
            <span key={tag} className="font-mono text-[11px] md:text-xs font-bold uppercase tracking-widest border border-black/15 bg-white px-3.5 py-1.5 text-neutral-600 hover:border-black hover:text-black transition-colors cursor-default shadow-sm">
              {tag}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
