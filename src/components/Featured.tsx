export default function Featured() {
  return (
    <section id="featured" className="mx-auto mb-20 max-w-7xl px-6">
      <div className="relative overflow-hidden rounded-[32px] border border-violet-500/20 bg-gradient-to-br from-violet-950/50 via-[#0f0f1e] to-blue-950/30 p-10 md:p-16 backdrop-blur-sm">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs text-violet-300 uppercase tracking-widest">
              ✨ Featured Collection
            </div>
            <h2 className="mb-5 text-4xl md:text-5xl font-black leading-tight">
              Stories Worth
              <span className="block bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent italic">
                Losing Sleep Over
              </span>
            </h2>
            <p className="mb-8 text-lg leading-8 text-zinc-400">
              Handpicked novels designed to pull you into unforgettable worlds. Each story carefully curated for the modern reader.
            </p>
            <a href="#library" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3.5 font-bold text-white hover:opacity-90 transition shadow-lg shadow-violet-500/25">
              Explore Collection →
            </a>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[#070711] via-transparent to-transparent z-10 rounded-3xl" />
            <img
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop"
              alt="Featured books"
              className="rounded-3xl object-cover w-full h-72 md:h-80"
            />
          </div>
        </div>
      </div>
    </section>
  )
}