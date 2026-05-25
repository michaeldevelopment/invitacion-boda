import { useRef } from "react";
import { gsap, useGSAP } from "./shared/gsap.config";
import FloralDecoration from "./shared/FloralDecoration";

const TEXT =
  "Te invitamos para celebrar juntos uno de los días más importantes de nuestras vidas";

const WORD_COLORS: Record<number, string> = {
  0: "#AB7E6C", // Te
  1: "#AB7E6C", // invitamos
  2: "#60141A", // para
  3: "#60141A", // celebrar
  4: "#60141A", // juntos
  5: "#7A8D61", // uno
  6: "#7A8D61", // de
  7: "#7A8D61", // los
  8: "#60141A", // días
  9: "#60141A", // más
  10: "#60141A", // importantes
  11: "#7A8D61", // de
  12: "#AB7E6C", // nuestras
  13: "#AB7E6C", // vidas
};

export default function InvitationPhrase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const words = TEXT.split(" ");

  useGSAP(
    () => {
      const isMobile = window.innerWidth < 768;
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=280%",
          pin: !isMobile,
          scrub: prefersReduced ? false : 1.2,
          anticipatePin: 1,
        },
      });

      tl.from(".p4-ip-word", {
        opacity: 0,
        y: 22,
        stagger: 0.12,
        ease: "power2.out",
      });
    },
    { scope: sectionRef },
  );

  return (
    <div
      ref={sectionRef}
      className="p4-grain relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#E8E1D3" }}
    >
      {/* Background decorations */}
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

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-8 md:px-16 text-center">
        <p
          className="font-serif italic leading-relaxed"
          style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", color: "#3a0d10" }}
        >
          {words.map((word, i) => (
            <span
              key={i}
              className="p4-ip-word p4-word"
              style={{ color: WORD_COLORS[i] ?? "#60141A" }}
            >
              {word}
              {i < words.length - 1 ? " " : ""}
            </span>
          ))}
        </p>

        {/* Decorative line below */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <div
            className="w-8 h-px bg-borgona"
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
  );
}
