import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { WaitlistSignup } from '../components/WaitlistSignup'
import { useLang } from '../LanguageContext'

export function Hero() {
  const { t } = useLang()

  return (
    <section id="hero" className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 pt-24 pb-20">
      <div className="absolute inset-0 bg-[#fafaf8]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,rgba(107,63,82,0.03)_100%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#f2f6f4]" />

      <div className="relative max-w-4xl mx-auto text-center w-full">
        <motion.div
          className="mx-auto mb-8 w-20 h-20 md:w-24 md:h-24"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <img
            src="/equa-app-icon.png"
            alt="Equa App Icon"
            className="w-full h-full object-contain drop-shadow-[0_8px_24px_rgba(16,185,129,0.25)]"
          />
        </motion.div>

        <motion.p
          className="text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-[#6b3f52] mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          dangerouslySetInnerHTML={{ __html: t.hero.badge }}
        />
        <motion.h1
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1e2324] leading-[1.08] tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
        >
          {t.hero.title}
        </motion.h1>
        <motion.p
          className="mt-6 text-lg md:text-xl text-[#3d4446] max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
        >
          <WaitlistSignup />
          <Button href="#features" variant="ghost" size="md" rounded="rounded-xl" className="mt-6">
            {t.hero.cta}
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-[#10b981]/40 to-transparent" />
    </section>
  )
}
