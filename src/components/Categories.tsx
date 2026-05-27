const categories = [
  { icon: "??", name: "Fantasy", color: "from-violet-600/20 to-purple-900/20", border: "border-violet-500/20", glow: "hover:shadow-violet-500/20" },
  { icon: "??", name: "Sci-Fi", color: "from-blue-600/20 to-cyan-900/20", border: "border-blue-500/20", glow: "hover:shadow-blue-500/20" },
  { icon: "??", name: "Romance", color: "from-pink-600/20 to-rose-900/20", border: "border-pink-500/20", glow: "hover:shadow-pink-500/20" },
  { icon: "??", name: "Thriller", color: "from-red-600/20 to-orange-900/20", border: "border-red-500/20", glow: "hover:shadow-red-500/20" },
  { icon: "??", name: "Horror", color: "from-gray-600/20 to-slate-900/20", border: "border-gray-500/20", glow: "hover:shadow-gray-500/20" },
  { icon: "??", name: "Mystery", color: "from-amber-600/20 to-yellow-900/20", border: "border-amber-500/20", glow: "hover:shadow-amber-500/20" },
]

export default function Categories() {
  return (
    <section id="categories" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(100,40,180,0.04),transparent_70%)] pointer-events-none" />
      <div className="relative">
        <div className="mb-14 text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">Discover</div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Browse by <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">Genre</span>
          </h2>
          <p className="mt-4 text-zinc-500 max-w-md mx-auto text-sm leading-7">Find your next favorite story in the genre that speaks to you</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((cat) => (
            <a key={cat.name} href="#library"
              className={`group relative overflow-hidden rounded-2xl border ${cat.border} bg-gradient-to-br ${cat.color} p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${cat.glow} backdrop-blur-sm`}
            >
              <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-110">{cat.icon}</div>
              <div className="font-bold text-white text-sm tracking-tight">{cat.name}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
