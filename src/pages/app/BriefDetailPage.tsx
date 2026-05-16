export default function BriefDetailPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Infographic Detail</h1>
      <div className="grid grid-cols-2 gap-8">
        {/* Preview */}
        <div className="glass-card aspect-square flex items-center justify-center">
          <p className="text-[var(--text-secondary)]">Preview will appear here</p>
        </div>
        {/* Details */}
        <div className="space-y-6">
          <div className="glass-card p-6">
            <h3 className="font-semibold mb-4">Pipeline Progress</h3>
            <div className="space-y-3">
              {['Brief Intake', 'Research', 'Copy & Layout', 'Design Spec', 'Visual Generation', 'Review', 'Export'].map((stage, i) => (
                <div key={stage} className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${i < 4 ? 'bg-green-500/20 text-green-400' : i === 4 ? 'bg-[var(--accent-purple)]/20 text-[var(--accent-purple)] animate-pulse' : 'bg-white/10 text-[var(--text-secondary)]'}`}>
                    {i < 4 ? '✓' : i + 1}
                  </div>
                  <span className={`text-sm ${i < 4 ? 'text-green-400' : i === 4 ? 'text-white font-medium' : 'text-[var(--text-secondary)]'}`}>{stage}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-semibold mb-3">Request Revision</h3>
            <textarea placeholder="e.g., Make the colors warmer and add more statistics..." className="w-full bg-[var(--bg-secondary)] border border-white/10 rounded-lg p-3 text-sm text-white placeholder-[var(--text-secondary)] resize-none h-24 focus:outline-none focus:border-[var(--accent-purple)]" />
            <button className="btn-primary text-sm mt-3">Revise</button>
          </div>
        </div>
      </div>
    </div>
  )
}
