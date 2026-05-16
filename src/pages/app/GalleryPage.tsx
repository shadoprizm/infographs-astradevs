import { Image } from 'lucide-react'

export default function GalleryPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-2">Gallery</h1>
      <p className="text-[var(--text-secondary)] text-sm mb-8">Your completed infographics</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[1,2,3,4].map(i => (
          <div key={i} className="glass-card aspect-square flex items-center justify-center cursor-pointer hover:scale-[1.02] transition-transform">
            <div className="text-center text-[var(--text-secondary)]">
              <Image className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">Sample #{i}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
