import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "./shared/gsap.config";
import FloralDecoration from "./shared/FloralDecoration";

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

export default function NarrativeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState(getTimeLeft);

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

      gsap.from(".p5-narrative", {
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

      const st = {
        trigger: sectionRef.current,
        start: "top 78%",
        toggleActions: "play none none none",
      };

      gsap.from(".p5-countdown-title", {
        opacity: 0,
        y: 15,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.4,
        scrollTrigger: st,
      });
      gsap.from(".p5-countdown-unit", {
        rotateX: -80,
        opacity: 0,
        transformOrigin: "50% top",
        stagger: 0.15,
        duration: 0.5,
        ease: "power3.out",
        delay: 0.55,
        scrollTrigger: st,
      });
      gsap.to(".p5-countdown-sep", {
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
      className="relative py-24 sm:py-28 px-8 sm:px-12 overflow-hidden"
      style={{ backgroundColor: "#EAE3D6" }}
    >
      <FloralDecoration
        position="top-right"
        speed={0.09}
        size={130}
        opacity={0.2}
      />
      <FloralDecoration
        position="bottom-left"
        speed={0.11}
        size={110}
        opacity={0.18}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Párrafo narrativo */}
        <div className="p5-narrative mb-14">
          <p
            className="font-serif italic leading-loose"
            style={{
              color: "rgba(96,20,26,0.8)",
              lineHeight: 2,
              fontSize: "clamp(1.05rem, 2.3vw, 1.3rem)",
            }}
          >
            Más que una boda, celebramos la fidelidad de Dios. Durante cinco
            años Dios ha estado tejiendo nuestra historia entre risas, llantos,
            aprendizajes, retos y mucha Gracia. Queremos celebrar las personas,
            los procesos, las oraciones y los momentos que nos han traído hasta
            ahí. Por eso, hemos preparado este momento para compartir con
            quienes han sido parte de nuestra historia.
          </p>
        </div>

        {/* Divisor */}
        <div className="flex items-center justify-center gap-5 mb-14">
          <div
            className="flex-1 h-px max-w-[80px]"
            style={{ backgroundColor: "rgba(96,20,26,0.15)" }}
          />
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M5 0L6.1 3.9L10 5L6.1 6.1L5 10L3.9 6.1L0 5L3.9 3.9Z"
              fill="#AB7E6C"
              fillOpacity="0.4"
            />
          </svg>
          <div
            className="flex-1 h-px max-w-[80px]"
            style={{ backgroundColor: "rgba(96,20,26,0.15)" }}
          />
        </div>

        {/* Countdown */}
        <div className="relative">
          <p
            className="p5-countdown-title font-serif mb-5"
            style={{
              color: "rgba(96,20,26,0.55)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              fontSize: "0.7rem",
            }}
          >
            faltan
          </p>

          <div className="flex items-start gap-2 md:gap-5 justify-center">
            {values.map((val, i) => (
              <div key={UNITS[i]} className="flex items-start gap-2 md:gap-5">
                <div
                  className="p5-countdown-unit"
                  style={{ perspective: "400px" }}
                >
                  <span className="p5-countdown-number">{pad(val)}</span>
                  <span className="p5-countdown-label">{UNITS[i]}</span>
                </div>
                {i < values.length - 1 && (
                  <span className="p5-countdown-sep" aria-hidden="true">
                    ·
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <div
              className="w-10 h-px"
              style={{ backgroundColor: "#60141A", opacity: 0.18 }}
            />
            <p
              className="font-serif italic"
              style={{
                color: "rgba(96,20,26,0.72)",
                fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
              }}
            >
              21 de agosto · 2026
            </p>
            <div
              className="w-10 h-px"
              style={{ backgroundColor: "#60141A", opacity: 0.18 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
