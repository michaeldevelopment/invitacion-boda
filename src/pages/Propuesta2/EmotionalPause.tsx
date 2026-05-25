import { useRef } from 'react'
import { gsap, useGSAP } from './shared/gsap.config'
import FloralDecoration from './shared/FloralDecoration'

const BOKEH_CIRCLES = [
  { size: 180, top: '10%', left: '5%', color: 'rgba(171,126,108,0.12)', blur: 60 },
  { size: 250, top: '60%', right: '8%', color: 'rgba(96,20,26,0.08)', blur: 80 },
  { size: 120, top: '30%', left: '70%', color: 'rgba(122,141,97,0.1)', blur: 50 },
  { size: 200, bottom: '15%', left: '20%', color: 'rgba(171,126,108,0.09)', blur: 70 },
  { size: 90, top: '5%', right: '30%', color: 'rgba(96,20,26,0.06)', blur: 40 },
]

export default function EmotionalPause() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const isMobile = window.innerWidth < 768
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      gsap.set('.p4-ep-text-inner', { clipPath: 'inset(0 0% 0 0)' })
      return
    }

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

    tl.from('.p4-ep-label', { opacity: 0, y: 10, duration: 0.3, ease: 'power2.out' })
      .fromTo('.p4-ep-text-inner',
        { clipPath: 'inset(0 100% 0 0)' },
        { clipPath: 'inset(0 0% 0 0)', ease: 'power2.inOut', duration: 1 },
        '-=0.1'
      )

    // Bokeh — loop independiente
    gsap.utils.toArray<HTMLElement>('.p4-ep-bokeh').forEach((el, i) => {
      gsap.to(el, {
        y: (i % 2 === 0 ? -1 : 1) * (20 + i * 5),
        x: (i % 2 === 0 ? 1 : -1) * (10 + i * 3),
        duration: 4 + i * 0.8,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: i * 0.5,
      })
    })
  }, { scope: sectionRef })

  return (
    <div
      ref={sectionRef}
      className="p4-section flex items-center justify-center overflow-hidden relative"
      style={{
        background: 'linear-gradient(160deg, #E8E1D3 0%, #d9c9ba 50%, #c9b09a 100%)',
      }}
    >
      {/* Bokeh circles */}
      {BOKEH_CIRCLES.map((c, i) => (
        <div
          key={i}
          className="p4-ep-bokeh absolute rounded-full pointer-events-none"
          style={{
            width: c.size,
            height: c.size,
            background: c.color,
            filter: `blur(${c.blur}px)`,
            top: c.top,
            left: (c as { left?: string }).left,
            right: (c as { right?: string }).right,
            bottom: (c as { bottom?: string }).bottom,
          }}
        />
      ))}

      {/* Botanical */}
      <FloralDecoration position="bottom-right" speed={0.2} size={180} opacity={0.4} />
      <FloralDecoration position="top-left" speed={0.15} size={130} opacity={0.28} />

      {/* Main text */}
      <div className="relative z-10 text-center px-8 max-w-2xl mx-auto">

        <div
          className="p4-ep-text-inner"
          style={{ clipPath: 'inset(0 100% 0 0)' }}
        >
          <p
            className="font-serif italic"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3.2rem)', color: '#60141A', lineHeight: 1.3 }}
          >
            Tu compañía para nosotros es el mejor regalo
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="w-6 h-px" style={{ backgroundColor: '#AB7E6C', opacity: 0.5 }} />
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <circle cx="4" cy="4" r="2.5" fill="#AB7E6C" fillOpacity="0.6"/>
          </svg>
          <div className="w-6 h-px" style={{ backgroundColor: '#AB7E6C', opacity: 0.5 }} />
        </div>
      </div>
    </div>
  )
}
