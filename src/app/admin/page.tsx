'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function AdminPage() {
  const router = useRouter()
  const [checking, setChecking] = useState(true)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [genre, setGenre] = useState('Fantasy')
  const [description, setDescription] = useState('')
  const [coverUrl, setCoverUrl] = useState('')
  const [epubUrl, setEpubUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.replace('/admin/login')
      } else {
        setChecking(false)
      }
    })
  }, [router])

  async function handleLogout() {
    await supabase.auth.signOut()
    router.replace('/admin/login')
  }

  async function addBook() {
    if (!title || !author) {
      setMessage('❌ Title and author are required.')
      return
    }
    setLoading(true)
    setMessage('')

    const { error } = await supabase.from('books').insert({
      title, author, genre, description,
      cover_url: coverUrl,
      epub_url: epubUrl,
    })

    setLoading(false)

    if (error) {
      setMessage('❌ Error: ' + error.message)
    } else {
      setMessage('✅ Book added successfully!')
      setTitle(''); setAuthor(''); setDescription('')
      setCoverUrl(''); setEpubUrl('')
    }
  }

  if (checking) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-zinc-500">
        Checking auth...
      </main>
    )
  }

  const inputClass = 'w-full rounded-2xl border border-white/10 bg-zinc-800 p-4 text-white placeholder-zinc-500 focus:border-amber-300/40 focus:outline-none transition'

  return (
    <main className="min-h-screen bg-black p-10 text-white">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-zinc-900 p-10">
        <div className="mb-8 flex items-start justify-between">
          <div>
            <div className="mb-2 text-sm uppercase tracking-[0.3em] text-amber-300">Dashboard</div>
            <h1 className="text-5xl font-black">Admin Panel</h1>
            <a href="/" className="mt-2 inline-block text-sm text-zinc-500 hover:text-amber-300 transition">← Back to site</a>
          </div>
          <button
            onClick={handleLogout}
            className="rounded-2xl border border-white/10 px-4 py-2 text-sm text-zinc-400 hover:border-red-400/30 hover:text-red-400 transition"
          >
            Sign Out
          </button>
        </div>

        <div className="space-y-5">
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book title *" className={inputClass} />
          <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author *" className={inputClass} />

          <select value={genre} onChange={(e) => setGenre(e.target.value)} className={inputClass}>
            <option>Fantasy</option>
            <option>Sci-Fi</option>
            <option>Romance</option>
            <option>Thriller</option>
            <option>Horror</option>
            <option>Mystery</option>
          </select>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className={`${inputClass} min-h-[160px] resize-none`}
          />

          <input value={coverUrl} onChange={(e) => setCoverUrl(e.target.value)} placeholder="Cover image URL" className={inputClass} />
          <input value={epubUrl} onChange={(e) => setEpubUrl(e.target.value)} placeholder="EPUB download URL" className={inputClass} />

          {message && (
            <div className="rounded-2xl border border-white/10 bg-zinc-800 p-4 text-sm">{message}</div>
          )}

          <button
            onClick={addBook}
            disabled={loading}
            className="w-full rounded-2xl bg-amber-300 py-4 font-bold text-black transition hover:opacity-90 disabled:opacity-50"
          >
            {loading ? 'Adding...' : '🌙 Add Book'}
          </button>
        </div>
      </div>
    </main>
  )
}