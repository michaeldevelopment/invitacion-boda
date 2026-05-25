import { useEffect, useRef, useMemo, useState } from "react";
import { gsap, useGSAP } from "./shared/gsap.config";
import FloralDecoration from "./shared/FloralDecoration";

// ── Countdown ──────────────────────────────────────────────────
const TARGET = new Date("2026-08-21T15:00:00");
function getTimeLeft() {
  const diff = TARGET.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}
function pad(n: number) {
  return String(n).padStart(2, "0");
}
const UNITS = ["días", "horas", "minutos", "segundos"] as const;

// ── InvitationPhrase ───────────────────────────────────────────
const INVITE_TEXT =
  "Te invitamos para celebrar juntos uno de los días más importantes de nuestras vidas";
const WORD_COLORS: Record<number, string> = {
  0: "#AB7E6C",
  1: "#AB7E6C",
  2: "#60141A",
  3: "#60141A",
  4: "#60141A",
  5: "#7A8D61",
  6: "#7A8D61",
  7: "#7A8D61",
  8: "#60141A",
  9: "#60141A",
  10: "#60141A",
  11: "#7A8D61",
  12: "#AB7E6C",
  13: "#AB7E6C",
};

// ── Bokeh ──────────────────────────────────────────────────────
const BOKEH = [
  {
    size: 180,
    top: "10%",
    left: "5%",
    color: "rgba(171,126,108,0.12)",
    blur: 60,
  },
  {
    size: 250,
    top: "60%",
    right: "8%",
    color: "rgba(96,20,26,0.08)",
    blur: 80,
  },
  {
    size: 120,
    top: "30%",
    left: "70%",
    color: "rgba(122,141,97,0.1)",
    blur: 50,
  },
  {
    size: 200,
    bottom: "15%",
    left: "20%",
    color: "rgba(171,126,108,0.09)",
    blur: 70,
  },
  { size: 90, top: "5%", right: "30%", color: "rgba(96,20,26,0.06)", blur: 40 },
];

// ── Locations ──────────────────────────────────────────────────
const IGLESIA_MAP = "https://maps.app.goo.gl/Fa4F7R6wTxcUJ9YW9";
const RECEPCION_MAP = "https://maps.app.goo.gl/zFz6SJPdV2hQNEE9A";

export default function PinnedSequence() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState(getTimeLeft);
  const words = useMemo(() => INVITE_TEXT.split(" "), []);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  useGSAP(
    () => {
      const isMobile = window.innerWidth < 768;
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReduced) {
        gsap.set("#p4-panel-emotional .p4-ep-text-inner", {
          clipPath: "inset(0 0% 0 0)",
        });
        return;
      }

      // Un único ScrollTrigger con pin — 4 paneles en el mismo viewport
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=500%",
          pin: !isMobile,
          scrub: 1.2,
          anticipatePin: 1,
        },
      });

      // ── Panel 1: Frase de invitación ──
      tl.from(".p4-ps-invite .p4-ip-word", {
        opacity: 0,
        y: 22,
        stagger: 0.08,
        ease: "power2.out",
        duration: 0.8,
      });
      tl.to(
        "#p4-panel-invite",
        { opacity: 0, duration: 0.6, ease: "power1.inOut" },
        "+=0.4",
      );

      // ── Panel 2: Countdown — cross-fade suave con panel anterior ──
      tl.fromTo(
        "#p4-panel-countdown",
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power1.inOut" },
        "-=0.4",
      );
      tl.from(
        ".p4-ps-countdown .p4-countdown-title",
        { opacity: 0, y: 20, duration: 0.4, ease: "power2.out" },
        "-=0.1",
      );
      tl.from(
        ".p4-ps-countdown .p4-countdown-unit",
        {
          rotateX: -80,
          opacity: 0,
          transformOrigin: "50% top",
          stagger: 0.15,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.1",
      );
      tl.to(
        "#p4-panel-countdown",
        { opacity: 0, duration: 0.6, ease: "power1.inOut" },
        "+=0.4",
      );

      // ── Panel 3: Pausa emocional — cross-fade suave ──
      tl.fromTo(
        "#p4-panel-emotional",
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power1.inOut" },
        "-=0.4",
      );
      tl.from(
        "#p4-panel-emotional .p4-ep-label",
        { opacity: 0, y: 10, duration: 0.4, ease: "power2.out" },
        "-=0.1",
      );
      tl.fromTo(
        "#p4-panel-emotional .p4-ep-text-inner",
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", ease: "power2.inOut", duration: 0.8 },
        "-=0.1",
      );
      tl.to(
        "#p4-panel-emotional",
        { opacity: 0, duration: 0.6, ease: "power1.inOut" },
        "+=0.4",
      );

      // ── Panel 4: Ubicaciones — cross-fade suave ──
      tl.fromTo(
        "#p4-panel-locations",
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power1.inOut" },
        "-=0.4",
      );
      tl.from(
        ".p4-ps-locations .p4-loc-title",
        { opacity: 0, y: 20, duration: 0.4, ease: "power2.out" },
        "-=0.1",
      );
      tl.from(
        ".p4-ps-locations .p4-loc-iglesia",
        { x: -80, opacity: 0, duration: 0.5, ease: "power3.out" },
        "-=0.1",
      );
      tl.from(
        ".p4-ps-locations .p4-loc-recepcion",
        { x: 80, opacity: 0, duration: 0.5, ease: "power3.out" },
        "-=0.3",
      );
      tl.to(
        ".p4-ps-locations .p4-loc-stroke",
        { strokeDashoffset: 0, duration: 0.4, ease: "none" },
        "-=0.2",
      );

      // Animaciones independientes (loops continuos — no scrubbeadas)
      gsap.utils.toArray<HTMLElement>(".p4-ep-bokeh").forEach((el, i) => {
        gsap.to(el, {
          y: (i % 2 === 0 ? -1 : 1) * (20 + i * 5),
          x: (i % 2 === 0 ? 1 : -1) * (10 + i * 3),
          duration: 4 + i * 0.8,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: i * 0.5,
        });
      });
      gsap.to(".p4-ps-countdown .p4-countdown-sep", {
        scale: 1.25,
        repeat: -1,
        yoyo: true,
        duration: 0.9,
        ease: "power1.inOut",
        stagger: 0.2,
      });
    },
    { scope: wrapperRef },
  );

  const handleCardEnter = (e: React.MouseEvent<HTMLDivElement>) =>
    gsap.to(e.currentTarget, { y: -6, duration: 0.3, ease: "power2.out" });
  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) =>
    gsap.to(e.currentTarget, { y: 0, duration: 0.3, ease: "power2.out" });

  const values = [time.days, time.hours, time.minutes, time.seconds];

  return (
    <div ref={wrapperRef} className="relative h-screen overflow-hidden">
      {/* ══ Panel 1: Frase de invitación ══ */}
      <div
        id="p4-panel-invite"
        className="p4-ps-invite p4-grain absolute inset-0 flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#E8E1D3" }}
      >
        <FloralDecoration
          position="bottom-right"
          speed={0.1}
          size={160}
          opacity={0.3}
        />
        <FloralDecoration
          position="top-left"
          speed={0.08}
          size={120}
          opacity={0.2}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-8 md:px-16 text-center">
          <p
            className="font-serif italic leading-relaxed"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", color: "#3a0d10" }}
          >
            {words.map((word, i) => (
              <span key={i}>
                <span
                  className="p4-ip-word p4-word"
                  style={{ color: WORD_COLORS[i] ?? "#60141A" }}
                >
                  {word}
                </span>
                {i < words.length - 1 ? " " : ""}
              </span>
            ))}
          </p>
          <div className="flex items-center justify-center gap-4 mt-12">
            <div
              className="w-8 h-px"
              style={{ backgroundColor: "#60141A", opacity: 0.3 }}
            />
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <circle cx="5" cy="5" r="2" fill="#AB7E6C" fillOpacity="0.6" />
            </svg>
            <div
              className="w-8 h-px"
              style={{ backgroundColor: "#60141A", opacity: 0.3 }}
            />
          </div>
        </div>
      </div>

      {/* ══ Panel 2: Countdown ══ */}
      <div
        id="p4-panel-countdown"
        className="p4-ps-countdown p4-vignette absolute inset-0 flex flex-col items-center justify-center"
        style={{ backgroundColor: "#E8E1D3", opacity: 0 }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 text-center px-8">
          <p
            className="p4-countdown-title section-label mb-4 font-serif"
            style={{
              color: "#AB7E6C",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              fontSize: "0.7rem",
            }}
          >
            faltan
          </p>
          <div className="flex items-start gap-3 md:gap-6 justify-center">
            {values.map((val, i) => (
              <div key={UNITS[i]} className="flex items-start gap-3 md:gap-6">
                <div
                  className="p4-countdown-unit"
                  style={{ perspective: "400px" }}
                >
                  <span className="p4-countdown-number">{pad(val)}</span>
                  <span className="p4-countdown-label">{UNITS[i]}</span>
                </div>
                {i < values.length - 1 && (
                  <span className="p4-countdown-sep" aria-hidden="true">
                    ·
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 flex items-center justify-center gap-4">
            <div
              className="w-10 h-px"
              style={{ backgroundColor: "#60141A", opacity: 0.2 }}
            />
            <p
              className="font-serif text-sm italic"
              style={{ color: "#AB7E6C" }}
            >
              21 de agosto · 2026
            </p>
            <div
              className="w-10 h-px"
              style={{ backgroundColor: "#60141A", opacity: 0.2 }}
            />
          </div>
        </div>
      </div>

      {/* ══ Panel 3: Pausa emocional ══ */}
      <div
        id="p4-panel-emotional"
        className="absolute inset-0 flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #E8E1D3 0%, #d9c9ba 50%, #c9b09a 100%)",
          opacity: 0,
        }}
      >
        {BOKEH.map((c, i) => (
          <div
            key={i}
            className="p4-ep-bokeh absolute rounded-full pointer-events-none"
            style={{
              width: c.size,
              height: c.size,
              background: c.color,
              filter: `blur(${c.blur}px)`,
              top: c.top,
              left: (c as { left?: string }).left,
              right: (c as { right?: string }).right,
              bottom: (c as { bottom?: string }).bottom,
            }}
          />
        ))}
        <FloralDecoration
          position="bottom-right"
          speed={0.2}
          size={180}
          opacity={0.4}
        />
        <FloralDecoration
          position="top-left"
          speed={0.15}
          size={130}
          opacity={0.28}
        />

        <div className="relative z-10 text-center px-8 max-w-2xl mx-auto">
          <div
            className="p4-ep-text-inner"
            style={{ clipPath: "inset(0 100% 0 0)" }}
          >
            <p
              className="font-serif italic"
              style={{
                fontSize: "clamp(1.8rem, 5vw, 3.2rem)",
                color: "#60141A",
                lineHeight: 1.3,
              }}
            >
              Tu compañía y tus oraciones son para nosotros el mejor regalo
            </p>
          </div>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div
              className="w-6 h-px"
              style={{ backgroundColor: "#AB7E6C", opacity: 0.5 }}
            />
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <circle cx="4" cy="4" r="2.5" fill="#AB7E6C" fillOpacity="0.6" />
            </svg>
            <div
              className="w-6 h-px"
              style={{ backgroundColor: "#AB7E6C", opacity: 0.5 }}
            />
          </div>
        </div>
      </div>

      {/* ══ Panel 4: Ubicaciones ══ */}
      <div
        id="p4-panel-locations"
        className="p4-ps-locations absolute inset-0 flex flex-col items-center justify-center py-12 px-6"
        style={{ backgroundColor: "#E8E1D3", opacity: 0 }}
      >
        <div className="p4-loc-title text-center mb-8">
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
            21/08/2026
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
          </div>
        </div>

        <div className="p4-loc-cards w-full max-w-4xl flex flex-col md:flex-row items-stretch relative">
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
                <circle
                  cx="14"
                  cy="14"
                  r="5"
                  fill="#60141A"
                  fillOpacity="0.5"
                />
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

          {/* Línea divisora */}
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
                <circle
                  cx="14"
                  cy="14"
                  r="5"
                  fill="#7A8D61"
                  fillOpacity="0.5"
                />
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
              Santa Elena · Medellín
            </p>
            <p
              className="font-serif text-xs mb-6 leading-relaxed"
              style={{ color: "rgba(96,20,26,0.55)" }}
            >
              Cl 20C Sur #15-96, Santa Elena
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
    </div>
  );
}
