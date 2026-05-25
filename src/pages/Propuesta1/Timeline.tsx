import { motion } from 'framer-motion'

// Exactamente el programa del día de img2.png
// Layout: línea central vertical, items alternando izquierda/derecha
const pasos = [
  {
    hora: '3:00 P.M.',
    evento: 'Celebración Eucarística',
    desc: 'Parroquia La Divina Eucaristía · El Poblado',
    side: 'left' as const,
  },
  {
    hora: 'A CONTINUACIÓN',
    evento: 'Recepción',
    desc: 'Quince Lucas Cocina Campestre · Santa Elena',
    side: 'right' as const,
  },
]

// Nodo central — diamante fino igual al de la referencia
const Node = () => (
  <div className="flex-none w-8 h-8 flex items-center justify-center relative z-10">
    <div className="w-6 h-6 rounded-full border border-borgona/35 bg-crema flex items-center justify-center">
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <path d="M4 0L5 3H8L5.5 5L6.5 8L4 6L1.5 8L2.5 5L0 3H3Z" fill="#60141A" fillOpacity="0.4" />
      </svg>
    </div>
  </div>
)

export default function Timeline() {
  return (
    <section className="bg-crema py-16 md:py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <p
            className="font-serif text-borgona/60 text-xs md:text-sm tracking-widest uppercase mb-3"
            style={{ letterSpacing: '0.3em' }}
          >
            Programa
          </p>
          <h2 className="font-serif italic text-borgona text-3xl md:text-4xl lg:text-5xl font-light">
            El programa del día
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea central vertical */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-borgona/20 -translate-x-1/2" />

          <div className="flex flex-col gap-12 md:gap-16">
            {pasos.map((paso, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className="flex items-center gap-0"
              >
                {/* Lado izquierdo */}
                <div className={`flex-1 ${paso.side === 'left' ? 'text-right pr-6 md:pr-8' : 'pr-6 md:pr-8'}`}>
                  {paso.side === 'left' && (
                    <>
                      <p
                        className="font-serif text-borgona/55 text-[10px] md:text-xs tracking-widest uppercase mb-1.5"
                        style={{ letterSpacing: '0.25em' }}
                      >
                        {paso.hora}
                      </p>
                      <p className="font-serif italic text-borgona text-base md:text-xl lg:text-2xl leading-tight mb-1">
                        {paso.evento}
                      </p>
                      <p className="font-serif italic text-borgona/55 text-xs md:text-sm">
                        {paso.desc}
                      </p>
                    </>
                  )}
                </div>

                {/* Nodo central */}
                <Node />

                {/* Lado derecho */}
                <div className={`flex-1 ${paso.side === 'right' ? 'text-left pl-6 md:pl-8' : 'pl-6 md:pl-8'}`}>
                  {paso.side === 'right' && (
                    <>
                      <p
                        className="font-serif text-borgona/55 text-[10px] md:text-xs tracking-widest uppercase mb-1.5"
                        style={{ letterSpacing: '0.25em' }}
                      >
                        {paso.hora}
                      </p>
                      <p className="font-serif italic text-borgona text-base md:text-xl lg:text-2xl leading-tight mb-1">
                        {paso.evento}
                      </p>
                      <p className="font-serif italic text-borgona/55 text-xs md:text-sm">
                        {paso.desc}
                      </p>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
