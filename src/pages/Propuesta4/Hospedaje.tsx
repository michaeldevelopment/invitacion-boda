import { useRef } from 'react'
import { gsap, useGSAP } from './shared/gsap.config'

interface Hotel {
  nombre: string
  tipo: string
  distancia: string
  referencia: string
  url: string
  cerca: string
  bg: string
}

const HOTELES: Hotel[] = [
  {
    nombre: 'Airbnbs cerca a la iglesia',
    tipo: 'Airbnb · El Poblado',
    distancia: '~5 min de la iglesia',
    referencia: 'El Poblado, Medellín',
    url: 'https://www.airbnb.com/s/Medellin--Antioquia/homes?refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2026-06-01&monthly_length=3&monthly_end_date=2026-09-01&price_filter_input_type=2&channel=EXPLORE&zoom_level=15.525610530611516&search_type=user_map_move&place_id=ChIJBa0PuN8oRI4RVju1x_x8E0I&acp_id=e6f47397-cd93-4793-8ee6-cc92bb7170e3&date_picker_type=calendar&checkin=2026-08-20&checkout=2026-08-23&query=Medellin%2C%20Antioquia&search_mode=regular_search&price_filter_num_nights=3&ne_lat=6.219498903576044&ne_lng=-75.55293689457068&sw_lat=6.197478654912585&sw_lng=-75.57837986057763&zoom=15.525610530611516&search_by_map=true&host_languages%5B%5D=es&selected_filter_order%5B%5D=host_languages%3Aes&update_selected_filters=false',
    cerca: 'iglesia',
    bg: '#ccc4b4',
  },
  {
    nombre: 'Airbnbs cerca a la recepción',
    tipo: 'Airbnb · San Lucas',
    distancia: '~10 min de Quince Lucas',
    referencia: 'San Lucas, Medellín',
    url: 'https://www.airbnb.com/s/Medellin--Antioquia/homes?refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2026-06-01&monthly_length=3&monthly_end_date=2026-09-01&price_filter_input_type=2&channel=EXPLORE&zoom_level=15.525610530611516&search_type=user_map_move&place_id=ChIJBa0PuN8oRI4RVju1x_x8E0I&acp_id=e6f47397-cd93-4793-8ee6-cc92bb7170e3&date_picker_type=calendar&checkin=2026-08-20&checkout=2026-08-23&query=Medellin%2C%20Antioquia&search_mode=regular_search&price_filter_num_nights=3&ne_lat=6.187904502990555&ne_lng=-75.55333211147592&sw_lat=6.165882936724882&sw_lng=-75.57877507748287&zoom=15.525610530611516&search_by_map=true&host_languages%5B%5D=es&selected_filter_order%5B%5D=host_languages%3Aes&update_selected_filters=false',
    cerca: 'recepción',
    bg: '#cfd9c0',
  },
]

export default function Hospedaje() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      gsap.set(sectionRef.current, { opacity: 1 })
      return
    }

    gsap.fromTo(sectionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    )

    gsap.from('.p4-hosp-header', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })

    gsap.from('.p4-hospedaje-card', {
      y: 60,
      opacity: 0,
      stagger: 0.18,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.p4-hosp-grid',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })
  }, { scope: sectionRef })

  const handleCardEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, { y: -6, duration: 0.3, ease: 'power2.out' })
  }
  const handleCardLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, { y: 0, duration: 0.3, ease: 'power2.out' })
  }

  const handleImgMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height
    const img = e.currentTarget.querySelector<HTMLElement>('.p4-hospedaje-img')
    if (img) gsap.to(img, { x: x * 12, y: y * 12, duration: 0.5, ease: 'power2.out' })
  }

  const handleImgLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const img = e.currentTarget.querySelector<HTMLElement>('.p4-hospedaje-img')
    if (img) gsap.to(img, { x: 0, y: 0, duration: 0.5, ease: 'power2.out' })
  }

  return (
    <div
      ref={sectionRef}
      id="p2-hospedaje"
      className="p4-section py-24 px-6"
      style={{ backgroundColor: '#E8E1D3', opacity: 0 }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="p4-hosp-header text-center mb-14">
          <p className="font-serif text-[0.8rem] md:text-[0.875rem] tracking-[0.3em] uppercase mb-3" style={{ color: 'rgba(96,20,26,0.65)' }}>
            Para quedarse
          </p>
          <h2 className="font-serif font-light mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#60141A' }}>
            Si vienes de otra ciudad
          </h2>
          <p className="font-serif text-sm italic" style={{ color: 'rgba(96,20,26,0.6)' }}>
            Queremos que disfrutes con tranquilidad. Aquí encontrarás algunas opciones de alojamiento cercanas al lugar del evento.
          </p>
        </div>

        {/* Cards — 2 columnas */}
        <div className="p4-hosp-grid grid grid-cols-1 md:grid-cols-2 gap-5">
          {HOTELES.map((h) => (
            <a
              key={h.nombre}
              href={h.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p4-hospedaje-card block no-underline overflow-hidden"
              onMouseEnter={handleCardEnter}
              onMouseLeave={handleCardLeave}
            >
              {/* Color block */}
              <div
                className="p4-hospedaje-img-wrap h-40 relative overflow-hidden"
                onMouseMove={handleImgMove}
                onMouseLeave={handleImgLeave}
              >
                <div
                  className="p4-hospedaje-img w-full h-full"
                  style={{ backgroundColor: h.bg, willChange: 'transform' }}
                />
                <span
                  className="absolute top-3 left-3 font-serif text-[0.55rem] tracking-[0.2em] uppercase px-2.5 py-1"
                  style={{
                    backgroundColor: h.cerca === 'iglesia' ? 'rgba(96,20,26,0.8)' : 'rgba(122,141,97,0.85)',
                    color: '#E8E1D3',
                  }}
                >
                  Cerca a la {h.cerca}
                </span>
              </div>

              {/* Info */}
              <div className="p-6">
                <p className="font-serif text-[0.6rem] tracking-[0.2em] uppercase mb-1" style={{ color: '#AB7E6C' }}>
                  {h.tipo}
                </p>
                <h3 className="font-serif font-light text-base mb-2 leading-snug" style={{ color: '#60141A' }}>
                  {h.nombre}
                </h3>
                <p className="font-serif text-xs italic mb-1" style={{ color: '#7A8D61' }}>{h.distancia}</p>
                <p className="font-serif text-xs" style={{ color: 'rgba(96,20,26,0.45)' }}>{h.referencia}</p>
                <p className="font-serif text-[0.6rem] tracking-widest uppercase mt-4" style={{ color: '#AB7E6C' }}>
                  Ver opciones →
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
