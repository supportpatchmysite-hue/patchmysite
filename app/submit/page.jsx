'use client'
import { useState } from 'react'
import Link from 'next/link'

// Tier recommendation logic
function recommendTier(issueType, urgency) {
  if (urgency === 'very') return { tier: 'Advanced', price: '$299', addEmergency: true }
  if (issueType === 'hacked' || issueType === 'migrate' || issueType === 'down') return { tier: 'Advanced', price: '$299', addEmergency: false }
  if (issueType === 'broken') return { tier: 'Standard', price: '$149', addEmergency: false }
  if (issueType === 'minor') return { tier: 'Quick Fix', price: '$79', addEmergency: false }
  return { tier: 'Standard', price: '$149', addEmergency: false }
}

const TIERS = ['Quick Fix — $79', 'Standard — $149', 'Advanced — $299', 'Hourly Block (2hr) — $99', 'Hourly Block (5hr) — $220', 'Hourly Block (10hr) — $399', 'Retainer Starter — $249/mo', 'Retainer Pro — $499/mo']

export default function SubmitPage() {
  const [page, setPage] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    issueType: '', platform: '', hosting: '', description: '', whenStarted: '',
    triedFix: '', triedFixDesc: '', siteStatus: '', urgency: '', tier: '',
    addEmergency: false, ongoingSupport: '', name: '', email: '', url: '', agreed: false, source: ''
  })

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }))

  const totalPages = 4

  const handleNext = () => {
    if (page === 3) {
      const rec = recommendTier(form.issueType, form.urgency)
      if (!form.tier) set('tier', rec.tier + ' — ' + rec.price)
    }
    setPage(p => p + 1)
    window.scrollTo(0, 0)
  }
  const handleBack = () => { setPage(p => p - 1); window.scrollTo(0, 0) }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    window.scrollTo(0, 0)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="bg-white border border-slate-100 rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-3">Request Received!</h2>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            Thanks, <strong>{form.name}</strong>. We've received your submission. Check your inbox at <strong>{form.email}</strong> for a payment link to confirm your selected tier and open your ticket.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-blue-700 mb-6">
            Selected tier: <strong>{form.tier}</strong>{form.addEmergency && ' + Emergency Add-On'}
          </div>
          <p className="text-xs text-slate-400">No phone calls. No meetings. Everything happens in your ticket. 🛡️</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Submit a Support Request</h1>
          <p className="text-slate-500 text-sm">Takes under 3 minutes. No account required.</p>
        </div>

        {/* Progress bar */}
        <div className="flex gap-2 mb-8">
          {[1, 2, 3, 4].map(n => (
            <div key={n} className={`h-1.5 flex-1 rounded-full transition-all ${n <= page ? 'bg-blue-600' : 'bg-slate-200'}`} />
          ))}
        </div>
        <p className="text-xs text-slate-400 text-right mb-6">Step {page} of {totalPages}</p>

        <form onSubmit={handleSubmit}>
          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-8 space-y-6">

            {/* Page 1 — Issue Type */}
            {page === 1 && (
              <>
                <h2 className="font-bold text-slate-900 text-lg">Tell us about your issue</h2>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">What best describes your problem? *</label>
                  <div className="space-y-2">
                    {[
                      { val: 'broken', label: 'Something is broken or not working' },
                      { val: 'feature', label: 'I need a feature added or changed' },
                      { val: 'hacked', label: 'My site was hacked or has malware' },
                      { val: 'migrate', label: 'I need to move or migrate my site' },
                      { val: 'performance', label: 'Performance / speed issues' },
                      { val: 'minor', label: 'Minor fix or content change' },
                    ].map(opt => (
                      <label key={opt.val} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${form.issueType === opt.val ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:border-slate-300'}`}>
                        <input type="radio" name="issueType" value={opt.val} checked={form.issueType === opt.val} onChange={e => set('issueType', e.target.value)} className="accent-blue-600" />
                        <span className="text-sm text-slate-700">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">What platform is your site on? *</label>
                  <div className="space-y-2">
                    {['WordPress', 'Drupal', 'Webflow', 'Squarespace / Wix', 'Custom / other'].map(opt => (
                      <label key={opt} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${form.platform === opt ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:border-slate-300'}`}>
                        <input type="radio" name="platform" value={opt} checked={form.platform === opt} onChange={e => set('platform', e.target.value)} className="accent-blue-600" />
                        <span className="text-sm text-slate-700">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Where is your site hosted? *</label>
                  <select value={form.hosting} onChange={e => set('hosting', e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select hosting provider</option>
                    {['WP Engine / Kinsta / Flywheel', 'SiteGround / Bluehost / HostGator', 'GoDaddy / Namecheap', 'Cloudflare / AWS / DigitalOcean', "I don't know", 'Other'].map(h => <option key={h} value={h}>{h}</option>)}
                  </select>
                </div>
              </>
            )}

            {/* Page 2 — Description */}
            {page === 2 && (
              <>
                <h2 className="font-bold text-slate-900 text-lg">Describe the issue</h2>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Describe the issue in your own words *</label>
                  <textarea
                    value={form.description}
                    onChange={e => set('description', e.target.value)}
                    rows={5}
                    placeholder="e.g. My contact form stopped submitting after I updated a plugin. I get a 500 error on the form page."
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">When did this issue start?</label>
                  <div className="flex flex-wrap gap-2">
                    {['Today', 'In the last week', 'In the last month', "I'm not sure"].map(opt => (
                      <button type="button" key={opt} onClick={() => set('whenStarted', opt)} className={`px-4 py-2 rounded-full text-xs font-semibold border transition-colors ${form.whenStarted === opt ? 'bg-blue-600 text-white border-blue-600' : 'border-slate-200 text-slate-600 hover:border-blue-300'}`}>{opt}</button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Have you tried anything to fix it?</label>
                  <div className="flex gap-3 mb-3">
                    {['Yes', 'No'].map(opt => (
                      <button type="button" key={opt} onClick={() => set('triedFix', opt)} className={`px-5 py-2 rounded-full text-xs font-semibold border transition-colors ${form.triedFix === opt ? 'bg-blue-600 text-white border-blue-600' : 'border-slate-200 text-slate-600 hover:border-blue-300'}`}>{opt}</button>
                    ))}
                  </div>
                  {form.triedFix === 'Yes' && (
                    <input type="text" placeholder="What did you try?" value={form.triedFixDesc} onChange={e => set('triedFixDesc', e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Is the site currently live?</label>
                  <div className="space-y-2">
                    {['Yes, fully live', 'Partially broken', 'Site is down completely', "It's in staging/dev"].map(opt => (
                      <label key={opt} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${form.siteStatus === opt ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:border-slate-300'}`}>
                        <input type="radio" name="siteStatus" value={opt} checked={form.siteStatus === opt} onChange={e => set('siteStatus', e.target.value)} className="accent-blue-600" />
                        <span className="text-sm text-slate-700">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Page 3 — Urgency & Tier */}
            {page === 3 && (
              <>
                <h2 className="font-bold text-slate-900 text-lg">Urgency & tier selection</h2>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">How urgent is this? *</label>
                  <div className="space-y-2">
                    {[
                      { val: 'low', label: 'Not urgent — a few days is fine' },
                      { val: 'medium', label: 'Somewhat urgent — ideally within 24 hours' },
                      { val: 'very', label: 'Very urgent — this is affecting revenue or live users right now' },
                    ].map(opt => (
                      <label key={opt.val} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${form.urgency === opt.val ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:border-slate-300'}`}>
                        <input type="radio" name="urgency" value={opt.val} checked={form.urgency === opt.val} onChange={e => set('urgency', e.target.value)} className="accent-blue-600" />
                        <span className="text-sm text-slate-700">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {form.urgency && (() => {
                  const rec = recommendTier(form.issueType, form.urgency)
                  return (
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                      <p className="text-xs font-bold text-blue-700 mb-1">Recommended Tier</p>
                      <p className="text-sm text-blue-800 font-semibold">{rec.tier} — {rec.price}</p>
                      {rec.addEmergency && <p className="text-xs text-amber-700 mt-1 font-medium">⚡ Emergency add-on (+$99) recommended for very urgent issues</p>}
                    </div>
                  )
                })()}

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Select your tier *</label>
                  <select value={form.tier} onChange={e => set('tier', e.target.value)} required className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Choose a tier</option>
                    {TIERS.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                {form.urgency === 'very' && (
                  <label className="flex items-start gap-3 p-4 rounded-xl border border-amber-200 bg-amber-50 cursor-pointer">
                    <input type="checkbox" checked={form.addEmergency} onChange={e => set('addEmergency', e.target.checked)} className="mt-0.5 accent-amber-500" />
                    <div>
                      <span className="text-sm font-semibold text-slate-800">Add Emergency Priority +$99</span>
                      <p className="text-xs text-slate-500 mt-0.5">Jump to the front of the queue with a 24-hour turnaround guarantee.</p>
                    </div>
                  </label>
                )}

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Do you need ongoing support?</label>
                  <div className="flex flex-wrap gap-2">
                    {['No, this is one-off', 'Maybe — show me retainer options', 'Yes, I want a retainer'].map(opt => (
                      <button type="button" key={opt} onClick={() => set('ongoingSupport', opt)} className={`px-4 py-2 rounded-full text-xs font-semibold border transition-colors ${form.ongoingSupport === opt ? 'bg-blue-600 text-white border-blue-600' : 'border-slate-200 text-slate-600 hover:border-blue-300'}`}>{opt}</button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Page 4 — Contact */}
            {page === 4 && (
              <>
                <h2 className="font-bold text-slate-900 text-lg">Your contact details</h2>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full name *</label>
                  <input type="text" value={form.name} onChange={e => set('name', e.target.value)} required placeholder="Jane Smith" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email address *</label>
                  <input type="email" value={form.email} onChange={e => set('email', e.target.value)} required placeholder="you@example.com" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <p className="text-xs text-slate-400 mt-1">This becomes your ticket login. All communication goes here.</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Website URL *</label>
                  <input type="url" value={form.url} onChange={e => set('url', e.target.value)} required placeholder="https://yourwebsite.com" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">How did you find SiteDesk?</label>
                  <select value={form.source} onChange={e => set('source', e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select one (optional)</option>
                    {['Google search', 'Referral from someone', 'Social media', 'Reddit / forum', 'Other'].map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" checked={form.agreed} onChange={e => set('agreed', e.target.checked)} required className="mt-1 accent-blue-600 flex-shrink-0" />
                    <span className="text-xs text-slate-600 leading-relaxed">
                      I have read and agree to the <Link href="/terms" className="text-blue-600 underline">SiteDesk Terms of Service</Link>, including the scope policy. I understand that work will pause if my issue exceeds the selected tier, and I will be notified before any additional charges.
                    </span>
                  </label>
                </div>

                {/* Summary */}
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm">
                  <p className="font-bold text-slate-800 mb-1">Your submission summary</p>
                  <ul className="text-slate-600 space-y-1 text-xs">
                    <li><strong>Issue:</strong> {form.issueType} on {form.platform}</li>
                    <li><strong>Tier:</strong> {form.tier}{form.addEmergency ? ' + Emergency Add-On' : ''}</li>
                    <li><strong>Site:</strong> {form.url}</li>
                  </ul>
                </div>
              </>
            )}

            {/* Navigation buttons */}
            <div className="flex justify-between pt-2">
              {page > 1 ? (
                <button type="button" onClick={handleBack} className="px-5 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors">
                  ← Back
                </button>
              ) : <div />}

              {page < totalPages ? (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={
                    (page === 1 && (!form.issueType || !form.platform || !form.hosting)) ||
                    (page === 2 && !form.description) ||
                    (page === 3 && (!form.urgency || !form.tier))
                  }
                  className="px-6 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue →
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!form.agreed}
                  className="px-6 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Submit Request →
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
