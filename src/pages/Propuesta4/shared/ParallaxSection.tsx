import { useRef } from 'react'
import { gsap, useGSAP } from './gsap.config'

interface Props {
  speed?: number
  className?: string
  children: React.ReactNode
}

export default function ParallaxSection({ speed = 0.3, className = '', children }: Props) {
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const isMobile = window.innerWidth < 768
    const offset = isMobile ? speed * 40 : speed * 80

    gsap.fromTo(
      innerRef.current,
      { y: offset },
      {
        y: -offset,
        ease: 'none',
        scrollTrigger: {
          trigger: outerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    )
  }, { scope: outerRef })

  return (
    <div ref={outerRef} className={`overflow-hidden ${className}`}>
      <div ref={innerRef}>{children}</div>
    </div>
  )
}
