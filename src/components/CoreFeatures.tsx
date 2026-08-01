"use client";

import { motion } from "framer-motion";
import { ClipboardList, Network, Code2, TestTube, BookOpen, Rocket, Terminal } from "lucide-react";
import { useState } from "react";

const features = [
  {
    title: "Requirement Analysis",
    description: "DotX parses your PRD, FRD, and NFR documents instantly, establishing strict architectural constraints before a single line of code is written.",
    icon: ClipboardList,
    snippet: `> Analyzing requirements...
[x] PRD parsing complete
[x] NFRs extracted
> Generating constraints:
- Enforce strict typing
- Max latency: 200ms
- Target: Node.js/Next.js
> System architecture ready.`
  },
  {
    title: "Multi-Agent Collaboration",
    description: "A decentralized swarm of specialized AI agents working sequentially to architect, build, and finalize your system efficiently.",
    icon: Network,
    snippet: `Agent [Architecture] initialized
Agent [Database] synced
Agent [Frontend] awaiting schema...
[Architecture] -> Broadcasting schema
[Database] -> Scaffolding tables
[Frontend] -> Generating UI components`
  },
  {
    title: "AI Code Generation",
    description: "Deterministic, hallucination-free code generation. Tailored models ensure syntactic correctness and adherence to enterprise guidelines.",
    icon: Code2,
    snippet: `import { generateAPI } from 'dotx-core';

// DotX deterministically writes:
export const handleAuth = async (req) => {
  const user = await validate(req);
  if (!user) throw new AuthError();
  return generateToken(user.id);
};
// 100% test coverage guaranteed.`
  },
  {
    title: "Automated Testing",
    description: "Built-in testing agents automatically generate unit tests, execute them, and resolve any regressions in real-time.",
    icon: TestTube,
    snippet: `$ dotx test run
Running test suite...
PASS src/auth/verify.test.ts (2ms)
FAIL src/api/users.test.ts (15ms)
> Agent [TestTube] analyzing failure...
> Patch applied. Re-running...
PASS src/api/users.test.ts
✓ All 142 tests passed.`
  },
  {
    title: "Smart Documentation",
    description: "Comprehensive, accurate documentation is generated simultaneously alongside your code, always reflecting the exact state of your project.",
    icon: BookOpen,
    snippet: `# Authentication API

Automatically generated docs.
## POST /api/auth
Validates user and returns JWT.

### Parameters
- \`email\`: string (required)
- \`password\`: string (required)

*Last updated by DocsAgent 2s ago*`
  },
  {
    title: "Deployment & Project Management",
    description: "Seamless integration with your CI/CD pipeline, automatically packaging and preparing artifacts for staging or production deployment.",
    icon: Rocket,
    snippet: `> Preparing for production...
[1/4] Linting and formatting... done
[2/4] Building optimized static... done
[3/4] Running integration tests... done
[4/4] Deploying to AWS...
Deployed successfully!
URL: https://production.dotx.dev`
  },
];

export default function CoreFeatures() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 relative bg-black border-t border-white/10">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.02] via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight"
          >
            Powerful Features
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 text-lg max-w-2xl mx-auto"
          >
            Everything you need to automate the software lifecycle, packaged in a beautifully minimal interface.
          </motion.p>
        </div>

        {/* 2x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative h-[320px] rounded-3xl bg-[#0a0a0a] border border-white/10 transition-all duration-300 overflow-hidden cursor-default hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.03)]"
              >
                {/* Standard Content Layer */}
                <div 
                  className={`absolute inset-0 p-8 flex flex-col transition-opacity duration-500 z-10 ${
                    isHovered ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center mb-6 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{feature.title}</h3>
                  <p className="text-neutral-400 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>

                {/* Code Reveal Hover Layer */}
                <div 
                  className={`absolute inset-0 p-6 bg-black flex flex-col transition-opacity duration-500 z-20 ${
                    isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
                    <Terminal className="w-4 h-4 text-neutral-500" />
                    <span className="text-xs text-neutral-500 font-mono tracking-wider">dotx-agent-terminal</span>
                  </div>
                  <pre className="text-xs text-neutral-300 font-mono whitespace-pre-wrap leading-relaxed">
                    {isHovered ? (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {feature.snippet}
                      </motion.span>
                    ) : feature.snippet}
                  </pre>
                  
                  {/* Blinking cursor effect */}
                  {isHovered && (
                    <motion.div 
                      animate={{ opacity: [1, 0] }} 
                      transition={{ repeat: Infinity, duration: 0.8 }} 
                      className="w-2 h-3 bg-white/80 mt-1 inline-block"
                    />
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
