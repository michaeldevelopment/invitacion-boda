import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "./shared/gsap.config";
import FloralDecoration from "./shared/FloralDecoration";

const TEXT =
  "Te invitamos para celebrar juntos uno de los días más importantes de nuestras vidas";

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

const BOKEH_CIRCLES = [
  { size: 180, top: "10%", left: "5%", color: "rgba(171,126,108,0.10)", blur: 60 },
  { size: 250, top: "60%", right: "8%", color: "rgba(96,20,26,0.07)", blur: 80 },
  { size: 120, top: "30%", left: "70%", color: "rgba(122,141,97,0.09)", blur: 50 },
  { size: 200, bottom: "15%", left: "20%", color: "rgba(171,126,108,0.08)", blur: 70 },
  { size: 90, top: "5%", right: "30%", color: "rgba(96,20,26,0.05)", blur: 40 },
];

function OrnamentSep() {
  return (
    <div className="flex items-center justify-center gap-4 my-16">
      <div className="w-14 h-px" style={{ backgroundColor: "#AB7E6C", opacity: 0.3 }} />
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <circle cx="4" cy="4" r="2.5" fill="#AB7E6C" fillOpacity="0.45" />
      </svg>
      <div className="w-14 h-px" style={{ backgroundColor: "#AB7E6C", opacity: 0.3 }} />
    </div>
  );
}

export default function InvitationPhrase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState(getTimeLeft);
  const words = TEXT.split(" ");

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (prefersReduced) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".p4-ip-word", {
        opacity: 0,
        y: 18,
        stagger: 0.06,
        ease: "power2.out",
        duration: 0.65,
      });

      tl.from(
        ".p4-countdown-title",
        { opacity: 0, y: 15, duration: 0.5, ease: "power2.out" },
        "+=0.25",
      );
      tl.from(
        ".p4-countdown-unit",
        {
          rotateX: -80,
          opacity: 0,
          transformOrigin: "50% top",
          stagger: 0.15,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.15",
      );

      BOKEH_CIRCLES.forEach((_, i) => {
        gsap.to(`.p4-ep-bokeh:nth-child(${i + 1})`, {
          y: (i % 2 === 0 ? -1 : 1) * (20 + i * 5),
          x: (i % 2 === 0 ? 1 : -1) * (10 + i * 3),
          duration: 4 + i * 0.8,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: i * 0.5,
        });
      });

      gsap.to(".p4-countdown-sep", {
        scale: 1.25,
        repeat: -1,
        yoyo: true,
        duration: 0.9,
        ease: "power1.inOut",
        stagger: 0.2,
        delay: 1.2,
      });
    },
    { scope: sectionRef },
  );

  const values = [time.days, time.hours, time.minutes, time.seconds];

  return (
    <div
      ref={sectionRef}
      className="relative py-28 px-8 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #E8E1D3 0%, #ddd0c0 55%, #cdb8a4 100%)",
      }}
    >
      {/* Bokeh de fondo */}
      {BOKEH_CIRCLES.map((c, i) => (
        <div
          key={i}
          className="p4-ep-bokeh absolute rounded-full pointer-events-none"
          aria-hidden="true"
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

      <FloralDecoration position="top-left" speed={0.08} size={120} opacity={0.22} />
      <FloralDecoration position="bottom-right" speed={0.1} size={150} opacity={0.28} />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Frase de invitación — un solo color */}
        <p
          className="font-serif italic leading-relaxed"
          style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.6rem)", color: "#60141A" }}
        >
          {words.map((word, i) => (
            <span key={i}>
              <span className="p4-ip-word p4-word">{word}</span>
              {i < words.length - 1 ? " " : ""}
            </span>
          ))}
        </p>

        <OrnamentSep />

        {/* Countdown */}
        <div className="relative">
          <p
            className="p4-countdown-title font-serif mb-5"
            style={{
              color: "rgba(96,20,26,0.55)",
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
                <div className="p4-countdown-unit" style={{ perspective: "400px" }}>
                  <span className="p4-countdown-number">{pad(val)}</span>
                  <span className="p4-countdown-label">{UNITS[i]}</span>
                </div>
                {i < values.length - 1 && (
                  <span className="p4-countdown-sep" aria-hidden="true">·</span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="w-10 h-px" style={{ backgroundColor: "#60141A", opacity: 0.18 }} />
            <p
              className="font-serif italic"
              style={{
                color: "rgba(96,20,26,0.55)",
                fontSize: "clamp(0.85rem, 2vw, 1rem)",
              }}
            >
              21 de agosto · 2026
            </p>
            <div className="w-10 h-px" style={{ backgroundColor: "#60141A", opacity: 0.18 }} />
          </div>
        </div>
      </div>
    </div>
  );
}
