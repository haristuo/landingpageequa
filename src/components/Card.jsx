import { motion } from 'framer-motion'

export function Card({ children, className = '', padding = 'p-6 md:p-7', hover = true, gradient, ...props }) {
  const gradients = {
    emerald: 'from-[#10b981]/5 via-transparent to-transparent dark:from-[#10b981]/8',
    cyan: 'from-[#06b6d4]/5 via-transparent to-transparent dark:from-[#06b6d4]/8',
    indigo: 'from-[#6366f1]/5 via-transparent to-transparent dark:from-[#6366f1]/8',
    rose: 'from-[#f43f5e]/5 via-transparent to-transparent dark:from-[#f43f5e]/8',
    amber: 'from-[#f59e0b]/5 via-transparent to-transparent dark:from-[#f59e0b]/8',
  }

  return (
    <motion.div
      className={`relative overflow-hidden bg-white/80 dark:bg-[#161b22]/80 backdrop-blur-sm rounded-2xl border border-[#e5e2dc]/80 dark:border-[#27272a]/80 ${padding} ${hover ? 'hover-lift cursor-default' : ''} ${className}`}
      whileHover={hover ? { scale: 1.01 } : {}}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      {...props}
    >
      {gradient && (
        <div className={`absolute inset-0 bg-gradient-to-br ${gradients[gradient] || ''} pointer-events-none`} />
      )}
      <div className="relative">{children}</div>
    </motion.div>
  )
}
