import { useState } from 'react'
import { Sparkles, Wand2, ChevronDown } from 'lucide-react'

const presets = [
  { emoji: '📊', label: 'Data Stats', desc: 'Key numbers about a topic' },
  { emoji: '🔄', label: 'Process/How-To', desc: 'Explain steps in a process' },
  { emoji: '⚖️', label: 'Comparison', desc: 'Compare two things side by side' },
  { emoji: '📋', label: 'Listicle', desc: 'List of tips, facts, or features' },
  { emoji: '🏆', label: 'Feature Showcase', desc: 'Highlight product features' },
  { emoji: '📅', label: 'Timeline', desc: 'History or milestones' },
]

export default function CreatePage() {
  const [topic, setTopic] = useState('')
  const [advanced, setAdvanced] = useState(false)
  const [purpose, setPurpose] = useState('')
  const [tone, setTone] = useState('')
  const [platform, setPlatform] = useState('')
  const [brandKit, setBrandKit] = useState('')
  const [sources, setSources] = useState('')
  const [generating, setGenerating] = useState(false)

  const handleGenerate = () => {
    if (!topic.trim()) return
    setGenerating(true)
    // TODO: Call API
    setTimeout(() => setGenerating(false), 3000)
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Create Infographic</h1>
      <p className="text-[var(--text-secondary)] mb-8">Enter a topic and let AI handle the rest.</p>

      {/* Quick-Start Presets */}
      <div className="mb-8">
        <h3 className="text-sm font-medium text-[var(--text-secondary)] mb-3">Quick start:</h3>
        <div className="grid grid-cols-3 gap-3">
          {presets.map((p) => (
            <button
              key={p.label}
              onClick={() => setTopic(p.desc)}
              className="glass-card p-3 text-left hover:scale-[1.02] transition-transform cursor-pointer"
            >
              <div className="text-xl mb-1">{p.emoji}</div>
              <div className="text-sm font-medium">{p.label}</div>
              <div className="text-xs text-[var(--text-secondary)]">{p.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Topic Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Topic *</label>
        <textarea
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="What's your infographic about? e.g., '5 steps to secure your website' or 'AI agent terms explained'"
          className="w-full bg-[var(--bg-secondary)] border border-white/10 rounded-xl p-4 text-white placeholder-[var(--text-secondary)] resize-none h-28 focus:outline-none focus:border-[var(--accent-purple)] transition-colors"
        />
      </div>

      {/* Advanced Toggle */}
      <button
        onClick={() => setAdvanced(!advanced)}
        className="flex items-center gap-2 text-sm text-[var(--accent-purple)] hover:text-white transition-colors mb-4"
      >
        <ChevronDown className={`w-4 h-4 transition-transform ${advanced ? 'rotate-180' : ''}`} />
        Advanced options
      </button>

      {advanced && (
        <div className="glass-card p-6 mb-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Purpose</label>
              <select value={purpose} onChange={(e) => setPurpose(e.target.value)} className="w-full bg-[var(--bg-secondary)] border border-white/10 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-[var(--accent-purple)]">
                <option value="">Auto-detect</option>
                <option value="teach">Teach</option>
                <option value="promote">Promote</option>
                <option value="explain">Explain</option>
                <option value="compare">Compare</option>
                <option value="entertain">Entertain</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Tone</label>
              <select value={tone} onChange={(e) => setTone(e.target.value)} className="w-full bg-[var(--bg-secondary)] border border-white/10 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-[var(--accent-purple)]">
                <option value="">Auto-detect</option>
                <option value="professional">Professional</option>
                <option value="fun">Fun</option>
                <option value="educational">Educational</option>
                <option value="dark/tech">Dark/Tech</option>
                <option value="minimalist">Minimalist</option>
                <option value="bold">Bold</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Platform</label>
              <select value={platform} onChange={(e) => setPlatform(e.target.value)} className="w-full bg-[var(--bg-secondary)] border border-white/10 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-[var(--accent-purple)]">
                <option value="">Instagram Post (default)</option>
                <option value="instagram-story">Instagram Story</option>
                <option value="linkedin">LinkedIn</option>
                <option value="twitter">Twitter/X</option>
                <option value="bluesky">Bluesky</option>
                <option value="blog">Blog Header</option>
                <option value="print">Print</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Brand Kit</label>
              <select value={brandKit} onChange={(e) => setBrandKit(e.target.value)} className="w-full bg-[var(--bg-secondary)] border border-white/10 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-[var(--accent-purple)]">
                <option value="">Personal / Freestyle</option>
                <option value="cyberlens">CyberLens</option>
                <option value="astra-web-dev">Astra Web Dev</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Sources</label>
            <textarea
              value={sources}
              onChange={(e) => setSources(e.target.value)}
              placeholder="Paste URLs, text, or leave blank for AI research"
              className="w-full bg-[var(--bg-secondary)] border border-white/10 rounded-lg p-2.5 text-sm text-white placeholder-[var(--text-secondary)] resize-none h-20 focus:outline-none focus:border-[var(--accent-purple)]"
            />
          </div>
        </div>
      )}

      {/* AI Suggest + Generate */}
      <div className="flex gap-3">
        <button
          onClick={handleGenerate}
          disabled={!topic.trim() || generating}
          className="btn-primary flex-1 justify-center !py-3"
        >
          {generating ? (
            <><span className="animate-spin">⏳</span> Generating...</>
          ) : (
            <><Sparkles className="w-5 h-5" /> Generate Infographic</>
          )}
        </button>
        <button className="btn-secondary !py-3" title="AI will suggest the best settings">
          <Wand2 className="w-5 h-5" />
        </button>
      </div>

      {generating && (
        <div className="mt-8 glass-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 rounded-full bg-[var(--accent-purple)] animate-pulse" />
            <span className="text-sm font-medium">AI is working...</span>
          </div>
          <div className="space-y-3">
            {['Researching topic', 'Structuring narrative', 'Selecting template', 'Designing layout', 'Generating visual'].map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${i < 2 ? 'bg-green-400' : i === 2 ? 'bg-[var(--accent-purple)] animate-pulse' : 'bg-white/20'}`} />
                <span className={`text-sm ${i < 2 ? 'text-green-400' : i === 2 ? 'text-white' : 'text-[var(--text-secondary)]'}`}>{step}</span>
                {i < 2 && <span className="text-xs text-green-400">✓</span>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
