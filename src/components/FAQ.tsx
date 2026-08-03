"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is DotX?",
    answer: "DotX is an autonomous AI desktop application that turns raw requirement documents (PRDs, FRDs, specs) into fully finished, tested codebases — coordinating specialized AI agents to execute tasks automatically."
  },
  {
    question: "How is DotX different from Vibe Coding tools (Claude Code, Codex)?",
    answer: "Unlike chat-based or vibe coding tools that require constant manual prompt engineering, context management, and debug loops, DotX forms a dynamic multi-agent organization that autonomously plans, writes, reviews, and tests your software end-to-end."
  },
  {
    question: "Does DotX run locally on my desktop?",
    answer: "Yes. DotX is built as a native desktop application for macOS and Windows for maximum speed, security, and responsiveness — operating cleanly without browser tab clutter or Electron overhead."
  },
  {
    question: "What input documents can I give to DotX?",
    answer: "You can upload PRDs, FRDs, architecture blueprints, API specifications, user stories, or design mockups. DotX's Requirements & Planning agents automatically parse them into structured tasks and execution blueprints."
  },
  {
    question: "Is my code and project data secure?",
    answer: "Absolutely. All project files, agent logs, and workspace codebases stay on your local machine. DotX operates directly within your local environment without storing your source code on external servers."
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
                  className="w-full px-4 sm:px-6 py-5 sm:py-6 flex items-center justify-between text-left hover:bg-black hover:text-white transition-colors group"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-black text-base sm:text-lg uppercase tracking-tight">{faq.question}</span>
                  <div className="w-8 h-8 border-2 border-current flex items-center justify-center shrink-0 ml-3 sm:ml-4">
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
                      <div className="px-4 sm:px-6 py-6 sm:py-8 font-mono text-black font-bold max-w-3xl text-xs sm:text-sm leading-relaxed">
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
