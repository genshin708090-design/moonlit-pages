export default function Footer() {
  return (
    <footer id="about" className="relative border-t border-white/[0.06] mt-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(80,30,160,0.06),transparent_60%)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="text-2xl">??</span>
              <div>
                <span className="text-lg font-black bg-gradient-to-r from-violet-300 to-purple-200 bg-clip-text text-transparent">Moonlit</span>
                <span className="text-lg font-black italic text-white/90 ml-1">Pages</span>
              </div>
            </div>
            <p className="text-zinc-500 text-sm leading-7 max-w-xs mb-6">
              A cinematic digital sanctuary for readers who love to get lost in extraordinary worlds. Free forever.
            </p>
            <a href="https://buymeacoffee.com/genshin7086" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 rounded-2xl border border-yellow-500/30 bg-yellow-500/10 px-5 py-3 text-sm font-semibold text-yellow-300 hover:bg-yellow-500/20 hover:border-yellow-400/50 transition-all duration-300 hover:scale-[1.02]">
              <div>
                <div className="text-yellow-300 font-bold text-sm">Buy Me a Coffee</div>
                <div className="text-yellow-500/70 text-xs">Support Moonlit Pages</div>
              </div>
            </a>
          </div>

          <div>
            <div className="text-xs font-bold text-white mb-5 uppercase tracking-[0.2em]">Navigate</div>
            <div className="space-y-3">
              {[["Library", "#library"], ["Featured", "#featured"], ["Categories", "#categories"], ["About", "#about"]].map(([label, href]) => (
                <a key={label} href={href} className="block text-sm text-zinc-500 hover:text-violet-300 transition-colors duration-200">{label}</a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-bold text-white mb-5 uppercase tracking-[0.2em]">Legal</div>
            <div className="space-y-3">
              {["Terms of Use", "Privacy Policy", "Contact Us", "DMCA"].map((item) => (
                <a key={item} href="#" className="block text-sm text-zinc-500 hover:text-violet-300 transition-colors duration-200">{item}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">? {new Date().getFullYear()} Moonlit Pages. All rights reserved.</p>
          <p className="text-xs text-zinc-600">Made with love for readers everywhere</p>
        </div>
      </div>
    </footer>
  )
}
