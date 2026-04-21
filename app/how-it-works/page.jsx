import Link from 'next/link'

export const metadata = {
  title: 'How It Works — PatchMySite',
  description: 'From broken to fixed in 8 steps — no phone calls, no meetings, everything async.',
}

const steps = [
  {
    num: '1',
    title: 'Fill out the intake form',
    desc: 'Describe your issue, your CMS, hosting provider, and urgency level. Smart questions help you self-select the right tier — no guesswork.',
    icon: '📋',
  },
  {
    num: '2',
    title: 'Review your recommended tier',
    desc: 'Based on your answers, the form suggests the right pricing tier. You can confirm or adjust. No custom quotes, no back-and-forth.',
    icon: '💡',
  },
  {
    num: '3',
    title: 'Pay securely via Stripe',
    desc: 'One-off tiers are paid upfront (50% deposit for Advanced). Hourly blocks and retainers bill on signup. All payments are processed by Stripe.',
    icon: '💳',
  },
  {
    num: '4',
    title: 'Share admin credentials securely',
    desc: 'After payment, you receive a secure Bitwarden Send link to share your admin credentials. One-use, password-protected, expires in 7 days. We never accept credentials over email.',
    icon: '🔐',
  },
  {
    num: '5',
    title: 'Your ticket opens automatically',
    desc: 'A support ticket is created with all your form details attached. You receive an email confirmation with your ticket number. No manual steps needed.',
    icon: '🎫',
  },
  {
    num: '6',
    title: 'We work the issue',
    desc: 'All updates, questions, and findings are posted inside the ticket thread. You get email notifications for each update. All communication stays in the ticket.',
    icon: '🔧',
  },
  {
    num: '7',
    title: 'Scope check (if needed)',
    desc: 'If your issue turns out to be more complex than your selected tier, work pauses. You receive a message in the ticket with a clear explanation and an optional upgrade link. Your choice, no pressure.',
    icon: '⚖️',
    highlight: true,
  },
  {
    num: '8',
    title: 'Ticket resolved and closed',
    desc: 'Issue fixed. Ticket closes. You receive a summary of what was done and an optional review link. The credential share link is expired and access is revoked.',
    icon: '✅',
  },
]

const faqs = [
  {
    q: 'What if I don\'t know which tier to pick?',
    a: 'The intake form asks targeted questions and recommends a tier based on your answers. You can always override the suggestion. If you\'re still unsure, start with Standard — it covers the most common issues.',
  },
  {
    q: 'What platforms do you support?',
    a: 'WordPress (including WooCommerce), Drupal, and most web tech stacks including custom PHP/Node sites, hosting issues, DNS problems, and performance. If it\'s a web problem, we can likely help.',
  },
  {
    q: 'How do you access my site securely?',
    a: 'We use Bitwarden Send — a one-time, password-protected secure link — to receive admin credentials. We never ask for passwords over email or chat. Access is revoked when the ticket closes.',
  },
  {
    q: 'What if my issue isn\'t fixed?',
    a: 'If we genuinely can\'t resolve your issue, we\'ll tell you in the ticket before closing it, along with the reason and what would be needed to proceed. We don\'t close tickets without resolution unless we\'ve communicated clearly.',
  },
  {
    q: 'How fast is the turnaround?',
    a: 'Quick Fix: within 4 business hours. Standard: within 1 business day. Advanced: 1–3 business days. Emergency add-on: 24-hour guarantee from payment confirmation.',
  },
  {
    q: 'Can I get a refund?',
    a: 'Quick Fix and Standard are non-refundable once work has begun. For Advanced, the deposit is non-refundable; the balance is only charged on completion. Hourly blocks are non-refundable once hours are applied. Retainers can be cancelled before the next billing cycle.',
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">From Broken to Fixed</h1>
          <p className="text-slate-500 text-lg">Without a single phone call, meeting, or email chain.</p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {steps.map((step) => (
              <div key={step.num} className={`flex gap-5 p-6 rounded-2xl border ${step.highlight ? 'bg-amber-50 border-amber-200' : 'bg-white border-slate-100 shadow-sm'}`}>
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center">
                    {step.num}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{step.icon}</span>
                    <h3 className="font-bold text-slate-900">{step.title}</h3>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Ready to submit your first ticket?</h2>
        <p className="text-slate-500 mb-8">Takes under 3 minutes. No account needed to start.</p>
        <Link href="/submit" className="inline-block bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md">
          Submit a Ticket →
        </Link>
      </section>
    </>
  )
}
