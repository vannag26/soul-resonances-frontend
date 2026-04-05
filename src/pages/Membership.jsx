import { useState } from 'react'

export default function Membership() {
  const [expandedFaq, setExpandedFaq] = useState(null)

  const tiers = [
    {
      name: 'Seeker',
      price: 9,
      featured: false,
      features: [
        'Free tarot reading',
        'Monthly guidance',
        'Community access'
      ],
      cta: 'Start Seeker Membership',
      link: 'https://buy.stripe.com/8x28wPgUA0VodOpc6a7Vm0o'
    },
    {
      name: 'Awakened',
      price: 19,
      featured: true,
      features: [
        'Everything in Seeker',
        'Weekly readings',
        'Flying Stars reports',
        'Resource library'
      ],
      cta: 'Start Awakened Membership',
      link: 'https://buy.stripe.com/14A9AT7k0gUm25H7PU7Vm0p',
      badge: 'MOST POPULAR'
    },
    {
      name: 'Enlightened',
      price: 39,
      featured: false,
      features: [
        'Everything in Awakened',
        'Monthly 1:1 reading',
        'Private channel access',
        'Early content'
      ],
      cta: 'Start Enlightened Membership',
      link: 'https://buy.stripe.com/4gM9AT33KbA26lXgmq7Vm0q'
    }
  ]

  const faqs = [
    {
      q: 'Can I change my membership tier?',
      a: 'Yes! You can upgrade or downgrade your membership at any time. Changes take effect at your next billing cycle.'
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept all major credit and debit cards through Stripe. Payment is secure and encrypted.'
    },
    {
      q: 'Is there a cancellation fee?',
      a: 'No cancellation fees. You can cancel anytime. Your access continues through the end of your current billing period.'
    },
    {
      q: 'Do you offer a free trial?',
      a: 'Currently, we offer access to free resources at no cost. Start with our Seeker membership to explore the full community.'
    }
  ]

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="hero-section bg-gradient-to-b from-brand-purple to-brand-purple-dark text-white">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Choose Your Path</h1>
          <p className="text-xl font-light text-gray-100">
            Unlock sacred wisdom and spiritual guidance tailored to your journey
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-brand-cream">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier, idx) => (
              <div
                key={idx}
                className={`relative rounded-xl transition-all ${
                  tier.featured
                    ? 'bg-white border-2 border-brand-gold scale-105 shadow-xl'
                    : 'bg-white border-2 border-brand-purple border-opacity-20'
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-brand-gold text-white px-4 py-1 rounded-full text-xs font-semibold">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-light text-brand-purple mb-2">{tier.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-light text-brand-gold">${tier.price}</span>
                    <span className="text-gray-600 font-light">/month</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <span className="text-brand-gold mt-1">✓</span>
                        <span className="text-gray-700 font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={tier.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full block text-center py-3 rounded-lg font-medium transition-colors ${
                      tier.featured
                        ? 'bg-brand-gold text-white hover:bg-amber-700'
                        : 'bg-brand-purple text-white hover:bg-brand-purple-dark'
                    }`}
                  >
                    {tier.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-brand-purple">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full text-left px-6 py-4 hover:bg-brand-cream transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-brand-purple">{faq.q}</h3>
                    <span className="text-brand-gold text-xl">
                      {expandedFaq === idx ? '−' : '+'}
                    </span>
                  </div>
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 py-4 bg-brand-cream border-t border-gray-200">
                    <p className="text-gray-700 font-light">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
