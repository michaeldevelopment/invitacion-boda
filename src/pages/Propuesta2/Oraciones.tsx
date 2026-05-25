import { useRef, useState } from "react"; // useState kept for oraciones list
import { gsap, useGSAP } from "./shared/gsap.config";

interface Oracion {
  id: number;
  texto: string;
  autor: string;
}

const SEED_ORACIONES: Oracion[] = [
  {
    id: 1,
    texto: "Que el amor de Dios guíe cada uno de sus pasos juntas.",
    autor: "La familia",
  },
  {
    id: 2,
    texto: "Mucho amor, risas y aventuras en este nuevo camino.",
    autor: "Un amigo cercano",
  },
  {
    id: 3,
    texto: "Que sus corazones sean siempre hogar el uno para el otro.",
    autor: "Con todo el amor",
  },
];

function loadOraciones(): Oracion[] {
  try {
    const stored = localStorage.getItem("p4-oraciones-v1");
    return stored ? (JSON.parse(stored) as Oracion[]) : SEED_ORACIONES;
  } catch {
    return SEED_ORACIONES;
  }
}

export default function Oraciones() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [oraciones] = useState<Oracion[]>(loadOraciones);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (prefersReduced) return;

      // Section title
      gsap.from(".p4-or-header", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Cards float with offset parallax
      gsap.utils.toArray<HTMLElement>(".p4-oracion-card").forEach((card, i) => {
        const dir = i % 2 === 0 ? 1 : -1;
        gsap.fromTo(
          card,
          { y: 30 * dir, opacity: 0, rotate: gsap.utils.random(-2, 2) },
          {
            y: 0,
            opacity: 1,
            rotate: 0,
            duration: 0.7,
            ease: "power2.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <div
      ref={sectionRef}
      className="px-6 py-24"
      style={{ backgroundColor: "#e2d8cb", minHeight: "unset" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="p4-or-header text-center mb-14">
          <p
            className="font-serif text-[0.8rem] md:text-[0.875rem] tracking-[0.3em] uppercase mb-3"
            style={{ color: "rgba(96,20,26,0.65)" }}
          >
            Lluvia de oraciones
          </p>
          <h2
            className="font-serif font-light mb-4"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#60141A",
              lineHeight: 1.25,
            }}
          >
            Tu oración y tu bendición son el regalo más grande que podemos
            recibir
          </h2>
        </div>

        {/* Existing oraciones */}
        <div
          ref={listRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14"
        >
          {oraciones.map((o) => (
            <div key={o.id} className="p4-oracion-card p-6 rounded-sm">
              <p
                className="font-serif italic text-sm leading-relaxed mb-4"
                style={{ color: "#60141A" }}
              >
                "{o.texto}"
              </p>
              <p
                className="font-serif text-[0.6rem] tracking-[0.2em] uppercase"
                style={{ color: "#AB7E6C" }}
              >
                — {o.autor}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
