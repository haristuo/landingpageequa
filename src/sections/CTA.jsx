import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { useLang } from '../LanguageContext'

export function CTA() {
  const { t, lang } = useLang()

  return (
    <section id="cta" className="py-20 md:py-28 px-6">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="mx-auto mb-8 w-20 h-20 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 rounded-[22px] bg-[#10b981]/20 blur-xl scale-125" />
          <img
            src="/equa-app-icon.png"
            alt="Equa App"
            className="relative w-full h-full object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
          />
        </motion.div>

        <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-[#1e2324] mb-5 leading-tight">
          {t.cta.heading}
        </h2>
        <p className="text-base md:text-lg text-[#3d4446] mb-8">
          {t.cta.subheading}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <Button href="#hero" size="lg" rounded="rounded-xl" variant="primary">
            {t.cta.waitlistCta}
          </Button>
        </div>
        <div className="flex flex-wrap justify-center gap-5 text-sm text-[#3d4446]">
          <a href="mailto:support@equa.app" className="hover:text-[#2d6b5a] transition-colors">Support</a>
          <a href="https://equa.app/agb" target="_blank" rel="noopener noreferrer" className="hover:text-[#2d6b5a] transition-colors">
            {lang === 'de' ? 'AGB' : 'Terms'}
          </a>
          <a href="https://equa.app/datenschutz" target="_blank" rel="noopener noreferrer" className="hover:text-[#2d6b5a] transition-colors">
            {lang === 'de' ? 'Datenschutz' : 'Privacy'}
          </a>
        </div>
      </motion.div>
    </section>
  )
}
