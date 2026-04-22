'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function recommendTier(issueType, urgency) {
  if (urgency === 'very') return { tier: 'Advanced', price: '$299', addEmergency: true }
  if (issueType === 'hacked' || issueType === 'migrate' || issueType === 'down') return { tier: 'Advanced', price: '$299', addEmergency: false }
  if (issueType === 'broken') return { tier: 'Standard', price: '$149', addEmergency: false }
  if (issueType === 'minor') return { tier: 'Quick Fix', price: '$79', addEmergency: false }
  return { tier: 'Standard', price: '$149', addEmergency: false }
}

const TIERS = ['Quick Fix — $79', 'Standard — $149', 'Advanced — $299', 'Hourly Block 2hr — $99', 'Hourly Block 5hr — $220', 'Hourly Block 10hr — $399', 'Retainer Starter — $249/mo', 'Retainer Pro — $499/mo']

export default function SubmitPage() {
  const router = useRouter()
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setError(data.error || 'Something went wrong. Please try again.')
        setLoading(false)
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Submit a Support Request</h1>
          <p className="text-slate-500 text-sm">Takes under 3 minutes. No account required.</p>
        </div>

        <div className="flex gap-2 mb-8">
          {[1, 2, 3, 4].map(n => (
            <div key={n} className={`h-1.5 flex-1 rounded-full transition-all ${n <= page ? 'bg-blue-600' : 'bg-slate-200'}`} />
          ))}
        </div>
        <p className="text-xs text-slate-400 text-right mb-6">Step {page} of {totalPages}</p>

        <form onSubmit={handleSubmit}>
          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-8 space-y-6">

            {/* Page 1 */}
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

            {/* Page 2 */}
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
