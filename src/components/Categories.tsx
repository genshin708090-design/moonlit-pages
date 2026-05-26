const categories = [
  { icon: "??", name: "Fantasy", color: "from-violet-600/20 to-purple-900/20", border: "border-violet-500/20", count: "Epic worlds" },
  { icon: "??", name: "Sci-Fi", color: "from-blue-600/20 to-cyan-900/20", border: "border-blue-500/20", count: "Future visions" },
  { icon: "??", name: "Romance", color: "from-pink-600/20 to-rose-900/20", border: "border-pink-500/20", count: "Love stories" },
  { icon: "??", name: "Thriller", color: "from-red-600/20 to-orange-900/20", border: "border-red-500/20", count: "Edge of seat" },
  { icon: "??", name: "Horror", color: "from-gray-600/20 to-slate-900/20", border: "border-gray-500/20", count: "Dark tales" },
  { icon: "??", name: "Mystery", color: "from-amber-600/20 to-yellow-900/20", border: "border-amber-500/20", count: "Whodunits" },
]

export default function Categories() {
  return (
    <section id="categories" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12 text-center">
        <div className="mb-3 text-sm uppercase tracking-widest text-violet-400">Explore by Genre</div>
        <h2 className="text-4xl md:text-5xl font-black">Browse Categories</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((cat) => (
          <a key={cat.name} href="#library" className={`group rounded-2xl border ${cat.border} bg-gradient-to-br ${cat.color} p-5 text-center transition-all duration-300 hover:-translate-y-1`}>
            <div className="text-4xl mb-3">{cat.icon}</div>
            <div className="font-bold text-white text-sm">{cat.name}</div>
            <div className="text-xs text-zinc-500 mt-1">{cat.count}</div>
          </a>
        ))}
      </div>
    </section>
  )
}
