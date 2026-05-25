import { motion } from 'framer-motion'

const PHOTO =
  'https://images.unsplash.com/photo-1670915408591-898255e36253?auto=format&fit=crop&w=1600&q=85'

export default function Hero() {
  return (
    <section className="bg-white">

      {/* Monograma superior */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center pt-10 pb-6 md:pt-14 md:pb-8"
      >
        <span className="font-script text-5xl md:text-6xl lg:text-7xl text-borgona select-none">
          Cami y Majo
        </span>
      </motion.div>

      {/* Triptych — 3 columnas centradas, escalan con la pantalla */}
      <div className="flex items-end justify-center gap-[3px] md:gap-1 px-4 md:px-16 lg:px-32 xl:px-48">

        {/* Franja izquierda */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative overflow-hidden flex-none"
          style={{ width: '28%' }}
        >
          <div className="h-[270px] md:h-[380px] lg:h-[480px]">
            <img src={PHOTO} alt="" className="w-full h-full object-cover" style={{ objectPosition: '20% center' }} />
            <div className="absolute inset-0 bg-black/15" />
          </div>
        </motion.div>

        {/* Franja central — más alta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="relative overflow-hidden flex-none"
          style={{ width: '38%' }}
        >
          <div className="h-[390px] md:h-[540px] lg:h-[680px]">
            <img src={PHOTO} alt="Cami y Majo" className="w-full h-full object-cover" style={{ objectPosition: '50% center' }} />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </motion.div>

        {/* Franja derecha */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="relative overflow-hidden flex-none"
          style={{ width: '28%' }}
        >
          <div className="h-[270px] md:h-[380px] lg:h-[480px]">
            <img src={PHOTO} alt="" className="w-full h-full object-cover" style={{ objectPosition: '80% center' }} />
            <div className="absolute inset-0 bg-black/15" />
          </div>
        </motion.div>

      </div>


    </section>
  )
}
