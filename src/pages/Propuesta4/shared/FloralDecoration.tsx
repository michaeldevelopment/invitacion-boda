import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP } from './gsap.config'

type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

interface Props {
  position: Position
  speed?: number
  size?: number
  opacity?: number
}

const positionStyles: Record<Position, React.CSSProperties> = {
  'top-left':     { top: 0, left: 0, transform: 'rotate(180deg) scaleX(-1)' },
  'top-right':    { top: 0, right: 0, transform: 'rotate(180deg)' },
  'bottom-left':  { bottom: 0, left: 0, transform: 'scaleX(-1)' },
  'bottom-right': { bottom: 0, right: 0 },
}

export default function FloralDecoration({ position, speed = 0.2, size = 140, opacity = 0.5 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const isMobile = window.innerWidth < 768
    const offset = isMobile ? speed * 30 : speed * 60

    const st = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        const y = (self.progress - 0.5) * offset * 2
        gsap.set(ref.current, { y })
      },
    })
    return () => st.kill()
  })

  return (
    <div
      ref={ref}
      className="p4-floral"
      style={{ ...positionStyles[position], opacity, width: size, height: size * 1.3 }}
    >
      <svg
        viewBox="0 0 100 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <path d="M50 128 Q46 95 35 62 Q22 28 12 8" stroke="#7A8D61" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.7"/>
        <path d="M38 72 Q60 58 65 38" stroke="#7A8D61" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.5"/>
        <path d="M35 62 Q5 48 2 22 Q22 20 35 62Z" fill="#7A8D61" opacity="0.45"/>
        <path d="M38 72 Q68 60 65 38 Q48 42 38 72Z" fill="#7A8D61" opacity="0.4"/>
        <path d="M22 28 Q2 14 5 0 Q22 8 22 28Z" fill="#7A8D61" opacity="0.35"/>
        <circle cx="12" cy="8" r="2.8" fill="#AB7E6C" opacity="0.45"/>
        <circle cx="65" cy="38" r="2" fill="#AB7E6C" opacity="0.35"/>
        <circle cx="5" cy="0" r="1.8" fill="#7A8D61" opacity="0.4"/>
        <circle cx="2" cy="22" r="1.2" fill="#AB7E6C" opacity="0.3"/>
        <circle cx="50" cy="128" r="2.5" fill="#7A8D61" opacity="0.2"/>
      </svg>
    </div>
  )
}
