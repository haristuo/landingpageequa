import { motion } from 'framer-motion'
import { Section } from '../components/Section'
import { Card } from '../components/Card'
import { useLang } from '../LanguageContext'

const ICONS = [
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
  </svg>,
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.479-2.72" />
  </svg>,
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
  </svg>,
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>,
]

const GRADIENTS = ['emerald', 'cyan', 'amber', 'indigo']
const COLORS = [
  'bg-[#10b981]/10 text-[#10b981]',
  'bg-[#06b6d4]/10 text-[#06b6d4]',
  'bg-[#f59e0b]/10 text-[#f59e0b]',
  'bg-[#6366f1]/10 text-[#6366f1]',
]
const KEYS = ['dashboard', 'friends', 'quiz', 'stats']
const BADGES = [null, null, 'Pro', null]

export function Features() {
  const { t } = useLang()

  const features = KEYS.map((key, i) => ({
    title: t.features[key].title,
    description: t.features[key].desc,
    icon: ICONS[i],
    gradient: GRADIENTS[i],
    color: COLORS[i],
    badge: BADGES[i],
  }))

  return (
    <Section
      id="features"
      className="pt-28 md:pt-36 lg:pt-44"
      title={t.features.heading}
      subtitle={t.features.subheading}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 items-stretch">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            className="h-full"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className="group h-full" gradient={feature.gradient}>
              <div className="flex gap-4 h-full">
                <motion.div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${feature.color} transition-all duration-300 group-hover:scale-110`}
                  whileHover={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <div className="flex-1 min-w-0 flex flex-col">
                  <div className="flex items-center gap-2.5 mb-2">
                    <h3 className="font-heading text-lg font-semibold text-[#1e2324]">
                      {feature.title}
                    </h3>
                    {feature.badge && (
                      <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-white rounded-full shadow-[0_2px_8px_rgba(245,158,11,0.3)]">
                        {feature.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[#3d4446] text-[15px] leading-relaxed flex-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
