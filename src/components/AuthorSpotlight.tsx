export default function AuthorSpotlight() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="relative overflow-hidden rounded-[32px] border border-white/5 bg-[#0f0f1e] p-10 md:p-14">
        <div className="absolute top-0 left-0 w-72 h-72 bg-violet-600/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="mb-4 text-sm uppercase tracking-[0.3em] text-violet-400">Author Spotlight</div>
            <h2 className="mb-4 text-3xl md:text-4xl font-black leading-tight">
              Meet the Minds Behind
              <span className="block bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
                the Stories
              </span>
            </h2>
            <p className="text-zinc-400 leading-8 mb-6">
              Moonlit Pages celebrates independent and emerging authors who craft worlds that stay with you long after the last page. Every story here is a labor of love.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {['🧙', '👩', '🧑', '👨'].map((emoji, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0f0f1e] bg-violet-900/50 flex items-center justify-center text-lg">
                    {emoji}
                  </div>
                ))}
              </div>
              <span className="text-sm text-zinc-400">Authors on the platform</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Books Available', value: '∞' },
              { label: 'Free to Read', value: '100%' },
              { label: 'Genres', value: '6+' },
              { label: 'New Monthly', value: '🌙' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 text-center">
                <div className="text-3xl font-black text-violet-300 mb-1">{stat.value}</div>
                <div className="text-xs text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}