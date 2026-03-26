import { motion } from 'framer-motion'

export function SplitPayHero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-32 pb-24">
      <div className="absolute inset-0 bg-[#fafafa] dark:bg-[#0a0a0a]" />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.h1
          className="font-heading text-5xl sm:text-6xl md:text-7xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          SplitPay
        </motion.h1>
        <motion.p
          className="mt-4 text-xl sm:text-2xl text-[#6e6e73] dark:text-[#a1a1a6] font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Split payments effortlessly with friends
        </motion.p>
        <motion.p
          className="mt-6 text-base sm:text-lg text-[#6e6e73] dark:text-[#86868b] max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Easily split bills, track shared expenses, and settle up in seconds. No more awkward money conversations.
        </motion.p>
      </div>
    </section>
  )
}
