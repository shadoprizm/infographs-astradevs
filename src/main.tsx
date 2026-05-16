import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import LandingPage from './pages/LandingPage'
import PricingPage from './pages/PricingPage'
import AppLayout from './layouts/AppLayout'
import CreatePage from './pages/app/CreatePage'
import BriefsPage from './pages/app/BriefsPage'
import BriefDetailPage from './pages/app/BriefDetailPage'
import GalleryPage from './pages/app/GalleryPage'
import BrandKitsPage from './pages/app/BrandKitsPage'
import TemplatesPage from './pages/app/TemplatesPage'
import SettingsPage from './pages/app/SettingsPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<CreatePage />} />
          <Route path="create" element={<CreatePage />} />
          <Route path="briefs" element={<BriefsPage />} />
          <Route path="briefs/:id" element={<BriefDetailPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="brand-kits" element={<BrandKitsPage />} />
          <Route path="templates" element={<TemplatesPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
