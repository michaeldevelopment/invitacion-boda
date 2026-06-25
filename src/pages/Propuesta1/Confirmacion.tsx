import { useEffect, useRef, useState } from "react";

const cream = "#FAF8F5";
const creamDim = "rgba(250,248,245,0.72)";

const TEXTO = "Haciendo click a éste botón podrás confirmar tu asistencia. Te esperamos con ansias. ";

function CalendarHeartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="40"
      height="40"
      fill="none"
      stroke={cream}
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="1" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <path
        d="M12 19s-4.5-3-4.5-6a2.5 2.5 0 0 1 4.5-1.7A2.5 2.5 0 0 1 16.5 13c0 3-4.5 6-4.5 6z"
        fill={cream}
        stroke="none"
      />
    </svg>
  );
}

export default function Confirmacion() {
  const sectionRef = useRef<HTMLElement>(null);
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayed(TEXTO);
      return;
    }
    let i = 0;
    const speed = 28;
    const id = setInterval(() => {
      i++;
      setDisplayed(TEXTO.slice(0, i));
      if (i >= TEXTO.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [started]);

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "#502129",
        padding: "2.5rem 2rem 3.5rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "min(90vw, 560px)", margin: "0 auto" }}>
        {/* Icono */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <CalendarHeartIcon />
        </div>

        {/* Título */}
        <h2
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(2.4rem, 9vw, 3rem)",
            color: cream,
            lineHeight: 1.2,
            marginBottom: "0.9rem",
          }}
        >
          Confirmar asistencia
        </h2>

        {/* Typewriter */}
        <div
          style={{
            borderLeft: "2px solid rgba(250,248,245,0.2)",
            paddingLeft: "1rem",
            textAlign: "left",
            marginBottom: "1.5rem",
            minHeight: "5em",
          }}
        >
          <p
            style={{
              fontFamily: "'Merriweather', Georgia, serif",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(0.85rem, 2.8vw, 0.95rem)",
              color: creamDim,
              lineHeight: 1.8,
            }}
          >
            {displayed}
            <span className="p6-cursor" aria-hidden="true" />
          </p>
        </div>

        {/* Botón */}
        <a
          href="https://wa.link/ousb8f"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            border: `1px solid rgba(250,248,245,0.6)`,
            color: cream,
            padding: "0.55rem 2rem",
            fontFamily: "'Merriweather', Georgia, serif",
            fontWeight: 300,
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
            textDecoration: "none",
          }}
        >
          Confirmar aquí
        </a>
      </div>
    </section>
  );
}
