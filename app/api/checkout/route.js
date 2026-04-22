import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// Map tier selections to live Stripe price IDs
const PRICE_MAP = {
  'Quick Fix — $79':              'price_1TOo6wGSEOR9lH6yAN8lMjnK',
  'Standard — $149':              'price_1TOo6wGSEOR9lH6ydqtIBWzg',
  'Advanced — $299':              'price_1TOo6yGSEOR9lH6yywWifGQW',
  'Hourly Block 2hr — $99':       'price_1TOo6wGSEOR9lH6yborAfvYB',
  'Hourly Block 5hr — $220':      'price_1TOo6wGSEOR9lH6yxz6vdE7W',
  'Hourly Block 10hr — $399':     'price_1TOo6wGSEOR9lH6y1kjzWbw0',
  'Retainer Starter — $249/mo':   'price_1TOo6wGSEOR9lH6ywlAzVAaw',
  'Retainer Pro — $499/mo':       'price_1TOo6wGSEOR9lH6yZIw8vmIA',
}

const EMERGENCY_PRICE_ID = 'price_1TOo6wGSEOR9lH6yn30RLUK6'

export async function POST(request) {
  try {
    const body = await request.json()
    const {
      tier, addEmergency, name, email, url,
      issueType, platform, hosting, description,
      whenStarted, siteStatus, urgency, ongoingSupport, source
    } = body

    const priceId = PRICE_MAP[tier]
    if (!priceId) {
      return Response.json({ error: 'Invalid tier selected' }, { status: 400 })
    }

    // Build line items
    const lineItems = [{ price: priceId, quantity: 1 }]
    if (addEmergency) {
      lineItems.push({ price: EMERGENCY_PRICE_ID, quantity: 1 })
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://patchmysite.com'

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      mode: tier.includes('/mo') ? 'subscription' : 'payment',
      line_items: lineItems,
      customer_email: email,
      metadata: {
        name,
        email,
        url,
        tier,
        issueType,
        platform,
        hosting,
        description: description?.slice(0, 500),
        whenStarted,
        siteStatus,
        urgency,
        addEmergency: addEmergency ? 'yes' : 'no',
        ongoingSupport,
        source,
      },
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/submit`,
    })

    return Response.json({ url: session.url })

  } catch (err) {
    console.error('Stripe checkout error:', err)
    return Response.json({ error: err.message }, { status: 500 })
  }
}
