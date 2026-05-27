import { useState } from "react";
import { motion } from "framer-motion";
import { HOSPEDAJE } from "./data";

const revealProps = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] },
});

type Tab = "iglesia" | "recepcion";

export default function AccommodationSection() {
  const [tab, setTab] = useState<Tab>("iglesia");

  const opciones = tab === "iglesia" ? HOSPEDAJE.iglesia : HOSPEDAJE.recepcion;

  return (
    <section className="bg-crema px-5 py-16">
      <motion.div {...revealProps(0)} className="text-center mb-8">
        <h2 className="font-script text-3xl text-borgona mb-2">Dónde hospedarse</h2>
        <p className="font-serif text-sm text-borgona/60 italic leading-relaxed max-w-xs mx-auto">
          Selecciona opciones cercanas a cada lugar del evento
        </p>
      </motion.div>

      {/* Tabs */}
      <motion.div {...revealProps(0.1)} className="flex gap-0 mb-6 border border-borgona/20">
        <button
          onClick={() => setTab("iglesia")}
          className={`flex-1 font-serif text-xs tracking-widest uppercase py-3 transition-all duration-300 ${
            tab === "iglesia" ? "bg-borgona text-crema" : "text-borgona hover:bg-borgona/5"
          }`}
        >
          Cerca iglesia
        </button>
        <button
          onClick={() => setTab("recepcion")}
          className={`flex-1 font-serif text-xs tracking-widest uppercase py-3 transition-all duration-300 border-l border-borgona/20 ${
            tab === "recepcion" ? "bg-borgona text-crema" : "text-borgona hover:bg-borgona/5"
          }`}
        >
          Cerca recepción
        </button>
      </motion.div>

      {/* Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {opciones.map((h, i) => (
          <motion.div
            key={h.nombre}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white rounded-sm shadow px-5 md:px-6 py-5 md:py-6"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-serif text-base text-borgona">{h.nombre}</h3>
                <p className="font-serif text-xs text-borgona/50 italic">{h.descripcion}</p>
              </div>
            </div>
            <p className="font-serif text-[11px] tracking-wider text-terracota uppercase mb-3">
              {h.distancia}
            </p>
            <a
              href={h.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-borgona/40 text-borgona font-serif
                         text-[10px] tracking-widest uppercase px-5 py-2.5
                         hover:bg-borgona hover:text-crema transition-all duration-300"
            >
              Ver opciones
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
