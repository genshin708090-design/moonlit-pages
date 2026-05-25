export default function Footer() {
  return (
    <footer id="about" className="border-t border-white/10 py-10 text-center text-zinc-500">
      <div className="mb-3 text-2xl font-bold text-amber-300">Moonlit Pages</div>
      <p className="mb-4">A cinematic digital sanctuary for readers.</p>
      <p className="text-xs text-zinc-600">© {new Date().getFullYear()} Moonlit Pages. All rights reserved.</p>
    </footer>
  )
}