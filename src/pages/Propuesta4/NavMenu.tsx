import { useState, useEffect, useRef } from 'react'

const NAV_H = 56

const LINKS = [
  { label: 'Inicio', id: 'p2-hero' },
  { label: 'Ceremonia', id: 'p2-ubicacion' },
  { label: 'Hospedaje', id: 'p2-hospedaje' },
  { label: 'Dress Code', id: 'p2-dresscode' },
  { label: 'Asistencia', id: 'p2-rsvp' },
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
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const el = panelRef.current
    if (!el) return
    if (open) {
      el.style.display = 'flex'
      requestAnimationFrame(() => {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      })
    } else {
      el.style.opacity = '0'
      el.style.transform = 'translateY(-6px)'
      const timer = setTimeout(() => { el.style.display = 'none' }, 220)
      return () => clearTimeout(timer)
    }
  }, [open])

  return (
    <>
      <nav
        className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
        style={{
          height: NAV_H,
          background: scrolled
            ? 'rgba(240,235,226,0.97)'
            : 'rgba(240,235,226,0.82)',
          backdropFilter: 'blur(10px)',
          boxShadow: scrolled ? '0 1px 0 rgba(96,20,26,0.10)' : 'none',
        }}
      >
        <div className="h-full max-w-5xl mx-auto flex items-center justify-between px-5 md:px-8">
          <button
            onClick={() => { scrollTo('p2-hero'); setOpen(false) }}
            className="font-script text-xl md:text-2xl select-none leading-none"
            style={{ color: '#60141A' }}
          >
            Cami &amp; Majo
          </button>

          <ul className="hidden md:flex items-center gap-7 lg:gap-9">
            {LINKS.slice(1).map(link => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className="font-serif text-[9px] tracking-[0.22em] uppercase transition-colors duration-200 pb-px"
                  style={{ color: 'rgba(96,20,26,0.55)', borderBottom: '1px solid transparent' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#60141A'
                    e.currentTarget.style.borderBottomColor = 'rgba(96,20,26,0.25)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'rgba(96,20,26,0.55)'
                    e.currentTarget.style.borderBottomColor = 'transparent'
                  }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
          >
            <span
              className="block h-px w-5 transition-all duration-200 origin-center"
              style={{
                backgroundColor: '#60141A',
                transform: open ? 'rotate(45deg) translateY(5.5px)' : 'none',
              }}
            />
            <span
              className="block h-px w-5 transition-all duration-200"
              style={{
                backgroundColor: '#60141A',
                opacity: open ? 0 : 1,
                transform: open ? 'scaleX(0)' : 'scaleX(1)',
              }}
            />
            <span
              className="block h-px w-5 transition-all duration-200 origin-center"
              style={{
                backgroundColor: '#60141A',
                transform: open ? 'rotate(-45deg) translateY(-5.5px)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      <div
        ref={panelRef}
        className="fixed inset-x-0 z-40 flex-col items-center py-8 gap-6"
        style={{
          display: 'none',
          top: NAV_H,
          background: 'rgba(240,235,226,0.99)',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(96,20,26,0.08)',
          opacity: 0,
          transform: 'translateY(-6px)',
          transition: 'opacity 0.22s ease, transform 0.22s ease',
        }}
      >
        {LINKS.map(link => (
          <button
            key={link.id}
            onClick={() => { scrollTo(link.id); setOpen(false) }}
            className="font-serif text-[10px] tracking-[0.28em] uppercase transition-colors duration-200"
            style={{ color: 'rgba(96,20,26,0.65)' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#60141A')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(96,20,26,0.65)')}
          >
            {link.label}
          </button>
        ))}
      </div>
    </>
  )
}
