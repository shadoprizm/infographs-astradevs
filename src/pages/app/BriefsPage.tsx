import { FileText, Download, Copy, Trash2, Eye } from 'lucide-react'

const sampleBriefs = [
  { id: 'INFOG-demo1', topic: '20 Must-Know AI Agent Terms', status: 'approved', template: 'Listicle', created: '2026-05-16' },
  { id: 'INFOG-demo2', topic: 'How to Secure Your Small Business Website', status: 'generating', template: 'Process', created: '2026-05-16' },
  { id: 'INFOG-demo3', topic: 'CyberLens vs Traditional Scanners', status: 'draft', template: 'Comparison', created: '2026-05-15' },
]

const statusColors: Record<string, string> = {
  draft: 'bg-gray-500/20 text-gray-400',
  researching: 'bg-blue-500/20 text-blue-400',
  designing: 'bg-purple-500/20 text-purple-400',
  generating: 'bg-amber-500/20 text-amber-400',
  reviewing: 'bg-yellow-500/20 text-yellow-400',
  approved: 'bg-green-500/20 text-green-400',
  exported: 'bg-teal-500/20 text-teal-400',
}

export default function BriefsPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">My Infographics</h1>
          <p className="text-[var(--text-secondary)] text-sm mt-1">3 of 3 free infographics this month</p>
        </div>
      </div>

      <div className="glass-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/5">
              <th className="text-left text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider px-6 py-3">Topic</th>
              <th className="text-left text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider px-4 py-3">Status</th>
              <th className="text-left text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider px-4 py-3">Template</th>
              <th className="text-left text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider px-4 py-3">Created</th>
              <th className="text-right text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sampleBriefs.map((b) => (
              <tr key={b.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors cursor-pointer">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5 text-[var(--text-secondary)]" />
                    </div>
                    <span className="font-medium text-sm">{b.topic}</span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize ${statusColors[b.status] || 'bg-gray-500/20 text-gray-400'}`}>
                    {b.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-[var(--text-secondary)]">{b.template}</td>
                <td className="px-4 py-4 text-sm text-[var(--text-secondary)]">{b.created}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1.5 rounded-lg hover:bg-white/5 text-[var(--text-secondary)] hover:text-white transition-colors" title="View"><Eye className="w-4 h-4" /></button>
                    <button className="p-1.5 rounded-lg hover:bg-white/5 text-[var(--text-secondary)] hover:text-white transition-colors" title="Download"><Download className="w-4 h-4" /></button>
                    <button className="p-1.5 rounded-lg hover:bg-white/5 text-[var(--text-secondary)] hover:text-white transition-colors" title="Duplicate"><Copy className="w-4 h-4" /></button>
                    <button className="p-1.5 rounded-lg hover:bg-white/5 text-[var(--text-secondary)] hover:text-red-400 transition-colors" title="Delete"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
