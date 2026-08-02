"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, CheckCircle2, Loader2 } from "lucide-react";

type AgentStatus = "idle" | "running" | "done";

const agents = [
  {
    id: "requirements",
    label: "Requirements Agent",
    task: "Parsing project requirements...",
    output: "✓ Entities: Product, Order, Supplier, Stock. Constraints: REST API, PostgreSQL, JWT Auth.",
  },
  {
    id: "planning",
    label: "Planning Agent",
    task: "Generating implementation plan...",
    output: "✓ 4-phase plan created: Schema → API → Business Logic → Deployment pipeline.",
  },
  {
    id: "codegen",
    label: "Code Generation Agent",
    task: "Writing code across modules...",
    output: "✓ Generated: 12 API endpoints, 6 models, 4 services, unit test suite.",
  },
  {
    id: "testing",
    label: "Testing Agent",
    task: "Running automated test suite...",
    output: "✓ 48/48 tests passed. 0 failures. Coverage: 94%.",
  },
  {
    id: "deployment",
    label: "Deployment Agent",
    task: "Building Docker image & pushing pipeline...",
    output: "✓ Deployed to production. Endpoint: https://inventory.dotx.dev",
  },
];

type DemoState = "idle" | "running" | "completed";

export default function HowItWorks() {
  const [demoState, setDemoState] = useState<DemoState>("idle");
  const [activeAgent, setActiveAgent] = useState<number>(-1);
  const [agentStatuses, setAgentStatuses] = useState<AgentStatus[]>(
    agents.map(() => "idle")
  );

  const runDemo = async () => {
    if (demoState === "running") return;
    // Reset
    setDemoState("running");
    setActiveAgent(-1);
    setAgentStatuses(agents.map(() => "idle"));

    for (let i = 0; i < agents.length; i++) {
      setActiveAgent(i);
      setAgentStatuses((prev) => {
        const next = [...prev];
        next[i] = "running";
        return next;
      });
      // Simulate agent working time
      await new Promise((r) => setTimeout(r, 500));
      setAgentStatuses((prev) => {
        const next = [...prev];
        next[i] = "done";
        return next;
      });
      await new Promise((r) => setTimeout(r, 300));
    }

    setActiveAgent(-1);
    setDemoState("completed");

    // Auto-restart after a short pause
    await new Promise((r) => setTimeout(r, 1200));
    runDemo();
  };

  const reset = () => {
    setDemoState("idle");
    setActiveAgent(-1);
    setAgentStatuses(agents.map(() => "idle"));
  };

  return (
    <section className="py-16 md:py-32 relative bg-white grid-bg">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">

        {/* Header */}
        <div className="text-left mb-12 border-l-2 border-black/20 pl-8">
          <h2 className="text-2xl md:text-5xl font-black mb-4 text-black tracking-tighter uppercase">
            How DotX Works
          </h2>
          <p className="text-black font-mono text-sm max-w-xl font-bold">
            CLICK RUN A DEMO — WATCH SPECIALIZED AGENTS TAKE A TASK FROM ZERO TO SHIPPED.
          </p>
        </div>

        {/* Demo Terminal */}
        <div className="bg-white border border-black/15 overflow-hidden" style={{ boxShadow: "2px 2px 0 rgba(0,0,0,0.06)" }}>

          {/* Terminal Header Bar */}
          <div className="bg-black text-white flex items-center justify-between px-4 md:px-6 py-3 border-b border-black/30">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 bg-white/10 border border-white/20" />
              <div className="w-2.5 h-2.5 bg-white/10 border border-white/20" />
              <div className="w-2.5 h-2.5 bg-white/10 border border-white/20" />
            </div>
            <span className="font-mono text-[10px] font-bold text-neutral-500 uppercase tracking-widest hidden sm:block">
              dotx-agent-runtime
            </span>
            <div className="w-16" />
          </div>

          <div className="p-4 md:p-8">

            {/* Task Prompt */}
            <div className="flex items-start gap-3 mb-6 md:mb-8 border-b border-black/10 pb-4 md:pb-6">
              <div>
                <p className="font-mono font-black text-black text-sm md:text-lg leading-snug">
                  DotX run <span className="bg-black text-white px-2 py-0.5 text-xs md:text-base">"Build an Inventory Management System"</span>
                </p>
              </div>
            </div>

            {/* Agents */}
            <div className="flex flex-col gap-4 mb-8">
              {agents.map((agent, i) => {
                const status = agentStatuses[i];
                return (
                  <div
                    key={agent.id}
                    className={`border-2 px-5 py-4 transition-all duration-300 ${
                      status === "running"
                        ? "border-black bg-black/5"
                        : status === "done"
                        ? "border-black bg-black text-white"
                        : "border-black/10 bg-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {status === "idle" && (
                        <div className="w-4 h-4 border-2 border-black/20 shrink-0" />
                      )}
                      {status === "running" && (
                        <Loader2 className="w-4 h-4 shrink-0 animate-spin text-black" />
                      )}
                      {status === "done" && (
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-white" />
                      )}
                      <span className={`font-black font-mono text-sm uppercase tracking-wider ${
                        status === "idle" ? "text-neutral-400" : status === "done" ? "text-white" : "text-black"
                      }`}>
                        {agent.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Completed Message */}
            <AnimatePresence>
              {demoState === "completed" && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="border-4 border-black bg-black text-white p-8 text-center brutal-shadow mb-8"
                >
                  <p className="font-black text-3xl uppercase tracking-tighter">
                    Project Completed with DotX
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              {demoState === "idle" && (
                <button
                  onClick={runDemo}
                  className="flex items-center gap-3 px-8 py-4 bg-black text-white font-black uppercase text-sm tracking-widest brutal-shadow-hover transition-all border-2 border-transparent hover:bg-white hover:text-black hover:border-black"
                >
                  <Play className="w-4 h-4" />
                  Run a Demo
                </button>
              )}
              {(demoState === "running" || demoState === "completed") && (
                <div className="flex items-center gap-3 px-8 py-4 border-4 border-black font-black uppercase text-sm tracking-widest text-black opacity-60 cursor-not-allowed">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Running...
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
