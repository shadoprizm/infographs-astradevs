export default function SettingsPage() {
  return (
    <div className="p-8 max-w-2xl">
      <h1 className="text-2xl font-bold mb-8">Settings</h1>
      <div className="space-y-6">
        <div className="glass-card p-6">
          <h3 className="font-semibold mb-4">Profile</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-[var(--text-secondary)] mb-1">Name</label>
              <input className="w-full bg-[var(--bg-secondary)] border border-white/10 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-[var(--accent-purple)]" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-[var(--text-secondary)] mb-1">Email</label>
              <input className="w-full bg-[var(--bg-secondary)] border border-white/10 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-[var(--accent-purple)]" placeholder="you@example.com" />
            </div>
          </div>
        </div>
        <div className="glass-card p-6">
          <h3 className="font-semibold mb-4">Subscription</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm">Current plan: <span className="font-medium text-white">Free</span></p>
              <p className="text-xs text-[var(--text-secondary)] mt-1">3 of 3 infographics used this month</p>
            </div>
            <button className="btn-primary text-sm">Upgrade to Pro</button>
          </div>
        </div>
      </div>
    </div>
  )
}
