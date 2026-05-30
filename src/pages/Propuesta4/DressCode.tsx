import { useRef } from "react";
import { gsap, useGSAP } from "./shared/gsap.config";

export default function DressCode() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (prefersReduced) {
        gsap.set(sectionRef.current, { opacity: 1 });
        return;
      }

      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.from(".p4-dc-header", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".p4-dc-text", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: ".p4-dc-text",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".p4-dc-pinterest", {
        opacity: 0,
        y: 16,
        duration: 0.7,
        ease: "power2.out",
        delay: 0.1,
        scrollTrigger: {
          trigger: ".p4-dc-pinterest",
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <div
      ref={sectionRef}
      id="p2-dresscode"
      className="py-24 px-6"
      style={{ backgroundColor: "#f0ebe2", minHeight: "unset" }}
    >
      <div className="max-w-lg mx-auto text-center">
        {/* Header */}
        <div className="p4-dc-header mb-12">
          <p
            className="font-serif text-[0.8rem] md:text-[0.875rem] tracking-[0.3em] uppercase mb-3"
            style={{ color: "rgba(96,20,26,0.65)" }}
          >
            Vestimenta
          </p>
          <h2
            className="font-serif font-light"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#60141A" }}
          >
            El ambiente que soñamos
          </h2>
          <p
            className="font-serif italic text-sm mt-3"
            style={{ color: "rgba(96,20,26,0.55)" }}
          >
            Tendremos una celebración íntima, cálida y cercana
          </p>
        </div>

        {/* Instrucciones */}
        <div className="p4-dc-text">
          <p
            className="font-serif text-lg font-light mb-3"
            style={{ color: "#60141A" }}
          >
            Dress code: semi-formal
          </p>
          <p
            className="font-serif text-sm leading-relaxed mb-6"
            style={{ color: "rgba(96,20,26,0.65)" }}
          >
            Te sugerimos elegir tonos claros y suaves que armonicen con el
            ambiente íntimo y cálido que queremos crear juntos.
          </p>

          <div className="h-px mb-6 mx-auto w-16" style={{ backgroundColor: "rgba(96,20,26,0.15)" }} />

          <p
            className="font-serif text-sm italic mb-2"
            style={{ color: "rgba(96,20,26,0.6)" }}
          >
            Nos reservamos el blanco, beige y gris
          </p>
          <p
            className="font-serif text-sm italic mb-6"
            style={{ color: "rgba(96,20,26,0.6)" }}
          >
            Por favor evitar blanco puro y colores neón
          </p>
          <p
            className="font-serif text-sm font-bold tracking-wide mb-10"
            style={{ color: "#60141A" }}
          >
            NO USAR ESTAMPADOS
          </p>
        </div>

        {/* Enlace Pinterest — integrado en el diseño */}
        <div className="p4-dc-pinterest pt-10" style={{ borderTop: "1px solid rgba(96,20,26,0.12)" }}>
          <p
            className="font-serif text-[0.72rem] tracking-[0.28em] uppercase mb-6"
            style={{ color: "rgba(96,20,26,0.45)" }}
          >
            Referencias visuales
          </p>

          <a
            href="https://co.pinterest.com/mjrozo_/dress-code-algunos-referentes/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 group transition-all duration-300"
            style={{ color: "#60141A" }}
          >
            {/* Pinterest icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              style={{ opacity: 0.55 }}
            >
              <path
                d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.853 0 1.267.641 1.267 1.408 0 .858-.548 2.143-.831 3.332-.236.994.499 1.806 1.477 1.806 1.772 0 3.135-1.867 3.135-4.561 0-2.384-1.715-4.051-4.163-4.051-2.837 0-4.5 2.128-4.5 4.327 0 .857.33 1.775.742 2.275a.3.3 0 0 1 .069.286c-.076.313-.244.994-.277 1.134-.044.183-.146.221-.337.133-1.249-.582-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"
                fill="currentColor"
              />
            </svg>

            <span
              className="font-serif italic text-sm pb-px"
              style={{
                borderBottom: "1px solid rgba(96,20,26,0.25)",
                color: "rgba(96,20,26,0.75)",
              }}
            >
              Ver tablero de referencias de vestimenta
            </span>

            <span
              className="font-serif text-xs transition-transform duration-300 group-hover:translate-x-1"
              style={{ color: "rgba(96,20,26,0.4)" }}
            >
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
