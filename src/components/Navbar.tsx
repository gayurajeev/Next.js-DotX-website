"use client";

import { Download } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.jpeg" alt="DotX Logo" className="h-6 w-auto rounded-md" />
          <span className="font-semibold text-white ml-2">DotX</span>
        </div>
        <button className="flex items-center gap-2 px-5 py-2 bg-white text-black font-semibold rounded-lg hover:scale-105 transition-transform text-sm">
          <Download className="w-4 h-4" />
          Download
        </button>
      </div>
    </nav>
  );
}
