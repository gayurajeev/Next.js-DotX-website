"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, CheckCircle2, Zap, AlertTriangle, ChevronRight, RefreshCcw } from "lucide-react";

export default function WorkflowComparison() {
  const [isDotXMode, setIsDotXMode] = useState(true);

  return (
    <section className="py-32 relative bg-[#050505] border-t border-white/10 overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">The Old Way vs. The DotX Way</h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto mb-10">
            See how autonomous agent orchestration eliminates bottlenecks and transforms weeks of labor into minutes of computation.
          </p>

          {/* Custom Toggle Switch */}
          <div className="inline-flex items-center p-1.5 bg-[#0a0a0a] rounded-full border border-white/10 relative">
            <button
              onClick={() => setIsDotXMode(false)}
              className={`relative z-10 px-8 py-3 text-sm font-semibold rounded-full transition-colors ${
                !isDotXMode ? "text-black" : "text-neutral-500 hover:text-white"
              }`}
            >
              Traditional Workflow
            </button>
            <button
              onClick={() => setIsDotXMode(true)}
              className={`relative z-10 px-8 py-3 text-sm font-semibold rounded-full transition-colors flex items-center gap-2 ${
                isDotXMode ? "text-black" : "text-neutral-500 hover:text-white"
              }`}
            >
              <Zap className="w-4 h-4" />
              DotX Autonomous Flow
            </button>
            
            {/* Animated Toggle Indicator */}
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white rounded-full z-0"
              initial={false}
              animate={{
                left: isDotXMode ? "calc(50% + 4px)" : "6px",
              }}
            />
          </div>
        </div>

        {/* Dynamic Workflow Visualization */}
        <div className="relative rounded-3xl border border-white/10 bg-black p-8 md:p-12 overflow-hidden shadow-2xl min-h-[400px]">
          
          <AnimatePresence mode="wait">
            {!isDotXMode ? (
              <motion.div
                key="traditional"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-8"
              >
                <div className="flex items-center justify-between text-neutral-500 text-sm mb-4">
                  <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Timeline: 2-4 Weeks</span>
                  <span className="flex items-center gap-2 text-red-400/50"><AlertTriangle className="w-4 h-4" /> High Friction</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 border border-red-500/10 rounded-xl bg-red-500/5 opacity-50">
                    <div className="w-8 h-8 rounded-full bg-[#111] flex items-center justify-center shrink-0 border border-white/10 text-xs">1</div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Write PRD & Wait for Approvals</h4>
                      <p className="text-sm text-neutral-500">Endless meetings and manual documentation alignment.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 border border-red-500/10 rounded-xl bg-red-500/5 opacity-50">
                    <div className="w-8 h-8 rounded-full bg-[#111] flex items-center justify-center shrink-0 border border-white/10 text-xs">2</div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Human Coding (Bottleneck)</h4>
                      <p className="text-sm text-neutral-500">Developers manually write code, often introducing typos or missing edge cases.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 border border-red-500/10 rounded-xl bg-red-500/5 opacity-50">
                    <div className="w-8 h-8 rounded-full bg-[#111] flex items-center justify-center shrink-0 border border-white/10 text-xs">3</div>
                    <div>
                      <h4 className="text-white font-medium mb-1 flex items-center gap-2">QA Testing <RefreshCcw className="w-3 h-3 text-red-400" /></h4>
                      <p className="text-sm text-neutral-500">Bugs are found, tickets sent back to developers. Repeat cycle.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 border border-red-500/10 rounded-xl bg-red-500/5 opacity-50">
                    <div className="w-8 h-8 rounded-full bg-[#111] flex items-center justify-center shrink-0 border border-white/10 text-xs">4</div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Manual Deployment</h4>
                      <p className="text-sm text-neutral-500">DevOps engineers configure environments and manually push to production.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="dotx"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-8 h-full"
              >
                <div className="flex items-center justify-between text-neutral-400 text-sm mb-4">
                  <span className="flex items-center gap-2 text-white font-medium"><Zap className="w-4 h-4 fill-white" /> Timeline: ~5 Minutes</span>
                  <span className="flex items-center gap-2 text-green-400"><CheckCircle2 className="w-4 h-4" /> Zero Friction</span>
                </div>
                
                {/* Parallel Tracks Visualization */}
                <div className="relative flex-1 bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 overflow-hidden">
                  
                  {/* Glowing background */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />

                  <div className="relative z-10 flex flex-col md:flex-row gap-6 items-stretch">
                    
                    {/* Prompt */}
                    <div className="flex-1 flex flex-col items-center justify-center text-center p-6 border border-white/20 rounded-xl bg-white/5 backdrop-blur-sm">
                      <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center mb-4">
                        <span className="font-bold">1</span>
                      </div>
                      <h4 className="text-white font-semibold mb-2">Provide Prompt</h4>
                      <p className="text-sm text-neutral-400">Describe what you want to build in plain English.</p>
                    </div>

                    <div className="hidden md:flex items-center justify-center">
                      <ChevronRight className="w-6 h-6 text-white/30" />
                    </div>

                    {/* Agent Swarm */}
                    <div className="flex-[2] grid grid-cols-2 gap-4">
                      <div className="p-4 border border-white/10 rounded-xl bg-white/[0.02] relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                        <h5 className="text-sm font-semibold text-white mb-1">Planning Agent</h5>
                        <p className="text-xs text-neutral-500">Auto-generating PRD</p>
                      </div>
                      <div className="p-4 border border-white/10 rounded-xl bg-white/[0.02] relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite_0.5s]" />
                        <h5 className="text-sm font-semibold text-white mb-1">Coding Agent</h5>
                        <p className="text-xs text-neutral-500">Writing deterministic code</p>
                      </div>
                      <div className="p-4 border border-white/10 rounded-xl bg-white/[0.02] relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite_1s]" />
                        <h5 className="text-sm font-semibold text-white mb-1">Testing Agent</h5>
                        <p className="text-xs text-neutral-500">Validating edge cases</p>
                      </div>
                      <div className="p-4 border border-white/10 rounded-xl bg-white/[0.02] relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite_1.5s]" />
                        <h5 className="text-sm font-semibold text-white mb-1">DevOps Agent</h5>
                        <p className="text-xs text-neutral-500">Packaging for staging</p>
                      </div>
                    </div>

                  </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
