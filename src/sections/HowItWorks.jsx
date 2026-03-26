import { motion } from 'framer-motion'
import { Section } from '../components/Section'
import { useLang } from '../LanguageContext'
import { IconRecord, IconSplit, IconTarget, IconChart } from '../components/MinimalIcons'

const STEP_META = [
  { color: '#10b981', Icon: IconRecord },
  { color: '#06b6d4', Icon: IconSplit },
  { color: '#f59e0b', Icon: IconTarget, badge: 'Pro' },
  { color: '#6366f1', Icon: IconChart },
]

export function HowItWorks() {
  const { t } = useLang()

  const steps = t.howItWorks.steps.map((step, i) => {
    const meta = STEP_META[i]
    return {
      num: i + 1,
      title: step.title,
      description: step.desc,
      color: meta.color,
      Icon: meta.Icon,
      badge: meta.badge,
    }
  })

  return (
    <Section
      id="how-it-works"
      title={t.howItWorks.heading}
      subtitle={t.howItWorks.subheading}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
        {steps.map((step, i) => {
          const StepIcon = step.Icon
          return (
          <motion.div
            key={step.num}
            className="relative text-center group"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-[#e5e2dc] to-transparent" />
            )}

            <motion.div
              className="relative h-full bg-white/60 backdrop-blur-sm rounded-2xl border border-[#e5e2dc]/60 p-6 pt-8 transition-all duration-300"
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            >
              <motion.div
                className="w-14 h-14 mx-auto mb-5 rounded-2xl flex items-center justify-center text-white shadow-lg"
                style={{ backgroundColor: step.color, boxShadow: `0 8px 24px ${step.color}33` }}
                whileHover={{ scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <StepIcon className="w-7 h-7" />
              </motion.div>

              {step.badge && (
                <span className="absolute top-3 right-3 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-white rounded-full">
                  {step.badge}
                </span>
              )}

              <h3 className="font-heading text-lg font-semibold text-[#1e2324] mb-2">
                {step.title}
              </h3>
              <p className="text-[#3d4446] text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
