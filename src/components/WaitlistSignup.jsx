import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { supabase } from '../lib/supabase'
import { useLang } from '../LanguageContext'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const STATES = {
  idle: 'idle',
  loading: 'loading',
  success: 'success',
  duplicate: 'duplicate',
  invalid: 'invalid',
  error: 'error',
}

export function WaitlistSignup() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState(STATES.idle)
  const { t } = useLang()

  const isValidEmail = (e) => EMAIL_REGEX.test(e)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email.trim()) return

    if (!isValidEmail(email.trim())) {
      setState(STATES.invalid)
      return
    }

    if (!supabase) {
      setState(STATES.error)
      return
    }

    setState(STATES.loading)

    try {
      const { error } = await supabase.from('waitlist').insert({
        email: email.trim().toLowerCase(),
        source: 'landingpage',
      })

      if (error) {
        console.error('[Waitlist] Supabase error:', error)
        if (error.code === '23505') {
          setState(STATES.duplicate)
        } else if (error.code === '42P01' || error.message?.includes('does not exist')) {
          setState(STATES.error)
          console.error('[Waitlist]', t.waitlist.tableError)
        } else {
          setState(STATES.error)
        }
        return
      }

      setState(STATES.success)
    } catch (err) {
      console.error('[Waitlist] Error:', err)
      setState(STATES.error)
    }
  }

  if (state === STATES.success) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-[420px] mx-auto text-center"
      >
        <p className="text-2xl font-heading font-bold text-[#1e2324]">
          {t.waitlist.success}
        </p>
        <p className="mt-2 text-[#3d4446]">
          {t.waitlist.successSub}
        </p>
      </motion.div>
    )
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="w-full max-w-[420px] mx-auto"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (state !== STATES.idle) setState(STATES.idle)
          }}
          placeholder={t.waitlist.placeholder}
          disabled={state === STATES.loading}
          className="flex-1 min-w-0 px-5 py-4 rounded-2xl border border-[#e5e2dc] bg-white text-[#1e2324] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#10b981]/50 focus:border-[#10b981]/40 transition-all shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
          aria-label={t.waitlist.aria}
        />
        <button
          type="submit"
          disabled={state === STATES.loading}
          className="px-8 py-4 rounded-2xl font-semibold text-white bg-[#10b981] hover:bg-[#059669] shadow-[0_4px_16px_rgba(16,185,129,0.35)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.4)] transition-all min-h-[56px] flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {state === STATES.loading ? (
            <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
          ) : (
            t.waitlist.button
          )}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {state === STATES.invalid && (
          <motion.p
            key="invalid"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 text-sm text-red-600"
          >
            {t.waitlist.invalidEmail}
          </motion.p>
        )}
        {state === STATES.duplicate && (
          <motion.p
            key="duplicate"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 text-sm text-amber-600"
          >
            {t.waitlist.duplicate}
          </motion.p>
        )}
        {state === STATES.error && (
          <motion.p
            key="error"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 text-sm text-red-600"
          >
            {t.waitlist.error}
          </motion.p>
        )}
      </AnimatePresence>

      <p className="mt-4 text-sm text-[#6b7280]">
        {t.waitlist.join}
      </p>
    </motion.form>
  )
}
