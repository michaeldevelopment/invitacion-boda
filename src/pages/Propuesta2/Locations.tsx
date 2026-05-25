import { useRef } from 'react'
import { gsap, useGSAP } from './shared/gsap.config'

const IGLESIA_MAP = 'https://maps.app.goo.gl/Fa4F7R6wTxcUJ9YW9'
const RECEPCION_MAP = 'https://maps.app.goo.gl/zFz6SJPdV2hQNEE9A'

export default function Locations() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const isMobile = window.innerWidth < 768
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    // Pinned scrub — mismo patrón que InvitationPhrase
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=300%',
        pin: !isMobile,
        scrub: 1.2,
        anticipatePin: 1,
      },
    })

    tl.from('.p4-loc-title', { opacity: 0, y: 20, duration: 0.4, ease: 'power2.out' })
      .from('.p4-loc-iglesia', { x: -80, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.1')
      .from('.p4-loc-recepcion', { x: 80, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
      .to('.p4-loc-stroke', { strokeDashoffset: 0, duration: 0.5, ease: 'none' }, '-=0.2')
  }, { scope: sectionRef })

  const handleCardEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, { y: -6, duration: 0.3, ease: 'power2.out' })
  }
  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, { y: 0, duration: 0.3, ease: 'power2.out' })
  }

  return (
    <div
      ref={sectionRef}
      className="p4-section flex flex-col items-center justify-center py-24 px-6"
      style={{ backgroundColor: '#E8E1D3' }}
    >
      {/* Section header */}
      <div className="p4-loc-title text-center mb-16">
        <p className="font-serif text-[0.8rem] md:text-[0.875rem] tracking-[0.3em] uppercase mb-3" style={{ color: 'rgba(96,20,26,0.65)' }}>
          El día
        </p>
        <h2 className="font-serif font-light" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#60141A' }}>
          21 de agosto
        </h2>
      </div>

      {/* Cards layout */}
      <div className="p4-loc-cards w-full max-w-4xl flex flex-col md:flex-row items-stretch gap-0 md:gap-0 relative">

        {/* Iglesia */}
        <div
          className="p4-loc-iglesia p4-location-card flex-1 p-8 md:p-10 cursor-pointer"
          onMouseEnter={handleCardEnter}
          onMouseLeave={handleCardLeave}
        >
          <div className="p4-loc-pin mb-5">
            <svg width="28" height="36" viewBox="0 0 28 36" fill="none">
              <path d="M14 0C6.268 0 0 6.268 0 14C0 22 14 36 14 36C14 36 28 22 28 14C28 6.268 21.732 0 14 0Z" fill="#60141A" fillOpacity="0.15" stroke="#60141A" strokeWidth="1.5"/>
              <circle cx="14" cy="14" r="5" fill="#60141A" fillOpacity="0.5"/>
            </svg>
          </div>

          <p className="font-serif text-[0.75rem] md:text-[0.8rem] tracking-[0.25em] uppercase mb-3" style={{ color: 'rgba(96,20,26,0.65)' }}>
            Celebración Eucarística
          </p>
          <h3 className="font-serif font-light text-xl md:text-2xl mb-2" style={{ color: '#60141A' }}>
            Parroquia La Divina Eucaristía
          </h3>
          <p className="font-serif text-sm italic mb-1" style={{ color: '#7A8D61' }}>Poblado · Medellín</p>
          <p className="font-serif text-xs mb-6 leading-relaxed" style={{ color: 'rgba(96,20,26,0.55)' }}>
            Cl. 7 #35-56, El Poblado
          </p>
          <p className="font-serif font-light text-2xl mb-6" style={{ color: '#60141A' }}>3:00 p.m.</p>

          <a
            href={IGLESIA_MAP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-serif text-[0.65rem] tracking-[0.25em] uppercase border px-6 py-2.5 transition-all duration-300"
            style={{ borderColor: '#60141A', color: '#60141A' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#60141A'; e.currentTarget.style.color = '#E8E1D3' }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#60141A' }}
          >
            Ver ubicación
          </a>
        </div>

        {/* Divider with animated SVG line */}
        <div className="hidden md:flex flex-col items-center justify-center px-6 py-10 relative">
          <svg width="2" height="200" viewBox="0 0 2 200" className="absolute top-1/2 -translate-y-1/2">
            <line
              x1="1" y1="0" x2="1" y2="200"
              stroke="#60141A"
              strokeWidth="1"
              strokeDasharray="200"
              strokeDashoffset="200"
              className="p4-loc-stroke"
              strokeOpacity="0.25"
            />
          </svg>
        </div>

        {/* Recepción */}
        <div
          className="p4-loc-recepcion p4-location-card flex-1 p-8 md:p-10 cursor-pointer"
          onMouseEnter={handleCardEnter}
          onMouseLeave={handleCardLeave}
        >
          <div className="p4-loc-pin mb-5">
            <svg width="28" height="36" viewBox="0 0 28 36" fill="none">
              <path d="M14 0C6.268 0 0 6.268 0 14C0 22 14 36 14 36C14 36 28 22 28 14C28 6.268 21.732 0 14 0Z" fill="#7A8D61" fillOpacity="0.15" stroke="#7A8D61" strokeWidth="1.5"/>
              <circle cx="14" cy="14" r="5" fill="#7A8D61" fillOpacity="0.5"/>
            </svg>
          </div>

          <p className="font-serif text-[0.75rem] md:text-[0.8rem] tracking-[0.25em] uppercase mb-3" style={{ color: 'rgba(122,141,97,0.85)' }}>
            Recepción
          </p>
          <h3 className="font-serif font-light text-xl md:text-2xl mb-2" style={{ color: '#60141A' }}>
            Quince Lucas Cocina Campestre
          </h3>
          <p className="font-serif text-sm italic mb-1" style={{ color: '#7A8D61' }}>Santa Elena · Medellín</p>
          <p className="font-serif text-xs mb-6 leading-relaxed" style={{ color: 'rgba(96,20,26,0.55)' }}>
            Cl 20C Sur #15-96, Santa Elena
          </p>
          <p className="font-serif font-light text-2xl mb-6" style={{ color: '#60141A' }}>A continuación</p>

          <a
            href={RECEPCION_MAP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-serif text-[0.65rem] tracking-[0.25em] uppercase border px-6 py-2.5 transition-all duration-300"
            style={{ borderColor: '#7A8D61', color: '#7A8D61' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#7A8D61'; e.currentTarget.style.color = '#E8E1D3' }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#7A8D61' }}
          >
            Ver ubicación
          </a>
        </div>
      </div>
    </div>
  )
}
