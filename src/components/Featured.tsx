export default function Featured() {
  return (
    <section id="featured" className="mx-auto mb-24 max-w-7xl overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-purple-900/20 to-zinc-900">
      <div className="grid items-center gap-12 p-10 md:grid-cols-2 md:p-20">
        <div>
          <div className="mb-4 text-sm uppercase tracking-[0.3em] text-amber-300">Featured Collection</div>
          <h2 className="mb-6 text-5xl font-black leading-tight">
            Stories Worth
            <span className="block italic text-amber-300">Losing Sleep Over</span>
          </h2>
          <p className="mb-8 text-lg leading-8 text-zinc-400">
            Handpicked novels designed to pull readers into unforgettable worlds.
          </p>
          <a href="#library" className="inline-block rounded-2xl bg-amber-300 px-6 py-4 font-bold text-black hover:opacity-90 transition">
            Explore Collection
          </a>
        </div>
        <img
          src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop"
          alt="Books"
          className="rounded-3xl object-cover w-full h-80 md:h-auto"
        />
      </div>
    </section>
  )
}