'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold text-blue-600 tracking-tight">
          PatchMySite
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/how-it-works" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">How It Works</Link>
          <Link href="/pricing" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Pricing</Link>
          <Link href="/submit" className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
            Get Help Now
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg text-slate-500 hover:text-slate-800">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 flex flex-col gap-4">
          <Link href="/how-it-works" onClick={() => setOpen(false)} className="text-sm font-medium text-slate-700">How It Works</Link>
          <Link href="/pricing" onClick={() => setOpen(false)} className="text-sm font-medium text-slate-700">Pricing</Link>
          <Link href="/submit" onClick={() => setOpen(false)} className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg text-center">Get Help Now</Link>
        </div>
      )}
    </nav>
  )
}
