export default function AuthorSpotlight() {
  const emojis = ["??", "??", "??", "??", "??"]
  const stats = [
    { label: "Books Available", value: "infinity", sub: "and growing" },
    { label: "Always Free", value: "100%", sub: "no paywalls" },
    { label: "Genres", value: "6+", sub: "categories" },
    { label: "New Arrivals", value: "Weekly", sub: "added regularly" },
  ]

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="relative overflow-hidden rounded-[40px] border border-white/[0.06] bg-[#0a0a18]">
        <div className="absolute top-0 left-0 w-80 h-80 bg-violet-600/[0.06] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-600/[0.05] rounded-full blur-[80px] pointer-events-none" />
        <div className="relative grid md:grid-cols-2 gap-10 items-center p-10 md:p-14 lg:p-16">
          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">Our Mission</div>
            <h2 className="mb-5 text-3xl md:text-4xl font-black leading-tight tracking-tight">
              <span className="text-white">Built for Readers</span>
              <span className="block bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent mt-1">Who Love Stories</span>
            </h2>
            <p className="text-zinc-400 leading-8 mb-8 text-sm max-w-md">
              Moonlit Pages is a sanctuary for readers who believe stories have the power to transform. Every book here is handpicked, free to read, and free to download.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2.5">
                {emojis.map((emoji, i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-[#0a0a18] bg-gradient-to-br from-violet-900/80 to-purple-900/80 flex items-center justify-center text-base shadow-lg">
                    {emoji}
                  </div>
                ))}
              </div>
              <span className="text-sm text-zinc-500">Readers worldwide</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 text-center hover:border-violet-500/20 transition-colors duration-300">
                <div className="text-2xl font-black text-violet-300 mb-1">{stat.value}</div>
                <div className="text-xs font-semibold text-white mb-0.5">{stat.label}</div>
                <div className="text-[10px] text-zinc-600">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
