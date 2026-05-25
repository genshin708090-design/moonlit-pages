interface Book {
  id: number
  title: string
  author: string
  genre: string
  description: string
  cover_url: string
  epub_url: string
}

export default function BookCard({ book }: { book: Book }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/70 transition duration-300 hover:-translate-y-2 hover:border-amber-300/40">
      <div className="overflow-hidden">
        <img
          src={book.cover_url}
          alt={book.title}
          className="h-96 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="mb-2 text-xs uppercase tracking-widest text-amber-300">{book.genre}</div>
        <h3 className="mb-2 text-2xl font-bold">{book.title}</h3>
        <div className="mb-4 text-zinc-400">by {book.author}</div>
        <p className="mb-5 line-clamp-3 text-sm leading-7 text-zinc-500">{book.description}</p>
        <a href={book.epub_url} download className="inline-flex items-center gap-2 rounded-xl bg-amber-300 px-5 py-3 font-semibold text-black transition hover:opacity-90">Download EPUB</a>
      </div>
    </div>
  )
}
