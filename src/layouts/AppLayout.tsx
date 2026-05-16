import { Outlet, NavLink } from 'react-router-dom'
import { Layers, Sparkles, FileText, Image, Palette, LayoutTemplate, Settings, LogOut } from 'lucide-react'

const navItems = [
  { to: '/app/create', icon: <Sparkles className="w-5 h-5" />, label: 'Create' },
  { to: '/app/briefs', icon: <FileText className="w-5 h-5" />, label: 'My Infographics' },
  { to: '/app/gallery', icon: <Image className="w-5 h-5" />, label: 'Gallery' },
  { to: '/app/brand-kits', icon: <Palette className="w-5 h-5" />, label: 'Brand Kits' },
  { to: '/app/templates', icon: <LayoutTemplate className="w-5 h-5" />, label: 'Templates' },
  { to: '/app/settings', icon: <Settings className="w-5 h-5" />, label: 'Settings' },
]

export default function AppLayout() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 p-4 flex flex-col shrink-0" style={{ background: 'var(--bg-secondary)' }}>
        <div className="flex items-center gap-2 px-3 mb-8">
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
            <Layers className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold">InfoGraphs</span>
        </div>
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive ? 'bg-[var(--accent-purple)]/20 text-white font-medium' : 'text-[var(--text-secondary)] hover:text-white hover:bg-white/5'
                }`
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="border-t border-white/5 pt-4 mt-4">
          <NavLink to="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[var(--text-secondary)] hover:text-white transition-colors">
            <LogOut className="w-5 h-5" />
            Back to Home
          </NavLink>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto" style={{ background: 'var(--bg-primary)' }}>
        <Outlet />
      </main>
    </div>
  )
}
