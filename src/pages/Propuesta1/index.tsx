import Hero from './Hero'
import Countdown from './Countdown'
import FullPhoto from './FullPhoto'
import Locations from './Locations'
import Timeline from './Timeline'
import Oraciones from './Oraciones'
import DressCodeRSVP from './DressCodeRSVP'
import Hospedaje from './Hospedaje'
import Closing from './Closing'

const PHOTOS = {
  programa:
    'https://images.unsplash.com/photo-1764071546673-55d837078a50?auto=format&fit=crop&w=1600&q=85',
  cita:
    'https://images.unsplash.com/photo-1548302040-5305e4853dc1?auto=format&fit=crop&w=1600&q=85',
}

export default function Propuesta2() {
  return (
    // Sin max-width fijo — el layout se adapta por sección
    <main className="bg-white">

      {/* 1. HERO — triptych responsive */}
      <Hero />

      {/* 2. QUOTE + COUNTDOWN */}
      <Countdown />

      {/* 3. FOTO FULL */}
      <FullPhoto
        src={PHOTOS.programa}
        height="h-[55vh] md:h-[65vh] lg:h-[75vh]"
        topText="CAMI · MAJO · LA HISTORIA DE NUESTRO AMOR"
      />

      {/* 4. LOCATIONS — vertical en mobile, horizontal en tablet+ */}
      <Locations />

      {/* 5. FOTO + label "Programa" */}
      <FullPhoto
        src={PHOTOS.cita}
        height="h-[45vh] md:h-[55vh] lg:h-[60vh]"
        bottomCaption="Programa de la boda"
      />

      {/* 6. TIMELINE */}
      <Timeline />

      {/* 7. LLUVIA DE ORACIONES */}
      <Oraciones />

      {/* 8. FOTO + CITA superpuesta */}
      <FullPhoto
        src={PHOTOS.programa}
        height="h-[50vh] md:h-[60vh] lg:h-[65vh]"
        quoteOverlay="Tu compañía para nosotras es el mejor regalo"
      />

      {/* 9. DRESS CODE + RSVP — stack en mobile, lado a lado en tablet+ */}
      <DressCodeRSVP />

      {/* 10. HOSPEDAJE */}
      <Hospedaje />

      {/* 11. CIERRE */}
      <Closing />
    </main>
  )
}
