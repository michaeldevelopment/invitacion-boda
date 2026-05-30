import { useRef } from 'react'
import { gsap, useGSAP } from './gsap.config'

interface Props {
  text: string
  className?: string
  colorMap?: Record<number, string>
  delay?: number
}

export default function ScrollRevealText({ text, className = '', colorMap, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const words = text.split(' ')

  useGSAP(() => {
    const wordEls = ref.current?.querySelectorAll<HTMLSpanElement>('.p4-srv-word')
    if (!wordEls || wordEls.length === 0) return

    gsap.from(Array.from(wordEls), {
      opacity: 0,
      y: 18,
      duration: 0.7,
      stagger: 0.08,
      ease: 'power2.out',
      delay,
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })
  }, { scope: ref })

  return (
    <div ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="p4-srv-word p4-word"
          style={colorMap?.[i] ? { color: colorMap[i] } : undefined}
        >
          {word}
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </div>
  )
}
