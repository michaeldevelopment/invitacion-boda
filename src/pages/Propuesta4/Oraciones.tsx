import { useRef } from "react";
import { gsap, useGSAP } from "./shared/gsap.config";

export default function Oraciones() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (prefersReduced) return;

      gsap.from(".p4-or-header", {
        opacity: 0,
        y: 24,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
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
      <div className="max-w-xl mx-auto text-center">
        <div className="p4-or-header">
          <h2
            className="font-serif font-light mb-8"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
              color: "#60141A",
              lineHeight: 1.2,
            }}
          >
            Lluvia de oraciones
          </h2>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12" style={{ backgroundColor: "rgba(96,20,26,0.18)" }} />
            <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
              <circle cx="3.5" cy="3.5" r="2" fill="#AB7E6C" fillOpacity="0.5" />
            </svg>
            <div className="h-px w-12" style={{ backgroundColor: "rgba(96,20,26,0.18)" }} />
          </div>

          <p
            className="font-serif leading-relaxed"
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
              color: "rgba(96,20,26,0.65)",
              lineHeight: 1.8,
            }}
          >
            Lo más importante para nosotros es compartir ese día contigo.
          </p>

          <p
            className="font-serif italic mt-5 text-sm leading-relaxed"
            style={{ color: "rgba(96,20,26,0.5)" }}
          >
            Te invitamos a acompañarnos desde ahora con tus oraciones por nuestro
            matrimonio, nuestro hogar y todo lo que estamos por construir.
          </p>
        </div>
      </div>
    </div>
  );
}
