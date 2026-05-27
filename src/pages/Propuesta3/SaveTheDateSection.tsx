import { motion } from "framer-motion";
import { SAVE_DATE_URL } from "./data";

const revealProps = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] },
});

const WaxSeal = () => (
  <div className="w-12 h-12 rounded-full mx-auto -mt-6 mb-4 shadow-md relative z-10"
    style={{ backgroundColor: "#C9A84C" }}>
    <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
      <circle cx="24" cy="24" r="22" fill="#C9A84C" />
      <circle cx="24" cy="24" r="18" fill="none" stroke="#A8892E" strokeWidth="1" />
      <text x="24" y="28" textAnchor="middle" fill="#fff"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="10" fontStyle="italic" fontWeight="500">
        C&M
      </text>
    </svg>
  </div>
);

function buildCalendar() {
  // Agosto 2026: empieza sábado (día 6 en semana Lu=0...Do=6)
  const firstDay = new Date(2026, 7, 1).getDay(); // 6 = sábado
  const offset = firstDay === 0 ? 6 : firstDay - 1; // convertir a lunes=0
  const days: (number | null)[] = [];
  for (let i = 0; i < offset; i++) days.push(null);
  for (let d = 1; d <= 31; d++) days.push(d);
  return days;
}

export default function SaveTheDateSection() {
  const days = buildCalendar();
  const headers = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sá", "Do"];

  return (
    <section className="bg-crema px-5 py-16">
      <motion.div {...revealProps(0)}
        className="bg-white rounded-sm shadow-lg pt-2 pb-8 px-6 md:px-10 lg:px-14 relative max-w-md md:max-w-lg mx-auto">
        <WaxSeal />

        <h2 className="font-script text-3xl text-borgona text-center mb-1">Agosto 2026</h2>
        <p className="font-serif text-xs tracking-widest text-terracota text-center uppercase mb-6">
          Guarda la fecha
        </p>

        {/* Grid del calendario */}
        <div className="grid grid-cols-7 gap-y-1 text-center mb-6">
          {headers.map((h) => (
            <div key={h} className="font-serif text-[10px] tracking-wider text-borgona/40 uppercase py-1">
              {h}
            </div>
          ))}
          {days.map((d, i) => (
            <div key={i} className="relative flex items-center justify-center h-8 md:h-10">
              {d === 21 ? (
                <div className="relative flex items-center justify-center">
                  <span className="font-serif text-sm text-borgona font-semibold z-10">{d}</span>
                  <span className="absolute text-borgona text-xl" style={{ opacity: 0.2 }}>♥</span>
                </div>
              ) : d ? (
                <span className="font-serif text-sm text-borgona/60">{d}</span>
              ) : null}
            </div>
          ))}
        </div>

        {/* Botón guardar fecha */}
        <a
          href={SAVE_DATE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 border border-borgona text-borgona
                     font-serif text-xs tracking-widest uppercase px-6 py-3 w-full
                     hover:bg-borgona hover:text-crema transition-all duration-300"
        >
          <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="4" width="14" height="14" rx="1" />
            <line x1="3" y1="8" x2="17" y2="8" />
            <line x1="7" y1="2" x2="7" y2="6" />
            <line x1="13" y1="2" x2="13" y2="6" />
          </svg>
          Guardar fecha
        </a>
      </motion.div>
    </section>
  );
}
