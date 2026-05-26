'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#070711]/90 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2">
          <span className="text-2xl">🌙</span>
          <span className="text-xl font-black tracking-tight">
            <span className="text-violet-300">Moonlit</span>
            <span className="italic text-white"> Pages</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <a href="#library" className="hover:text-violet-300 transition">Library</a>
          <a href="#categories" className="hover:text-violet-300 transition">Categories</a>
          <a href="#featured" className="hover:text-violet-300 transition">Featured</a>
          <a href="#about" className="hover:text-violet-300 transition">About</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#library" className="rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-500 transition">
            Browse Books
          </a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-zinc-400 hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0f0f1e]/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 space-y-3">
          <a href="#library" className="block text-zinc-300 hover:text-violet-300 transition py-2">Library</a>
          <a href="#categories" className="block text-zinc-300 hover:text-violet-300 transition py-2">Categories</a>
          <a href="#featured" className="block text-zinc-300 hover:text-violet-300 transition py-2">Featured</a>
          <a href="#about" className="block text-zinc-300 hover:text-violet-300 transition py-2">About</a>
        </div>
      )}
    </nav>
  )
}