"use client"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#05050f]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,40,200,0.25),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(60,40,180,0.12),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_80%,rgba(100,20,180,0.1),transparent)]" />

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-violet-600/[0.07] blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/[0.06] blur-[100px] pointer-events-none" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(80)].map((_, i) => (
          <div key={i} className="absolute rounded-full bg-white"
            style={{
              width: Math.random() > 0.8 ? "2px" : "1px",
              height: Math.random() > 0.8 ? "2px" : "1px",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center pt-28 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-violet-400/20 bg-violet-400/[0.08] px-5 py-2.5 text-sm text-violet-300 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse shadow-lg shadow-violet-400/50" />
            <span className="font-medium">Premium Digital Library</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6 font-black leading-[1.05] tracking-tight"
        >
          <span className="block text-5xl md:text-7xl lg:text-8xl text-white mb-2">Where Every</span>
          <span className="block text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
            Page Glows
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mb-12 max-w-xl text-lg text-zinc-400 leading-relaxed"
        >
          Dive into handpicked novels, cinematic stories, and unforgettable worlds ¡ª all free to read and download.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#library" className="group relative w-full sm:w-auto overflow-hidden rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-4 font-bold text-white shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center justify-center gap-2">?? Start Reading</span>
          </a>
          <a href="#featured" className="w-full sm:w-auto rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm px-8 py-4 font-semibold text-white hover:border-violet-400/30 hover:bg-white/[0.08] transition-all duration-300">
            ? Browse Featured
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-sm mx-auto"
        >
          {[["¡Þ", "Free Books"], ["??", "Read Anytime"], ["?", "Download Free"]].map(([icon, label]) => (
            <div key={label} className="text-center">
              <div className="text-xl mb-1.5">{icon}</div>
              <div className="text-[11px] text-zinc-600 uppercase tracking-widest font-medium">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#05050f] via-[#05050f]/80 to-transparent pointer-events-none" />
    </section>
  )
}
