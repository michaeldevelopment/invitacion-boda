import { motion } from "framer-motion";

const revealProps = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] },
});

export default function ParentsSection() {
  return (
    <section className="bg-crema px-5 md:px-10 lg:px-16 py-16">
      <motion.div
        {...revealProps(0)}
        className="rounded-sm px-8 md:px-12 lg:px-16 py-10 md:py-12 text-center"
        style={{ backgroundColor: "#7A8D61" }}
      >
        <p className="font-serif text-[10px] tracking-[0.3em] uppercase text-white/80 mb-8">
          Con la bendición de Dios y nuestros padres
        </p>

        <p className="font-serif text-sm text-white/80 leading-relaxed italic">
          Queremos compartir este día tan especial contigo.
        </p>
      </motion.div>
    </section>
  );
}
