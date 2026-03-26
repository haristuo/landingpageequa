import { motion } from 'framer-motion'

/**
 * Polaroid-style card for Hero section.
 * White frame, rounded corners, shadow for depth. Supports x/y offset from center.
 */
export function Polaroid({
  children,
  className = '',
  rotate = 0,
  x = 0,
  y = 0,
  delay = 0,
  size = 'md',
  imageClass,
  label,
  icon,
  ...props
}) {
  const sizes = {
    sm: 'w-[80px] h-[100px] sm:w-[100px] sm:h-[120px] md:w-[110px] md:h-[135px]',
    md: 'w-[100px] h-[120px] sm:w-[120px] sm:h-[145px] md:w-[140px] md:h-[170px]',
    lg: 'w-[120px] h-[145px] sm:w-[140px] sm:h-[170px] md:w-[160px] md:h-[195px]',
  }

  const content = children ?? (
    <div className={`w-full h-full bg-gradient-to-br ${imageClass || 'from-gray-300 to-gray-400'} flex flex-col items-center justify-center p-1`}>
      <span className="text-2xl md:text-3xl mb-1">{icon}</span>
      <span className="text-[10px] md:text-xs font-semibold text-[#1e2324] dark:text-[#e4e4e7] text-center leading-tight">{label}</span>
    </div>
  )

  const xVal = typeof x === 'string' ? x : `${x}%`
  const yVal = typeof y === 'string' ? y : `${y}%`

  return (
    <motion.div
      className={`absolute left-1/2 top-1/2 z-10 ${sizes[size]} ${className}`}
      style={{
        transform: `translate(calc(-50% + ${xVal}), calc(-50% + ${yVal})) rotate(${rotate}deg)`,
      }}
      initial={{ opacity: 0, scale: 0.8, rotate: rotate - 10 }}
      animate={{ opacity: 1, scale: 1, rotate }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.08, rotate: rotate + 3, y: -6 }}
    >
      <div className="bg-white dark:bg-white/95 rounded-2xl p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.35)] w-full h-full flex flex-col hover:shadow-[0_28px_60px_rgba(0,0,0,0.18)] dark:hover:shadow-[0_28px_60px_rgba(0,0,0,0.45)] transition-all duration-300">
        <div className="flex-1 rounded-lg overflow-hidden min-h-0 flex items-center justify-center">
          {content}
        </div>
        <div className="h-4 sm:h-5 flex-shrink-0" />
      </div>
    </motion.div>
  )
}
