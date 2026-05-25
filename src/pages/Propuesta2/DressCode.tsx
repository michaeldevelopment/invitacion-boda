import { useRef, useEffect } from "react";
import { gsap, useGSAP } from "./shared/gsap.config";

const SWATCHES = [
  { color: "#60141A", name: "Borgoña" },
  { color: "#7A8D61", name: "Verde olivo" },
  { color: "#AB7E6C", name: "Terracota" },
  { color: "#D4C4A8", name: "Crema Dorado" },
  { color: "#8B7355", name: "Camel" },
  { color: "#C4A882", name: "Arena" },
];

export default function DressCode() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const build = () => {
      (window as any).PinUtils?.build();
    };
    if (document.querySelector('script[src*="pinit.js"]')) {
      build();
    } else {
      const script = document.createElement("script");
      script.src = "//assets.pinterest.com/js/pinit.js";
      script.async = true;
      script.defer = true;
      script.onload = build;
      document.body.appendChild(script);
    }
  }, []);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (prefersReduced) {
        gsap.set(sectionRef.current, { opacity: 1 });
        gsap.set(".p4-swatch", { scale: 1, opacity: 1 });
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

      gsap.from(".p4-swatch", {
        scale: 0,
        opacity: 0,
        ease: "elastic.out(1, 0.5)",
        duration: 1.2,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".p4-swatches",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".p4-swatch-label", {
        opacity: 0,
        y: 10,
        duration: 0.5,
        stagger: 0.15,
        delay: 0.6,
        scrollTrigger: {
          trigger: ".p4-swatches",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".p4-dc-text", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: ".p4-dc-text",
          start: "top 85%",
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
      <div className="max-w-3xl mx-auto text-center">
        {/* Header */}
        <div className="p4-dc-header mb-16">
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
            Dress code
          </h2>
        </div>

        {/* Palette circles */}
        <div className="p4-swatches flex justify-center gap-8 sm:gap-12 md:gap-14 mb-14">
          {SWATCHES.map((s) => (
            <div
              key={s.color}
              className="flex flex-col items-center gap-4 text-center"
            >
              <div
                className="rounded-full"
                style={{
                  width: "52px",
                  height: "52px",
                  background: s.color,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                }}
              />
              <div className="p4-swatch-label">
                <p
                  className="font-serif text-[0.65rem] tracking-[0.2em] uppercase"
                  style={{ color: "rgba(96,20,26,0.7)" }}
                >
                  {s.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="p4-dc-text max-w-lg mx-auto">
          <p
            className="font-serif text-lg font-light mb-3"
            style={{ color: "#60141A" }}
          >
            Semi-formal
          </p>
          <p
            className="font-serif text-sm leading-relaxed mb-5"
            style={{ color: "rgba(96,20,26,0.65)" }}
          >
            Tonos tierra y cálidos. Te invitamos a vestir en colores que
            armonicen con el ambiente íntimo y cálido que queremos crear juntos.
          </p>
          <p
            className="font-serif text-sm italic mb-2"
            style={{ color: "rgba(96,20,26,0.6)" }}
          >
            Por favor evitar blanco puro y colores neón
          </p>
          <p
            className="font-serif text-sm font-bold tracking-wide"
            style={{ color: "#60141A" }}
          >
            NO USAR ESTAMPADOS
          </p>
        </div>

        {/* Pinterest board */}
        <div className="mt-12 mb-4">
          <div className="flex justify-center">
            <a
              data-pin-do="embedBoard"
              data-pin-board-width="600"
              data-pin-scale-height="300"
              data-pin-scale-width="80"
              href="https://co.pinterest.com/mjrozo_/dress-code-algunos-referentes/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
