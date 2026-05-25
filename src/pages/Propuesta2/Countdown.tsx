import { useEffect, useRef, useState } from 'react'
import { gsap, useGSAP } from './shared/gsap.config'

const TARGET = new Date('2026-08-21T15:00:00')

function getTimeLeft() {
  const diff = TARGET.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

const UNITS = ['días', 'horas', 'minutos', 'segundos'] as const

export default function Countdown() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  useGSAP(() => {
    const isMobile = window.innerWidth < 768
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    // Pinned scrub — mismo patrón que InvitationPhrase
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=250%',
        pin: !isMobile,
        scrub: 1.2,
        anticipatePin: 1,
      },
    })

    tl.from('.p4-countdown-title', { opacity: 0, y: 20, duration: 0.4, ease: 'power2.out' })
      .from('.p4-countdown-unit', {
        rotateX: -80,
        opacity: 0,
        transformOrigin: '50% top',
        stagger: 0.2,
        duration: 0.6,
        ease: 'power3.out',
      }, '-=0.1')

    // Heartbeat separators — loop independiente
    gsap.to('.p4-countdown-sep', {
      scale: 1.25,
      repeat: -1,
      yoyo: true,
      duration: 0.9,
      ease: 'power1.inOut',
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        toggleActions: 'play none none none',
      },
    })
  }, { scope: sectionRef })

  const values = [time.days, time.hours, time.minutes, time.seconds]

  return (
    <div
      ref={sectionRef}
      className="p4-vignette p4-section flex flex-col items-center justify-center relative"
      style={{ backgroundColor: '#E8E1D3' }}
    >
      {/* Linen texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 text-center px-8">
        <p className="p4-countdown-title section-label mb-4 font-serif" style={{ color: 'rgba(96,20,26,0.65)', letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: 'clamp(0.75rem, 1.8vw, 0.95rem)' }}>
          faltan
        </p>

        <div className="flex items-start gap-3 md:gap-6 justify-center">
          {values.map((val, i) => (
            <div key={UNITS[i]} className="flex items-start gap-3 md:gap-6">
              <div className="p4-countdown-unit" style={{ perspective: '400px' }}>
                <span className="p4-countdown-number">{pad(val)}</span>
                <span className="p4-countdown-label">{UNITS[i]}</span>
              </div>
              {i < values.length - 1 && (
                <span className="p4-countdown-sep" aria-hidden="true">·</span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="w-10 h-px" style={{ backgroundColor: '#60141A', opacity: 0.2 }} />
          <p className="font-serif italic" style={{ color: 'rgba(96,20,26,0.65)', fontSize: 'clamp(0.85rem, 2vw, 1.05rem)' }}>
            21 de agosto · 2026
          </p>
          <div className="w-10 h-px" style={{ backgroundColor: '#60141A', opacity: 0.2 }} />
        </div>
      </div>
    </div>
  )
}
