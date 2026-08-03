"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group shrink-0">
          <img
            src="/logo-highres-seamless.png"
            alt="DotX Logo"
            width={40}
            height={36}
            className="h-9 w-[40px] aspect-[1024/917] object-contain block shrink-0"
          />
          <span className="font-black text-black tracking-tighter text-xl leading-none">DotX</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#59008C] ml-0.5" />
        </a>
        
        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10 text-sm font-bold text-neutral-500 font-mono uppercase tracking-tight">
          <a href="#" className="hover:text-black transition-colors border-b-2 border-transparent hover:border-black pb-0.5">Platform</a>
          <a href="#" className="hover:text-black transition-colors border-b-2 border-transparent hover:border-black pb-0.5">Architecture</a>
          <a href="#" className="hover:text-black transition-colors border-b-2 border-transparent hover:border-black pb-0.5">Docs</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-black hover:bg-neutral-100 rounded-md transition-colors cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-black/10 bg-white px-6 py-4 flex flex-col gap-4 font-mono text-sm font-bold uppercase tracking-tight">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="text-neutral-700 hover:text-black transition-colors py-1"
          >
            Platform
          </a>
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="text-neutral-700 hover:text-black transition-colors py-1"
          >
            Architecture
          </a>
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="text-neutral-700 hover:text-black transition-colors py-1"
          >
            Docs
          </a>
        </div>
      )}
    </nav>
  );
}
