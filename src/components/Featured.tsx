export default function Featured() {
  return (
    <section id="featured" className="relative mx-auto mb-24 max-w-7xl px-6">
      <div className="relative overflow-hidden rounded-[40px] border border-white/[0.07] bg-gradient-to-br from-[#0d0d1f] via-[#0a0a18] to-[#080818]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/[0.08] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-600/[0.06] rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,60,220,0.05),transparent_70%)]" />

        <div className="relative grid items-center gap-12 p-10 md:grid-cols-2 md:p-16 lg:p-20">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.08] px-4 py-2 text-xs font-semibold text-violet-300 uppercase tracking-widest">
              <span className="w-1 h-1 rounded-full bg-violet-400" />
              Featured Collection
            </div>
            <h2 className="mb-5 text-4xl md:text-5xl font-black leading-[1.1] tracking-tight">
              <span className="text-white">Stories Worth</span>
              <span className="block bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent italic mt-1">
                Losing Sleep Over
              </span>
            </h2>
            <p className="mb-8 text-zinc-400 leading-8 max-w-md">
              Handpicked novels designed to pull you into unforgettable worlds. Curated for readers who demand the best.
            </p>
            <div className="flex items-center gap-4">
              <a href="#library" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3.5 font-bold text-white hover:opacity-90 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-violet-500/20">
                Explore Collection
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-violet-600/10 rounded-[40px] blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop"
                alt="Featured books"
                className="w-full h-72 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a18]/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-xs text-violet-300 uppercase tracking-widest mb-1 font-semibold">Now Available</div>
                <div className="text-white font-bold text-lg">New arrivals added weekly</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
