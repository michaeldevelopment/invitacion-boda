import { useEffect, useRef, useState } from "react";

interface LoaderProps {
  onLoaded: () => void;
}

const MIN_DISPLAY_MS = 2400;

export default function Loader({ onLoaded }: LoaderProps) {
  const [phase, setPhase] = useState<
    "entering" | "loading" | "finishing" | "done"
  >("entering");
  const startRef = useRef(Date.now());

  // Entrance: letras y corazón aparecen 80ms tras montar
  useEffect(() => {
    const t = setTimeout(() => setPhase("loading"), 80);
    return () => clearTimeout(t);
  }, []);

  // Detección de carga real + tiempo mínimo de display
  useEffect(() => {
    const finish = () => {
      const wait = Math.max(
        0,
        MIN_DISPLAY_MS - (Date.now() - startRef.current),
      );
      setTimeout(() => {
        setPhase("finishing");
        setTimeout(() => {
          setPhase("done");
          onLoaded();
        }, 650);
      }, wait);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      window.removeEventListener("load", finish);
    };
  }, [onLoaded]);

  if (phase === "done") return null;

  const entered = phase !== "entering";

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{
        backgroundColor: "#E8E1D3",
        opacity: phase === "finishing" ? 0 : 1,
        transition: "opacity 0.65s ease",
        pointerEvents: phase === "finishing" ? "none" : "auto",
      }}
    >
      {/* Bokeh de fondo sutil */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 320,
          height: 320,
          top: "15%",
          left: "10%",
          background: "rgba(171,126,108,0.07)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 260,
          height: 260,
          bottom: "20%",
          right: "8%",
          background: "rgba(96,20,26,0.05)",
          filter: "blur(70px)",
        }}
      />

      {/* Cruz */}
      <svg
        viewBox="0 0 32 32"
        className={entered ? "p5-heart-beat" : ""}
        style={{
          width: "clamp(2.4rem, 9vw, 4rem)",
          height: "clamp(2.4rem, 9vw, 4rem)",
          transform: entered ? "scale(1)" : "scale(0)",
          opacity: entered ? 1 : 0,
          transition:
            "transform 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.1s, opacity 0.7s ease 0.1s",
          marginBottom: "clamp(1.2rem, 4vw, 2rem)",
        }}
      >
        <line x1="16" y1="3" x2="16" y2="29" stroke="#AB7E6C" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="6" y1="11" x2="26" y2="11" stroke="#AB7E6C" strokeWidth="2.2" strokeLinecap="round" />
      </svg>

      {/* Dots animados */}
      <div
        className="flex gap-1.5"
        style={{
          opacity: entered && phase === "loading" ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              width: 4,
              height: 4,
              borderRadius: "50%",
              backgroundColor: "#AB7E6C",
              animation: `p5-dot-bounce 1.2s ease-in-out ${i * 0.18}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
