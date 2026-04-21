import Link from 'next/link'

const trustItems = [
  '100% digital — no phone support',
  'Fixed transparent pricing',
  'Secure credential handling',
  'Work never exceeds scope without your approval',
]

const steps = [
  { num: '1', title: 'Submit your issue', desc: 'Fill out the intake form. Describe the problem and your platform — smart questions help route you to the right tier automatically.' },
  { num: '2', title: 'Pay your tier', desc: 'Select your pricing tier and pay securely via Stripe. No custom quotes, no waiting. Work begins as soon as payment clears.' },
  { num: '3', title: 'We fix it in your ticket', desc: 'All updates, questions, and deliverables happen inside your support ticket. You get email notifications for every update.' },
]

const testimonials = [
  { quote: 'SiteDesk fixed a broken WooCommerce checkout in less than a day. I submitted before bed and it was resolved by morning.', author: 'E-commerce store owner' },
  { quote: 'No phone, no Zoom, no waiting on hold. I described the problem in a form and got a ticket update within hours. Just results.', author: 'Freelance designer' },
  { quote: 'I was losing sales every hour my site was down. SiteDesk had it back up same day. Worth every penny.', author: 'Small business owner' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/40 text-blue-100 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-blue-400/30">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
            Accepting new tickets
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Your Website Is Broken.<br />
            <span className="text-blue-200">We Fix It — No Phone Calls.</span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            SiteDesk is a digital-only support service for WordPress, Drupal, and web tech problems. Submit your issue, pay your tier, and we get to work. All communication happens in your ticket — secure, documented, and async.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/submit" className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl text-base hover:bg-blue-50 transition-colors shadow-lg">
              Get Help Now →
            </Link>
            <Link href="/pricing" className="border border-blue-400 text-white font-semibold px-8 py-4 rounded-xl text-base hover:bg-blue-700 transition-colors">
              See Pricing & Tiers
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-slate-50 border-y border-slate-100 py-5 px-4">
        <div className="max-w-5xl mx-auto">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {trustItems.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works preview */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">How It Works</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">From broken to fixed in three steps — without a single phone call.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">{step.num}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/how-it-works" className="text-blue-600 font-semibold text-sm hover:underline">See the full 8-step process →</Link>
          </div>
        </div>
      </section>

      {/* Pricing snapshot */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Transparent Pricing</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">No custom quotes. Pick the tier that fits your issue and pay upfront.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { tier: 'Quick Fix', price: '$79', desc: 'Single bug, broken plugin, minor CSS or content issue' },
              { tier: 'Standard', price: '$149', desc: 'Theme issues, plugin conflicts, form/checkout errors', popular: true },
              { tier: 'Advanced', price: '$299', desc: 'Site migration, major errors, security cleanup' },
              { tier: 'Emergency', price: '+$99', desc: 'Priority queue — 24-hour turnaround guarantee', tag: 'Add-on' },
            ].map((p) => (
              <div key={p.tier} className={`relative bg-white rounded-2xl border p-6 shadow-sm ${p.popular ? 'border-blue-500 ring-2 ring-blue-100' : 'border-slate-100'}`}>
                {p.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</div>}
                {p.tag && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">{p.tag}</div>}
                <div className="text-2xl font-extrabold text-slate-900 mb-1">{p.price}</div>
                <div className="text-sm font-bold text-blue-600 mb-3">{p.tier}</div>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/pricing" className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">
              See All Tiers & Retainer Plans →
            </Link>
          </div>
        </div>
      </section>

      {/* Scope promise */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">
          <div className="text-2xl mb-3">🛡️</div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">Our Scope Promise</h3>
          <p className="text-slate-600 text-sm leading-relaxed">If your issue turns out to be more complex than your selected tier, <strong>all work pauses immediately</strong>. You'll receive a ticket message explaining what was found and what it would take to continue — before any additional charges. You decide whether to proceed.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">What Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">"{t.quote}"</p>
                <p className="text-xs font-semibold text-slate-400">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-blue-600 py-16 px-4 text-center text-white">
        <h2 className="text-3xl font-extrabold mb-4">Ready to get your site fixed?</h2>
        <p className="text-blue-200 mb-8 max-w-lg mx-auto">Submit your issue in under 3 minutes. No calls, no meetings — just a ticket and a fix.</p>
        <Link href="/submit" className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg inline-block">
          Submit a Ticket →
        </Link>
      </section>
    </>
  )
}
