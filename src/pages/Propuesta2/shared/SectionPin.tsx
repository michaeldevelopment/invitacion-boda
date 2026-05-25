import { useRef } from 'react'
import { useGSAP, ScrollTrigger } from './gsap.config'

interface Props {
  pinLength?: string
  scrub?: number
  className?: string
  children: React.ReactNode
}

export default function SectionPin({ pinLength = '+=150%', scrub = 1, className = '', children }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const isMobile = window.innerWidth < 768
    if (isMobile) return

    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top top',
      end: pinLength,
      pin: true,
      scrub,
      anticipatePin: 1,
    })
  }, { scope: ref })

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
