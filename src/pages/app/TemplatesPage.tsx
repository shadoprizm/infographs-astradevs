export default function TemplatesPage() {
  const templates = [
    { id: 'comparison', name: 'Comparison', desc: 'Side-by-side comparison of two things', best: 'Products, plans, before/after', icon: '⚖️' },
    { id: 'process', name: 'Process / Steps', desc: 'Linear flow of sequential steps', best: 'How-to guides, tutorials, workflows', icon: '🔄' },
    { id: 'stats', name: 'Statistics Dashboard', desc: 'Grid of data cards with hero stat', best: 'Annual reports, survey results', icon: '📊' },
    { id: 'timeline', name: 'Timeline', desc: 'Chronological events with markers', best: 'History, roadmaps, milestones', icon: '📅' },
    { id: 'listicle', name: 'Listicle', desc: 'Numbered items with icons', best: 'Tips, facts, features, reasons', icon: '📋' },
    { id: 'feature', name: 'Feature Showcase', desc: 'Hero + feature card grid', best: 'Product features, service highlights', icon: '🏆' },
    { id: 'custom', name: 'Custom (AI-Designed)', desc: 'AI designs layout based on content', best: 'Anything that doesn\'t fit a template', icon: '✨' },
  ]

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-2">Templates</h1>
      <p className="text-[var(--text-secondary)] text-sm mb-8">Choose a layout or let AI pick the best one</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((t) => (
          <div key={t.id} className="glass-card p-6 hover:scale-[1.02] transition-transform cursor-pointer">
            <div className="text-3xl mb-3">{t.icon}</div>
            <h3 className="font-semibold mb-1">{t.name}</h3>
            <p className="text-sm text-[var(--text-secondary)] mb-3">{t.desc}</p>
            <p className="text-xs text-[var(--accent-blue)]">Best for: {t.best}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
