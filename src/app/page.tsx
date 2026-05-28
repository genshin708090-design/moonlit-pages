import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Categories from "@/components/Categories"
import Featured from "@/components/Featured"
import AuthorSpotlight from "@/components/AuthorSpotlight"
import Footer from "@/components/Footer"
import BookCard from "@/components/BookCard"
import { supabase } from "@/lib/supabase"

export const revalidate = 0

async function getBooks() {
  const { data } = await supabase
    .from("books")
    .select("*")
    .order("created_at", { ascending: false })
  return data || []
}

function deduplicateBooks(books: any[]) {
  const seen = new Set()
  return books.filter((book) => {
    const key = book.series_title || book.title
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

export default async function Home() {
  const allBooks = await getBooks()
  const books = deduplicateBooks(allBooks)

  return (
    <main className="min-h-screen bg-[#05050f] text-white overflow-x-hidden">
      <Navbar />
      <Hero />

      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(80,30,160,0.06),transparent_50%)] pointer-events-none" />
        <Categories />
      </div>

      <div className="px-0">
        <Featured />
      </div>

      <section id="library" className="relative mx-auto max-w-7xl px-6 pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(80,30,160,0.04),transparent_70%)] pointer-events-none" />
        <div className="relative mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">Collection</div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              <span className="text-white">Explore </span>
              <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">Novels</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-2.5">
            <span className="text-violet-400 text-sm">??</span>
            <span className="text-sm text-zinc-500">{books.length} titles available</span>
          </div>
        </div>

        {books.length === 0 ? (
          <div className="py-40 text-center">
            <div className="mb-6 text-7xl opacity-30">??</div>
            <h3 className="text-xl font-bold text-zinc-400 mb-2">No books yet</h3>
            <p className="text-zinc-600 text-sm">The library is being curated. Check back soon.</p>
          </div>
        ) : (
          <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {books.map((book: any) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </section>

      <AuthorSpotlight />
      <Footer />
    </main>
  )
}
