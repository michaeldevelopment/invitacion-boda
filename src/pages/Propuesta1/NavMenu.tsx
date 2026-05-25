import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_H = 56

const LINKS = [
  { label: 'Inicio', id: 'p1-hero' },
  { label: 'Ceremonia', id: 'p1-ubicacion' },
  { label: 'Hospedaje', id: 'p1-hospedaje' },
  { label: 'Dress Code', id: 'p1-dresscode' },
  { label: 'Asistencia', id: 'p1-rsvp' },
]

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_H
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function NavMenu() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
        style={{
          height: NAV_H,
          background: scrolled ? 'rgba(255,255,255,0.96)' : 'rgba(255,255,255,0.82)',
          backdropFilter: 'blur(10px)',
          boxShadow: scrolled ? '0 1px 0 rgba(96,20,26,0.08)' : 'none',
        }}
      >
        <div className="h-full max-w-5xl mx-auto flex items-center justify-between px-5 md:px-8">
          {/* Monograma / logo */}
          <button
            onClick={() => { scrollTo('p1-hero'); setOpen(false) }}
            className="font-script text-xl md:text-2xl text-borgona select-none leading-none"
          >
            Cami &amp; Majo
          </button>

          {/* Links desktop */}
          <ul className="hidden md:flex items-center gap-7 lg:gap-9">
            {LINKS.slice(1).map(link => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className="font-serif text-[9px] tracking-[0.22em] uppercase text-borgona/55 hover:text-borgona transition-colors duration-200 pb-px border-b border-transparent hover:border-borgona/25"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Hamburger mobile */}
          <button
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.22 }}
              className="block h-px w-5 bg-borgona origin-center"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
              transition={{ duration: 0.15 }}
              className="block h-px w-5 bg-borgona"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.22 }}
              className="block h-px w-5 bg-borgona origin-center"
            />
          </button>
        </div>
      </nav>

      {/* Panel mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed inset-x-0 z-40 flex flex-col items-center py-8 gap-6"
            style={{
              top: NAV_H,
              background: 'rgba(255,255,255,0.98)',
              backdropFilter: 'blur(12px)',
              borderTop: '1px solid rgba(96,20,26,0.08)',
            }}
          >
            {LINKS.map((link, i) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => { scrollTo(link.id); setOpen(false) }}
                className="font-serif text-[10px] tracking-[0.28em] uppercase text-borgona/65 hover:text-borgona transition-colors duration-200"
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
