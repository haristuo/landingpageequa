import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section } from '../components/Section'

const screenshots = [
  { id: 1, label: 'Dashboard', gradient: 'from-[#4a6d7f] to-[#268bd2]' },
  { id: 2, label: 'Gruppen', gradient: 'from-[#567c72] to-[#2aa198]' },
  { id: 3, label: 'Quiz', gradient: 'from-[#8a5469] to-[#d33682]' },
  { id: 4, label: 'Statistiken', gradient: 'from-[#10b981] to-[#22d3ee]' },
  { id: 5, label: 'Pro Features', gradient: 'from-[#f59e0b] to-[#fbbf24]' },
]

export function Screenshots() {
  const [active, setActive] = useState(0)

  return (
    <Section
      id="screenshots"
      className="pt-12 md:pt-16 pb-16 md:pb-24"
      title="Ein Blick in die App"
      subtitle="Entdecke die wichtigsten Funktionen von Equa – designed für maximale Übersichtlichkeit."
    >
      <div className="flex flex-col items-center gap-8">
        <motion.div
          className="relative w-full max-w-[260px] sm:max-w-[280px] mx-auto"
          key={active}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
        >
          <div className="bg-white dark:bg-[#161b22] rounded-xl p-2 border border-[#e5e2dc] dark:border-[#27272a]">
            <div className={`aspect-[9/19] rounded-lg bg-[#1e2324] dark:bg-[#0d1117] flex items-center justify-center`}>
              <span className="text-white/90 font-heading text-lg font-semibold">
                {screenshots[active].label}
              </span>
            </div>
          </div>
        </motion.div>

        <div className="flex gap-3">
          {screenshots.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === active
                  ? 'bg-[#1e2324] dark:bg-[#fafafa]'
                  : 'bg-[#d1d5db] dark:bg-[#404040]'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Screenshot ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}
