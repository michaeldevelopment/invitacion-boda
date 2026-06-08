import { useRef, useState } from "react";
import { gsap, useGSAP } from "./shared/gsap.config";
import FloralDecoration from "./shared/FloralDecoration";
import embriagame from "../../embriagame-de-amor.mp3";

const TEXT1 =
  "Hay momentos que cambian nuestras vidas y otros que marcan el comienzo de una nueva.";

const TEXT2 =
  "Nos encantaría que nos acompañaras a celebrar el día en que decidiremos caminar juntos para siempre.";

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

function MusicPlayer({ src }: { src: string }) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loop, setLoop] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  const skipBack = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10);
  };

  const skipForward = () => {
    if (!audioRef.current) return;
    const dur = audioRef.current.duration || 0;
    audioRef.current.currentTime = Math.min(dur, audioRef.current.currentTime + 10);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100 || 0);
  };

  const handleEnded = () => { if (!loop) setPlaying(false); };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !audioRef.current.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = pct * audioRef.current.duration;
  };

  const toggleLoop = () => {
    const next = !loop;
    setLoop(next);
    if (audioRef.current) audioRef.current.loop = next;
  };

  return (
    <div className="mt-14 mx-auto max-w-xs">
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />

      {/* Título */}
      <p
        className="font-serif text-center mb-5"
        style={{ fontSize: "clamp(0.85rem, 2vw, 0.95rem)", color: "rgba(96,20,26,0.65)", letterSpacing: "0.03em" }}
      >
        Dale play a nuestra canción
      </p>

      {/* Barra de progreso */}
      <div
        className="relative mb-6 cursor-pointer py-2"
        onClick={handleSeek}
        style={{ margin: "0 0 1.5rem" }}
      >
        <div className="h-px w-full" style={{ backgroundColor: "rgba(96,20,26,0.18)" }} />
        <div
          className="absolute top-2 left-0 h-px pointer-events-none"
          style={{ width: `${progress}%`, backgroundColor: "#60141A" }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            left: `${progress}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "#60141A",
          }}
        />
      </div>

      {/* Controles */}
      <div className="flex items-center justify-center gap-5">
        {/* Shuffle (decorativo) */}
        <button aria-label="Aleatorio" style={{ color: "#60141A", opacity: 0.35 }}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 3 21 3 21 8" />
            <line x1="4" y1="20" x2="21" y2="3" />
            <polyline points="21 16 21 21 16 21" />
            <line x1="15" y1="15" x2="21" y2="21" />
          </svg>
        </button>

        {/* Skip back */}
        <button onClick={skipBack} aria-label="Retroceder" style={{ color: "#60141A", opacity: 0.65 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="19 20 9 12 19 4 19 20" fill="currentColor" fillOpacity="0.7" />
            <line x1="5" y1="19" x2="5" y2="5" />
          </svg>
        </button>

        {/* Play / Pause — círculo relleno */}
        <button
          onClick={togglePlay}
          aria-label={playing ? "Pausar" : "Reproducir"}
          className="flex items-center justify-center rounded-full transition-all duration-150"
          style={{ width: 46, height: 46, backgroundColor: "#60141A", color: "#E8E1D3", flexShrink: 0 }}
        >
          {playing ? (
            <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor">
              <rect x="0" y="0" width="4.5" height="16" rx="1.2" />
              <rect x="9.5" y="0" width="4.5" height="16" rx="1.2" />
            </svg>
          ) : (
            <svg width="13" height="15" viewBox="0 0 13 15" fill="currentColor" style={{ marginLeft: 2 }}>
              <path d="M0 0 L13 7.5 L0 15 Z" />
            </svg>
          )}
        </button>

        {/* Skip forward */}
        <button onClick={skipForward} aria-label="Avanzar" style={{ color: "#60141A", opacity: 0.65 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 4 15 12 5 20 5 4" fill="currentColor" fillOpacity="0.7" />
            <line x1="19" y1="5" x2="19" y2="19" />
          </svg>
        </button>

        {/* Repeat */}
        <button onClick={toggleLoop} aria-label="Repetir" style={{ color: "#60141A", opacity: loop ? 0.9 : 0.35 }}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="17 1 21 5 17 9" />
            <path d="M3 11V9a4 4 0 0 1 4-4h14" />
            <polyline points="7 23 3 19 7 15" />
            <path d="M21 13v2a4 4 0 0 1-4 4H3" />
          </svg>
        </button>
      </div>
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

      tl.from(".p5-ip-word", {
        opacity: 0,
        y: 18,
        stagger: 0.06,
        ease: "power2.out",
        duration: 0.65,
      });

      tl.from(
        ".p5-versiculo",
        { opacity: 0, y: 18, duration: 0.8, ease: "power2.out" },
        "+=0.3",
      );

      BOKEH_CIRCLES.forEach((_, i) => {
        gsap.to(`.p5-ep-bokeh:nth-child(${i + 1})`, {
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
      className="relative py-24 sm:py-28 px-8 sm:px-12 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #E8E1D3 0%, #ddd0c0 55%, #cdb8a4 100%)",
      }}
    >
      {/* Bokeh de fondo */}
      {BOKEH_CIRCLES.map((c, i) => (
        <div
          key={i}
          className="p5-ep-bokeh absolute rounded-full pointer-events-none"
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
        {/* Frases de invitación */}
        <p
          className="font-serif italic leading-relaxed mb-6"
          style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.6rem)", color: "#60141A" }}
        >
          {words1.map((word: string, i: number) => (
            <span key={i}>
              <span className="p5-ip-word p5-word">{word}</span>
              {i < words1.length - 1 ? " " : ""}
            </span>
          ))}
        </p>
        <p
          className="font-serif italic leading-relaxed"
          style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.6rem)", color: "#60141A" }}
        >
          {words2.map((word: string, i: number) => (
            <span key={i}>
              <span className="p5-ip-word p5-word">{word}</span>
              {i < words2.length - 1 ? " " : ""}
            </span>
          ))}
        </p>

        <OrnamentSep />

        {/* Versículo */}
        <div className="p5-versiculo">
          <p
            className="font-serif italic font-light"
            style={{
              fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)",
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
              color: "rgba(96,20,26,0.85)",
            }}
          >
            1 Juan 4,19
          </p>

          {/* Reproductor de música */}
          <MusicPlayer src={embriagame} />
        </div>
      </div>
    </div>
  );
}
