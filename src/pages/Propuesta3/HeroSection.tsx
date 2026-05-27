import { motion } from "framer-motion";
import { TEXTOS } from "./data";

const revealProps = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] },
});

const BotanicalLeaf = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 60 120" className={className} fill="none">
    <path
      d="M30 110 C30 110 5 80 8 50 C11 20 30 10 30 10 C30 10 49 20 52 50 C55 80 30 110 30 110Z"
      fill="#7A8D61"
      opacity="0.15"
    />
    <line x1="30" y1="110" x2="30" y2="10" stroke="#7A8D61" strokeWidth="0.8" opacity="0.3" />
  </svg>
);

export default function HeroSection() {
  return (
    <section className="bg-crema pt-0">
      {/* Sello de lacre — oculto en desktop (va dentro de la columna de texto) */}
      <div className="relative flex justify-center pt-8 pb-4 lg:hidden">
        <BotanicalLeaf className="absolute left-4 top-0 h-24 w-12 opacity-60" />
        <BotanicalLeaf className="absolute right-4 top-0 h-24 w-12 opacity-60 scale-x-[-1]" />
        <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-sm"
          style={{ backgroundColor: "#C9A84C" }}>
          <svg viewBox="0 0 60 60" className="w-full h-full" fill="none">
            <circle cx="30" cy="30" r="28" fill="#C9A84C" />
            <circle cx="30" cy="30" r="24" fill="none" stroke="#A8892E" strokeWidth="1.2" />
            <text x="30" y="35" textAnchor="middle" fill="#fff"
              fontFamily="'Cormorant Garamond', Georgia, serif"
              fontSize="12" fontStyle="italic" fontWeight="500">
              C&M
            </text>
          </svg>
        </div>
      </div>

      {/* Layout: columna en mobile/tablet, dos columnas en desktop */}
      <div className="flex flex-col lg:flex-row lg:gap-10 lg:px-12 lg:py-16 lg:items-start pb-16 lg:pb-0">

        {/* Foto */}
        <motion.div {...revealProps(0)}
          className="w-full px-6 lg:px-0 lg:w-[45%] lg:flex-shrink-0">
          <div className="aspect-[3/4] bg-borgona/10 relative overflow-hidden rounded-sm shadow
                          max-w-sm mx-auto lg:max-w-none">
            <img
              src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=600&q=80"
              alt="Foto de los novios"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-crema/10" />
          </div>
        </motion.div>

        {/* Contenido de texto */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8
                        px-6 lg:px-0 pt-8 lg:pt-12 lg:flex-1">

          {/* Sello decorativo — solo en desktop */}
          <div className="hidden lg:flex items-center gap-4 w-full">
            <BotanicalLeaf className="h-20 w-10 opacity-50" />
            <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-sm flex-shrink-0"
              style={{ backgroundColor: "#C9A84C" }}>
              <svg viewBox="0 0 60 60" className="w-full h-full" fill="none">
                <circle cx="30" cy="30" r="28" fill="#C9A84C" />
                <circle cx="30" cy="30" r="24" fill="none" stroke="#A8892E" strokeWidth="1.2" />
                <text x="30" y="35" textAnchor="middle" fill="#fff"
                  fontFamily="'Cormorant Garamond', Georgia, serif"
                  fontSize="12" fontStyle="italic" fontWeight="500">C&M</text>
              </svg>
            </div>
          </div>

          {/* ¡Nos casamos! */}
          <motion.p {...revealProps(0.1)}
            className="font-serif text-xs tracking-[0.35em] uppercase text-terracota">
            ¡Nos casamos!
          </motion.p>

          {/* Nombres */}
          <motion.div {...revealProps(0.2)} className="flex flex-col items-center lg:items-start gap-1">
            <h1 className="font-serif text-5xl md:text-6xl text-borgona tracking-wide">Camilo</h1>
            <div className="divider w-48 lg:justify-start">
              <span className="font-script text-3xl text-terracota px-3">y</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-borgona tracking-wide">Majo</h1>
          </motion.div>

          {/* Fecha */}
          <motion.p {...revealProps(0.3)}
            className="font-serif text-sm tracking-[0.3em] text-borgona/60 uppercase">
            21 · Agosto · 2026
          </motion.p>

          {/* Texto de invitación */}
          <motion.p {...revealProps(0.35)}
            className="font-serif text-lg text-borgona/80 leading-relaxed max-w-xs lg:max-w-none italic">
            {TEXTOS.invitacion}
          </motion.p>

          {/* Cita bíblica */}
          <motion.div {...revealProps(0.4)}
            className="border-t border-borgona/20 pt-8 flex flex-col items-center lg:items-start gap-2 w-full">
            <span className="text-2xl" style={{ color: "#C9A84C" }}>✦</span>
            <p className="font-script text-2xl md:text-3xl text-borgona italic leading-snug">
              "{TEXTOS.cita}"
            </p>
            <p className="font-serif text-xs tracking-widest text-terracota uppercase">
              — {TEXTOS.citaRef}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
