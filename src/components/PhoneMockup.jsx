import { motion } from 'framer-motion'

/**
 * Reusable iPhone 15 style mockup component.
 * Displays an app screenshot inside a realistic phone frame.
 * @param {string} screenshot - Path to screenshot (e.g. /screen1.png)
 * @param {string} alt - Alt text for the screenshot
 * @param {number} delay - Animation delay in seconds
 */
export function PhoneMockup({ screenshot = '/dashboard2.png', alt = 'App screen', delay = 0, useFrameImage = true }) {
  const frameSrc = '/phone-mockup-iphone17.png'

  return (
    <motion.div
      className="w-full max-w-[280px] mx-auto flex justify-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
    >
      <div
        className="relative w-full aspect-[9/19.5] max-w-[260px]"
        style={{
          filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.12)) drop-shadow(0 8px 24px rgba(0,0,0,0.08))',
        }}
      >
        {useFrameImage && frameSrc ? (
          <>
            {/* Screenshot fills screen area */}
            <div className="absolute inset-[5.5%] rounded-[2rem] overflow-hidden">
              <img src={screenshot} alt={alt} className="w-full h-full object-cover object-top" />
            </div>
            {/* Frame overlay on top */}
            <img src={frameSrc} alt="" className="absolute inset-0 w-full h-full object-contain pointer-events-none" />
          </>
        ) : (<div
            className="relative rounded-[2.6rem] p-[10px] sm:p-[12px]"
            style={{
              background: 'linear-gradient(145deg, #2c2c2e 0%, #1c1c1e 50%, #0d0d0f 100%)',
              boxShadow: `
                0 0 0 1px rgba(255,255,255,0.06),
                0 20px 40px -10px rgba(0,0,0,0.25),
                0 40px 80px -20px rgba(0,0,0,0.2),
                inset 0 1px 0 rgba(255,255,255,0.05)
              `,
            }}
          >
          {/* Side buttons */}
          <div className="absolute -right-[2px] top-[26%] w-[2px] h-[22px] rounded-full bg-gradient-to-b from-gray-500 to-gray-700" />
          <div className="absolute -right-[2px] top-[35%] w-[2px] h-[36px] rounded-full bg-gradient-to-b from-gray-500 to-gray-700" />
          <div className="absolute -right-[2px] top-[48%] w-[2px] h-[56px] rounded-full bg-gradient-to-b from-gray-500 to-gray-700" />
          <div className="absolute -left-[2px] top-[42%] w-[2px] h-[48px] rounded-full bg-gradient-to-b from-gray-500 to-gray-700" />

          {/* Screen container */}
          <div className="relative rounded-[2.1rem] overflow-hidden bg-black">
            {/* Dynamic Island */}
            <div
              className="absolute top-[12px] left-1/2 -translate-x-1/2 z-10 w-[88px] sm:w-[100px] h-[24px] sm:h-[28px] rounded-full bg-black"
              style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.08)' }}
            />

            {/* App screenshot / placeholder */}
            <div className="aspect-[9/19.5] relative bg-neutral-100 dark:bg-neutral-900">
              <img
                src={screenshot}
                alt={alt}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling?.classList?.remove('hidden')
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 hidden text-neutral-400 text-xs text-center px-4">
                <span>{screenshot.replace('/', '').replace('.png', '')}</span>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    </motion.div>
  )
}
