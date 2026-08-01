"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Network, Code2, TestTube, FileText, Rocket, Play, CheckCircle2 } from "lucide-react";

const agents = [
  { id: 'planning', icon: Brain, label: 'Planning Agent', desc: 'Analyze requirements' },
  { id: 'architecture', icon: Network, label: 'Architecture Agent', desc: 'Design the solution' },
  { id: 'coding', icon: Code2, label: 'Coding Agent', desc: 'Generate code' },
  { id: 'testing', icon: TestTube, label: 'Testing Agent', desc: 'Execute tests' },
  { id: 'docs', icon: FileText, label: 'Documentation Agent', desc: 'Generate documentation' },
  { id: 'deployment', icon: Rocket, label: 'Deployment Agent', desc: 'Prepare deployment' },
];

export default function HowItWorks() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying) {
      // Loop the animation smoothly
      interval = setInterval(() => {
        setActiveStep((prev) => {
          if (prev >= agents.length) {
            return -1; // Reset to start
          }
          return prev + 1;
        });
      }, 800); // 0.8s per step
    }

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleRunDemo = () => {
    setIsPlaying(true);
    setActiveStep(0);
  };

  return (
    <section className="py-32 relative bg-[#000000] border-t border-white/10 overflow-hidden">
      {/* Background glow when playing */}
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none transition-opacity duration-1000 ${isPlaying ? 'bg-white/5 opacity-50' : 'opacity-0'}`} 
      />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">How DotX Works</h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Experience the autonomous multi-agent workflow in real-time.
          </p>
        </div>

        <div className="bg-[#050505] rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Initial Prompt Header */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 pb-8 border-b border-white/10">
            <div className="flex flex-col items-start text-left w-full">
              <span className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Developer Request</span>
              <div className="text-xl md:text-2xl font-mono text-white flex items-center gap-3">
                <span className="text-white/50">&gt;</span>
                "Build an Inventory Management System."
                {!isPlaying && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-3 h-6 bg-white inline-block ml-1"
                  />
                )}
              </div>
            </div>
            
            {!isPlaying && (
              <button 
                onClick={handleRunDemo}
                className="shrink-0 flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:scale-105 transition-transform"
              >
                <Play className="w-4 h-4 fill-black" />
                Run Demo
              </button>
            )}
            
            {isPlaying && (
              <div className="shrink-0 flex items-center gap-2 px-6 py-3 border border-white/20 text-white/50 rounded-xl">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Running
              </div>
            )}
          </div>

          {/* Agents Workflow Grid */}
          <div className="relative">
            {/* Animated Connecting Line Background */}
            <div className="absolute top-8 left-8 right-8 h-[2px] bg-white/5 hidden lg:block" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
              {agents.map((agent, index) => {
                const Icon = agent.icon;
                const isActive = activeStep === index;
                const isPast = activeStep > index;
                
                return (
                  <div key={agent.id} className="flex flex-col items-center text-center relative group">
                    {/* Connecting line for mobile/tablet */}
                    {index !== agents.length - 1 && (
                      <div className="absolute top-[80px] left-1/2 w-[2px] h-6 bg-white/5 lg:hidden" />
                    )}

                    <div className="relative mb-6">
                      {/* Glow effect */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1.2 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="absolute inset-0 bg-white/20 rounded-2xl blur-xl"
                          />
                        )}
                      </AnimatePresence>
                      
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center relative z-10 border transition-all duration-500 ${
                        isActive ? 'bg-white text-black border-white scale-110 shadow-[0_0_30px_rgba(255,255,255,0.3)]' :
                        isPast ? 'bg-white/10 text-white border-white/20' : 
                        'bg-[#0a0a0a] text-neutral-600 border-white/5'
                      }`}>
                        <Icon className="w-6 h-6" />
                        
                        {/* Progress Ring for Active State */}
                        {isActive && (
                          <svg className="absolute -inset-2 w-20 h-20 -rotate-90">
                            <circle cx="40" cy="40" r="38" className="stroke-white/20 stroke-[2px] fill-none" />
                            <motion.circle 
                              cx="40" cy="40" r="38" 
                              className="stroke-white stroke-[2px] fill-none"
                              initial={{ strokeDasharray: "0 239" }}
                              animate={{ strokeDasharray: "239 239" }}
                              transition={{ duration: 0.8, ease: "linear" }}
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    
                    <h3 className={`font-semibold mb-2 transition-colors duration-300 ${
                      isActive || isPast ? 'text-white' : 'text-neutral-500'
                    }`}>
                      {agent.label}
                    </h3>
                    <p className={`text-sm transition-colors duration-300 ${
                      isActive ? 'text-neutral-300' : 'text-neutral-600'
                    }`}>
                      {agent.desc}
                    </p>
                    
                    {/* Animated Line connecting to next agent (desktop) */}
                    {index < agents.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] h-[2px]">
                        {isPast && (
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 0.5 }}
                            className="h-full bg-white/40"
                          />
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Success State */}
          <div className="mt-16 h-16 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {activeStep >= agents.length && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white font-medium shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                >
                  <CheckCircle2 className="w-5 h-5 text-white" />
                  Project Successfully Generated with DotX
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
