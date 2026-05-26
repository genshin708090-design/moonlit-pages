"use client"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? "bg-[#05050f]/95 backdrop-blur-2xl border-b border-white/[0.06] py-3 shadow-xl shadow-black/20" : "bg-transparent py-6"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <span className="text-2xl">??</span>
            <div className="absolute inset-0 bg-violet-500/30 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div>
            <span className="text-lg font-black tracking-tight bg-gradient-to-r from-violet-300 via-purple-200 to-white bg-clip-text text-transparent">Moonlit</span>
            <span className="text-lg font-black italic text-white/90 ml-1">Pages</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {["Library", "Categories", "Featured", "About"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200">
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-500 hover:border-violet-500/30 transition-all cursor-pointer">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>Search books...</span>
          </div>
          <a href="#library" className="rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition shadow-lg shadow-violet-500/20">
            Start Reading
          </a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#05050f]/98 backdrop-blur-2xl px-6 py-5 space-y-1">
          {["Library", "Categories", "Featured", "About"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="block px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition">
              {item}
            </a>
          ))}
          <div className="pt-3 border-t border-white/5">
            <a href="#library" className="block text-center rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-3 text-sm font-semibold text-white">
              Start Reading
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
