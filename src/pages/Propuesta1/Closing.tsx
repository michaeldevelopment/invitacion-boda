import { motion } from 'framer-motion'

const CLOSING_PHOTO =
  'https://images.unsplash.com/photo-1776267289046-8c13f8942426?auto=format&fit=crop&w=1600&q=85'

export default function Closing() {
  return (
    <section className="bg-white">
      {/*
        Mobile: foto arriba, texto abajo
        Desktop: lado a lado — foto izquierda (60%), texto derecha (40%)
      */}
      <div className="flex flex-col lg:flex-row">

        {/* Foto */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1 }}
          className="relative h-[60vh] md:h-[65vh] lg:h-auto lg:flex-[3] overflow-hidden"
        >
          <img
            src={CLOSING_PHOTO}
            alt="Cami y Majo"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="
            px-8 py-12
            md:px-16 md:py-16
            lg:flex-[2] lg:flex lg:flex-col lg:items-center lg:justify-center lg:py-20
            text-center
          "
        >
          <p className="font-serif italic text-borgona/85 text-sm md:text-base lg:text-xl leading-relaxed mb-4">
            Esperamos con ansias compartir contigo
            <br />
            este día tan especial
          </p>
          <p className="font-serif text-borgona/60 text-xs md:text-sm leading-relaxed mb-6">
            Gracias por acompañarnos. Dios te bendiga en creces.
          </p>

          <p className="font-serif text-borgona/65 text-[10px] md:text-xs lg:text-sm tracking-widest uppercase mb-4">
            Con amor · Cami & Majo
          </p>

          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-borgona/20" />
            <svg width="10" height="10" viewBox="0 0 10 10" fill="#60141A" fillOpacity="0.25">
              <path d="M5 0l1.2 3.8H10L6.9 6.2 8.1 10 5 7.6 1.9 10l1.2-3.8L0 3.8h3.8z" />
            </svg>
            <div className="w-8 h-px bg-borgona/20" />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="font-script text-5xl md:text-6xl lg:text-7xl text-borgona/80"
          >
            Cami y Majo
          </motion.p>

          <p className="font-serif text-borgona/50 text-[9px] md:text-xs lg:text-sm tracking-widest uppercase mt-5">
            21 · 08 · 2026
          </p>
        </motion.div>

      </div>
    </section>
  )
}
