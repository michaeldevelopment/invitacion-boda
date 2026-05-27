import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const propuestas = [
  {
    id: 1,
    path: "/propuesta1",
    titulo: "Propuesta 1",
    descripcion: "Photo-forward · Editorial · Cinematográfica",
    tag: "Fotos reales · Timeline con iconos · Nombres editoriales",
  },
  {
    id: 2,
    path: "/propuesta2",
    titulo: "Propuesta 2",
    descripcion: "Scroll dinámico · Awwwards · Narrativa por actos",
    tag: "10 actos · GSAP ScrollTrigger · Pin & reveal · Parallax",
  },
  {
    id: 3,
    path: "/propuesta3",
    titulo: "Propuesta 3",
    descripcion: "Sobre animado · Tarjetas apiladas · Sello de lacre",
    tag: "Framer Motion · Mobile-first · Vintage romántico · 13 secciones",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1 },
};

export default function ProposalsIndex() {
  return (
    <div className="min-h-screen bg-crema flex flex-col items-center justify-center px-6 py-20">
      <motion.div
        initial="hidden"
        animate="visible"
        className="text-center mb-16"
      >
        <motion.p custom={0} variants={fadeUp} className="section-label mb-4">
          Invitación digital
        </motion.p>
        <motion.h1
          custom={1}
          variants={fadeUp}
          className="font-script text-6xl md:text-8xl text-borgona mb-4"
        >
          Cami y Majo
        </motion.h1>
        <motion.p
          custom={2}
          variants={fadeUp}
          className="font-serif text-sm tracking-widest text-terracota uppercase"
        >
          21 · Agosto · 2026
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        className="w-full max-w-2xl"
      >
        <motion.p
          custom={3}
          variants={fadeUp}
          className="text-center text-xs tracking-widest uppercase text-borgona/50 mb-8 font-serif"
        >
          Propuestas de diseño
        </motion.p>

        <div className="flex flex-col gap-4">
          {propuestas.map((p, i) => (
            <motion.div key={p.id} custom={i + 4} variants={fadeUp}>
              <Link
                to={p.path}
                className="block border border-borgona/20 bg-white/40 hover:bg-borgona/5
                           transition-all duration-300 p-8 group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="section-label mb-2">{p.titulo}</p>
                    <h2 className="font-serif text-xl text-borgona mb-1">
                      {p.descripcion}
                    </h2>
                    <p className="font-serif text-xs text-borgona/50 italic">
                      {p.tag}
                    </p>
                  </div>
                  <span
                    className="text-borgona/30 group-hover:text-borgona group-hover:translate-x-1
                                   transition-all duration-300 font-serif text-lg mt-1"
                  >
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
