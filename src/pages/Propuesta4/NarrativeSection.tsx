import { useRef } from "react";
import { gsap, useGSAP } from "./shared/gsap.config";
import FloralDecoration from "./shared/FloralDecoration";

export default function NarrativeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (prefersReduced) return;

      gsap.from(".p4-narrative", {
        opacity: 0,
        y: 24,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".p4-versiculo", {
        opacity: 0,
        y: 18,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.25,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <div
      ref={sectionRef}
      className="relative py-28 px-8 overflow-hidden"
      style={{ backgroundColor: "#EAE3D6" }}
    >
      <FloralDecoration position="top-right" speed={0.09} size={130} opacity={0.2} />
      <FloralDecoration position="bottom-left" speed={0.11} size={110} opacity={0.18} />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Párrafo narrativo */}
        <div className="p4-narrative mb-14">
          <p
            className="font-serif italic leading-loose"
            style={{
              color: "rgba(96,20,26,0.68)",
              lineHeight: 2,
              fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
            }}
          >
            Más que una boda, celebramos la fidelidad de Dios.
            Durante cinco años Dios ha estado tejiendo nuestra historia entre risas, llantos,
            aprendizajes, retos y mucha Gracia. Queremos celebrar las personas, los procesos,
            las oraciones y los momentos que nos han traído hasta ahí. Por eso, hemos preparado
            este momento para compartir con quienes han sido parte de nuestra historia.
          </p>
        </div>

        {/* Divisor */}
        <div className="flex items-center justify-center gap-5 mb-14">
          <div className="flex-1 h-px max-w-[80px]" style={{ backgroundColor: "rgba(96,20,26,0.15)" }} />
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M5 0L6.1 3.9L10 5L6.1 6.1L5 10L3.9 6.1L0 5L3.9 3.9Z"
              fill="#AB7E6C"
              fillOpacity="0.4"
            />
          </svg>
          <div className="flex-1 h-px max-w-[80px]" style={{ backgroundColor: "rgba(96,20,26,0.15)" }} />
        </div>

        {/* Versículo */}
        <div className="p4-versiculo">
          <p
            className="font-serif italic font-light"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", color: "#60141A", lineHeight: 1.4 }}
          >
            "Amamos porque Él nos amó primero"
          </p>
          <p
            className="font-serif mt-4"
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "rgba(96,20,26,0.48)",
            }}
          >
            1 Jn 4,19
          </p>
        </div>
      </div>
    </div>
  );
}
