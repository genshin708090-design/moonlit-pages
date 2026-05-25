'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin() {
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError('❌ ' + error.message)
      setLoading(false)
    } else {
      router.push('/admin')
    }
  }

  const inputClass = 'w-full rounded-2xl border border-white/10 bg-zinc-800 p-4 text-white placeholder-zinc-500 focus:border-amber-300/40 focus:outline-none transition'

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-zinc-900 p-10">
        <div className="mb-8 text-center">
          <div className="mb-2 text-3xl font-black text-amber-300">🌙 Moonlit Pages</div>
          <p className="text-zinc-500 text-sm">Admin access only</p>
        </div>
        <div className="space-y-4">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Admin email" className={inputClass} />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className={inputClass} onKeyDown={(e) => e.key === 'Enter' && handleLogin()} />
          {error && <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">{error}</div>}
          <button onClick={handleLogin} disabled={loading} className="w-full rounded-2xl bg-amber-300 py-4 font-bold text-black transition hover:opacity-90 disabled:opacity-50">
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </div>
        <div className="mt-6 text-center">
          <a href="/" className="text-sm text-zinc-600 hover:text-amber-300 transition">← Back to site</a>
        </div>
      </div>
    </main>
  )
}