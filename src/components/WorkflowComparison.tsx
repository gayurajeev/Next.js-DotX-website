"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const STEP_DELAY = 800; // All 3 columns run at the exact same 800ms speed
const STEP_GAP = 150;

const phases = [
  {
    old: "Gather Requirements",
    vibe: "Chat with AI",
    dotx: "Upload Project Documents"
  },
  {
    old: "Requirement Analysis",
    vibe: "Write Prompts",
    dotx: "AI Requirement Analysis"
  },
  {
    old: "Design Architecture",
    vibe: "Generate Code",
    dotx: "Autonomous Architecture"
  },
  {
    old: "Build Development Team",
    vibe: "Manually Manage Context",
    dotx: "Create AI Organization"
  },
  {
    old: "Assign Tasks",
    vibe: "Switch Between Agents",
    dotx: "Dynamic Agent Formation"
  },
  {
    old: "Manual Development",
    vibe: "AI-Assisted Coding",
    dotx: "Parallel Multi-Agent Development"
  },
  {
    old: "Manual Code Reviews",
    vibe: "Review AI Output",
    dotx: "Autonomous Review Loops"
  },
  {
    old: "Manual Testing",
    vibe: "Run Tests Manually",
    dotx: "Autonomous Testing"
  },
  {
    old: "Fix Bugs & Rework",
    vibe: "Prompt Until It Works",
    dotx: "Continuous Self-Improvement"
  },
];

const starts = phases.map((_, i) => 500 + i * (STEP_DELAY + STEP_GAP));
const totalTime = starts[phases.length - 1] + STEP_DELAY + 800;
const loopDuration = totalTime + 2000;

type PhaseState = "idle" | "running" | "done";

export default function WorkflowComparison() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [tick, setTick] = useState(0);
  const [oldStatuses, setOldStatuses] = useState<PhaseState[]>(phases.map(() => "idle"));
  const [vibeStatuses, setVibeStatuses] = useState<PhaseState[]>(phases.map(() => "idle"));
  const [dotxStatuses, setDotxStatuses] = useState<PhaseState[]>(phases.map(() => "idle"));
  const [dotxDone, setDotxDone] = useState(false);
  const [vibeDone, setVibeDone] = useState(false);
  const [oldDone, setOldDone] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    setOldStatuses(phases.map(() => "idle"));
    setVibeStatuses(phases.map(() => "idle"));
    setDotxStatuses(phases.map(() => "idle"));
    setDotxDone(false);
    setVibeDone(false);
    setOldDone(false);

    // Synchronous execution loop — all 3 columns progress at identical speed
    phases.forEach((_, i) => {
      // Start step in sync
      timers.push(setTimeout(() => {
        setOldStatuses((prev) => { const n = [...prev]; n[i] = "running"; return n; });
        setVibeStatuses((prev) => { const n = [...prev]; n[i] = "running"; return n; });
        setDotxStatuses((prev) => { const n = [...prev]; n[i] = "running"; return n; });
      }, starts[i]));

      // Complete step in sync
      timers.push(setTimeout(() => {
        setOldStatuses((prev) => { const n = [...prev]; n[i] = "done"; return n; });
        setVibeStatuses((prev) => { const n = [...prev]; n[i] = "done"; return n; });
        setDotxStatuses((prev) => { const n = [...prev]; n[i] = "done"; return n; });
        if (i === phases.length - 1) {
          setOldDone(true);
          setVibeDone(true);
          setDotxDone(true);
        }
      }, starts[i] + STEP_DELAY));
    });

    const loopTimer = setTimeout(() => setTick((t) => t + 1), loopDuration);
    timers.push(loopTimer);
    return () => timers.forEach(clearTimeout);
  }, [inView, tick]);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-black text-white border-y border-white/10">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">

        <div className="text-center mb-10 md:mb-14">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Live Comparison</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
            The Old Way vs. DotX
          </h2>
        </div>

        {/* 3-Column Comparison Grid */}
        <div className="border border-black/15 overflow-hidden shadow-sm">

          {/* Headers */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Column 1: Traditional Development (White Theme) */}
            <div className="border-b border-r border-black/10 px-4 md:px-6 py-4 bg-white">
              <span className="inline-block px-2 py-0.5 text-[10px] font-mono font-bold uppercase bg-black/5 text-neutral-600 mb-1">
                Manual Workflow
              </span>
              <h3 className="font-black font-mono text-sm uppercase tracking-wider text-black">
                Traditional Development
              </h3>
            </div>

            {/* Column 2: Vibe Coding (Sleek Dark Theme) */}
            <div className="border-b border-r border-white/10 px-4 md:px-6 py-4 bg-[#181818] text-white">
              <span className="inline-block px-2 py-0.5 text-[10px] font-mono font-bold uppercase bg-white/10 text-neutral-300 mb-1 truncate max-w-full">
                codex, claude code, antigravity, etc.
              </span>
              <h3 className="font-black font-mono text-sm uppercase tracking-wider text-white">
                Vibe Coding
              </h3>
            </div>

            {/* Column 3: DOTX Platform (Brand Violet Theme #59008C) */}
            <div className="border-b border-[#59008C]/40 px-4 md:px-6 py-4 bg-[#190028] text-white">
              <span className="inline-block px-2 py-0.5 text-[10px] font-mono font-bold uppercase bg-[#59008C]/30 text-[#e9d5ff] border border-[#59008C]/50 mb-1">
                Autonomous AI Platform
              </span>
              <h3 className="font-black font-mono text-sm uppercase tracking-wider text-[#e9d5ff]">
                DOTX Platform
              </h3>
            </div>
          </div>

          {/* Phase Rows */}
          {phases.map((phase, i) => {
            const oldStatus = oldStatuses[i];
            const vibeStatus = vibeStatuses[i];
            const dotxStatus = dotxStatuses[i];
            const isLastRow = i === phases.length - 1;

            return (
              <div key={i} className="grid grid-cols-1 md:grid-cols-3">

                {/* 1. Traditional Development Cell (White) */}
                <div className={`border-r ${isLastRow ? "" : "border-b"} border-black/10 px-4 md:px-6 py-3.5 min-h-[56px] flex flex-col justify-center bg-white relative overflow-hidden`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 border shrink-0 flex items-center justify-center transition-all ${
                      oldStatus === "idle" ? "border-black/20 text-black/20" :
                      oldStatus === "running" ? "border-black bg-black/5 text-black" :
                      "border-black bg-black text-white"
                    }`}>
                      {oldStatus === "running" && (
                        <motion.div className="w-1.5 h-1.5 bg-black" animate={{ scale: [1, 0.4, 1] }} transition={{ duration: 0.6, repeat: Infinity }} />
                      )}
                      {oldStatus === "done" && (
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 12 12">
                          <polyline points="2,6 5,9 10,3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {oldStatus === "idle" && <span className="text-[9px]">☑</span>}
                    </div>
                    <p className={`font-mono text-xs font-bold transition-colors ${oldStatus === "idle" ? "text-neutral-400" : "text-black"}`}>
                      {phase.old}
                    </p>
                  </div>
                  {oldStatus === "running" && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black/10">
                      <motion.div className="h-full bg-black/40" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: STEP_DELAY / 1000, ease: "linear" }} />
                    </div>
                  )}
                </div>

                {/* 2. Vibe Coding Cell (Dark sleek bg-white/5 style color) */}
                <div className={`border-r ${isLastRow ? "" : "border-b"} border-white/10 px-4 md:px-6 py-3.5 min-h-[56px] flex flex-col justify-center bg-[#121212] text-neutral-200 relative overflow-hidden`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 border shrink-0 flex items-center justify-center transition-all ${
                      vibeStatus === "idle" ? "border-white/20 text-white/20" :
                      vibeStatus === "running" ? "border-white/40 bg-white/10 text-white" :
                      "border-white bg-white text-black"
                    }`}>
                      {vibeStatus === "running" && (
                        <motion.div className="w-1.5 h-1.5 bg-white" animate={{ scale: [1, 0.4, 1] }} transition={{ duration: 0.4, repeat: Infinity }} />
                      )}
                      {vibeStatus === "done" && (
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 12 12">
                          <polyline points="2,6 5,9 10,3" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {vibeStatus === "idle" && <span className="text-[9px]">☑</span>}
                    </div>
                    <p className={`font-mono text-xs font-bold transition-colors ${vibeStatus === "idle" ? "text-neutral-500" : "text-neutral-200"}`}>
                      {phase.vibe}
                    </p>
                  </div>
                  {vibeStatus === "running" && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10">
                      <motion.div className="h-full bg-white/40" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: STEP_DELAY / 1000, ease: "linear" }} />
                    </div>
                  )}
                </div>

                {/* 3. DOTX Platform Cell (Brand Violet #59008C Theme) */}
                <div className={`${isLastRow ? "" : "border-b border-[#59008C]/30"} px-4 md:px-6 py-3.5 min-h-[56px] flex flex-col justify-center bg-[#12001f] text-white relative overflow-hidden`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 border shrink-0 flex items-center justify-center transition-all ${
                      dotxStatus === "idle" ? "border-[#59008C] text-[#59008C] bg-transparent" :
                      dotxStatus === "running" ? "border-[#59008C] bg-[#59008C] text-white" :
                      "border-[#59008C] bg-[#59008C] text-white"
                    }`}>
                      {dotxStatus === "running" && (
                        <motion.div className="w-1.5 h-1.5 bg-white" animate={{ scale: [1, 0.4, 1] }} transition={{ duration: 0.3, repeat: Infinity }} />
                      )}
                      {dotxStatus === "done" && (
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 12 12">
                          <polyline points="2,6 5,9 10,3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {dotxStatus === "idle" && <span className="text-[9px]">☑</span>}
                    </div>
                    <p className={`font-mono text-xs font-bold transition-colors ${dotxStatus === "idle" ? "text-neutral-400" : "text-[#e9d5ff]"}`}>
                      {phase.dotx}
                    </p>
                  </div>
                  {dotxStatus === "running" && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#59008C]/30">
                      <motion.div className="h-full bg-[#59008C]" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: STEP_DELAY / 1000, ease: "linear" }} />
                    </div>
                  )}
                </div>

              </div>
            );
          })}

          {/* Footer Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-black/10">
            {/* Traditional Development Footer */}
            <div className="border-r border-black/10 px-4 md:px-6 py-4 bg-white min-h-[52px] flex items-center">
              <AnimatePresence>
                {oldDone ? (
                  <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="font-mono text-xs font-black uppercase text-black flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span> Project Ready
                  </motion.p>
                ) : (
                  <p className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-wider">Working...</p>
                )}
              </AnimatePresence>
            </div>

            {/* Vibe Coding Footer */}
            <div className="border-r border-white/10 px-4 md:px-6 py-4 bg-[#181818] min-h-[52px] flex items-center">
              <AnimatePresence>
                {vibeDone ? (
                  <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="font-mono text-xs font-black uppercase text-white flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">✓</span> Project Ready
                  </motion.p>
                ) : (
                  <p className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-wider">Prompting...</p>
                )}
              </AnimatePresence>
            </div>

            {/* DOTX Platform Footer (#59008C Brand Theme) */}
            <div className="px-4 md:px-6 py-4 bg-[#190028] min-h-[52px] flex items-center">
              <AnimatePresence>
                {dotxDone ? (
                  <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="font-mono text-xs font-black uppercase text-[#e9d5ff] flex items-center gap-2">
                    <span className="text-[#59008C] font-bold text-sm">✓</span> Project Ready
                  </motion.p>
                ) : (
                  <p className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-wider">Executing...</p>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
