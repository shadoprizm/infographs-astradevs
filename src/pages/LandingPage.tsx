import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Layers, Zap, BarChart3, Palette, Sparkles, Menu, X } from 'lucide-react'

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-white/5" style={{ background: 'rgba(7,4,11,0.9)', backdropFilter: 'blur(16px)' }}>
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg gradient-bg flex items-center justify-center">
              <Layers className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-semibold text-base">InfoGraphs</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-[var(--text-secondary)]">
            <a href="#how" className="hover:text-white transition-colors">How It Works</a>
            <a href="#examples" className="hover:text-white transition-colors">Examples</a>
            <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <Link to="/app" className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors px-3 py-1.5">Sign In</Link>
            <Link to="/app/create" className="btn-primary text-sm !py-2 !px-4">Try Free</Link>
          </div>
          <button className="md:hidden text-white p-1" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-white/5 p-4 space-y-3" style={{ background: 'rgba(7,4,11,0.95)' }}>
            <a href="#how" className="block text-sm text-[var(--text-secondary)] py-2" onClick={() => setMenuOpen(false)}>How It Works</a>
            <a href="#examples" className="block text-sm text-[var(--text-secondary)] py-2" onClick={() => setMenuOpen(false)}>Examples</a>
            <Link to="/pricing" className="block text-sm text-[var(--text-secondary)] py-2" onClick={() => setMenuOpen(false)}>Pricing</Link>
            <a href="#faq" className="block text-sm text-[var(--text-secondary)] py-2" onClick={() => setMenuOpen(false)}>FAQ</a>
            <Link to="/app/create" className="btn-primary text-sm w-full justify-center mt-2" onClick={() => setMenuOpen(false)}>Try Free</Link>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="px-4 pt-16 pb-12 text-center relative">
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(108,99,255,0.4) 0%, transparent 60%)' }} />
        <div className="max-w-xl mx-auto relative">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 tracking-tight">
            Give us a topic.<br />
            <span className="gradient-text">Get an infographic.</span>
          </h1>
          <p className="text-base text-[var(--text-secondary)] max-w-md mx-auto mb-6 leading-relaxed">
            AI researches your topic, designs the layout, and generates a professional infographic. No design skills needed.
          </p>
          <Link to="/app/create" className="btn-primary text-base !py-3 !px-6">
            <Sparkles className="w-4 h-4" /> Create Free
          </Link>
          <p className="text-xs text-[var(--text-secondary)] mt-3">3 free per month · No credit card</p>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">How it works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: <Zap className="w-6 h-6" />, title: 'Enter a topic', desc: 'One sentence is enough' },
              { icon: <BarChart3 className="w-6 h-6" />, title: 'AI builds it', desc: 'Research, design, generate' },
              { icon: <Palette className="w-6 h-6" />, title: 'Download', desc: 'PNG, PDF, SVG — any size' },
            ].map((step, i) => (
              <div key={i} className="glass-card p-5 text-center">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-3 text-white">
                  {step.icon}
                </div>
                <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
                <p className="text-xs text-[var(--text-secondary)]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples */}
      <section id="examples" className="px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">AI-generated examples</h2>
          <p className="text-sm text-[var(--text-secondary)] mb-6">From a single topic prompt to finished infographic.</p>
          <div className="glass-card inline-block max-w-xs mx-auto overflow-hidden rounded-xl">
            <img src="/sample-infographic.webp" alt="AI-generated sample infographic: 5 Steps to Launch Your SaaS in 2026" className="w-full" />
          </div>
          <p className="text-xs text-[var(--text-secondary)] mt-3">"5 Steps to Launch Your SaaS in 2026" — generated by AI</p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">Pricing</h2>
          <p className="text-sm text-[var(--text-secondary)] text-center mb-8">Start free. Upgrade when you need more.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                name: 'Free', price: '$0', features: ['3 infographics/mo', 'Basic templates', 'PNG export'],
                cta: 'Start Free', highlight: false
              },
              {
                name: 'Pro', price: '$19', features: ['25 infographics/mo', 'Brand kits', 'All formats', 'AI research', 'No watermark'],
                cta: 'Start Pro', highlight: true
              },
              {
                name: 'Business', price: '$49', features: ['Unlimited', 'API access', 'Team seats', 'Priority gen'],
                cta: 'Start Business', highlight: false
              },
            ].map((tier) => (
              <div key={tier.name} className={`glass-card p-5 flex flex-col ${tier.highlight ? 'ring-1 ring-[var(--accent-purple)]' : ''}`}>
                <h3 className="font-semibold text-sm mb-1">{tier.name}</h3>
                <div className="mb-3">
                  <span className="text-2xl font-bold">{tier.price}</span>
                  <span className="text-xs text-[var(--text-secondary)]">/mo</span>
                </div>
                <ul className="space-y-1.5 mb-4 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="text-xs text-[var(--text-secondary)] flex items-center gap-1.5">
                      <span className="text-[var(--accent-blue)] text-[10px]">●</span> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/app/create" className={tier.highlight ? 'btn-primary w-full justify-center text-sm !py-2' : 'btn-secondary w-full justify-center text-sm !py-2'}>
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-[var(--text-secondary)] mt-4">Agency plan at $149/mo — <a href="mailto:hello@astradevs.io" className="underline">contact us</a></p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-4 py-12">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">FAQ</h2>
          <div className="space-y-3">
            {[
              { q: 'How is this different from Canva?', a: 'Canva is a design tool — you need design skills. We\'re an AI engine — give us a topic and we handle research, writing, design, and generation automatically.' },
              { q: 'Can I use my own data?', a: 'Yes. Paste URLs, upload documents, or type text directly. The AI extracts key info and builds the infographic from it.' },
              { q: 'What formats do you export?', a: 'PNG, PDF, and SVG. Auto-sized for Instagram, LinkedIn, Twitter, and print.' },
              { q: 'Can I edit after generation?', a: 'Yes — use natural language. "Make it darker" or "Add more stats" and the AI regenerates.' },
            ].map((item) => (
              <details key={item.q} className="glass-card p-4 group cursor-pointer">
                <summary className="font-medium text-sm list-none flex items-center justify-between">
                  {item.q}
                  <span className="text-[var(--accent-purple)] transition-transform group-open:rotate-45 text-lg leading-none">+</span>
                </summary>
                <p className="text-[var(--text-secondary)] text-sm mt-3 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-12">
        <div className="max-w-md mx-auto text-center glass-card p-8">
          <h2 className="text-xl font-bold mb-2">Ready to try it?</h2>
          <p className="text-sm text-[var(--text-secondary)] mb-5">3 free infographics. No credit card.</p>
          <Link to="/app/create" className="btn-primary !py-3 !px-6">
            <Sparkles className="w-4 h-4" /> Create Free Infographic
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-4 py-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--text-secondary)]">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-md gradient-bg flex items-center justify-center">
              <Layers className="w-2.5 h-2.5 text-white" />
            </div>
            <span className="font-medium text-white text-xs">InfoGraphs</span>
            <span>· AstraDevs</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://astradevs.io" target="_blank" rel="noopener" className="hover:text-white transition-colors">astradevs.io</a>
            <Link to="/pricing">Pricing</Link>
            <a href="mailto:hello@astradevs.io">Contact</a>
          </div>
          <span>© 2026 North Star Holdings</span>
        </div>
      </footer>
    </div>
  )
}
