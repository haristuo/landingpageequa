import { motion } from 'framer-motion'
import { Section } from '../components/Section'
import { useLang } from '../LanguageContext'
import { IconHome, IconPlane, IconUser } from '../components/MinimalIcons'

const AVATAR_ICONS = [IconHome, IconPlane, IconUser]
const AVATAR_COLORS = ['#10b981', '#06b6d4', '#6366f1']

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, j) => (
        <svg key={j} className="w-4 h-4 text-[#f59e0b]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function Testimonials() {
  const { t } = useLang()

  return (
    <Section id="testimonials" title={t.testimonials.heading} subtitle={t.testimonials.subheading}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {t.testimonials.items.map((item, i) => {
          const Icon = AVATAR_ICONS[i] ?? IconUser
          const color = AVATAR_COLORS[i] ?? '#10b981'
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <motion.div
                className="h-full relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-2xl border border-[#e5e2dc]/80 p-6 flex flex-col"
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-[0.06] blur-2xl pointer-events-none"
                  style={{ backgroundColor: color }}
                />

                <Stars count={5} />

                <p className="mt-4 text-[#1e2324] text-[15px] leading-relaxed mb-5 flex-1">
                  &bdquo;{item.quote}&ldquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-[#e5e2dc]/50">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${color}18`, color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="font-semibold text-sm text-[#1e2324]">{item.name}</p>
                </div>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
