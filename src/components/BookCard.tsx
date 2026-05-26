interface Book {
  id: number
  title: string
  author: string
  genre: string
  description: string
  cover_url: string
  epub_url: string
}

const genreColors: Record<string, string> = {
  Fantasy: "text-violet-400 bg-violet-400/10 border-violet-400/20",
  "Sci-Fi": "text-blue-400 bg-blue-400/10 border-blue-400/20",
  Romance: "text-pink-400 bg-pink-400/10 border-pink-400/20",
  Thriller: "text-red-400 bg-red-400/10 border-red-400/20",
  Horror: "text-gray-400 bg-gray-400/10 border-gray-400/20",
  Mystery: "text-amber-400 bg-amber-400/10 border-amber-400/20",
}

export default function BookCard({ book }: { book: Book }) {
  const genreStyle = genreColors[book.genre] || "text-violet-400 bg-violet-400/10 border-violet-400/20"
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0f0f1e] transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/10">
      <div className="relative overflow-hidden aspect-[3/4]">
        <img src={book.cover_url || "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&auto=format&fit=crop"} alt={book.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1e] via-[#0f0f1e]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          {book.epub_url && (
            <a href={book.epub_url} download className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 py-2.5 text-center text-sm font-bold text-white hover:opacity-90 transition">
              Download Free
            </a>
          )}
        </div>
        <div className="absolute top-3 left-3">
          <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold backdrop-blur-sm ${genreStyle}`}>{book.genre}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="mb-1 font-bold text-white leading-tight line-clamp-1">{book.title}</h3>
        <div className="mb-3 text-sm text-zinc-500">by {book.author}</div>
        <p className="text-xs leading-6 text-zinc-600 line-clamp-2">{book.description}</p>
      </div>
    </div>
  )
}
