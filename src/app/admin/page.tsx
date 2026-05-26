"use client"
import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

interface Book {
  id: number
  title: string
  author: string
  genre: string
  description: string
  cover_url: string
  epub_url: string
  created_at: string
}

export default function AdminPage() {
  const router = useRouter()
  const [checking, setChecking] = useState(true)
  const [books, setBooks] = useState<Book[]>([])
  const [editingBook, setEditingBook] = useState<Book | null>(null)
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [genre, setGenre] = useState("Fantasy")
  const [description, setDescription] = useState("")
  const [coverUrl, setCoverUrl] = useState("")
  const [epubUrl, setEpubUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [activeTab, setActiveTab] = useState("add")

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) { router.replace("/admin/login") }
      else { setChecking(false); fetchBooks() }
    })
  }, [router])

  async function fetchBooks() {
    const { data } = await supabase.from("books").select("*").order("created_at", { ascending: false })
    setBooks(data || [])
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    router.replace("/admin/login")
  }

  function startEdit(book: Book) {
    setEditingBook(book)
    setTitle(book.title)
    setAuthor(book.author)
    setGenre(book.genre)
    setDescription(book.description || "")
    setCoverUrl(book.cover_url || "")
    setEpubUrl(book.epub_url || "")
    setActiveTab("add")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  function cancelEdit() {
    setEditingBook(null)
    setTitle(""); setAuthor(""); setDescription(""); setCoverUrl(""); setEpubUrl("")
    setGenre("Fantasy")
  }

  async function handleSubmit() {
    if (!title || !author) { setMessage("Title and author are required."); return }
    setLoading(true); setMessage("")
    if (editingBook) {
      const { error } = await supabase.from("books").update({ title, author, genre, description, cover_url: coverUrl, epub_url: epubUrl }).eq("id", editingBook.id)
      setLoading(false)
      if (error) { setMessage("Error: " + error.message) }
      else { setMessage("Book updated!"); cancelEdit(); fetchBooks() }
    } else {
      const { error } = await supabase.from("books").insert({ title, author, genre, description, cover_url: coverUrl, epub_url: epubUrl })
      setLoading(false)
      if (error) { setMessage("Error: " + error.message) }
      else { setMessage("Book added!"); setTitle(""); setAuthor(""); setDescription(""); setCoverUrl(""); setEpubUrl(""); fetchBooks() }
    }
  }

  async function deleteBook(id: number) {
    if (!confirm("Delete this book?")) return
    const { error } = await supabase.from("books").delete().eq("id", id)
    if (!error) { fetchBooks(); setMessage("Book deleted.") }
  }

  if (checking) return <main className="flex min-h-screen items-center justify-center bg-[#070711] text-zinc-500">Checking auth...</main>

  const inputClass = "w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white placeholder-zinc-600 focus:border-violet-500/50 focus:outline-none transition"

  return (
    <main className="min-h-screen bg-[#070711] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.1),transparent_50%)] pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6 py-10">
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">??</span>
            <div>
              <h1 className="text-3xl font-black text-white">Admin Panel</h1>
              <p className="text-sm text-zinc-500">Moonlit Pages Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="/" className="rounded-xl border border-white/10 px-4 py-2 text-sm text-zinc-400 hover:text-violet-300 transition">View Site</a>
            <button onClick={handleLogout} className="rounded-xl border border-red-500/20 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 transition">Sign Out</button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { label: "Total Books", value: books.length, icon: "??" },
            { label: "Latest Added", value: books[0]?.title?.slice(0, 15) + "..." || "None", icon: "?" },
            { label: "Genres", value: [...new Set(books.map(b => b.genre))].length, icon: "??" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-black text-violet-300">{stat.value}</div>
              <div className="text-xs text-zinc-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 mb-6">
          <button onClick={() => setActiveTab("add")} className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition ${activeTab === "add" ? "bg-violet-600 text-white" : "border border-white/10 text-zinc-400 hover:text-white"}`}>
            {editingBook ? "Edit Book" : "Add Book"}
          </button>
          <button onClick={() => setActiveTab("library")} className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition ${activeTab === "library" ? "bg-violet-600 text-white" : "border border-white/10 text-zinc-400 hover:text-white"}`}>
            Library ({books.length})
          </button>
        </div>

        {activeTab === "add" && (
          <div className="rounded-3xl border border-white/5 bg-[#0f0f1e] p-8">
            {editingBook && (
              <div className="mb-6 flex items-center justify-between rounded-2xl border border-violet-500/20 bg-violet-500/10 px-5 py-3">
                <span className="text-sm text-violet-300">Editing: <strong>{editingBook.title}</strong></span>
                <button onClick={cancelEdit} className="text-xs text-zinc-500 hover:text-white transition">Cancel</button>
              </div>
            )}
            <div className="grid md:grid-cols-2 gap-5">
              <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book title *" className={inputClass} />
              <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author *" className={inputClass} />
              <select value={genre} onChange={(e) => setGenre(e.target.value)} className={inputClass}>
                <option>Fantasy</option><option>Sci-Fi</option><option>Romance</option>
                <option>Thriller</option><option>Horror</option><option>Mystery</option>
              </select>
              <input value={coverUrl} onChange={(e) => setCoverUrl(e.target.value)} placeholder="Cover image URL" className={inputClass} />
              <input value={epubUrl} onChange={(e) => setEpubUrl(e.target.value)} placeholder="EPUB download URL" className={inputClass} />
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className={`${inputClass} min-h-[120px] resize-none`} />
            </div>
            {message && (
              <div className={`mt-5 rounded-2xl border p-4 text-sm ${message.includes("Error") ? "border-red-500/20 bg-red-500/10 text-red-400" : "border-violet-500/20 bg-violet-500/10 text-violet-300"}`}>
                {message.includes("Error") ? "? " : "? "}{message}
              </div>
            )}
            <button onClick={handleSubmit} disabled={loading} className="mt-5 w-full rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 py-4 font-bold text-white transition hover:opacity-90 disabled:opacity-50">
              {loading ? "Saving..." : editingBook ? "?? Save Changes" : "?? Add Book"}
            </button>
          </div>
        )}

        {activeTab === "library" && (
          <div className="space-y-3">
            {books.length === 0 ? (
              <div className="py-20 text-center text-zinc-600">
                <div className="text-6xl mb-4">??</div>
                <p>No books yet. Add your first book!</p>
              </div>
            ) : books.map((book) => (
              <div key={book.id} className="flex items-center gap-4 rounded-2xl border border-white/5 bg-[#0f0f1e] p-4 hover:border-violet-500/20 transition">
                <img src={book.cover_url || "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=100"} alt={book.title} className="w-14 h-20 object-cover rounded-xl flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white truncate">{book.title}</h3>
                  <p className="text-sm text-zinc-500">by {book.author}</p>
                  <span className="mt-1 inline-block rounded-full bg-violet-500/10 border border-violet-500/20 px-2.5 py-0.5 text-xs text-violet-400">{book.genre}</span>
                </div>
                <div className="text-xs text-zinc-600 hidden md:block">{new Date(book.created_at).toLocaleDateString()}</div>
                <div className="flex gap-2 flex-shrink-0">
                  <button onClick={() => startEdit(book)} className="rounded-xl border border-white/10 px-3 py-2 text-xs text-zinc-400 hover:text-violet-300 hover:border-violet-500/30 transition">?? Edit</button>
                  <button onClick={() => deleteBook(book.id)} className="rounded-xl border border-red-500/20 px-3 py-2 text-xs text-red-400 hover:bg-red-500/10 transition">???</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
