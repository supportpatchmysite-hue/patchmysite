import Link from 'next/link'

export const metadata = {
  title: 'Pricing — PatchMySite',
  description: 'Fixed-price web support tiers. No custom quotes. Pay before work begins.',
}

const oneOff = [
  {
    tier: 'Quick Fix',
    price: '$79',
    billing: 'Paid upfront',
    turnaround: 'Within 4 business hours',
    popular: false,
    covers: [
      'Single broken plugin',
      'Minor CSS or layout issue',
      'Small content or config change',
      'Broken image or link',
      'Basic error diagnosis',
    ],
  },
  {
    tier: 'Standard',
    price: '$149',
    billing: 'Paid upfront',
    turnaround: 'Within 1 business day',
    popular: true,
    covers: [
      'Theme issues or conflicts',
      'Plugin compatibility errors',
      'Form or checkout errors',
      'Moderate troubleshooting',
      'White screen / 500 errors',
    ],
  },
  {
    tier: 'Advanced',
    price: '$299',
    billing: '50% deposit, balance on completion',
    turnaround: '1–3 business days',
    popular: false,
    covers: [
      'Full site migration',
      'Security cleanup / malware removal',
      'Complex plugin overhauls',
      'Site is completely down',
      'Database errors',
    ],
  },
]

const blocks = [
  { label: 'Starter Block', hours: '2 hours', price: '$99', perHour: '$49.50/hr', savings: '' },
  { label: 'Standard Block', hours: '5 hours', price: '$220', perHour: '$44/hr', savings: 'Save $30' },
  { label: 'Pro Block', hours: '10 hours', price: '$399', perHour: '$39.90/hr', savings: 'Save $90' },
]

const retainers = [
  { plan: 'Starter', price: '$249/mo', includes: ['Up to 3 issues or 4 hrs/mo', 'Standard queue', 'Cancel anytime'] },
  { plan: 'Pro', price: '$499/mo', includes: ['Up to 8 issues or 10 hrs/mo', 'Priority queue', 'Cancel anytime'], popular: true },
]

export default function PricingPage() {
  return (
    <>
      <section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">Transparent Pricing. No Surprises.</h1>
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">Pay before we start. All work is scoped to the tier you select. If your issue is more complex than expected, work pauses and you're notified before any additional charges.</p>
        </div>
      </section>

      {/* One-off tiers */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-2 text-center">One-Off Fix Tiers</h2>
          <p className="text-slate-500 text-center mb-12">For single issues. Pay once, get it fixed.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {oneOff.map((p) => (
              <div key={p.tier} className={`relative flex flex-col rounded-2xl border p-8 ${p.popular ? 'border-blue-500 ring-2 ring-blue-100 shadow-lg' : 'border-slate-200 shadow-sm'}`}>
                {p.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">Most Popular</div>
                )}
                <div className="mb-6">
                  <div className="text-sm font-bold text-blue-600 mb-1">{p.tier}</div>
                  <div className="text-4xl font-extrabold text-slate-900">{p.price}</div>
                  <div className="text-xs text-slate-400 mt-1">{p.billing}</div>
                  <div className="text-xs text-slate-500 mt-1 font-medium">⏱ {p.turnaround}</div>
                </div>
                <ul className="space-y-2.5 flex-1 mb-8">
                  {p.covers.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/submit" className={`block text-center font-semibold py-3 rounded-xl text-sm transition-colors ${p.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'}`}>
                  Get Started →
                </Link>
              </div>
            ))}
          </div>

          {/* Emergency add-on */}
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="font-bold text-slate-900 mb-1">⚡ Emergency Add-On — +$99</div>
              <p className="text-sm text-slate-600">Jump to the front of the queue with a 24-hour turnaround guarantee. Add to any tier at checkout.</p>
            </div>
            <Link href="/submit" className="flex-shrink-0 bg-amber-500 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-amber-600 transition-colors">
              Add Emergency Priority
            </Link>
          </div>
        </div>
      </section>

      {/* Hourly blocks */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-2 text-center">Hourly Blocks</h2>
          <p className="text-slate-500 text-center mb-12">Not sure which tier fits? Buy hours and draw them down across one or multiple issues.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {blocks.map((b) => (
              <div key={b.label} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm text-center">
                <div className="font-bold text-slate-900 mb-1">{b.label}</div>
                <div className="text-slate-500 text-sm mb-3">{b.hours}</div>
                <div className="text-3xl font-extrabold text-slate-900 mb-1">{b.price}</div>
                <div className="text-xs text-slate-400 mb-1">{b.perHour}</div>
                {b.savings && <div className="text-xs font-bold text-green-600 mb-4">{b.savings}</div>}
                <Link href="/submit" className="block mt-4 bg-slate-100 text-slate-800 font-semibold py-2.5 rounded-xl text-sm hover:bg-slate-200 transition-colors">
                  Buy Block
                </Link>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 text-center mt-6">Hours are tracked per ticket. You receive a usage summary when your block closes or renews. Unused hours do not roll over.</p>
        </div>
      </section>

      {/* Retainers */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-2 text-center">Monthly Retainer Plans</h2>
          <p className="text-slate-500 text-center mb-12">For clients who need ongoing support — priority access and a predictable monthly cost.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {retainers.map((r) => (
              <div key={r.plan} className={`relative rounded-2xl border p-8 ${r.popular ? 'border-blue-500 ring-2 ring-blue-100 shadow-lg' : 'border-slate-200 shadow-sm'}`}>
                {r.popular && <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">Best Value</div>}
                <div className="font-bold text-blue-600 text-sm mb-1">{r.plan} Retainer</div>
                <div className="text-3xl font-extrabold text-slate-900 mb-5">{r.price}</div>
                <ul className="space-y-2.5 mb-8">
                  {r.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/submit" className={`block text-center font-semibold py-3 rounded-xl text-sm transition-colors ${r.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'}`}>
                  Start Retainer →
                </Link>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 text-center mt-6">Billed on the 1st of each month. Cancel anytime before renewal. Unused hours do not roll over.</p>
        </div>
      </section>

      {/* Scope policy */}
      <section className="px-4 pb-20">
        <div className="max-w-3xl mx-auto bg-amber-50 border border-amber-200 rounded-2xl p-8">
          <h3 className="font-bold text-slate-900 text-lg mb-2">🛡️ Our Scope Promise</h3>
          <p className="text-slate-600 text-sm leading-relaxed">All work is scoped to the purchased tier. If your issue exceeds that scope, <strong>work pauses immediately</strong>. You'll receive a ticket message explaining what was found and what additional tier or hours would cover it. <strong>No additional charges ever occur without your explicit approval and a new payment.</strong></p>
        </div>
      </section>
    </>
  )
}
