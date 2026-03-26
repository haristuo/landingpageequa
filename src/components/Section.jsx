export function Section({ id, title, subtitle, children, className = '', containerClass = '' }) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className={`max-w-6xl mx-auto px-6 md:px-12 ${containerClass}`}>
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {title && (
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e2324] dark:text-[#fafafa] mb-4 tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl text-[#4a4540] dark:text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
