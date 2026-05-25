import { motion } from 'framer-motion'

interface PhotoBreakProps {
  src: string
  alt?: string
  height?: string
  quote?: string
}

export default function PhotoBreak({
  src,
  alt = 'Cami y Majo',
  height = 'h-[70vh]',
  quote,
}: PhotoBreakProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden"
    >
      <div className={`relative ${height} w-full`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        {quote && (
          <div className="absolute inset-0 bg-black/35 flex items-end justify-center pb-12 px-8">
            <p className="font-serif italic text-crema text-center text-lg md:text-xl max-w-md leading-relaxed">
              "{quote}"
            </p>
          </div>
        )}
      </div>
    </motion.section>
  )
}
