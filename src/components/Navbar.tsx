"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 overflow-hidden shrink-0">
            <img src="/logo.jpeg" alt="DotX Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-black text-black tracking-tighter uppercase text-xl leading-none">DotX</span>
        </a>
        
        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-10 text-sm font-bold text-neutral-500 font-mono uppercase tracking-tight">
          <a href="#" className="hover:text-black transition-colors border-b-2 border-transparent hover:border-black pb-0.5">Platform</a>
          <a href="#" className="hover:text-black transition-colors border-b-2 border-transparent hover:border-black pb-0.5">Architecture</a>
          <a href="#" className="hover:text-black transition-colors border-b-2 border-transparent hover:border-black pb-0.5">Docs</a>
        </div>

      </div>
    </nav>
  );
}
