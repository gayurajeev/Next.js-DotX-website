"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is DotX?",
    answer: "DotX is an autonomous AI platform that manages the complete software development lifecycle — from analyzing requirements documents (PRDs, FRDs, NFRs) to generating implementation plans, coordinating specialized AI agents, coding, testing, debugging, documentation, deployment, and project management."
  },
  {
    question: "What is EnterpriseX?",
    answer: "EnterpriseX extends DotX's autonomous agent architecture to enterprise environments. It enables intelligent workflow automation, business process management, decision support, manufacturing optimization, logistics coordination, resource planning, and digital transformation across multiple industries."
  },
  {
    question: "What AI models does the platform use?",
    answer: "DotX integrates multiple Large Language Models including GPT, Claude, Gemini, and custom AI models. The platform intelligently selects the most capable model for each specific task, ensuring maximum reasoning quality across the development lifecycle."
  },
  {
    question: "What is the technology stack?",
    answer: "The backend is built on ASP.NET Core (.NET), Spring Boot, and FastAPI. The desktop app uses Avalonia UI for cross-platform support. Supporting technologies include PostgreSQL, pgvector, Redis, Docker, MinIO, SignalR/WebSockets, and GitHub Actions — following a scalable partial microservice architecture."
  },
  {
    question: "How do the AI agents collaborate?",
    answer: "Specialized agents handle distinct responsibilities — planning, reasoning, execution, monitoring, and continuous learning. They communicate in real time via SignalR and WebSockets, coordinating autonomously without manual developer intervention at each handoff."
  },
  {
    question: "Which platforms does DotX run on?",
    answer: "DotX's desktop client is built with Avalonia UI, providing a native cross-platform experience on Windows, macOS, and Linux — with no browser or Electron overhead."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-32 bg-white grid-bg">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-left mb-10 md:mb-16 border-l-2 border-black/20 pl-5">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-black uppercase tracking-tighter">
            Questions
          </h2>
          <p className="font-mono text-sm font-bold text-neutral-500">THINGS PEOPLE USUALLY ASK ABOUT DOTX.</p>
        </div>

        <div className="border-t border-black/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-black/10 bg-white">
                <button
                  className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-black hover:text-white transition-colors group"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-black text-lg uppercase tracking-tight">{faq.question}</span>
                  <div className="w-8 h-8 border-2 border-current flex items-center justify-center shrink-0 ml-4">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden bg-neutral-100 border-t-2 border-black"
                    >
                      <div className="px-6 py-8 font-mono text-black font-bold max-w-3xl leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
