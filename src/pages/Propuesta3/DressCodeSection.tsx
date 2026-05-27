import { useEffect } from "react";
import { motion } from "framer-motion";

const revealProps = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] },
});

const CoupleIcon = () => (
  <svg viewBox="0 0 60 70" className="w-12 h-14" fill="none" stroke="white" strokeWidth="1.2">
    <circle cx="18" cy="10" r="6" />
    <path d="M10 22 Q10 18 18 18 Q26 18 26 22 L30 46 L6 46 Z" />
    <line x1="18" y1="46" x2="15" y2="60" />
    <line x1="18" y1="46" x2="21" y2="60" />
    <circle cx="42" cy="10" r="6" />
    <rect x="34" y="18" width="16" height="22" rx="1" />
    <line x1="42" y1="40" x2="38" y2="60" />
    <line x1="42" y1="40" x2="46" y2="60" />
    <line x1="38" y1="18" x2="42" y2="24" />
    <line x1="46" y1="18" x2="42" y2="24" />
  </svg>
);

const SWATCHES = [
  { label: "Borgoña", color: "#60141A" },
  { label: "Verde olivo", color: "#7A8D61" },
  { label: "Terracota", color: "#AB7E6C" },
  { label: "Crema", color: "#E8E1D3", border: true },
];

export default function DressCodeSection() {
  useEffect(() => {
    const build = () => (window as any).PinUtils?.build();
    if (document.querySelector('script[src*="pinit.js"]')) {
      build();
    } else {
      const script = document.createElement("script");
      script.src = "//assets.pinterest.com/js/pinit.js";
      script.async = true;
      script.defer = true;
      script.onload = build;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="bg-crema px-5 py-16">
      <motion.div {...revealProps(0)} className="flex flex-col items-center gap-6">
        {/* Tarjeta ovalada */}
        <div
          className="flex flex-col items-center justify-center text-center shadow-md"
          style={{
            backgroundColor: "#AB7E6C",
            borderRadius: "50% / 38%",
            minWidth: "clamp(260px, 50%, 420px)",
            maxWidth: "clamp(310px, 55%, 440px)",
            padding: "clamp(3rem, 5vw, 5rem) clamp(2.5rem, 4vw, 4rem)",
          }}
        >
          <CoupleIcon />
          <h2 className="font-script text-3xl md:text-4xl text-white mt-3 mb-1">Dress code</h2>
          <p className="font-serif text-xs tracking-[0.3em] uppercase text-white/90 mb-2">
            Semi-formal
          </p>
          <p className="font-serif text-xs text-white/80 italic leading-snug max-w-[180px]">
            Tonos tierra y cálidos.<br />Por favor evita el blanco puro.
          </p>
        </div>

        {/* Paleta siempre visible */}
        <div className="bg-white rounded-sm shadow p-6 text-center w-full max-w-xs">
          <p className="font-serif text-xs tracking-widest text-borgona/50 uppercase mb-4">
            Paleta sugerida
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {SWATCHES.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1.5">
                <div
                  className="w-10 h-10 rounded-full shadow-sm"
                  style={{
                    backgroundColor: s.color,
                    border: s.border ? "1px solid #ccc" : "none",
                  }}
                />
                <span className="font-serif text-[10px] text-borgona/60 leading-tight text-center max-w-[56px]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
          <p className="font-serif text-xs text-borgona/50 italic mt-5 leading-relaxed">
            Evitar blanco puro, colores neón y estampados llamativos.
          </p>
        </div>

        {/* Pinterest board */}
        <div className="w-full flex flex-col items-center gap-3">
          <p className="font-serif text-xs tracking-widest text-borgona/50 uppercase">
            Referentes de vestimenta
          </p>
          <div className="flex justify-center w-full overflow-hidden">
            <a
              data-pin-do="embedBoard"
              data-pin-board-width="400"
              data-pin-scale-height="300"
              data-pin-scale-width="80"
              href="https://co.pinterest.com/mjrozo_/dress-code-algunos-referentes/"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
