import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Categories from '@/components/Categories'
import Featured from '@/components/Featured'
import AuthorSpotlight from '@/components/AuthorSpotlight'
import Footer from '@/components/Footer'
import BookCard from '@/components/BookCard'
import { supabase } from '@/lib/supabase'

export const revalidate = 0

async function getBooks() {
  const { data } = await supabase
    .from('books')
    .select('*')
    .order('created_at', { ascending: false })
  return data || []
}

export default async function Home() {
  const books = await getBooks()

  return (
    <main className="min-h-screen bg-[#070711] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Categories />
      <div className="px-6">
        <Featured />
      </div>

      <section id="library" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="mb-3 text-sm uppercase tracking-[0.3em] text-violet-400">Collection</div>
            <h2 className="text-4xl md:text-5xl font-black">
              Explore <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">Novels</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-2">
            <span className="text-violet-400">📚</span>
            <span className="text-sm text-zinc-400">{books.length} books available</span>
          </div>
        </div>

        {books.length === 0 ? (
          <div className="py-32 text-center">
            <div className="mb-6 text-8xl">🌙</div>
            <h3 className="text-2xl font-bold text-white mb-3">No books yet</h3>
            <p className="text-zinc-500">The library is being curated. Check back soon.</p>
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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