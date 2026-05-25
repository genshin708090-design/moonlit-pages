import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Featured from '@/components/Featured'
import Footer from '@/components/Footer'
import BookCard from '@/components/BookCard'
import { supabase } from '@/lib/supabase'

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
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <div className="px-6">
        <Featured />
      </div>
      <section id="library" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <div className="mb-2 text-sm uppercase tracking-widest text-amber-300">
              Library
            </div>
            <h2 className="text-5xl font-black">Explore Novels</h2>
          </div>
          <div className="text-zinc-500">{books.length} books</div>
        </div>
        {books.length === 0 ? (
          <div className="py-20 text-center text-zinc-600">
            <div className="mb-4 text-6xl">🌙</div>
            <p className="text-xl">No books yet. Check back soon.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {books.map((book: any) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </section>
      <Footer />
    </main>
  )
}