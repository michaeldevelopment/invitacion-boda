import { motion } from 'framer-motion'

interface FullPhotoProps {
  src: string
  alt?: string
  height?: string
  topText?: string
  bottomCaption?: string
  quoteOverlay?: string
}

export default function FullPhoto({
  src,
  alt = 'Cami y Majo',
  height = 'h-[55vh] md:h-[65vh] lg:h-[70vh]',
  topText,
  bottomCaption,
  quoteOverlay,
}: FullPhotoProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9 }}
      className="bg-white"
    >
      {topText && (
        <p
          className="text-center font-serif text-borgona/45 text-[10px] md:text-xs py-3 md:py-4"
          style={{ letterSpacing: '0.25em' }}
        >
          {topText}
        </p>
      )}

      <div className={`relative w-full overflow-hidden ${height}`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        {quoteOverlay && (
          <div className="absolute inset-0 bg-black/32 flex items-end pb-10 md:pb-14 justify-center px-8">
            <p className="font-serif italic text-white text-center text-base md:text-xl lg:text-2xl leading-relaxed max-w-2xl">
              "{quoteOverlay}"
            </p>
          </div>
        )}
      </div>

      {bottomCaption && (
        <div className="px-8 py-6 md:py-8 text-center">
          <p className="font-serif italic text-borgona/65 text-sm md:text-base">{bottomCaption}</p>
        </div>
      )}
    </motion.section>
  )
}
