export const metadata = {
  title: 'Terms of Service — SiteDesk',
  description: 'SiteDesk service agreement, scope policy, refund terms, and communication policy.',
}

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Terms of Service</h1>
      <p className="text-slate-400 text-sm mb-10">Last updated: 2026. Please read carefully before submitting a ticket.</p>

      {[
        {
          title: '1. Scope of Work',
          body: 'All services are scoped to the purchased tier. SiteDesk reserves the right to pause work on any ticket where the issue exceeds the complexity or time defined by the selected tier. In such cases, the client will be notified via their ticket before work resumes. No additional charges will be applied without client approval and a new payment.',
        },
        {
          title: '2. Payment Terms',
          body: 'Quick Fix ($79) and Standard ($149) tiers are paid in full upfront before work begins. Advanced ($299) requires a 50% deposit to begin, with the balance invoiced on completion. Hourly blocks are paid upfront and drawn down per ticket. Retainer plans are billed monthly on the 1st.',
        },
        {
          title: '3. Refund Policy',
          body: 'Quick Fix and Standard tiers are non-refundable once work has commenced. For Advanced tiers, the deposit is non-refundable; the balance is only charged on completion. Hourly blocks are non-refundable once hours have been applied to a ticket. Retainer fees are non-refundable for the current billing cycle but subscriptions may be cancelled at any time before the next renewal date.',
        },
        {
          title: '4. Communication Policy',
          body: 'SiteDesk operates on a 100% digital, async-only model. No phone support, video calls, or in-person meetings are offered or implied. All communication occurs within the ticket system. Response times are not guaranteed outside of business hours unless an Emergency add-on was purchased (24-hour turnaround from payment confirmation).',
        },
        {
          title: '5. Client Responsibilities',
          body: 'The client is responsible for providing accurate information about their issue, platform, and hosting environment at the time of intake. SiteDesk is not liable for issues caused by inaccurate intake information. The client must provide valid admin credentials via the designated secure channel (Bitwarden Send). SiteDesk will not accept credentials via email, chat, or any other insecure method.',
        },
        {
          title: '6. Credential Security',
          body: 'Admin credentials shared via Bitwarden Send are stored only as long as needed to resolve the ticket. Access is revoked when the ticket closes. SiteDesk does not retain, share, or sell client credentials.',
        },
        {
          title: '7. No Guarantee of Resolution',
          body: 'While SiteDesk makes every effort to resolve issues within the purchased tier, some problems may be caused by factors outside our control (hosting environment, third-party services, corrupted databases). If an issue cannot be resolved, the client will be notified in the ticket before it is closed.',
        },
        {
          title: '8. Limitation of Liability',
          body: 'SiteDesk\'s liability is limited to the amount paid for the specific ticket in question. SiteDesk is not liable for lost revenue, data loss, or any indirect damages resulting from a site issue or from work performed.',
        },
        {
          id: 'privacy',
          title: '9. Privacy',
          body: 'SiteDesk collects only the information necessary to deliver the service: name, email, website URL, and issue description. This information is not sold or shared with third parties except as required to deliver the service (e.g. payment processing via Stripe). Stripe\'s privacy policy governs all payment data.',
        },
        {
          title: '10. Changes to Terms',
          body: 'SiteDesk may update these terms at any time. Continued use of the service after changes constitutes acceptance of the updated terms.',
        },
      ].map(section => (
        <div key={section.title} id={section.id} className="mb-8">
          <h2 className="text-base font-bold text-slate-900 mb-2">{section.title}</h2>
          <p className="text-sm text-slate-600 leading-relaxed">{section.body}</p>
        </div>
      ))}

      <div className="border-t border-slate-100 pt-8 text-xs text-slate-400">
        Questions? Submit a ticket and ask in the ticket thread. We don't do email support outside the ticket system.
      </div>
    </div>
  )
}
