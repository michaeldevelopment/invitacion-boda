import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TEXTOS } from "./data";

const revealProps = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] },
});

const GiftIcon = ({ stroke = "#7A8D61" }: { stroke?: string }) => (
  <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" stroke={stroke} strokeWidth="1.2">
    <rect x="6" y="16" width="28" height="20" rx="1" />
    <rect x="4" y="10" width="32" height="8" rx="1" />
    <line x1="20" y1="10" x2="20" y2="36" />
    <path d="M20 10 C20 10 14 10 14 6 C14 3 17 2 20 6 C23 2 26 3 26 6 C26 10 20 10 20 10Z" />
  </svg>
);

const CameraIcon = () => (
  <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" stroke="white" strokeWidth="1.2">
    <path d="M4 12 L4 32 L36 32 L36 12 L28 12 L25 6 L15 6 L12 12 Z" />
    <circle cx="20" cy="22" r="7" />
    <circle cx="20" cy="22" r="4" />
    <circle cx="32" cy="15" r="1.5" fill="white" stroke="none" />
  </svg>
);

export default function GiftsSection() {
  const [showAccount, setShowAccount] = useState(false);

  return (
    <section className="bg-crema px-5 py-16 flex flex-col md:flex-row md:items-stretch gap-5">
      {/* Tarjeta Obsequios — blanca */}
      <motion.div {...revealProps(0)}
        className="bg-white rounded-sm shadow-md px-6 py-8 text-center md:flex-1">
        <div className="flex justify-center mb-3">
          <GiftIcon />
        </div>
        <h2 className="font-script text-3xl text-borgona mb-3">Obsequios</h2>
        <p className="font-serif text-sm text-borgona/70 leading-relaxed mb-6 italic">
          {TEXTOS.regalo}. Si deseas hacernos un obsequio, les agradecemos sea en la siguiente cuenta:
        </p>

        <button
          onClick={() => setShowAccount(!showAccount)}
          className="inline-flex items-center gap-2 border border-borgona text-borgona font-serif
                     text-[10px] tracking-widest uppercase px-6 py-3
                     hover:bg-borgona hover:text-crema transition-all duration-300"
        >
          <svg viewBox="0 0 20 20" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="5" width="16" height="12" rx="1" />
            <path d="M2 9 L18 9" />
            <line x1="6" y1="13" x2="10" y2="13" />
          </svg>
          Ver cuenta
        </button>

        <AnimatePresence>
          {showAccount && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="bg-crema/50 rounded-sm mt-4 px-4 py-4 text-left">
                <p className="font-serif text-xs tracking-widest uppercase text-borgona/40 mb-2">Datos bancarios</p>
                <p className="font-serif text-sm text-borgona">Banco: [Nombre del banco]</p>
                <p className="font-serif text-sm text-borgona">Titular: Camilo y Majo</p>
                <p className="font-serif text-sm text-borgona">Cuenta: [Número de cuenta]</p>
                <p className="font-serif text-xs text-borgona/50 italic mt-2">
                  Los datos bancarios serán actualizados próximamente.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Tarjeta Recuerdos — olivo */}
      <motion.div {...revealProps(0.1)}
        className="rounded-sm shadow-md px-6 py-8 text-center md:flex-1"
        style={{ backgroundColor: "#7A8D61" }}>
        <div className="flex justify-center mb-3">
          <CameraIcon />
        </div>
        <h2 className="font-script text-3xl text-white mb-3">Recuerdos</h2>
        <p className="font-serif text-sm text-white/80 leading-relaxed mb-3 italic">
          ¡Captura los mejores momentos de nuestra boda!
        </p>
        <p className="font-script text-2xl text-white/90 mb-5">#CamiYMajo</p>
        <a
          href="#"
          className="inline-flex items-center gap-2 border border-white/70 text-white font-serif
                     text-[10px] tracking-widest uppercase px-6 py-3
                     hover:bg-white/20 transition-all duration-300"
        >
          <svg viewBox="0 0 20 20" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 3 L10 14 M5 9 L10 14 L15 9" />
            <path d="M3 15 L3 17 L17 17 L17 15" />
          </svg>
          Subir fotos
        </a>
      </motion.div>
    </section>
  );
}
