import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { WEDDING_DATE } from "./data";

function getTimeLeft() {
  const now = new Date();
  const diff = WEDDING_DATE.getTime() - now.getTime();
  if (diff <= 0) return { dias: 0, hrs: 0, min: 0, seg: 0 };
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seg = Math.floor((diff % (1000 * 60)) / 1000);
  return { dias, hrs, min, seg };
}

const Unit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center gap-1">
    <div className="border border-borgona/30 bg-white/60 px-4 md:px-6 py-3 md:py-4 min-w-[64px] md:min-w-[80px] lg:min-w-[90px] text-center">
      <span className="font-serif text-3xl md:text-4xl lg:text-5xl text-borgona tabular-nums">{String(value).padStart(2, "0")}</span>
    </div>
    <span className="font-serif text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-borgona/50">{label}</span>
  </div>
);

export default function CountdownSection() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-crema">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] }}
        className="px-6 py-14 text-center"
      >
        <p className="font-serif text-xs tracking-[0.3em] uppercase text-borgona/50 mb-1">
          SE ACERCA
        </p>
        <h2 className="font-script text-4xl md:text-5xl text-borgona mb-10">el gran día</h2>

        <div className="flex justify-center gap-3 md:gap-5 lg:gap-6 mb-12">
          <Unit value={time.dias} label="Días" />
          <Unit value={time.hrs} label="Hrs" />
          <Unit value={time.min} label="Min" />
          <Unit value={time.seg} label="Seg" />
        </div>
      </motion.div>

      {/* Foto landscape */}
      <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=800&q=75"
          alt="Los novios en el campo"
          className="w-full h-full object-cover grayscale opacity-80"
        />
      </div>
    </section>
  );
}
