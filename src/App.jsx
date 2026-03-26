import { useState, useEffect, lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from './LanguageContext'

import { Hero } from './sections/Hero'
import { AppPreview } from './sections/AppPreview'

const Features = lazy(() => import('./sections/Features').then(m => ({ default: m.Features })))
const HowItWorks = lazy(() => import('./sections/HowItWorks').then(m => ({ default: m.HowItWorks })))
const Testimonials = lazy(() => import('./sections/Testimonials').then(m => ({ default: m.Testimonials })))
const CTA = lazy(() => import('./sections/CTA').then(m => ({ default: m.CTA })))
const Footer = lazy(() => import('./sections/Footer').then(m => ({ default: m.Footer })))

function App() {
  const { t, lang, toggleLang } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)

  const NAV_LINKS = [
    { href: '#features', label: t.nav.features },
    { href: '#how-it-works', label: t.nav.howItWorks },
    { href: '#testimonials', label: t.nav.testimonials },
    { href: '#hero', label: t.nav.waitlist },
  ]

  useEffect(() => {
    document.documentElement.classList.remove('dark')
    localStorage.removeItem('equa-theme')
    document.documentElement.lang = lang
  }, [lang])

  return (
    <div className="min-h-screen bg-[#f5f3ef] text-[#1e2324] font-body transition-colors duration-300">
      <header className="absolute top-0 left-0 right-0 z-40 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 w-fit">
            <img src="/equa-app-icon.png" alt="Equa" className="h-8 w-8 rounded-lg" />
            <span className="font-heading text-xl font-bold text-[#1e2324] tracking-tight">
              equa
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#3d4446] hover:text-[#10b981] transition-colors"
              >
                {link.label}
              </a>
            ))}
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="ml-2 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider border border-[#e5e2dc] hover:border-[#10b981] text-[#3d4446] hover:text-[#10b981] transition-all"
            >
              {lang === 'de' ? 'EN' : 'DE'}
            </button>
          </nav>

          {/* Hamburger button (mobile only) */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={toggleLang}
              className="px-2.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider border border-[#e5e2dc] hover:border-[#10b981] text-[#3d4446] hover:text-[#10b981] transition-all"
            >
              {lang === 'de' ? 'EN' : 'DE'}
            </button>
            <button
              className="relative w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <motion.span
                className="block w-5 h-[2px] bg-[#1e2324] rounded-full origin-center"
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
              />
              <motion.span
                className="block w-5 h-[2px] bg-[#1e2324] rounded-full"
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="block w-5 h-[2px] bg-[#1e2324] rounded-full origin-center"
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden mt-4 rounded-xl border border-[#e5e5e5] bg-[#f5f3ef]/95 backdrop-blur-md"
            >
              <div className="flex flex-col py-3">
                {NAV_LINKS.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="px-5 py-3 text-sm font-medium text-[#3d4446] hover:text-[#10b981] hover:bg-[#10b981]/5 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main>
        <Hero />
        <AppPreview />
        <Suspense fallback={null}>
          <Features />
          <HowItWorks />
          <Testimonials />
          <CTA />
          <Footer />
        </Suspense>
      </main>
    </div>
  )
}

export default App
