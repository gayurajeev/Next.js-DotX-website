"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Server, Shield, Network, Code } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "MULTI-LLM ENGINE",
    description: "Integrates GPT, Claude, Gemini, and custom AI models — selecting the best model per task for maximum reasoning quality."
  },
  {
    icon: Server,
    title: "ASP.NET + SPRING + FASTAPI",
    description: "Backend built on ASP.NET Core (.NET), Spring Boot, and FastAPI — a polyglot architecture engineered for resilience at scale."
  },
  {
    icon: Cpu,
    title: "AVALONIA UI",
    description: "A unified cross-platform desktop application built with Avalonia UI, running natively on Windows, macOS, and Linux."
  },
  {
    icon: Database,
    title: "POSTGRESQL + PGVECTOR",
    description: "Vector-extended PostgreSQL for semantic search and context retrieval. Backed by Redis for high-speed caching."
  },
  {
    icon: Shield,
    title: "MICROSERVICE ARCHITECTURE",
    description: "A scalable partial microservice architecture — with Docker-powered containerization and GitHub Actions CI/CD pipelines."
  },
  {
    icon: Network,
    title: "REAL-TIME AGENTS",
    description: "SignalR and WebSockets enable real-time communication between autonomous AI agents — no polling, pure event-driven coordination."
  }
];

export default function CoreFeatures() {
  return (
    <section className="py-16 md:py-24 bg-black text-white relative border-b border-black">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-4 border-white/20 pb-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
              What's Under<br/>The Hood
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group border-4 border-white/10 bg-white/5 p-8 hover:border-white hover:bg-white hover:text-black transition-all clip-chamfer cursor-crosshair"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="w-12 h-12 border-2 border-current flex items-center justify-center">
                  <feature.icon className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs opacity-50 font-bold">0{i + 1}</span>
              </div>
              <h3 className="text-xl font-black mb-4 uppercase tracking-tight group-hover:text-black">
                {feature.title}
              </h3>
              <p className="font-mono text-sm text-neutral-400 group-hover:text-black font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech strip */}
        <div className="mt-16 pt-8 border-t-4 border-white/10 flex flex-wrap gap-4">
          {["MinIO", "pgvector", "Redis", "Docker", "GitHub Actions", "SignalR", "WebSockets", "PostgreSQL"].map((tech, i) => (
            <span key={i} className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500 border border-white/10 px-3 py-1 hover:text-white hover:border-white transition-colors cursor-crosshair">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
