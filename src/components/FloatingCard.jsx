import { motion } from 'framer-motion'

/**
 * Floating image card for Hero gallery.
 * White frame, rounded corners, rotation for dynamic look.
 * Supports image src (replaceable placeholder) or gradient fallback.
 */
export function FloatingCard({
  src,
  alt = 'Placeholder',
  className = '',
  rotate = 0,
  x = 0,
  y = 0,
  delay = 0,
  size = 'md',
  gradient,
  label,
  ...props
}) {
  const sizes = {
    sm: 'w-[90px] h-[110px] sm:w-[110px] sm:h-[135px] md:w-[120px] md:h-[150px]',
    md: 'w-[110px] h-[135px] sm:w-[130px] sm:h-[160px] md:w-[150px] md:h-[185px]',
    lg: 'w-[130px] h-[160px] sm:w-[150px] sm:h-[185px] md:w-[170px] md:h-[210px]',
    xl: 'w-[160px] h-[195px] sm:w-[190px] sm:h-[230px] md:w-[220px] md:h-[265px] lg:w-[250px] lg:h-[300px]',
  }

  const content = src ? (
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  ) : (
    <div className={`w-full h-full bg-gradient-to-br ${gradient || 'from-sky-200 to-violet-200'} flex items-center justify-center min-h-[80px]`}>
      {label && <span className="text-xs font-semibold text-white drop-shadow">{label}</span>}
    </div>
  )

  const xVal = typeof x === 'string' ? x : (typeof x === 'number' ? `${x}px` : `${x}%`)
  const yVal = typeof y === 'string' ? y : (typeof y === 'number' ? `${y}px` : `${y}%`)

  return (
    <div
      className={`absolute left-1/2 top-1/2 z-[25] ${sizes[size]} ${className}`}
      style={{
        transform: `translate(calc(-50% + ${xVal}), calc(-50% + ${yVal})) rotate(${rotate}deg)`,
      }}
      {...props}
    >
      <motion.div
        className="bg-white dark:bg-[#d8d0c6] dark:border dark:border-[#a39688] rounded-[28px] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)] w-full h-full flex flex-col transition-all duration-300"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex-1 rounded-2xl overflow-hidden min-h-0 flex items-center justify-center bg-[#d2cac0] dark:bg-[#27272a]">
          {content}
        </div>
        {label && !src && <div className="h-4 flex-shrink-0" />}
      </motion.div>
    </div>
  )
}
