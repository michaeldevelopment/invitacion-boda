import type { ReactElement } from "react";
import { motion } from "framer-motion";
import { ITINERARIO } from "./data";

const revealProps = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] },
});

const ICONS: Record<string, ReactElement> = {
  church: (
    <svg viewBox="0 0 32 40" className="w-6 h-7" fill="none" stroke="#7A8D61" strokeWidth="1.2">
      <line x1="16" y1="1" x2="16" y2="7" /><line x1="13" y1="4" x2="19" y2="4" />
      <polygon points="4,14 16,6 28,14" /><rect x="4" y="14" width="24" height="24" />
      <rect x="11" y="26" width="10" height="12" />
    </svg>
  ),
  arch: (
    <svg viewBox="0 0 32 40" className="w-6 h-7" fill="none" stroke="#7A8D61" strokeWidth="1.2">
      <path d="M16 4 C6 4 3 12 3 18 L3 38 L29 38 L29 18 C29 12 26 4 16 4Z" />
      <path d="M11 38 L11 28 Q11 22 16 22 Q21 22 21 28 L21 38" />
    </svg>
  ),
  glasses: (
    <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" stroke="#7A8D61" strokeWidth="1.2">
      <path d="M4 8 L8 28 M28 8 L24 28 M8 28 L24 28 M16 8 L16 20" />
      <ellipse cx="8" cy="6" rx="5" ry="3" /><ellipse cx="24" cy="6" rx="5" ry="3" />
    </svg>
  ),
  cutlery: (
    <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" stroke="#7A8D61" strokeWidth="1.2">
      <line x1="11" y1="3" x2="11" y2="29" /><path d="M8 3 L8 12 Q8 16 11 16 Q14 16 14 12 L14 3" />
      <path d="M21 3 L21 12 Q21 18 24 18 L24 29 M24 3 L24 12" />
    </svg>
  ),
  music: (
    <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" stroke="#7A8D61" strokeWidth="1.2">
      <path d="M12 26 L12 8 L26 5 L26 18" />
      <circle cx="9" cy="26" r="4" /><circle cx="23" cy="18" r="4" />
    </svg>
  ),
};

export default function ItinerarySection() {
  return (
    <section className="bg-crema">
      {/* Foto banner */}
      <div className="w-full h-48 md:h-64 lg:h-72 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=75"
          alt="Decoración de boda"
          className="w-full h-full object-cover grayscale opacity-70"
        />
      </div>

      <div className="px-5 -mt-4 pb-16">
        <motion.div {...revealProps(0)}
          className="bg-white rounded-sm shadow-lg pt-2 pb-8 px-6 md:px-10 lg:px-14 relative">
          {/* Sello */}
          <div className="w-12 h-12 rounded-full mx-auto -mt-6 mb-4 shadow-md relative z-10 flex items-center justify-center"
            style={{ backgroundColor: "#C9A84C" }}>
            <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
              <circle cx="24" cy="24" r="22" fill="#C9A84C" />
              <circle cx="24" cy="24" r="18" fill="none" stroke="#A8892E" strokeWidth="1" />
              <text x="24" y="28" textAnchor="middle" fill="#fff"
                fontFamily="'Cormorant Garamond', Georgia, serif"
                fontSize="10" fontStyle="italic" fontWeight="500">C&M</text>
            </svg>
          </div>

          <h2 className="font-script text-3xl text-borgona text-center mb-6">Itinerario</h2>

          <div className="relative">
            {/* Línea vertical central */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-borgona/15 -translate-x-1/2" />

            <div className="flex flex-col gap-5 md:gap-6 lg:gap-7">
              {ITINERARIO.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-1 flex justify-end">
                    {ICONS[item.icono]}
                  </div>
                  {/* Nodo central */}
                  <div className="w-2 h-2 rounded-full bg-borgona/30 flex-shrink-0 z-10" />
                  <div className="flex-1">
                    <p className="font-serif text-xs text-borgona/50">{item.hora}</p>
                    <p className="font-serif text-sm md:text-base text-borgona">{item.evento}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
