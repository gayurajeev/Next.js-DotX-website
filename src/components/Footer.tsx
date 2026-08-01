export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-black">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-500">
        <div className="flex items-center gap-2">
          <img src="/logo.jpeg" alt="DotX Logo" className="h-6 w-auto rounded-md" />
          <span className="font-semibold text-white ml-2">DotX</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Documentation</a>
          <a href="#" className="hover:text-white transition-colors">Changelog</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
