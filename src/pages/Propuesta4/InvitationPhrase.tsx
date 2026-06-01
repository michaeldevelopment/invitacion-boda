import { useRef } from "react";
import { gsap, useGSAP } from "./shared/gsap.config";
import FloralDecoration from "./shared/FloralDecoration";

const TEXT1 =
  "Hay momentos que cambian nuestras vidas y otros que marcan el comienzo de una nueva.";

const TEXT2 =
  "Nos encantaría que nos acompañaras a celebrar el día en que decidiremos caminar juntos para siempre.";

const BOKEH_CIRCLES = [
  {
    size: 180,
    top: "10%",
    left: "5%",
    color: "rgba(171,126,108,0.10)",
    blur: 60,
  },
  {
    size: 250,
    top: "60%",
    right: "8%",
    color: "rgba(96,20,26,0.07)",
    blur: 80,
  },
  {
    size: 120,
    top: "30%",
    left: "70%",
    color: "rgba(122,141,97,0.09)",
    blur: 50,
  },
  {
    size: 200,
    bottom: "15%",
    left: "20%",
    color: "rgba(171,126,108,0.08)",
    blur: 70,
  },
  { size: 90, top: "5%", right: "30%", color: "rgba(96,20,26,0.05)", blur: 40 },
];

function OrnamentSep() {
  return (
    <div className="flex items-center justify-center gap-4 my-16">
      <div
        className="w-14 h-px"
        style={{ backgroundColor: "#AB7E6C", opacity: 0.3 }}
      />
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <circle cx="4" cy="4" r="2.5" fill="#AB7E6C" fillOpacity="0.45" />
      </svg>
      <div
        className="w-14 h-px"
        style={{ backgroundColor: "#AB7E6C", opacity: 0.3 }}
      />
    </div>
  );
}

export default function InvitationPhrase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const words1 = TEXT1.split(" ");
  const words2 = TEXT2.split(" ");

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
        ".p4-versiculo",
        { opacity: 0, y: 18, duration: 0.8, ease: "power2.out" },
        "+=0.3",
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
    },
    { scope: sectionRef },
  );

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

      <FloralDecoration
        position="top-left"
        speed={0.08}
        size={120}
        opacity={0.22}
      />
      <FloralDecoration
        position="bottom-right"
        speed={0.1}
        size={150}
        opacity={0.28}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Frases de invitación */}
        <p
          className="font-serif italic leading-relaxed mb-6"
          style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.6rem)", color: "#60141A" }}
        >
          {words1.map((word: string, i: number) => (
            <span key={i}>
              <span className="p4-ip-word p4-word">{word}</span>
              {i < words1.length - 1 ? " " : ""}
            </span>
          ))}
        </p>
        <p
          className="font-serif italic leading-relaxed"
          style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.6rem)", color: "#60141A" }}
        >
          {words2.map((word: string, i: number) => (
            <span key={i}>
              <span className="p4-ip-word p4-word">{word}</span>
              {i < words2.length - 1 ? " " : ""}
            </span>
          ))}
        </p>

        <OrnamentSep />

        {/* Versículo */}
        <div className="p4-versiculo">
          <p
            className="font-serif italic font-light"
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
              color: "#60141A",
              lineHeight: 1.4,
            }}
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
            1 Juan 4,19
          </p>
        </div>
      </div>
    </div>
  );
}
