import { motion } from 'framer-motion'

const WHATSAPP_URL = 'https://wa.link/ousb8f'

export default function DressCodeRSVP() {
  const swatches = [
    { hex: '#60141A' }, { hex: '#7A8D61' }, { hex: '#AB7E6C' },
    { hex: '#8B7355' }, { hex: '#C4A882' }, { hex: '#E8E1D3', border: true },
  ]

  return (
    <section id="p1-dresscode" className="bg-white px-8 py-12 md:py-20">
      {/*
        Mobile: columna (dress code arriba, RSVP abajo)
        Tablet+: fila (dress code izquierda, divisor, RSVP derecha)
      */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:gap-12 lg:gap-20 md:items-start">

        {/* ── DRESS CODE ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center"
        >
          <p className="font-serif text-borgona/60 text-[10px] md:text-xs tracking-widest uppercase mb-1">
            Vestimenta
          </p>
          <p className="font-serif text-borgona font-semibold text-sm md:text-base lg:text-lg tracking-widest uppercase mb-3">
            Dress code · Semi-formal
          </p>
          <p className="font-serif text-borgona/80 text-xs md:text-sm lg:text-base leading-relaxed mb-3">
            Tonos tierra y cálidos. Te invitamos a vestir en colores
            <br />
            que armonicen con el ambiente íntimo y cálido
            <br />
            que queremos crear juntos.
          </p>
          <p className="font-serif italic text-borgona/65 text-xs md:text-sm mb-2">
            Por favor evitar blanco puro y colores neón
          </p>
          <p className="font-serif text-borgona font-bold text-xs md:text-sm tracking-wide mb-6">
            NO USAR ESTAMPADOS
          </p>
          <div className="flex justify-center gap-2.5 flex-wrap">
            {swatches.map((s) => (
              <div
                key={s.hex}
                className="w-8 h-8 md:w-9 md:h-9 rounded-full"
                style={{
                  backgroundColor: s.hex,
                  border: s.border ? '1px solid rgba(96,20,26,0.25)' : 'none',
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Divisor — horizontal en mobile, vertical en tablet+ */}
        <div className="h-px md:h-auto md:w-px bg-borgona/12 my-10 md:my-0 md:self-stretch" />

        {/* ── RSVP ── */}
        <motion.div
          id="p1-rsvp"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex-1 text-center"
        >
          <p className="font-serif italic text-borgona text-xl md:text-2xl lg:text-3xl mb-2">
            Confirma tu asistencia
          </p>
          <p className="font-serif text-borgona/60 text-xs md:text-sm tracking-widest uppercase mb-6">
            Antes del 1 de junio
          </p>
          <p className="font-serif text-borgona/80 text-xs md:text-sm lg:text-base leading-relaxed mb-8">
            Por favor confírmanos tu asistencia antes del{' '}
            <span className="text-borgona font-medium not-italic">1 de junio</span>.
            <br />
            Después de esa fecha, si no hemos recibido
            <br />
            respuesta, asumiremos con cariño que no
            <br />
            podrás acompañarnos.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-borgona/40 text-borgona font-serif
                       text-[10px] md:text-xs tracking-widest uppercase px-10 py-3
                       hover:bg-borgona hover:text-crema transition-all duration-300"
          >
            Confirmar asistencia
          </a>

          <p className="font-serif italic text-borgona/55 text-xs md:text-sm mt-8 leading-relaxed">
            Esperamos con ansias compartir contigo este día tan especial
          </p>
        </motion.div>
      </div>
    </section>
  )
}
