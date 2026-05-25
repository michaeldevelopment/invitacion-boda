import { motion } from 'framer-motion'

export default function Oraciones() {
  return (
    <section className="bg-white px-8 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8 }}
        className="max-w-sm md:max-w-lg lg:max-w-xl mx-auto text-center"
      >
        <p className="font-serif text-borgona/50 text-[10px] md:text-xs tracking-widest uppercase mb-4">
          Lluvia de oraciones
        </p>
        <div className="w-full h-px bg-borgona/15 mb-6" />
        <p className="font-serif font-light text-borgona text-xl md:text-2xl leading-snug">
          Tu oración y tu bendición son el regalo más grande que podemos recibir
        </p>
      </motion.div>
    </section>
  )
}
