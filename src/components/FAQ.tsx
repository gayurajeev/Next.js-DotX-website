"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is DotX compatible with my existing codebase?",
    answer: "Yes, DotX seamlessly integrates with existing repositories. Our agents can parse your current architecture and adapt to your established coding standards automatically."
  },
  {
    question: "What programming languages are supported?",
    answer: "DotX natively supports Python, TypeScript, Go, Rust, and C++. Support for Java, Ruby, and PHP is available through our community extensions."
  },
  {
    question: "How secure is my code when using DotX?",
    answer: "Extremely secure. All processing can be done locally or through your secure enterprise VPC. We never train our base models on your proprietary code."
  },
  {
    question: "Do I need to prompt the AI manually?",
    answer: "While you can provide manual guidance, DotX is designed to work autonomously from your architectural documents (PRD, FRD, NFR), minimizing the need for manual prompting."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
          <p className="text-neutral-400">Everything you need to know about the product.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`border rounded-xl overflow-hidden transition-colors ${
                  isOpen ? "border-white/30 bg-white/[0.04]" : "border-white/10 bg-transparent hover:border-white/20"
                }`}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-medium text-lg text-white">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-neutral-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-neutral-400">
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
