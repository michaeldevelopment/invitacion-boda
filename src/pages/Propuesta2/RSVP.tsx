import { useRef } from "react";
import { gsap, useGSAP } from "./shared/gsap.config";

const TEXTO_RSVP =
  "Por favor confírmanos tu asistencia antes del 1 de junio. Después de esa fecha, si no hemos recibido respuesta, asumiremos con cariño que no podrás acompañarnos.";

const WHATSAPP_URL = "https://wa.link/ousb8f";

export default function RSVP() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const displayRef = useRef<HTMLParagraphElement>(null);
  const typewriterObj = useRef({ val: 0 });

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReduced) {
        gsap.set(sectionRef.current, { opacity: 1 });
      } else {
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
      }

      // Title
      gsap.from(".p4-rsvp-title", {
        opacity: 0,
        y: 18,
        duration: prefersReduced ? 0.01 : 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Typewriter
      gsap.set(typewriterObj.current, { val: 0 });
      gsap.to(typewriterObj.current, {
        val: TEXTO_RSVP.length,
        duration: prefersReduced ? 0.01 : TEXTO_RSVP.length * 0.04,
        ease: "none",
        onUpdate: () => {
          if (displayRef.current) {
            displayRef.current.textContent = TEXTO_RSVP.slice(
              0,
              Math.round(typewriterObj.current.val),
            );
          }
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // Content slides in
      gsap.from(".p4-rsvp-content", {
        opacity: 0,
        y: 30,
        duration: prefersReduced ? 0.01 : 0.9,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <div
      ref={sectionRef}
      id="p2-rsvp"
      className="p4-section py-24 px-6 relative flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#2e1710", opacity: 0 }}
    >
      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 w-full max-w-lg mx-auto text-center">
        {/* Title */}
        <div className="p4-rsvp-title mb-10">
          <h2
            className="font-serif font-light mb-3"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#E8E1D3" }}
          >
            Confirma tu asistencia
          </h2>
          <p
            className="font-serif font-light"
            style={{
              fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
              color: "rgba(171,126,108,0.8)",
            }}
          >
            Antes del 1 de junio
          </p>
        </div>

        {/* Typewriter text */}
        <div
          className="p4-rsvp-content mb-10 border-l-2 pl-5 text-left"
          style={{ borderColor: "rgba(171,126,108,0.3)" }}
        >
          <p
            ref={displayRef}
            className="font-serif italic leading-relaxed"
            style={{
              fontSize: "clamp(0.85rem, 1.8vw, 1.1rem)",
              color: "rgba(232,225,211,0.65)",
              minHeight: "4em",
            }}
          />
          <span className="p4-cursor" aria-hidden="true" />
        </div>

        {/* WhatsApp button */}
        <div className="p4-rsvp-content pt-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 font-serif tracking-[0.35em] uppercase transition-all duration-300"
            style={{
              borderColor: "#E8E1D3",
              color: "#E8E1D3",
              fontSize: "clamp(0.75rem, 1.8vw, 0.95rem)",
              padding: "clamp(0.75rem, 2vw, 1rem) clamp(2rem, 5vw, 3.5rem)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#E8E1D3";
              e.currentTarget.style.color = "#2e1710";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#E8E1D3";
            }}
          >
            Confirmar asistencia
          </a>
        </div>

        {/* Closing message */}
        <div className="p4-rsvp-content pt-12">
          <p
            className="font-serif italic mb-3"
            style={{
              fontSize: "clamp(1.4rem, 3.5vw, 2.6rem)",
              color: "rgba(232,225,211,0.75)",
              lineHeight: 1.25,
            }}
          >
            Esperamos con ansias compartir contigo éste dia tan especial
          </p>
          <p
            className="font-serif"
            style={{
              fontSize: "clamp(0.85rem, 2vw, 1.2rem)",
              color: "rgba(232,225,211,0.45)",
            }}
          >
            Gracias por acompañarnos. Dios te bendiga en creces.
          </p>
        </div>
      </div>
    </div>
  );
}
