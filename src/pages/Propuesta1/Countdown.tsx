import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WEDDING_DATE = new Date("2026-08-21T15:00:00");

function calcTime(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((diff / (1000 * 60)) % 60),
    segundos: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown() {
  const [time, setTime] = useState(calcTime(WEDDING_DATE));
  useEffect(() => {
    const id = setInterval(() => setTime(calcTime(WEDDING_DATE)), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { v: pad(time.dias), l: "días" },
    { v: pad(time.horas), l: "horas" },
    { v: pad(time.minutos), l: "minutos" },
    { v: pad(time.segundos), l: "segundos" },
  ];

  return (
    <section className="bg-white px-8 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8 }}
        className="max-w-sm md:max-w-xl lg:max-w-2xl mx-auto"
      >
        {/* Fecha */}
        <p
          className="text-center font-serif text-borgona/80 text-xs md:text-sm lg:text-base mb-4"
          style={{ letterSpacing: "0.3em" }}
        >
          21 de agosto · 2026
        </p>

        <div className="w-full h-px bg-borgona/20 mb-6" />

        {/* Frase */}
        <p className="text-center font-serif italic text-borgona/85 text-sm md:text-base lg:text-xl leading-relaxed mb-6">
          "Amamos porque Él nos amó primero"
          <br />1 Jn, 4-19.
        </p>

        <div className="w-full h-px bg-borgona/20 mb-6" />

        <p
          className="text-center font-serif text-borgona/60 text-[10px] md:text-xs lg:text-sm mb-5"
          style={{ letterSpacing: "0.3em" }}
        >
          faltan
        </p>

        {/* Números */}
        <div className="flex justify-center items-baseline gap-1 mb-2">
          {units.map((u, i) => (
            <div key={u.l} className="flex items-baseline gap-1">
              <div className="flex flex-col items-center">
                <motion.span
                  key={u.v}
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="font-serif text-4xl md:text-5xl lg:text-6xl text-borgona tabular-nums font-light"
                >
                  {u.v}
                </motion.span>
                <span className="font-serif text-[8px] md:text-[10px] lg:text-xs text-borgona/60 tracking-widest uppercase mt-1">
                  {u.l}
                </span>
              </div>
              {i < 3 && (
                <span className="font-serif text-2xl md:text-3xl text-borgona/35 mb-4 mx-0.5">
                  :
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-borgona/20 mt-6 mb-5" />

        <p className="text-center font-serif italic text-borgona/75 text-xs md:text-sm lg:text-base leading-relaxed">
          Dios, tu y yo. Una historia de 3
        </p>
      </motion.div>
    </section>
  );
}
