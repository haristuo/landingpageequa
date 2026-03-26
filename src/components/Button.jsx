import { motion } from 'framer-motion'

const variants = {
  primary: 'bg-[#1e2324] dark:bg-[#fafafa] dark:text-[#0f1419] text-white font-semibold hover:bg-[#2d3234] dark:hover:bg-[#e5e5e5] transition-colors',
  keap: 'bg-[#1e2324] dark:bg-[#2d2d2d] text-white font-bold shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)]',
  black: 'bg-[#1e2324] text-white font-bold shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)]',
  aubergine: 'bg-[#6b3f52] dark:bg-[#6b3f52] text-[#f2eee7] font-bold shadow-[0_20px_50px_rgba(107,63,82,0.35)] hover:shadow-[0_25px_60px_rgba(107,63,82,0.4)]',
  pro: 'bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] text-[#1e2324] font-bold shadow-lg hover:shadow-xl',
  secondary: 'bg-[#d8d0c6] dark:bg-[#1a1b23] text-[#1e2324] dark:text-[#e4e4e7] border-2 border-[#a39688] dark:border-[#27272a] font-medium hover:bg-[#d2cac0] dark:hover:bg-[#27272a]',
  ghost: 'bg-transparent text-[#1e2324] dark:text-[#e4e4e7] font-medium hover:bg-black/5 dark:hover:bg-white/5',
}

const sizes = {
  sm: 'px-4 py-2.5 text-sm',
  md: 'px-6 py-3.5 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  rounded = 'rounded-2xl',
  href,
  className = '',
  ...props
}) {
  const classes = `inline-flex items-center justify-center transition-all duration-300 ${variants[variant] || variants.primary} ${sizes[size]} ${rounded} ${className}`
  const motionProps = { whileHover: { scale: 1.03, y: -2 }, whileTap: { scale: 0.98 } }

  if (href) {
    const linkProps = href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {}
    return (
      <motion.a href={href} className={classes} {...motionProps} {...linkProps} {...props}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type="button" className={classes} {...motionProps} {...props}>
      {children}
    </motion.button>
  )
}
