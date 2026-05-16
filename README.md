# InfoGraphs — AI Infographic Generator

> Give us a topic. Get a professional infographic.

**InfoGraphs** is an AI-powered infographic generation engine. Enter any topic and the AI researches, structures the narrative, designs the layout, and generates a professional infographic — no design skills needed.

Built by [AstraDevs](https://astradevs.io) under [North Star Holdings](https://github.com/shadoprizm).

## 🌟 Live Demo

**[infographs-astradevs.vercel.app](https://infographs-astradevs.vercel.app)**

## ✨ Features

- **AI Research** — Don't have data? The AI researches your topic, finds stats, and validates sources
- **Smart Narrative** — Structures content into a compelling visual story (hook → substance → takeaway)
- **Brand Consistency** — Upload your brand kit once, every infographic matches perfectly
- **Natural Language Edits** — "Make it darker", "Add more stats", "Try a different layout"
- **Multi-Platform Export** — Auto-generates Instagram, LinkedIn, Twitter, and print-optimized versions
- **7 Template Types** — Comparison, Process, Stats Dashboard, Timeline, Listicle, Feature Showcase, Custom AI-designed
- **API Access** — Generate infographics programmatically (Business+ plan)

## 🛠️ Tech Stack

- **Frontend:** React + TypeScript + Tailwind CSS + Vite
- **Backend:** [OCC Nexus](https://github.com/shadoprizm/openclaw) Infographic Pipeline (FastAPI)
- **Auth:** Clerk
- **Payments:** Stripe
- **Hosting:** Vercel (frontend) + self-hosted N2 Pro (backend)

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/shadoprizm/infographs-astradevs.git
cd infographs-astradevs

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── pages/
│   ├── LandingPage.tsx       # Marketing landing page
│   ├── PricingPage.tsx       # Pricing tiers
│   └── app/
│       ├── CreatePage.tsx    # Brief intake + generation
│       ├── BriefsPage.tsx    # User's infographic list
│       ├── BriefDetailPage.tsx # Preview + revision
│       ├── GalleryPage.tsx   # Completed infographics
│       ├── BrandKitsPage.tsx # Brand kit manager
│       ├── TemplatesPage.tsx # Template browser
│       └── SettingsPage.tsx  # Account + subscription
├── layouts/
│   └── AppLayout.tsx         # Dashboard shell with sidebar
├── index.css                 # Global styles + design tokens
└── main.tsx                  # Router + entry point
```

## 💰 Pricing

| Tier | Price | Infographics/mo |
|------|-------|----------------|
| Free | $0 | 3 |
| Pro | $19/mo | 25 |
| Business | $49/mo | Unlimited |
| Agency | $149/mo | Unlimited + teams |

## 🤝 Contributing

Contributions welcome! This is an open source project.

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

## 🔗 Links

- **Website:** [infographs-astradevs.vercel.app](https://infographs-astradevs.vercel.app)
- **AstraDevs:** [astradevs.io](https://astradevs.io)
- **GitHub:** [github.com/shadoprizm/infographs-astradevs](https://github.com/shadoprizm/infographs-astradevs)

---

Built with ☕ by [shadoprizm](https://github.com/shadoprizm) and the AstraDevs team.
