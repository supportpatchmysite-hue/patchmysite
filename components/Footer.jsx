import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="text-white font-bold text-lg mb-2">PatchMySite</div>
            <p className="text-sm leading-relaxed">Digital-only web support. No calls. No meetings. Just results in your ticket.</p>
          </div>
          <div>
            <div className="text-white font-semibold text-sm mb-3">Navigation</div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/submit" className="hover:text-white transition-colors">Submit a Ticket</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold text-sm mb-3">Legal</div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/terms#privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-10 pt-6 text-xs text-center">
          © {new Date().getFullYear()} PatchMySite. All communication is digital and ticket-based.
        </div>
      </div>
    </footer>
  )
}
