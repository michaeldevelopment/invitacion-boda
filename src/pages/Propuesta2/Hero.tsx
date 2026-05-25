import { useRef, useMemo } from "react";
import { gsap, useGSAP } from "./shared/gsap.config";
import FloralDecoration from "./shared/FloralDecoration";

const NAME = "Cami  y  Majo";
const PETAL_PATH =
  "M9 0C9 0 18 8 16 16C14 22 9 26 9 26C9 26 4 22 2 16C0 8 9 0 9 0Z";

interface PetalData {
  size: number;
  startX: number;
  x: number;
  rotation: number;
  duration: number;
  delay: number;
  fill: string;
}

function generatePetals(count: number): PetalData[] {
  return Array.from({ length: count }, () => {
    const opacity = 0.15 + Math.random() * 0.25;
    return {
      size: 12 + Math.random() * 10,
      startX: Math.random() * 95,
      x: (Math.random() - 0.5) * 140,
      rotation: Math.random() * 560 - 280,
      duration: 3.5 + Math.random() * 4,
      delay: -(Math.random() * 6),
      fill: `rgba(171,126,108,${opacity.toFixed(2)})`,
    };
  });
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const petalsRef = useRef<HTMLDivElement>(null);
  const petals = useMemo(() => generatePetals(18), []);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const dur = prefersReduced ? 0.01 : 1;
      const staggerVal = prefersReduced ? 0 : 0.06;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(
        ".p4-hero-char",
        { y: 50, opacity: 0, duration: dur * 1.1, stagger: staggerVal },
        0,
      )
        .from(
          ".p4-hero-date",
          { opacity: 0, y: 12, duration: dur * 0.8 },
          dur * 0.5,
        )
        .from(
          ".p4-hero-divider",
          { scaleX: 0, opacity: 0, duration: dur * 0.8 },
          dur * 0.7,
        )
        .from(
          ".p4-hero-hour",
          { opacity: 0, y: 8, duration: dur * 0.7 },
          dur * 0.9,
        )
        .from(
          ".p4-hero-scroll",
          { opacity: 0, duration: dur * 0.6 },
          dur * 1.5,
        );

      // Pulsing scroll indicator
      gsap.to(".p4-hero-scroll-line", {
        scaleY: 1.6,
        opacity: 0.2,
        transformOrigin: "top center",
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: "power1.inOut",
        delay: dur * 2,
      });

      // Petals — falling loop
      if (petalsRef.current) {
        const petalEls =
          petalsRef.current.querySelectorAll<SVGElement>(".p4-hero-petal");
        petalEls.forEach((el, i) => {
          const p = petals[i];
          gsap.set(el, { left: p.startX + "%", top: "-30px" });
          gsap.to(el, {
            y: window.innerHeight + 70,
            x: p.x,
            rotation: p.rotation,
            duration: p.duration,
            delay: p.delay,
            repeat: -1,
            ease: "none",
          });
        });
      }

      // Scroll-out: names fade as user scrolls away
      gsap.to(".p4-hero-content", {
        opacity: 0,
        scale: 0.92,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="p4-hero-bg relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient overlay bottom */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

      {/* Falling petals */}
      <div
        ref={petalsRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ zIndex: 2 }}
      >
        {petals.map((p, i) => (
          <svg
            key={i}
            className="p4-hero-petal"
            width={p.size.toFixed(1)}
            height={(p.size * 1.44).toFixed(1)}
            viewBox="0 0 18 26"
            style={{ position: "absolute", willChange: "transform" }}
          >
            <path d={PETAL_PATH} fill={p.fill} />
          </svg>
        ))}
      </div>

      {/* Botanical decorations */}
      <FloralDecoration
        position="top-left"
        speed={0.15}
        size={130}
        opacity={0.35}
      />
      <FloralDecoration
        position="top-right"
        speed={0.12}
        size={110}
        opacity={0.28}
      />
      <FloralDecoration
        position="bottom-left"
        speed={0.18}
        size={100}
        opacity={0.25}
      />

      {/* Main content */}
      <div className="p4-hero-content relative z-10 flex flex-col items-center text-center px-8">
        {/* Date above names */}
        <p className="p4-hero-date font-serif text-base tracking-[0.4em] uppercase text-white/50 mb-8">
          21 · Agosto · 2026
        </p>

        {/* Names with per-character animation */}
        <h1
          className="font-script leading-none mb-6"
          style={{ fontSize: "clamp(3.5rem, 10vw, 7.5rem)", color: "#E8E1D3" }}
        >
          {NAME.split("").map((ch, i) => (
            <span
              key={i}
              className="p4-hero-char inline-block"
              style={{ whiteSpace: ch === " " ? "pre" : "normal" }}
            >
              {ch === " " ? " " : ch}
            </span>
          ))}
        </h1>

        {/* Divider */}
        <div className="p4-hero-divider flex items-center gap-4 mb-8">
          <div className="w-12 h-px bg-white/20" />
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 0L8.2 5.8L14 7L8.2 8.2L7 14L5.8 8.2L0 7L5.8 5.8Z"
              fill="#AB7E6C"
              fillOpacity="0.6"
            />
          </svg>
          <div className="w-12 h-px bg-white/20" />
        </div>

        {/* Hour */}
        <p className="p4-hero-hour font-serif text-base text-white/40">
          <i>
            "Amamos porque Él nos amó primero" <br /> 1 Jn, 4-19.
          </i>
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="p4-hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="font-serif text-[10px] tracking-widest uppercase text-white/30">
          Desliza
        </span>
        <div
          className="p4-hero-scroll-line w-px h-10 origin-top"
          style={{ background: "rgba(232,225,211,0.25)" }}
        />
      </div>
    </section>
  );
}
