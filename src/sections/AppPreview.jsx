import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../LanguageContext'

const SCREEN_IMAGES = ['/seite1.PNG', '/seite2.PNG']

function PhoneFrame({ children }) {
  return (
    <div className="relative mx-auto" style={{ width: 300, height: 612 }}>
      {/* Outer shell — titanium edge */}
      <div
        className="absolute inset-0 rounded-[52px] p-[3px]"
        style={{
          background: 'linear-gradient(145deg, #6b6b70 0%, #3a3a3e 20%, #2a2a2e 50%, #3a3a3e 80%, #4a4a4e 100%)',
          zIndex: 2,
        }}
      >
        {/* Inner bezel */}
        <div className="w-full h-full rounded-[49px] bg-[#0a0a0a] relative overflow-hidden">
          {/* Dynamic Island */}
          <div
            className="absolute top-[11px] left-1/2 -translate-x-1/2 w-[96px] h-[28px] rounded-full z-30"
            style={{
              background: '#000',
              boxShadow: 'inset 0 0 3px rgba(0,0,0,0.8), 0 0 1px rgba(255,255,255,0.1)',
            }}
          />

          {/* Screen area */}
          <div className="absolute inset-[4px] rounded-[46px] overflow-hidden bg-[#0a0d0b]">
            {children}
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-[7px] left-1/2 -translate-x-1/2 w-[110px] h-[4px] bg-white/25 rounded-full z-30" />

          {/* Glass shimmer overlay */}
          <motion.div
            className="absolute inset-[4px] rounded-[46px] pointer-events-none z-20"
            style={{
              background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 55%, transparent 70%)',
              backgroundSize: '200% 100%',
            }}
            animate={{
              backgroundPosition: ['200% 0%', '-200% 0%'],
            }}
            transition={{
              duration: 3.5,
              ease: 'linear',
              repeat: Infinity,
              repeatDelay: 0,
            }}
          />

          {/* Subtle top highlight */}
          <div
            className="absolute top-[4px] left-[20px] right-[20px] h-[1px] z-20 rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
            }}
          />
        </div>
      </div>

      {/* Side button right (power) */}
      <div
        className="absolute top-[130px] -right-[1.5px] w-[4px] h-[44px] rounded-l-sm z-10"
        style={{ background: 'linear-gradient(180deg, #5a5a5e, #3a3a3e, #4a4a4e)' }}
      />
      {/* Side buttons left (volume) */}
      <div
        className="absolute top-[105px] -left-[1.5px] w-[4px] h-[30px] rounded-r-sm z-10"
        style={{ background: 'linear-gradient(180deg, #5a5a5e, #3a3a3e, #4a4a4e)' }}
      />
      <div
        className="absolute top-[145px] -left-[1.5px] w-[4px] h-[30px] rounded-r-sm z-10"
        style={{ background: 'linear-gradient(180deg, #5a5a5e, #3a3a3e, #4a4a4e)' }}
      />
      {/* Silent switch */}
      <div
        className="absolute top-[75px] -left-[1.5px] w-[4px] h-[18px] rounded-r-sm z-10"
        style={{ background: 'linear-gradient(180deg, #5a5a5e, #3a3a3e, #4a4a4e)' }}
      />
    </div>
  )
}

export function AppPreview() {
  const [active, setActive] = useState(0)
  const { t } = useLang()

  const SCREENS = t.appPreview.screens.map((s, i) => ({
    ...s,
    id: i === 0 ? 'dashboard' : 'statistics',
    image: SCREEN_IMAGES[i],
  }))

  return (
    <section className="relative flex flex-col items-center justify-center py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(to bottom, #f2f6f4 0%, #f5f3ef 50%, #f5f3ef 100%)' }}
      />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_20%,rgba(16,185,129,0.05)_0%,transparent_50%)]" />

      {/* Section heading */}
      <motion.div
        className="relative z-10 text-center mb-12 px-6"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6b3f52] mb-3">
          App Preview
        </p>
        <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-[#1e2324]">
          {t.appPreview.heading}
        </h2>
      </motion.div>

      {/* Phone mockup with carousel */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Ambient glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[580px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(16,185,129,0.12) 0%, rgba(16,185,129,0.04) 40%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Floating ring accent */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[620px] rounded-[60px] pointer-events-none"
          style={{ border: '1px solid rgba(16,185,129,0.08)' }}
        />

        <PhoneFrame>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="w-full h-full"
            >
              <img
                src={SCREENS[active].image}
                alt={SCREENS[active].label}
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          </AnimatePresence>
        </PhoneFrame>
      </motion.div>

      {/* Tab selector */}
      <motion.div
        className="relative z-10 mt-10 flex items-center gap-1 bg-[#e5e2dc]/60 backdrop-blur-md rounded-2xl p-1.5 border border-[#e5e2dc]/40"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {SCREENS.map((screen, i) => (
          <button
            key={screen.id}
            onClick={() => setActive(i)}
            className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
              active === i
                ? 'text-white'
                : 'text-[#3d4446] hover:text-[#1e2324]'
            }`}
          >
            {active === i && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-[#10b981] rounded-xl shadow-[0_4px_12px_rgba(16,185,129,0.3)]"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{screen.label}</span>
          </button>
        ))}
      </motion.div>

      {/* Description */}
      <AnimatePresence mode="wait">
        <motion.p
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="relative z-10 mt-4 text-sm text-[#3d4446]"
        >
          {SCREENS[active].desc}
        </motion.p>
      </AnimatePresence>
    </section>
  )
}
