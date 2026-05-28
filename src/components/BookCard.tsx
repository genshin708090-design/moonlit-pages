interface Book {
  id: number
  title: string
  author: string
  genre: string
  description: string
  cover_url: string
  epub_url: string
  series_title: string
  chapter_range: string
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
  const displayTitle = book.series_title || book.title
  const slug = displayTitle.toLowerCase().replace(/\s+/g, "-")

  return (
    <a href={`/books/${slug}`} className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0c0c1a] transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/25 hover:shadow-2xl hover:shadow-violet-500/10">
      <div className="relative overflow-hidden aspect-[2/3]">
        <img
          src={book.cover_url || "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&auto=format&fit=crop"}
          alt={displayTitle}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c1a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
          <div className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 py-2.5 text-center text-sm font-bold text-white">
            View Book
          </div>
        </div>
        <div className="absolute top-3 left-3">
          <span className={`rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md ${genreStyle}`}>
            {book.genre}
          </span>
        </div>
        {book.series_title && (
          <div className="absolute top-3 right-3">
            <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md text-blue-300">
              Series
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col flex-1 p-4">
        <h3 className="mb-1 font-bold text-white text-sm leading-snug line-clamp-2 group-hover:text-violet-200 transition-colors duration-300">{displayTitle}</h3>
        <div className="text-xs text-zinc-500 mb-2">by {book.author}</div>
        <p className="text-xs leading-5 text-zinc-600 line-clamp-2 flex-1">{book.description}</p>
      </div>
    </a>
  )
}
