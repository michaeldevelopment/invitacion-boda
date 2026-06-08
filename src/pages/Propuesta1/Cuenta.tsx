import { useEffect, useState } from "react";

const TARGET = new Date("2026-08-21T15:00:00");

function pad(n: number) {
  return String(Math.max(0, n)).padStart(2, "0");
}

function getTimeLeft() {
  const diff = TARGET.getTime() - Date.now();
  if (diff <= 0) return { d: "00", h: "00", m: "00", s: "00" };
  const totalSecs = Math.floor(diff / 1000);
  const d = Math.floor(totalSecs / 86400);
  const h = Math.floor((totalSecs % 86400) / 3600);
  const m = Math.floor((totalSecs % 3600) / 60);
  const s = totalSecs % 60;
  return { d: pad(d), h: pad(h), m: pad(m), s: pad(s) };
}

export default function Cuenta() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const numStyle: React.CSSProperties = {
    fontFamily: "'Merriweather', Georgia, serif",
    fontSize: "clamp(2rem, 8vw, 4.2rem)",
    fontWeight: 300,
    color: "#FAF8F5",
    lineHeight: 1,
    minWidth: "2ch",
    display: "inline-block",
    textAlign: "center",
  };

  const sepStyle: React.CSSProperties = {
    fontFamily: "'Merriweather', Georgia, serif",
    fontWeight: 300,
    fontSize: "clamp(2.4rem, 9vw, 3.4rem)",
    color: "rgba(250,248,245,0.35)",
    lineHeight: 1,
    paddingBottom: "0.15rem",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Merriweather', Georgia, serif",
    fontWeight: 300,
    fontSize: "0.5rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "rgba(250,248,245,0.45)",
    marginTop: "0.5rem",
    display: "block",
  };

  return (
    <section
      style={{
        backgroundColor: "#502129",
        padding: "2.5rem 1.5rem 3.5rem",
        textAlign: "center",
      }}
    >
      {/* FALTAN */}
      <p
        style={{
          fontFamily: "'Merriweather', Georgia, serif",
          fontWeight: 300,
          fontSize: "0.6rem",
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          color: "rgba(250,248,245,0.5)",
          marginBottom: "1.5rem",
        }}
      >
        Faltan
      </p>

      {/* Números */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "0.1rem",
        }}
      >
        {/* Días */}
        <div style={{ textAlign: "center" }}>
          <span style={numStyle}>{time.d}</span>
          <span style={labelStyle}>Días</span>
        </div>

        <span style={sepStyle}>&nbsp;:&nbsp;</span>

        {/* Horas */}
        <div style={{ textAlign: "center" }}>
          <span style={numStyle}>{time.h}</span>
          <span style={labelStyle}>Horas</span>
        </div>

        <span style={sepStyle}>&nbsp;:&nbsp;</span>

        {/* Min */}
        <div style={{ textAlign: "center" }}>
          <span style={numStyle}>{time.m}</span>
          <span style={labelStyle}>Min</span>
        </div>

        <span style={sepStyle}>&nbsp;:&nbsp;</span>

        {/* Seg */}
        <div style={{ textAlign: "center" }}>
          <span style={numStyle}>{time.s}</span>
          <span style={labelStyle}>Seg</span>
        </div>
      </div>
    </section>
  );
}
