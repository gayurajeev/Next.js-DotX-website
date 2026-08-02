export default function Footer() {
  return (
    <footer className="py-10 md:py-12 border-t border-black/20 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl flex flex-col md:flex-row justify-between items-start gap-8 md:gap-10">
        
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 overflow-hidden shrink-0">
              <img src="/logo-highres-seamless.png" alt="DotX Logo" className="w-full h-full object-contain block" />
            </div>
            <span className="font-black tracking-tighter text-xl">DotX</span>
          </div>
          <p className="font-mono text-xs text-neutral-500 max-w-xs font-bold uppercase leading-relaxed">
            Autonomous AI Platform for Software Development.
          </p>
          <span className="font-mono text-xs text-neutral-600 font-bold">© {new Date().getFullYear()} DotX</span>
        </div>

        <div className="flex flex-wrap gap-8 md:gap-12 font-mono text-sm font-bold uppercase">
          <div className="flex flex-col gap-3">
            <p className="text-neutral-500 text-xs tracking-widest mb-1">Platform</p>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">DotX</a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">Architecture</a>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-neutral-500 text-xs tracking-widest mb-1">Resources</p>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">Documentation</a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">GitHub</a>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-neutral-500 text-xs tracking-widest mb-1">Legal</p>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
