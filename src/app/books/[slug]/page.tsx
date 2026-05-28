import { supabase } from "@/lib/supabase"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { notFound } from "next/navigation"

export const revalidate = 0

async function getSeriesBooks(slug: string) {
  const seriesTitle = decodeURIComponent(slug).replace(/-/g, " ")
  const { data } = await supabase
    .from("books")
    .select("*")
    .ilike("series_title", seriesTitle)
    .order("volume_order", { ascending: true })
  return data || []
}

async function getStandaloneBook(slug: string) {
  const title = decodeURIComponent(slug).replace(/-/g, " ")
  const { data } = await supabase
    .from("books")
    .select("*")
    .ilike("title", title)
    .maybeSingle()
  return data
}

export default async function BookPage({ params }: { params: { slug: string } }) {
  const seriesBooks = await getSeriesBooks(params.slug)
  const standalone = seriesBooks.length === 0 ? await getStandaloneBook(params.slug) : null

  if (seriesBooks.length === 0 && !standalone) return notFound()

  const books = seriesBooks.length > 0 ? seriesBooks : [standalone]
  const first = books[0]
  const isSeries = seriesBooks.length > 1

  return (
    <main className="min-h-screen bg-[#05050f] text-white">
      <Navbar />

      <div className="relative pt-32 pb-16 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,40,200,0.15),transparent_60%)] pointer-events-none" />

        <div className="relative mx-auto max-w-5xl">
          <a href="/" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-violet-300 transition mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Library
          </a>

          <div className="grid md:grid-cols-[280px_1fr] gap-10 mb-16">
            <div className="flex-shrink-0">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-violet-500/10">
                <img
                  src={first.cover_url || "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400"}
                  alt={first.series_title || first.title}
                  className="w-full aspect-[2/3] object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs font-semibold text-violet-300 uppercase tracking-widest">
                  {first.genre}
                </span>
                {isSeries && (
                  <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-300 uppercase tracking-widest">
                    Series
                  </span>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl font-black mb-3 leading-tight">
                {first.series_title || first.title}
              </h1>

              <p className="text-zinc-400 mb-4 text-sm">by {first.author}</p>

              {first.description && (
                <p className="text-zinc-400 leading-8 text-sm max-w-xl">{first.description}</p>
              )}

              <div className="mt-6 flex items-center gap-3 text-sm text-zinc-500">
                <span>{books.length} {isSeries ? "volumes" : "volume"} available</span>
                <span>•</span>
                <span>Free to download</span>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-6">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400 mb-2">Contents</div>
              <h2 className="text-2xl font-black text-white">
                {isSeries ? "Available Volumes" : "Download"}
              </h2>
            </div>

            <div className="space-y-3">
              {books.map((book: any, index: number) => (
                <div key={book.id} className="group flex items-center gap-5 rounded-2xl border border-white/[0.06] bg-[#0c0c1a] p-5 hover:border-violet-500/25 hover:bg-[#0f0f1e] transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-300 font-black text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-white mb-0.5">
                      {book.chapter_range ? `Chapters ${book.chapter_range}` : book.title}
                    </div>
                    <div className="text-xs text-zinc-600">
                      {book.chapter_range ? `Volume ${book.volume_order}` : "Complete edition"}
                    </div>
                  </div>
                  {book.epub_url && (
                    <a href={book.epub_url} download className="flex-shrink-0 flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-5 py-2.5 text-sm font-bold text-white hover:opacity-90 transition shadow-lg shadow-violet-500/20">
                      Download
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}