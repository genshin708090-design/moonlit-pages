'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-40 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.25),transparent_50%)]" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-4xl px-6"
      >
        <div className="mb-6 inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-5 py-2 text-sm text-amber-300">
          🌙 Premium Digital Library
        </div>
        <h1 className="mb-6 text-6xl font-black leading-tight md:text-8xl">
          Moonlit
          <span className="block italic text-amber-300">Pages</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
          Discover immersive novels, cinematic worlds, and unforgettable stories curated for modern readers.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a href="#library" className="rounded-2xl bg-amber-300 px-6 py-3 font-bold text-black hover:opacity-90 transition">
            Browse Library
          </a>
          <a href="#featured" className="rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white hover:border-amber-300/40 transition">
            Featured Picks
          </a>
        </div>
      </motion.div>
    </section>
  )
}