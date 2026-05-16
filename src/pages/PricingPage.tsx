import { Link } from 'react-router-dom'
import { Layers, Check } from 'lucide-react'

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-white/5 px-6 py-4" style={{ background: 'var(--bg-primary)' }}>
        <div className="container-max flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <Layers className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-lg">InfoGraphs</span>
          </Link>
          <Link to="/app/create" className="btn-primary text-sm !py-2 !px-4">Try Free</Link>
        </div>
      </header>

      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, transparent pricing</h1>
            <p className="text-[var(--text-secondary)] text-lg">Start free. Upgrade when you need more.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: 'Free', price: '$0', period: '/mo', cta: 'Get Started',
                features: ['3 infographics/month', 'Freestyle style only', 'Basic templates', 'PNG export', 'Watermarked output', 'Community support'],
                popular: false
              },
              {
                name: 'Pro', price: '$19', period: '/mo', annual: '$15/mo', cta: 'Start Pro',
                features: ['25 infographics/month', 'Custom brand kits (3)', 'All templates', 'PNG + PDF + SVG', 'No watermark', 'AI research included', 'Natural language edits', 'Email support'],
                popular: true
              },
              {
                name: 'Business', price: '$49', period: '/mo', annual: '$39/mo', cta: 'Start Business',
                features: ['Unlimited infographics', 'Unlimited brand kits', 'Custom templates', 'API access', 'Team seats (3)', 'Priority generation', 'Zapier integration', 'White-label exports', 'Priority support'],
                popular: false
              },
              {
                name: 'Agency', price: '$149', period: '/mo', annual: '$119/mo', cta: 'Contact Us',
                features: ['Everything in Business', '10 team seats', 'Custom integrations', 'Dedicated support', 'Bulk operations', 'Reseller rights', 'SLA guarantee', 'Onboarding call'],
                popular: false
              },
            ].map((tier) => (
              <div key={tier.name} className={`glass-card p-6 relative flex flex-col ${tier.popular ? 'ring-2 ring-[var(--accent-purple)]' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold gradient-bg text-white">Popular</div>
                )}
                <h3 className="text-lg font-semibold mb-1">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{tier.price}</span>
                  <span className="text-[var(--text-secondary)] text-sm">{tier.period}</span>
                </div>
                {tier.annual && <p className="text-xs text-[var(--accent-blue)] mb-4">{tier.annual} billed annually</p>}
                <ul className="space-y-2 mb-6 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-[var(--accent-blue)] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/app/create" className={tier.popular ? 'btn-primary w-full justify-center text-sm' : 'btn-secondary w-full justify-center text-sm'}>
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-[var(--text-secondary)] mt-12">All plans include a 14-day money-back guarantee. No questions asked.</p>
        </div>
      </section>
    </div>
  )
}
