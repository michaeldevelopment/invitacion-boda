import { useRef } from "react";
import { gsap, useGSAP } from "./shared/gsap.config";

const IGLESIA_MAP = "https://maps.app.goo.gl/Fa4F7R6wTxcUJ9YW9";
const RECEPCION_MAP = "https://maps.app.goo.gl/zFz6SJPdV2hQNEE9A";

const ITINERARIO = [
  { hora: "3:00 p.m.", label: "La promesa - Celebración eucarística" },
  { hora: "5:00 p.m.", label: "El brindis por esta nueva etapa" },
  { hora: "6:00 p.m.", label: "Compartiremos la mesa" },
  { hora: "7:00 p.m.", label: "Algo dulce nos esperará" },
  { hora: "9:00 p.m.", label: "Nos despediremos" },
];

export default function Locations() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (prefersReduced) return;

      const st = {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      };

      gsap.from(".p4-loc-title", {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: st,
      });
      gsap.from(".p4-loc-itinerario", {
        opacity: 0,
        y: 16,
        duration: 0.7,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: st,
      });
      gsap.from(".p4-loc-iglesia", {
        x: -50,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.15,
        scrollTrigger: st,
      });
      gsap.from(".p4-loc-recepcion", {
        x: 50,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.25,
        scrollTrigger: st,
      });
      gsap.to(".p4-loc-stroke", {
        strokeDashoffset: 0,
        duration: 0.6,
        ease: "power2.inOut",
        delay: 0.4,
        scrollTrigger: st,
      });
    },
    { scope: sectionRef },
  );

  const handleCardEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, { y: -6, duration: 0.3, ease: "power2.out" });
  };
  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, { y: 0, duration: 0.3, ease: "power2.out" });
  };

  return (
    <div
      id="p2-ubicacion"
      ref={sectionRef}
      className="p4-section flex flex-col items-center justify-center py-24 px-6"
      style={{ backgroundColor: "#E8E1D3" }}
    >
      {/* Encabezado */}
      <div className="p4-loc-title text-center mb-10">
        <p
          className="font-serif text-[0.8rem] md:text-[0.875rem] tracking-[0.3em] uppercase mb-3"
          style={{ color: "rgba(96,20,26,0.65)" }}
        >
          El día
        </p>
        <h2
          className="font-serif font-light"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#60141A" }}
        >
          Así viviremos este día
        </h2>
        <p
          className="font-serif italic text-sm mt-3"
          style={{ color: "rgba(96,20,26,0.55)" }}
        >
          Aquí encontrarás los horarios y lugares para acompañarnos durante
          nuestro matrimonio
        </p>
      </div>

      {/* Itinerario */}
      <div className="p4-loc-itinerario flex flex-col items-center gap-3 mb-16">
        {ITINERARIO.map((item, i) => (
          <div key={i} className="flex items-center gap-4">
            <span
              className="font-serif text-xs tracking-[0.18em] text-right"
              style={{ color: "rgba(96,20,26,0.5)", minWidth: "5.5rem" }}
            >
              {item.hora}
            </span>
            <div
              className="w-px h-3"
              style={{ backgroundColor: "rgba(96,20,26,0.2)" }}
            />
            <span
              className="font-serif italic text-sm"
              style={{ color: "rgba(96,20,26,0.7)" }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Cards de lugares */}
      <div className="p4-loc-cards w-full max-w-4xl flex flex-col md:flex-row items-stretch gap-0 relative">
        {/* Iglesia */}
        <div
          className="p4-loc-iglesia p4-location-card flex-1 p-8 md:p-10 cursor-pointer"
          onMouseEnter={handleCardEnter}
          onMouseLeave={handleCardLeave}
        >
          <div className="p4-loc-pin mb-5">
            <svg width="28" height="36" viewBox="0 0 28 36" fill="none">
              <path
                d="M14 0C6.268 0 0 6.268 0 14C0 22 14 36 14 36C14 36 28 22 28 14C28 6.268 21.732 0 14 0Z"
                fill="#60141A"
                fillOpacity="0.15"
                stroke="#60141A"
                strokeWidth="1.5"
              />
              <circle cx="14" cy="14" r="5" fill="#60141A" fillOpacity="0.5" />
            </svg>
          </div>

          <p
            className="font-serif text-[0.75rem] md:text-[0.8rem] tracking-[0.25em] uppercase mb-3"
            style={{ color: "rgba(96,20,26,0.65)" }}
          >
            Celebración Eucarística
          </p>
          <h3
            className="font-serif font-light text-xl md:text-2xl mb-2"
            style={{ color: "#60141A" }}
          >
            Parroquia La Divina Eucaristía
          </h3>
          <p
            className="font-serif text-sm italic mb-1"
            style={{ color: "#7A8D61" }}
          >
            Poblado · Medellín
          </p>
          <p
            className="font-serif text-xs mb-6 leading-relaxed"
            style={{ color: "rgba(96,20,26,0.55)" }}
          >
            Cl. 7 #35-56, El Poblado
          </p>
          <p
            className="font-serif font-light text-2xl mb-6"
            style={{ color: "#60141A" }}
          >
            3:00 p.m.
          </p>

          <a
            href={IGLESIA_MAP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-serif text-[0.65rem] tracking-[0.25em] uppercase border px-6 py-2.5 transition-all duration-300"
            style={{ borderColor: "#60141A", color: "#60141A" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#60141A";
              e.currentTarget.style.color = "#E8E1D3";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#60141A";
            }}
          >
            Ver ubicación
          </a>
        </div>

        {/* Divider animado */}
        <div className="hidden md:flex flex-col items-center justify-center px-6 py-10 relative">
          <svg
            width="2"
            height="200"
            viewBox="0 0 2 200"
            className="absolute top-1/2 -translate-y-1/2"
          >
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="200"
              stroke="#60141A"
              strokeWidth="1"
              strokeDasharray="200"
              strokeDashoffset="200"
              className="p4-loc-stroke"
              strokeOpacity="0.25"
            />
          </svg>
        </div>

        {/* Recepción */}
        <div
          className="p4-loc-recepcion p4-location-card flex-1 p-8 md:p-10 cursor-pointer"
          onMouseEnter={handleCardEnter}
          onMouseLeave={handleCardLeave}
        >
          <div className="p4-loc-pin mb-5">
            <svg width="28" height="36" viewBox="0 0 28 36" fill="none">
              <path
                d="M14 0C6.268 0 0 6.268 0 14C0 22 14 36 14 36C14 36 28 22 28 14C28 6.268 21.732 0 14 0Z"
                fill="#7A8D61"
                fillOpacity="0.15"
                stroke="#7A8D61"
                strokeWidth="1.5"
              />
              <circle cx="14" cy="14" r="5" fill="#7A8D61" fillOpacity="0.5" />
            </svg>
          </div>

          <p
            className="font-serif text-[0.75rem] md:text-[0.8rem] tracking-[0.25em] uppercase mb-3"
            style={{ color: "rgba(122,141,97,0.85)" }}
          >
            Recepción
          </p>
          <h3
            className="font-serif font-light text-xl md:text-2xl mb-2"
            style={{ color: "#60141A" }}
          >
            Quince Lucas Cocina Campestre
          </h3>
          <p
            className="font-serif text-sm italic mb-1"
            style={{ color: "#7A8D61" }}
          >
            Los Balsos · Medellín
          </p>
          <p
            className="font-serif text-xs mb-6 leading-relaxed"
            style={{ color: "rgba(96,20,26,0.55)" }}
          >
            Cl 20C Sur #15-96, Poblado, Medellín, Antioquia
          </p>
          <p
            className="font-serif font-light text-2xl mb-6"
            style={{ color: "#60141A" }}
          >
            A continuación
          </p>

          <a
            href={RECEPCION_MAP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-serif text-[0.65rem] tracking-[0.25em] uppercase border px-6 py-2.5 transition-all duration-300"
            style={{ borderColor: "#7A8D61", color: "#7A8D61" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#7A8D61";
              e.currentTarget.style.color = "#E8E1D3";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#7A8D61";
            }}
          >
            Ver ubicación
          </a>
        </div>
      </div>
    </div>
  );
}
