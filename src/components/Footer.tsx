export default function Footer() {
  return (
    <footer className="py-10 md:py-12 border-t border-[#59008C]/50 bg-black text-white relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl flex flex-col md:flex-row justify-between items-start gap-8 md:gap-10">
        
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <img
              src="/logo-highres-seamless.png"
              alt="DotX Logo"
              width={40}
              height={36}
              className="h-9 w-[40px] aspect-[1024/917] object-contain block shrink-0"
            />
            <span className="font-black tracking-tighter text-xl">DotX</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#59008C]" />
          </div>
          <p className="font-mono text-xs text-neutral-500 max-w-xs font-bold uppercase leading-relaxed">
            Autonomous AI Platform for Software Development.
          </p>
          <span className="font-mono text-xs text-neutral-600 font-bold">© {new Date().getFullYear()} DotX</span>
        </div>

        <div className="flex flex-wrap gap-8 md:gap-12 font-mono text-sm font-bold uppercase">
          <div className="flex flex-col gap-3">
            <p className="text-[#59008C] text-xs tracking-widest mb-1 font-black">Platform</p>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">DotX</a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">Architecture</a>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[#59008C] text-xs tracking-widest mb-1 font-black">Resources</p>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">Documentation</a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">GitHub</a>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[#59008C] text-xs tracking-widest mb-1 font-black">Legal</p>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
