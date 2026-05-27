import { useState } from "react";
import { motion } from "framer-motion";

type Phase = "idle" | "flap" | "paper" | "done";

interface Props {
  onOpen: () => void;
}

const ENVELOPE_W = "clamp(260px, 78vw, 340px)";
const ENVELOPE_H = "clamp(172px, 52vw, 228px)";

const WaxSeal = () => (
  <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
    <circle cx="40" cy="40" r="38" fill="#C9A84C" />
    <circle cx="40" cy="40" r="34" fill="none" stroke="#A8892E" strokeWidth="0.8" strokeDasharray="3 2" />
    <circle cx="40" cy="40" r="30" fill="none" stroke="#A8892E" strokeWidth="0.8" />
    <text
      x="40"
      y="46"
      textAnchor="middle"
      fill="#fff"
      fontFamily="'Cormorant Garamond', Georgia, serif"
      fontSize="15"
      fontStyle="italic"
      fontWeight="600"
    >
      C&amp;M
    </text>
  </svg>
);

export default function EnvelopeScreen({ onOpen }: Props) {
  const [phase, setPhase] = useState<Phase>("idle");

  const handleClick = () => {
    if (phase !== "idle") return;
    setPhase("flap");
    setTimeout(() => setPhase("paper"), 700);
    setTimeout(() => setPhase("done"), 1800);
    setTimeout(() => onOpen(), 2500);
  };

  const notIdle = phase !== "idle";

  return (
    <motion.div
      className="relative min-h-screen bg-crema overflow-hidden"
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      {/* Grain */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="grain-es">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-es)" />
      </svg>

      {/* Header */}
      <motion.div
        className="absolute top-[10vh] inset-x-0 flex flex-col items-center gap-4 z-50 pointer-events-none px-6"
        animate={notIdle ? { opacity: 0, y: -24 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
      >
        <p className="font-serif text-xs tracking-[0.35em] uppercase text-borgona/70">
          Nuestra Boda
        </p>
        <div className="font-serif text-5xl md:text-6xl lg:text-7xl text-borgona leading-tight text-center">
          <span>Camilo</span>
          <span className="font-script text-4xl md:text-5xl lg:text-6xl mx-3 text-terracota">
            {" "}y{" "}
          </span>
          <span>Majo</span>
        </div>
        <p className="font-serif text-sm md:text-base tracking-[0.3em] text-borgona/60">
          21 · AGOSTO · 26
        </p>
      </motion.div>

      {/* Paper — anclado en la boca del sobre, crece hacia arriba */}
      <motion.div
        className="absolute z-10 bg-white"
        style={{
          width: ENVELOPE_W,
          left: "50%",
          /* bottom apunta 24px dentro de la boca del sobre para que el papel parezca salir de adentro */
          bottom: "calc(clamp(60px, 12vh, 96px) + clamp(172px, 52vw, 228px) - 24px)",
          boxShadow: "0 -4px 24px rgba(0,0,0,0.08), 0 8px 20px rgba(0,0,0,0.05)",
        }}
        initial={{ x: "-50%", height: "0px" }}
        animate={
          phase === "paper"
            ? { x: "-50%", height: "38vh", transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } }
            : phase === "done"
            ? { x: "-50%", height: "38vh" }
            : { x: "-50%", height: "0px" }
        }
      />

      {/* Overlay blanco pantalla completa — cubre todo en fase "done" */}
      <motion.div
        className="absolute inset-0 z-[25] bg-white pointer-events-none"
        initial={{ opacity: 0 }}
        animate={phase === "done" ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.55, ease: "easeInOut" }}
      />

      {/* Sobre — centrado con left:50% + x:"-50%" para garantizar centrado exacto */}
      <motion.div
        className="absolute z-20"
        style={{ bottom: "clamp(60px, 12vh, 96px)", left: "50%" }}
        initial={{ x: "-50%", y: 0, opacity: 1 }}
        animate={
          phase === "done"
            ? { x: "-50%", y: 16, opacity: 0 }
            : { x: "-50%", y: 0, opacity: 1 }
        }
        transition={{ duration: 0.4, delay: 0.05 }}
      >
        <div
          className="relative cursor-pointer select-none"
          style={{ width: ENVELOPE_W, height: ENVELOPE_H }}
          onClick={handleClick}
        >
          {/* Cuerpo del sobre — con gradiente y líneas de pliegue realistas */}
          <div
            className="absolute inset-0 rounded-sm overflow-hidden"
            style={{
              boxShadow:
                "0 2px 4px rgba(0,0,0,0.12), 0 6px 18px rgba(0,0,0,0.14), 0 16px 40px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.14)",
            }}
          >
            <svg
              viewBox="0 0 340 228"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="envBody" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8da073" />
                  <stop offset="60%" stopColor="#7a8d61" />
                  <stop offset="100%" stopColor="#677856" />
                </linearGradient>
                <linearGradient id="envFoldBottom" x1="0.5" y1="0" x2="0.5" y2="1">
                  <stop offset="0%" stopColor="#5e7248" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#4f6040" stopOpacity="0.7" />
                </linearGradient>
                <linearGradient id="envFoldLeft" x1="0" y1="0.5" x2="1" y2="0.5">
                  <stop offset="0%" stopColor="#4f6040" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#7a8d61" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="envFoldRight" x1="1" y1="0.5" x2="0" y2="0.5">
                  <stop offset="0%" stopColor="#4f6040" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#7a8d61" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              {/* Base con gradiente */}
              <rect x="0" y="0" width="340" height="228" fill="url(#envBody)" />
              {/* Pliegue inferior */}
              <polygon points="0,228 170,120 340,228" fill="url(#envFoldBottom)" />
              {/* Pliegue izquierdo */}
              <polygon points="0,0 0,228 112,114" fill="url(#envFoldLeft)" />
              {/* Pliegue derecho */}
              <polygon points="340,0 340,228 228,114" fill="url(#envFoldRight)" />
              {/* Líneas de pliegue — inferiores */}
              <line x1="0" y1="228" x2="170" y2="120" stroke="#3e5232" strokeWidth="0.9" opacity="0.55" />
              <line x1="340" y1="228" x2="170" y2="120" stroke="#3e5232" strokeWidth="0.9" opacity="0.55" />
              {/* Líneas de pliegue — laterales (más sutiles) */}
              <line x1="0" y1="0" x2="112" y2="114" stroke="#3e5232" strokeWidth="0.7" opacity="0.30" />
              <line x1="340" y1="0" x2="228" y2="114" stroke="#3e5232" strokeWidth="0.7" opacity="0.30" />
              {/* Franja superior — sombra de apertura */}
              <rect x="0" y="0" width="340" height="5" fill="rgba(0,0,0,0.10)" />
              {/* Franja inferior — peso visual */}
              <rect x="0" y="223" width="340" height="5" fill="rgba(0,0,0,0.12)" />
            </svg>
          </div>

          {/* Interior blanco — oculto cuando cerrado, aparece al abrir la solapa */}
          <motion.div
            className="absolute inset-0 z-[5]"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 67.06% 50%, 50% 52.63%, 32.94% 50%)",
              backgroundColor: "#faf7f2",
            }}
            animate={{ opacity: notIdle ? 1 : 0 }}
            transition={{ duration: 0.35 }}
          />

          {/* Solapa animada con perspectiva 3D */}
          <motion.div
            className="absolute top-0 left-0 w-full origin-top z-10"
            style={{ transformPerspective: 600 }}
            animate={notIdle ? { rotateX: -165, opacity: 0 } : { rotateX: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <svg
              viewBox="0 0 340 100"
              className="w-full"
              style={{ height: 100 }}
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="flapGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8da073" />
                  <stop offset="100%" stopColor="#5e7248" />
                </linearGradient>
              </defs>
              <polygon points="0,0 340,0 170,92" fill="url(#flapGrad)" />
              {/* Bordes de la solapa */}
              <line x1="0" y1="0" x2="170" y2="92" stroke="#3e5232" strokeWidth="0.8" opacity="0.45" />
              <line x1="340" y1="0" x2="170" y2="92" stroke="#3e5232" strokeWidth="0.8" opacity="0.45" />
              {/* Línea de borde superior */}
              <line x1="0" y1="0" x2="340" y2="0" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
            </svg>
          </motion.div>

          {/* Sello de lacre — CORREGIDO: x/y en Framer Motion para no conflictar con CSS transform */}
          <motion.div
            className="absolute z-20"
            style={{
              top: "44%",
              left: "50%",
              width: "clamp(50px, 14vw, 66px)",
              height: "clamp(50px, 14vw, 66px)",
            }}
            initial={{ x: "-50%", y: "-50%", opacity: 1, scale: 1 }}
            animate={
              notIdle
                ? { x: "-50%", y: "-50%", opacity: 0, scale: 0.6 }
                : { x: "-50%", y: "-50%", opacity: 1, scale: 1 }
            }
            transition={{ duration: 0.3 }}
          >
            <WaxSeal />
          </motion.div>
        </div>
      </motion.div>

      {/* CTA pulsante */}
      <motion.p
        className="absolute inset-x-0 z-50 text-center font-serif text-sm md:text-base tracking-[0.3em] uppercase text-borgona font-semibold"
        style={{ bottom: "clamp(18px, 3.5vh, 32px)" }}
        animate={
          phase === "idle"
            ? { opacity: [0.6, 1, 0.6] }
            : { opacity: 0 }
        }
        transition={
          phase === "idle"
            ? { duration: 2, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.3 }
        }
      >
        Toca para abrir la invitación
      </motion.p>
    </motion.div>
  );
}
