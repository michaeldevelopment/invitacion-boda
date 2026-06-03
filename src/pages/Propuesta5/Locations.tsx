import { useRef } from "react";
import { gsap, useGSAP } from "./shared/gsap.config";
import {
  IconIglesia,
  IconBrindis,
  IconMesa,
  IconPastel,
  IconLuna,
} from "./shared/icons";

const IGLESIA_MAP = "https://maps.app.goo.gl/Fa4F7R6wTxcUJ9YW9";
const RECEPCION_MAP = "https://maps.app.goo.gl/zFz6SJPdV2hQNEE9A";

const ITINERARIO = [
  {
    hora: "3:00 p.m.",
    label: "La promesa",
    Icon: IconIglesia,
    color: "#60141A",
    bgColor: "rgba(96,20,26,0.08)",
  },
  {
    hora: "5:00 p.m.",
    label: "El brindis por esta nueva etapa",
    Icon: IconBrindis,
    color: "#AB7E6C",
    bgColor: "rgba(171,126,108,0.10)",
  },
  {
    hora: "6:00 p.m.",
    label: "Compartiremos la mesa",
    Icon: IconMesa,
    color: "#7A8D61",
    bgColor: "rgba(122,141,97,0.10)",
  },
  {
    hora: "7:00 p.m.",
    label: "Algo dulce nos esperará",
    Icon: IconPastel,
    color: "#AB7E6C",
    bgColor: "rgba(171,126,108,0.10)",
  },
  {
    hora: "9:00 p.m.",
    label: "Nos despediremos",
    Icon: IconLuna,
    color: "#60141A",
    bgColor: "rgba(96,20,26,0.08)",
  },
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

      gsap.from(".p5-loc-title", {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: st,
      });

      gsap.from(".p5-loc-itinerary-node", {
        opacity: 0,
        x: -20,
        stagger: 0.14,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: st,
      });

      gsap.from(".p5-loc-iglesia", {
        x: -50,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.15,
        scrollTrigger: st,
      });

      gsap.from(".p5-loc-recepcion", {
        x: 50,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.25,
        scrollTrigger: st,
      });

      gsap.to(".p5-loc-stroke", {
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
      id="p5-ubicacion"
      ref={sectionRef}
      className="p5-section flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 px-8 sm:px-12"
      style={{ backgroundColor: "#E8E1D3" }}
    >
      {/* Encabezado */}
      <div className="p5-loc-title text-center mb-10 max-w-2xl mx-auto">
        <h2
          className="font-serif font-light"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#60141A" }}
        >
          Así viviremos éste día
        </h2>
        <p
          className="font-serif italic mt-3"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            color: "rgba(96,20,26,0.72)",
          }}
        >
          Aquí encontrarás los horarios y lugares para acompañarnos durante
          nuestro matrimonio
        </p>
      </div>

      {/* Timeline vertical con iconos */}
      <div className="flex flex-col items-center mb-16 w-full max-w-sm mx-auto">
        {ITINERARIO.map((item, i) => (
          <div key={i} className="flex flex-col items-center w-full">
            {/* Nodo con icono */}
            <div className="p5-loc-itinerary-node flex items-center gap-5 w-full">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border"
                style={{
                  backgroundColor: item.bgColor,
                  borderColor: `${item.color}30`,
                }}
              >
                <item.Icon color={item.color} size={22} />
              </div>
              <div>
                <p
                  className="font-serif tracking-[0.14em] uppercase"
                  style={{
                    fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
                    color: "rgba(96,20,26,0.6)",
                  }}
                >
                  {item.hora}
                </p>
                <p
                  className="font-serif italic leading-snug"
                  style={{
                    fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
                    color: "rgba(96,20,26,0.9)",
                  }}
                >
                  {item.label}
                </p>
              </div>
            </div>

            {/* Línea conectora */}
            {i < ITINERARIO.length - 1 && (
              <div
                className="w-px h-8"
                style={{
                  backgroundColor: "rgba(96,20,26,0.15)",
                  marginLeft: "1.375rem",
                  alignSelf: "flex-start",
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Cards de lugares */}
      <div className="p5-loc-cards w-full max-w-4xl flex flex-col lg:flex-row items-stretch gap-0 relative">
        {/* Iglesia */}
        <div
          className="p5-loc-iglesia p5-location-card flex-1 p-8 md:p-10 cursor-pointer"
          onMouseEnter={handleCardEnter}
          onMouseLeave={handleCardLeave}
        >
          <div className="p5-loc-pin mb-5">
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
            className="font-serif uppercase mb-3"
            style={{
              fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
              letterSpacing: "0.18em",
              color: "rgba(96,20,26,0.7)",
            }}
          >
            Celebración Eucarística
          </p>
          <h3
            className="font-serif font-light mb-2"
            style={{ fontSize: "clamp(1.2rem, 3vw, 1.5rem)", color: "#60141A" }}
          >
            Parroquia La Divina Eucaristía
          </h3>
          <p
            className="font-serif italic mb-1"
            style={{ fontSize: "clamp(0.95rem, 2vw, 1rem)", color: "#7A8D61" }}
          >
            Poblado · Medellín
          </p>
          <p
            className="font-serif mb-6 leading-relaxed"
            style={{
              fontSize: "clamp(0.95rem, 2vw, 1rem)",
              color: "rgba(96,20,26,0.75)",
            }}
          >
            Cl. 7 #35-56, El Poblado
          </p>
          <p
            className="font-serif font-light mb-6"
            style={{ fontSize: "clamp(1.4rem, 3vw, 1.8rem)", color: "#60141A" }}
          >
            3:00 p.m.
          </p>

          <a
            href={IGLESIA_MAP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto font-serif tracking-[0.25em] uppercase border px-6 py-3 sm:py-2.5 text-center transition-all duration-300"
            style={{
              fontSize: "clamp(0.7rem, 1.5vw, 0.75rem)",
              borderColor: "#60141A",
              color: "#60141A",
            }}
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

        {/* Divisor animado — solo desktop */}
        <div className="hidden lg:flex flex-col items-center justify-center px-6 py-10 relative">
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
              className="p5-loc-stroke"
              strokeOpacity="0.25"
            />
          </svg>
        </div>

        {/* Divisor mobile */}
        <div
          className="lg:hidden h-px mx-8"
          style={{ backgroundColor: "rgba(96,20,26,0.12)" }}
        />

        {/* Recepción */}
        <div
          className="p5-loc-recepcion p5-location-card flex-1 p-8 md:p-10 cursor-pointer"
          onMouseEnter={handleCardEnter}
          onMouseLeave={handleCardLeave}
        >
          <div className="p5-loc-pin mb-5">
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
            className="font-serif uppercase mb-3"
            style={{
              fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
              letterSpacing: "0.18em",
              color: "rgba(122,141,97,0.9)",
            }}
          >
            Recepción
          </p>
          <h3
            className="font-serif font-light mb-2"
            style={{ fontSize: "clamp(1.2rem, 3vw, 1.5rem)", color: "#60141A" }}
          >
            Quince Lucas Cocina Campestre
          </h3>
          <p
            className="font-serif italic mb-1"
            style={{ fontSize: "clamp(0.95rem, 2vw, 1rem)", color: "#7A8D61" }}
          >
            Santa Elena · Medellín
          </p>
          <p
            className="font-serif mb-6 leading-relaxed"
            style={{
              fontSize: "clamp(0.95rem, 2vw, 1rem)",
              color: "rgba(96,20,26,0.75)",
            }}
          >
            Cl 20C Sur #15-96, Santa Elena, Medellín
          </p>
          <p
            className="font-serif font-light mb-6"
            style={{ fontSize: "clamp(1.4rem, 3vw, 1.8rem)", color: "#60141A" }}
          >
            A continuación
          </p>

          <a
            href={RECEPCION_MAP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto font-serif tracking-[0.25em] uppercase border px-6 py-3 sm:py-2.5 text-center transition-all duration-300"
            style={{
              fontSize: "clamp(0.7rem, 1.5vw, 0.75rem)",
              borderColor: "#7A8D61",
              color: "#7A8D61",
            }}
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
