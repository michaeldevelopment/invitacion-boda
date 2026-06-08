import { useRef, useState } from "react";
import foto1 from "./cami-y-majo-2.jpeg";
import embriagame from "../../embriagame-de-amor.mp3";

const VINO = "#502129";
const VINO_DIM = "rgba(80,33,41,0.38)";
const TEXT = "#2e1710";

function MusicControls() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loop, setLoop] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    playing ? audioRef.current.pause() : audioRef.current.play();
    setPlaying(!playing);
  };

  const skipBack = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10);
  };

  const skipForward = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.min(
      audioRef.current.duration || 0,
      audioRef.current.currentTime + 10,
    );
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100 || 0);
  };

  const handleEnded = () => { if (!loop) setPlaying(false); };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current?.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    audioRef.current.currentTime =
      ((e.clientX - rect.left) / rect.width) * audioRef.current.duration;
  };

  const toggleLoop = () => {
    const next = !loop;
    setLoop(next);
    if (audioRef.current) audioRef.current.loop = next;
  };

  const iconColor = VINO_DIM;
  const iconActive = VINO;

  return (
    <div>
      <audio
        ref={audioRef}
        src={embriagame}
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />

      {/* Barra de progreso */}
      <div
        onClick={handleSeek}
        style={{
          position: "relative",
          height: 20,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          margin: "0 0 1rem",
        }}
      >
        <div
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "rgba(46,23,16,0.12)",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: 1,
              width: `${progress}%`,
              backgroundColor: VINO,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: `${progress}%`,
              transform: "translate(-50%, -50%)",
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: VINO,
              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      {/* Controles */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        {/* Skip back */}
        <button
          onClick={skipBack}
          aria-label="Retroceder"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0, color: iconColor }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="19 20 9 12 19 4 19 20" />
            <line x1="5" y1="19" x2="5" y2="5" />
          </svg>
        </button>

        {/* Play / Pause — círculo grande */}
        <button
          onClick={togglePlay}
          aria-label={playing ? "Pausar" : "Reproducir"}
          style={{
            width: 52,
            height: 52,
            borderRadius: "50%",
            backgroundColor: VINO,
            color: "#E8E1D3",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {playing ? (
            <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor">
              <rect x="0" y="0" width="4.5" height="16" rx="1" />
              <rect x="9.5" y="0" width="4.5" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="13" height="15" viewBox="0 0 13 15" fill="currentColor" style={{ marginLeft: 2 }}>
              <path d="M0 0 L13 7.5 L0 15 Z" />
            </svg>
          )}
        </button>

        {/* Skip forward */}
        <button
          onClick={skipForward}
          aria-label="Avanzar"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0, color: iconColor }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 4 15 12 5 20 5 4" />
            <line x1="19" y1="5" x2="19" y2="19" />
          </svg>
        </button>

        {/* Repeat */}
        <button
          onClick={toggleLoop}
          aria-label="Repetir"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0, color: loop ? iconActive : iconColor }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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

export default function HeroPhoto() {
  return (
    <section style={{ backgroundColor: "#E8E1D3" }}>

      {/* Foto con pequeños márgenes laterales */}
      <div style={{ padding: "0 14px", paddingTop: "1rem" }}>
        <img
          src={foto1}
          alt="Cami y Majo"
          className="p6-hero-img"
        />
      </div>

      {/* Cita */}
      <div style={{ padding: "1.5rem 1.6rem 1.25rem", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "'Merriweather', Georgia, serif",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: "clamp(0.85rem, 2.8vw, 0.95rem)",
            color: TEXT,
            lineHeight: 1.75,
          }}
        >
          Hay momentos que cambian nuestras vidas y otros que marcan el comienzo de una nueva.
        </p>

        <p
          style={{
            fontFamily: "'Merriweather', Georgia, serif",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: "clamp(0.85rem, 2.8vw, 0.95rem)",
            color: TEXT,
            lineHeight: 1.75,
            marginTop: "0.75rem",
          }}
        >
          Nos encantaría que nos acompañaras a celebrar el día en que decidiremos caminar juntos para siempre.
        </p>

        {/* Versículo */}
        <div style={{ marginTop: "1.75rem" }}>
          <p
            style={{
              fontFamily: "'Merriweather', Georgia, serif",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(1.05rem, 3.5vw, 1.2rem)",
              color: VINO,
              lineHeight: 1.5,
              marginBottom: "0.6rem",
            }}
          >
            "Amamos porque Él nos amó primero"
          </p>
          <p
            style={{
              fontFamily: "'Merriweather', Georgia, serif",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "0.6rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: `${TEXT}66`,
            }}
          >
            1 Juan 4, 19
          </p>
        </div>
      </div>

      {/* Label + Player */}
      <div style={{ padding: "0 1.6rem 2.5rem", maxWidth: 480, margin: "0 auto" }}>
        {/* Label */}
        <p
          style={{
            fontFamily: "'Merriweather', Georgia, serif",
            fontWeight: 300,
            fontSize: "0.75rem",
            letterSpacing: "0.08em",
            color: "rgba(46,23,16,0.45)",
            textAlign: "center",
            marginBottom: "1.25rem",
          }}
        >
          Dale play a nuestra canción
        </p>

        {/* Controles */}
        <MusicControls />
      </div>
    </section>
  );
}
