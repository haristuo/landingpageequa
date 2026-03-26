import { useLang } from '../LanguageContext'

export function Footer() {
  const { t } = useLang()

  return (
    <footer className="border-t border-[#e5e2dc] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/equa-app-icon.png" alt="Equa" className="h-9 w-9 rounded-xl" />
            <div className="text-center md:text-left">
              <h3 className="font-heading text-lg font-bold text-[#1e2324]">
                equa
              </h3>
              <p className="text-sm text-[#3d4446] mt-0.5">
                Split. Pay. Done.
              </p>
            </div>
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#features" className="text-sm text-[#3d4446] hover:text-[#059669] transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-[#3d4446] hover:text-[#059669] transition-colors">
              {t.footer.howItWorks}
            </a>
            <a href="#testimonials" className="text-sm text-[#3d4446] hover:text-[#059669] transition-colors">
              {t.footer.testimonials}
            </a>
            <a href="#hero" className="text-sm text-[#3d4446] hover:text-[#059669] transition-colors">
              {t.footer.waitlist}
            </a>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-[#e5e2dc] flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[#3d4446]">
          <span>{t.footer.copyright}</span>
          <div className="flex gap-5">
            <a href="https://equa.app/datenschutz" target="_blank" rel="noopener noreferrer" className="hover:text-[#059669] transition-colors">{t.footer.privacy}</a>
            <a href="https://equa.app/agb" target="_blank" rel="noopener noreferrer" className="hover:text-[#059669] transition-colors">{t.footer.terms}</a>
            <a href="mailto:support@equa.app" className="hover:text-[#059669] transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
