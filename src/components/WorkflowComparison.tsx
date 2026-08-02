"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const phases = [
  { label: "Requirements",  oldDelay: 1200, dotxDelay: 300,  oldBlock: "Manual meetings" },
  { label: "Architecture",  oldDelay: 1600, dotxDelay: 300,  oldBlock: "Alignment overhead" },
  { label: "Development",   oldDelay: 2400, dotxDelay: 400,  oldBlock: "Siloed engineers" },
  { label: "Testing",       oldDelay: 1800, dotxDelay: 300,  oldBlock: "Late-stage bugs" },
  { label: "Deployment",    oldDelay: 1400, dotxDelay: 250,  oldBlock: "Manual release" },
];

const oldStarts = phases.reduce<number[]>((acc, p, i) => {
  acc.push(i === 0 ? 600 : acc[i - 1] + phases[i - 1].oldDelay + 200);
  return acc;
}, []);
const dotxStarts = phases.reduce<number[]>((acc, p, i) => {
  acc.push(i === 0 ? 600 : acc[i - 1] + phases[i - 1].dotxDelay + 80);
  return acc;
}, []);

const totalOldTime = oldStarts[phases.length - 1] + phases[phases.length - 1].oldDelay + 800;
const loopDuration = totalOldTime + 2000;

type PhaseState = "idle" | "running" | "done";

export default function WorkflowComparison() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [tick, setTick] = useState(0);
  const [oldStatuses, setOldStatuses] = useState<PhaseState[]>(phases.map(() => "idle"));
  const [dotxStatuses, setDotxStatuses] = useState<PhaseState[]>(phases.map(() => "idle"));
  const [dotxDone, setDotxDone] = useState(false);
  const [oldDone, setOldDone] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    setOldStatuses(phases.map(() => "idle"));
    setDotxStatuses(phases.map(() => "idle"));
    setDotxDone(false);
    setOldDone(false);

    phases.forEach((p, i) => {
      timers.push(setTimeout(() => {
        setOldStatuses((prev) => { const n = [...prev]; n[i] = "running"; return n; });
      }, oldStarts[i]));
      timers.push(setTimeout(() => {
        setOldStatuses((prev) => { const n = [...prev]; n[i] = "done"; return n; });
        if (i === phases.length - 1) setOldDone(true);
      }, oldStarts[i] + p.oldDelay));
    });

    phases.forEach((p, i) => {
      timers.push(setTimeout(() => {
        setDotxStatuses((prev) => { const n = [...prev]; n[i] = "running"; return n; });
      }, dotxStarts[i]));
      timers.push(setTimeout(() => {
        setDotxStatuses((prev) => { const n = [...prev]; n[i] = "done"; return n; });
        if (i === phases.length - 1) setDotxDone(true);
      }, dotxStarts[i] + p.dotxDelay));
    });

    const loopTimer = setTimeout(() => setTick((t) => t + 1), loopDuration);
    timers.push(loopTimer);
    return () => timers.forEach(clearTimeout);
  }, [inView, tick]);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white border-y border-black/10">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">

        <div className="text-center mb-10 md:mb-14">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Live Comparison</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black">
            The Old Way vs. DotX
          </h2>
        </div>

        {/* Race Grid — stacks on mobile */}
        <div className="border border-black/15 overflow-hidden" style={{ boxShadow: "2px 2px 0 rgba(0,0,0,0.06)" }}>

          {/* Headers */}
          <div className="grid grid-cols-2">
            <div className="border-r border-b border-black/10 px-4 md:px-8 py-3 bg-neutral-50">
              <p className="font-black font-mono text-xs uppercase tracking-widest text-neutral-400">Traditional Dev</p>
            </div>
            <div className="border-b border-black/10 px-4 md:px-8 py-3 bg-black">
              <p className="font-black font-mono text-xs uppercase tracking-widest text-white">DotX Platform</p>
            </div>
          </div>

          {/* Phase rows */}
          {phases.map((phase, i) => {
            const oldStatus = oldStatuses[i];
            const dotxStatus = dotxStatuses[i];
            const isLastRow = i === phases.length - 1;
            return (
              <div key={i} className="grid grid-cols-2">
                {/* Old Way Cell */}
                <div className={`border-r ${isLastRow ? "" : "border-b"} border-black/10 px-4 md:px-8 py-4 min-h-[64px] flex flex-col justify-center bg-neutral-50 relative overflow-hidden`}>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className={`w-4 h-4 border shrink-0 flex items-center justify-center transition-all ${
                      oldStatus === "idle" ? "border-black/20" :
                      oldStatus === "running" ? "border-black" :
                      "border-black bg-black"
                    }`}>
                      {oldStatus === "running" && (
                        <motion.div className="w-1.5 h-1.5 bg-black" animate={{ scale: [1, 0.4, 1] }} transition={{ duration: 0.6, repeat: Infinity }} />
                      )}
                      {oldStatus === "done" && (
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 12 12">
                          <polyline points="2,6 5,9 10,3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className={`font-black font-mono text-xs uppercase truncate transition-colors ${oldStatus === "idle" ? "text-neutral-300" : "text-black"}`}>
                        {phase.label}
                      </p>
                      {oldStatus === "running" && (
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-mono text-[10px] text-neutral-400 mt-0.5 hidden sm:block">
                          ⚠ {phase.oldBlock}
                        </motion.p>
                      )}
                    </div>
                  </div>
                  {oldStatus === "running" && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black/10">
                      <motion.div className="h-full bg-black/30" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: phase.oldDelay / 1000, ease: "linear" }} />
                    </div>
                  )}
                </div>

                {/* DotX Cell */}
                <div className={`${isLastRow ? "" : "border-b border-white/10"} px-4 md:px-8 py-4 min-h-[64px] flex flex-col justify-center bg-black relative overflow-hidden`}>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className={`w-4 h-4 border shrink-0 flex items-center justify-center transition-all ${
                      dotxStatus === "idle" ? "border-white/20" :
                      dotxStatus === "running" ? "border-white" :
                      "border-white bg-white"
                    }`}>
                      {dotxStatus === "running" && (
                        <motion.div className="w-1.5 h-1.5 bg-white" animate={{ scale: [1, 0.4, 1] }} transition={{ duration: 0.3, repeat: Infinity }} />
                      )}
                      {dotxStatus === "done" && (
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 12 12">
                          <polyline points="2,6 5,9 10,3" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className={`font-black font-mono text-xs uppercase truncate transition-colors ${dotxStatus === "idle" ? "text-white/20" : "text-white"}`}>
                        {phase.label}
                      </p>
                    </div>
                  </div>
                  {dotxStatus === "running" && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10">
                      <motion.div className="h-full bg-white" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: phase.dotxDelay / 1000, ease: "linear" }} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Footer result row */}
          <div className="grid grid-cols-2 border-t border-black/10">
            <div className="border-r border-black/10 px-4 md:px-8 py-4 bg-neutral-100 min-h-[52px] flex items-center">
              <AnimatePresence>
                {oldDone ? (
                  <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="font-mono text-xs font-black uppercase text-neutral-400 tracking-widest">
                    Done — eventually.
                  </motion.p>
                ) : (
                  <p className="font-mono text-xs font-bold text-neutral-300 uppercase tracking-widest">Working...</p>
                )}
              </AnimatePresence>
            </div>
            <div className="px-4 md:px-8 py-4 bg-black min-h-[52px] flex items-center">
              <AnimatePresence>
                {dotxDone ? (
                  <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="font-black text-xs uppercase tracking-widest text-white">
                    ✓ Completed with DotX
                  </motion.p>
                ) : (
                  <p className="font-mono text-xs font-bold text-white/20 uppercase tracking-widest">Initializing...</p>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
