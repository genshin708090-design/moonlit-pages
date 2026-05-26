'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.2),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.1),transparent_60%)]" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-white rounded-full opacity-40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `scale(${Math.random() * 3 + 1})`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center pt-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-300 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            Premium Digital Library
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-6 text-6xl md:text-8xl font-black leading-none tracking-tight"
        >
          <span className="text-white">Where Stories</span>
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
            Come Alive
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed"
        >
          Discover immersive novels, cinematic worlds, and unforgettable stories curated for modern readers. Read online or download instantly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#library" className="w-full sm:w-auto rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-4 font-bold text-white hover:opacity-90 transition shadow-lg shadow-violet-500/25">
            📚 Browse Library
          </a>
          <a href="#featured" className="w-full sm:w-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-8 py-4 font-semibold text-white hover:border-violet-500/40 hover:bg-white/10 transition">
            ✨ Featured Picks
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex items-center justify-center gap-12 text-center"
        >
          {[['∞', 'Free Books'], ['📖', 'Read Online'], ['⬇️', 'Easy Download']].map(([icon, label]) => (
            <div key={label}>
              <div className="text-2xl mb-1">{icon}</div>
              <div className="text-xs text-zinc-500 uppercase tracking-widest">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070711] to-transparent" />
    </section>
  )
}