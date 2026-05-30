import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP } from './gsap.config'

export default function ProgressBar() {
  const fillRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.set(fillRef.current, { scaleY: 0, transformOrigin: 'top center' })

    ScrollTrigger.create({
      start: 0,
      end: 'max',
      scrub: true,
      onUpdate: (self) => {
        gsap.set(fillRef.current, { scaleY: self.progress, transformOrigin: 'top center' })
      },
    })
  })

  return (
    <div className="p4-progress-bar" aria-hidden="true">
      <div ref={fillRef} className="p4-progress-fill" />
    </div>
  )
}
