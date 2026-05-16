import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BarChart3, Palette, Layers, Zap, Menu, X, Sparkles } from 'lucide-react'

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-white/5" style={{ background: 'rgba(7,4,11,0.85)', backdropFilter: 'blur(12px)' }}>
        <div className="container-max flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <Layers className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-lg">InfoGraphs</span>
            <span className="text-xs text-[var(--text-secondary)] ml-1">by AstraDevs</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-[var(--text-secondary)] hover:text-white transition-colors text-sm">How It Works</a>
            <a href="#examples" className="text-[var(--text-secondary)] hover:text-white transition-colors text-sm">Examples</a>
            <Link to="/pricing" className="text-[var(--text-secondary)] hover:text-white transition-colors text-sm">Pricing</Link>
            <a href="#faq" className="text-[var(--text-secondary)] hover:text-white transition-colors text-sm">FAQ</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Link to="/app" className="btn-secondary text-sm !py-2 !px-4">Sign In</Link>
            <Link to="/app/create" className="btn-primary text-sm !py-2 !px-4">Try Free</Link>
          </div>
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/5 p-4 space-y-3" style={{ background: 'rgba(7,4,11,0.95)' }}>
            <a href="#how-it-works" className="block text-[var(--text-secondary)] hover:text-white py-2" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
            <a href="#examples" className="block text-[var(--text-secondary)] hover:text-white py-2" onClick={() => setMobileMenuOpen(false)}>Examples</a>
            <Link to="/pricing" className="block text-[var(--text-secondary)] hover:text-white py-2" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
            <a href="#faq" className="block text-[var(--text-secondary)] hover:text-white py-2" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            <Link to="/app/create" className="btn-primary text-sm w-full justify-center mt-4" onClick={() => setMobileMenuOpen(false)}>Try Free</Link>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(108,99,255,0.3) 0%, transparent 60%)' }} />
        <div className="container-max relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-sm text-[var(--text-secondary)] mb-8">
            <Sparkles className="w-4 h-4 text-[var(--accent-purple)]" />
            AI-powered infographic generation
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
            Give us a topic.<br />
            <span className="gradient-text">Get an infographic.</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed">
            AI researches your topic, structures the narrative, designs the layout, and generates a professional infographic. No design skills needed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/app/create" className="btn-primary text-lg !py-4 !px-8">
              <Sparkles className="w-5 h-5" /> Create Free Infographic
            </Link>
            <a href="#examples" className="btn-secondary text-lg !py-4 !px-8">See Examples</a>
          </div>
          <p className="text-sm text-[var(--text-secondary)] mt-6">3 free infographics per month • No credit card required</p>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Three steps. Zero design skills.</h2>
            <p className="text-[var(--text-secondary)] text-lg">From idea to professional infographic in under 2 minutes.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="w-8 h-8" />, step: '1', title: 'Enter your topic', desc: 'Type what you want an infographic about. A single sentence is enough — AI handles the rest.' },
              { icon: <BarChart3 className="w-8 h-8" />, step: '2', title: 'AI does the work', desc: 'Researches data, structures the narrative, selects the best template, and designs the layout automatically.' },
              { icon: <Palette className="w-8 h-8" />, step: '3', title: 'Download & share', desc: 'Get your infographic in PNG, PDF, or SVG. Auto-sized for Instagram, LinkedIn, Twitter, or print.' },
            ].map((item) => (
              <div key={item.step} className="glass-card p-8 text-center relative">
                <div className="absolute top-4 right-4 text-5xl font-bold text-white/5">{item.step}</div>
                <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6 text-white">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding" style={{ background: 'linear-gradient(180deg, transparent, rgba(108,99,255,0.03), transparent)' }}>
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Not another Canva clone.</h2>
            <p className="text-[var(--text-secondary)] text-lg">We're an AI infographic engine. You don't design — the AI does.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'AI Research', desc: 'Don\'t have data? No problem. Our AI researches your topic, finds stats, and validates sources automatically.', icon: '🔍' },
              { title: 'Smart Narrative', desc: 'AI structures your content into a compelling visual story — hook, substance, and takeaway — optimized for engagement.', icon: '📝' },
              { title: 'Brand Consistency', desc: 'Upload your brand kit once. Every infographic matches your colors, fonts, and style perfectly.', icon: '🎨' },
              { title: 'Natural Language Edits', desc: '"Make it darker" "Add more stats" "Try a different layout" — revise with plain English, not drag-and-drop.', icon: '💬' },
              { title: 'Multi-Platform Export', desc: 'One click generates Instagram, LinkedIn, Twitter, and print-optimized versions at the right resolution.', icon: '📱' },
              { title: 'API Access', desc: 'Generate infographics programmatically. Build infographic generation into your own apps and workflows.', icon: '⚡' },
            ].map((item) => (
              <div key={item.title} className="glass-card p-6">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Infographics for every purpose.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Social Media Marketing', desc: 'Instagram posts, LinkedIn carousels, Twitter threads. Scroll-stopping visuals that get shared.', icon: '📣' },
              { title: 'Content Marketing', desc: 'Blog headers, email graphics, newsletter visuals. Boost engagement without hiring a designer.', icon: '📊' },
              { title: 'Education', desc: 'How-to guides, process explanations, data summaries. Make complex topics visual and memorable.', icon: '🎓' },
              { title: 'Business Reports', desc: 'Quarterly stats, annual summaries, pitch deck visuals. Present data that decision-makers actually read.', icon: '📈' },
              { title: 'Client Deliverables', desc: 'Branded infographics for agencies and freelancers. Deliver professional work in minutes, not hours.', icon: '💼' },
              { title: 'Product Marketing', desc: 'Feature comparisons, product showcases, competitive analyses. Turn features into visual stories.', icon: '🚀' },
            ].map((item) => (
              <div key={item.title} className="glass-card p-6 hover:scale-[1.02] transition-transform">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Preview */}
      <section id="examples" className="section-padding" style={{ background: 'linear-gradient(180deg, transparent, rgba(0,212,255,0.03), transparent)' }}>
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">See what gets generated.</h2>
            <p className="text-[var(--text-secondary)] text-lg">All of these were created by AI from a single topic prompt.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Agentic AI Terms', color: '#3B82F6' },
              { label: 'Startup Metrics', color: '#10B981' },
              { label: 'Cybersecurity Stats', color: '#6366F1' },
              { label: 'Product Roadmap', color: '#F59E0B' },
            ].map((item) => (
              <div key={item.label} className="glass-card aspect-square flex items-center justify-center relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 opacity-20" style={{ background: `linear-gradient(135deg, ${item.color}40, transparent)` }} />
                <div className="text-center relative z-10">
                  <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ background: `${item.color}30` }}>
                    <Layers className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">AI Generated</p>
                </div>
                <div className="absolute inset-0 bg-[var(--accent-purple)]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-[var(--text-secondary)] mt-8">Real generated examples coming soon. Launching MVP now.</p>
        </div>
      </section>

      {/* Pricing Preview */}
      <section id="pricing" className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple pricing. Start free.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Free', price: '$0', period: '/mo', features: ['3 infographics/month', 'Freestyle designs', 'Basic templates', 'PNG export', 'Watermarked'], cta: 'Start Free', popular: false },
              { name: 'Pro', price: '$19', period: '/mo', features: ['25 infographics/month', 'Custom brand kits', 'All templates', 'PNG + PDF + SVG', 'No watermark', 'AI research included', 'Natural language edits'], cta: 'Start Pro', popular: true },
              { name: 'Business', price: '$49', period: '/mo', features: ['Unlimited infographics', 'Multiple brand kits', 'API access', 'Team seats (3)', 'Priority generation', 'Zapier integration', 'White-label option'], cta: 'Start Business', popular: false },
            ].map((tier) => (
              <div key={tier.name} className={`glass-card p-8 relative ${tier.popular ? 'ring-2 ring-[var(--accent-purple)]' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold gradient-bg text-white">Most Popular</div>
                )}
                <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-[var(--text-secondary)]">{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <span className="text-[var(--accent-blue)]">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/app/create" className={tier.popular ? 'btn-primary w-full justify-center' : 'btn-secondary w-full justify-center'}>
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-padding">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently asked questions</h2>
          <div className="space-y-4">
            {[
              { q: 'How does the AI research work?', a: 'When you provide a topic, our AI research agent searches the web for relevant data, statistics, and facts. It validates sources and structures the findings into a content brief before designing.' },
              { q: 'Can I use my own data and sources?', a: 'Absolutely. You can paste URLs, upload documents, or paste text directly. The AI will extract key information and structure it into an infographic.' },
              { q: 'What formats do you export?', a: 'PNG, PDF, and SVG. Plus platform-specific sizes for Instagram (1080×1080, 1080×1920), LinkedIn (1200×627), Twitter/X (1600×900), and print (300 DPI).' },
              { q: 'Can I edit the infographic after generation?', a: 'Yes. Use natural language instructions like "make the colors warmer" or "add more statistics" and the AI regenerates with your feedback.' },
              { q: 'How is this different from Canva?', a: 'Canva is a design tool — you need design skills and time. We\'re an AI engine — you give us a topic and we handle research, writing, design, and generation automatically.' },
              { q: 'Do you offer an API?', a: 'Yes, available on Business and Agency plans. Generate infographics programmatically from your own apps and workflows.' },
            ].map((item) => (
              <details key={item.q} className="glass-card p-6 group cursor-pointer">
                <summary className="font-semibold text-lg list-none flex items-center justify-between">
                  {item.q}
                  <span className="text-[var(--accent-purple)] transition-transform group-open:rotate-45 text-2xl">+</span>
                </summary>
                <p className="text-[var(--text-secondary)] mt-4 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container-max text-center">
          <div className="glass-card p-12 md:p-16 max-w-3xl mx-auto animate-pulse-glow">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to create your first infographic?</h2>
            <p className="text-[var(--text-secondary)] text-lg mb-8">Start free. No credit card required. Cancel anytime.</p>
            <Link to="/app/create" className="btn-primary text-lg !py-4 !px-10">
              <Sparkles className="w-5 h-5" /> Create Free Infographic
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="container-max flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md gradient-bg flex items-center justify-center">
              <Layers className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-medium">InfoGraphs</span>
            <span className="text-xs text-[var(--text-secondary)]">by AstraDevs</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-[var(--text-secondary)]">
            <a href="https://astradevs.io" target="_blank" rel="noopener" className="hover:text-white transition-colors">AstraDevs.io</a>
            <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <a href="mailto:hello@astradevs.io" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-xs text-[var(--text-secondary)]">© 2026 North Star Holdings. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
