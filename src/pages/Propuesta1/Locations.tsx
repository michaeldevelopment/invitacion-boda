import { motion } from 'framer-motion'

const IconIglesia = () => (
  <svg width="42" height="46" viewBox="0 0 42 46" fill="none" stroke="#60141A" strokeWidth="0.9" strokeOpacity="0.7">
    <path d="M21 2v8M18 5h6" />
    <path d="M8 20l13-11 13 11" />
    <rect x="6" y="20" width="30" height="24" />
    <path d="M15 44V32h12v12" />
    <rect x="25" y="24" width="5" height="7" />
    <rect x="12" y="24" width="5" height="7" />
  </svg>
)

const IconRecepcion = () => (
  <svg width="42" height="46" viewBox="0 0 42 46" fill="none" stroke="#60141A" strokeWidth="0.9" strokeOpacity="0.7">
    <path d="M14 8L9 24h10L14 8zm14 0l-5 16h10L28 8z" />
    <path d="M17 24c0 11 4 13 4 13s4-2 4-13" />
    <path d="M21 37v5M17 42h8" />
  </svg>
)

const lugares = [
  {
    etiqueta: 'Ceremonia Religiosa',
    nombre: 'PARROQUIA LA DIVINA EUCARISTÍA',
    subNombre: 'Poblado · Medellín',
    direccion: 'Cl. 7 #35-56, El Poblado, Medellín, Antioquia',
    hora: '3:00 P.M.',
    link: 'https://maps.app.goo.gl/Fa4F7R6wTxcUJ9YW9',
    Icon: IconIglesia,
  },
  {
    etiqueta: 'Recepción',
    nombre: 'QUINCE LUCAS COCINA CAMPESTRE',
    subNombre: 'Santa Elena · Medellín',
    direccion: 'Cl 20C Sur #15 96, Santa Elena, Medellín, Antioquia',
    hora: 'A continuación',
    link: 'https://maps.app.goo.gl/zFz6SJPdV2hQNEE9A',
    Icon: IconRecepcion,
  },
]

export default function Locations() {
  return (
    <section className="bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8 }}
      >
        {/* Mobile: columna · Tablet+: fila con divisor vertical */}
        <div className="flex flex-col md:flex-row md:divide-x md:divide-borgona/12">
          {lugares.map((lugar, i) => (
            <div key={lugar.nombre} className="flex-1">
              {i > 0 && <div className="h-px bg-borgona/12 md:hidden" />}

              <div className="flex flex-col items-center text-center px-8 py-12 md:py-16 lg:py-20">
                <lugar.Icon />

                {/* Etiqueta */}
                <p className="font-serif italic text-borgona/75 text-sm md:text-base lg:text-lg mt-5 mb-1">
                  {lugar.etiqueta}
                </p>

                {/* Nombre del lugar */}
                <p
                  className="font-serif text-borgona font-semibold text-xs md:text-sm lg:text-base mb-0.5"
                  style={{ letterSpacing: '0.1em' }}
                >
                  {lugar.nombre}
                </p>
                <p className="font-serif text-borgona/65 text-xs md:text-sm italic mb-1">
                  {lugar.subNombre}
                </p>

                {/* Dirección */}
                <p className="font-serif text-borgona/55 text-[11px] md:text-xs leading-relaxed mb-2 max-w-[200px]">
                  {lugar.direccion}
                </p>

                {/* Hora */}
                <p className="font-serif text-borgona/65 text-xs md:text-sm mb-6">
                  {lugar.hora}
                </p>

                <a
                  href={lugar.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-borgona/40 text-borgona font-serif
                             text-[10px] md:text-xs lg:text-sm tracking-widest uppercase px-8 py-2.5
                             hover:bg-borgona hover:text-crema transition-all duration-300"
                >
                  Ver Ubicación
                </a>
              </div>
            </div>
          ))}
        </div>

      </motion.div>
    </section>
  )
}
