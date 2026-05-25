export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold text-amber-300">
          Moonlit <span className="italic text-white">Pages</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-zinc-300">
          <a href="#library" className="hover:text-amber-300 transition">Library</a>
          <a href="#featured" className="hover:text-amber-300 transition">Featured</a>
          <a href="#about" className="hover:text-amber-300 transition">About</a>
        </div>
      </div>
    </nav>
  )
}