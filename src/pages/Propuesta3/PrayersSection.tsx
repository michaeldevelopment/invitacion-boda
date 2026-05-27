import { motion } from "framer-motion";
import { TEXTOS } from "./data";

const revealProps = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] },
});

export default function PrayersSection() {
  return (
    <section className="bg-crema px-5 py-16">
      <motion.div {...revealProps(0)}
        className="bg-white rounded-sm shadow-md px-6 lg:px-10 py-10 text-center">
        <div className="flex justify-center mb-4">
          <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" stroke="#7A8D61" strokeWidth="1.2">
            <path d="M20 36 C20 36 6 24 6 14 C6 8 12 4 20 8 C28 4 34 8 34 14 C34 24 20 36 20 36Z" />
          </svg>
        </div>
        <h2 className="font-script text-3xl text-borgona mb-4">Lluvia de oraciones</h2>
        <p className="font-serif text-sm text-borgona/70 leading-relaxed mb-2 italic max-w-sm mx-auto">
          {TEXTOS.regalo}
        </p>
        <p className="font-serif text-sm text-borgona/60 leading-relaxed max-w-sm mx-auto">
          Si deseas compartir una oración o bendición para nosotros, nos llenarías el corazón.
        </p>
      </motion.div>
    </section>
  );
}
