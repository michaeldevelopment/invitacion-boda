import { motion } from "framer-motion";
import { UBICACIONES } from "./data";

const revealProps = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] },
});

const ChurchIcon = ({ color = "currentColor" }: { color?: string }) => (
  <svg viewBox="0 0 40 50" className="w-10 h-12" fill="none" stroke={color} strokeWidth="1.2">
    <line x1="20" y1="2" x2="20" y2="10" />
    <line x1="16" y1="6" x2="24" y2="6" />
    <rect x="6" y="18" width="28" height="28" />
    <polygon points="6,18 20,8 34,18" />
    <rect x="14" y="32" width="12" height="14" />
    <rect x="9" y="22" width="7" height="7" />
    <rect x="24" y="22" width="7" height="7" />
  </svg>
);

const ArchIcon = ({ color = "currentColor" }: { color?: string }) => (
  <svg viewBox="0 0 40 50" className="w-10 h-12" fill="none" stroke={color} strokeWidth="1.2">
    <path d="M20 6 C8 6 4 16 4 24 L4 46 L36 46 L36 24 C36 16 32 6 20 6Z" />
    <line x1="4" y1="46" x2="36" y2="46" />
    <path d="M14 46 L14 32 Q14 26 20 26 Q26 26 26 32 L26 46" />
    <path d="M10 10 Q10 4 20 4 Q30 4 30 10" strokeDasharray="2 2" />
  </svg>
);

export default function VenuesSection() {
  const [ceremonia, recepcion] = UBICACIONES;

  return (
    <section className="bg-crema px-5 py-16 flex flex-col md:grid md:grid-cols-2 gap-5">
      {/* Tarjeta Ceremonia — olivo */}
      <motion.div {...revealProps(0)}
        className="rounded-sm overflow-hidden shadow-md text-center px-8 py-8 md:py-10 lg:py-12"
        style={{ backgroundColor: "#7A8D61" }}>
        <div className="flex justify-center mb-3">
          <ChurchIcon color="white" />
        </div>
        <h2 className="font-script text-3xl text-white mb-3">{ceremonia.tipo}</h2>
        <p className="font-serif text-[11px] tracking-[0.2em] uppercase text-white/90 mb-1">
          {ceremonia.nombre}
        </p>
        <p className="font-serif text-xs text-white/70 mb-1">{ceremonia.subNombre}</p>
        <p className="font-serif text-sm text-white/80 italic mb-1">{ceremonia.direccion}</p>
        <p className="font-serif text-xl text-white my-3">{ceremonia.hora}</p>
        <a
          href={ceremonia.mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-white/70 text-white font-serif
                     text-[10px] tracking-widest uppercase px-6 py-3
                     hover:bg-white/20 transition-all duration-300"
        >
          <svg viewBox="0 0 20 20" className="w-3 h-3" fill="currentColor">
            <path d="M10 2C6.686 2 4 4.686 4 8c0 5 6 10 6 10s6-5 6-10c0-3.314-2.686-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
          Ver ubicación
        </a>
      </motion.div>

      {/* Tarjeta Recepción — blanca */}
      <motion.div {...revealProps(0.15)}
        className="rounded-sm overflow-hidden shadow-md text-center px-8 py-8 md:py-10 lg:py-12 bg-white">
        <div className="flex justify-center mb-3">
          <ArchIcon color="#7A8D61" />
        </div>
        <h2 className="font-script text-3xl text-borgona mb-3">{recepcion.tipo}</h2>
        <p className="font-serif text-[11px] tracking-[0.2em] uppercase text-borgona/80 mb-1">
          {recepcion.nombre}
        </p>
        <p className="font-serif text-xs text-borgona/50 mb-1">{recepcion.subNombre}</p>
        <p className="font-serif text-sm text-borgona/60 italic mb-1">{recepcion.direccion}</p>
        <p className="font-serif text-xl text-borgona my-3">{recepcion.hora}</p>
        <a
          href={recepcion.mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-borgona/50 text-borgona font-serif
                     text-[10px] tracking-widest uppercase px-6 py-3
                     hover:bg-borgona/10 transition-all duration-300"
        >
          <svg viewBox="0 0 20 20" className="w-3 h-3" fill="currentColor">
            <path d="M10 2C6.686 2 4 4.686 4 8c0 5 6 10 6 10s6-5 6-10c0-3.314-2.686-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
          Ver ubicación
        </a>
      </motion.div>
    </section>
  );
}
