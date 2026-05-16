import { Plus } from 'lucide-react'

export default function BrandKitsPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Brand Kits</h1>
          <p className="text-[var(--text-secondary)] text-sm mt-1">Manage your brand colors, fonts, and logos</p>
        </div>
        <button className="btn-primary text-sm"><Plus className="w-4 h-4" /> New Kit</button>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {['CyberLens', 'Astra Web Dev', 'Personal / Freestyle'].map((kit) => (
          <div key={kit} className="glass-card p-6">
            <div className="flex gap-2 mb-4">
              {['#00D4FF', '#1A1A2E', '#E94560', '#0F0F23'].map((c, i) => (
                <div key={i} className="w-8 h-8 rounded-lg" style={{ background: c }} />
              ))}
            </div>
            <h3 className="font-semibold">{kit}</h3>
            <p className="text-xs text-[var(--text-secondary)] mt-1">4 colors • Inter + JetBrains Mono</p>
          </div>
        ))}
      </div>
    </div>
  )
}
