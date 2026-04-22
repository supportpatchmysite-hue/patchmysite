import Link from 'next/link'

export const metadata = {
  title: 'Payment Confirmed — PatchMySite',
  description: 'Your payment is confirmed and your ticket is open.',
}

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="bg-white border border-slate-100 rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h1 className="text-2xl font-extrabold text-slate-900 mb-3">Payment Confirmed!</h1>
        <p className="text-slate-500 text-sm leading-relaxed mb-6">
          Thanks for your payment. Your support ticket is now open and you'll receive a confirmation email at the address you provided shortly.
        </p>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 text-left mb-6 space-y-3">
          <p className="text-sm font-bold text-slate-800">What happens next:</p>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
            <p className="text-sm text-slate-600">You'll receive an email from <strong>support@patchmysite.com</strong> with your ticket details and a secure link to share your admin credentials.</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
            <p className="text-sm text-slate-600">Share your credentials securely via the link provided. We'll never ask for passwords over email.</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
            <p className="text-sm text-slate-600">We get to work. All updates happen inside your ticket thread — no calls, no meetings.</p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-slate-600 mb-6">
          🛡️ <strong>Scope promise:</strong> If your issue exceeds your selected tier, work pauses and you'll be notified before any additional charges.
        </div>

        <Link href="/" className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors text-sm">
          Back to PatchMySite →
        </Link>
      </div>
    </div>
  )
}
