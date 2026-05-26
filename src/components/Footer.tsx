export default function Footer() {
  return (
    <footer id="about" className="border-t border-white/5 mt-10">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌙</span>
              <span className="text-xl font-black">
                <span className="text-violet-300">Moonlit</span>
                <span className="italic text-white"> Pages</span>
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-7">
              A cinematic digital sanctuary for readers who love to get lost in extraordinary worlds.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-white mb-4 uppercase tracking-widest">Navigate</div>
            <div className="space-y-2">
              {['Library', 'Featured', 'Categories', 'About'].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="block text-sm text-zinc-500 hover:text-violet-300 transition">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-white mb-4 uppercase tracking-widest">Genres</div>
            <div className="space-y-2">
              {['Fantasy', 'Sci-Fi', 'Romance', 'Thriller', 'Horror', 'Mystery'].map((genre) => (
                <a key={genre} href="#library" className="block text-sm text-zinc-500 hover:text-violet-300 transition">
                  {genre}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">© {new Date().getFullYear()} Moonlit Pages. All rights reserved.</p>
          <p className="text-xs text-zinc-600">Built with 🌙 for readers everywhere</p>
        </div>
      </div>
    </footer>
  )
}