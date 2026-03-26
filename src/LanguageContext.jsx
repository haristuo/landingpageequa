import { createContext, useContext, useState, useCallback } from 'react'
import { translations } from './i18n'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'de'
    const stored = localStorage.getItem('equa-lang')
    if (stored === 'en' || stored === 'de') return stored
    // Auto-detect: if browser language is NOT German, default to English
    const browserLang = navigator.language || navigator.userLanguage || ''
    return browserLang.startsWith('de') ? 'de' : 'en'
  })

  const t = translations[lang]

  const toggleLang = useCallback(() => {
    setLang(prev => {
      const next = prev === 'de' ? 'en' : 'de'
      localStorage.setItem('equa-lang', next)
      document.documentElement.lang = next
      return next
    })
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
