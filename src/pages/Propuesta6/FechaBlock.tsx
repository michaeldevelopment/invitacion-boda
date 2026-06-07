export default function FechaBlock() {
  return (
    <section
      style={{
        backgroundColor: "#502129",
        padding: "2rem 2rem 2.5rem",
        textAlign: "center",
      }}
    >
      {/* Mes */}
      <p
        style={{
          fontFamily: "'Merriweather', Georgia, serif",
          fontWeight: 300,
          fontSize: "0.6rem",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "rgba(250,248,245,0.55)",
          marginBottom: "0.9rem",
        }}
      >
        Agosto
      </p>

      {/* Línea superior */}
      <div
        style={{
          height: 1,
          backgroundColor: "rgba(250,248,245,0.25)",
          marginBottom: "0.75rem",
        }}
      />

      {/* Fila: DÍA SEMANA · NÚMERO SCRIPT · AÑO */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "'Merriweather', Georgia, serif",
            fontWeight: 300,
            fontSize: "0.6rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(250,248,245,0.6)",
            flex: 1,
            textAlign: "right",
          }}
        >
          Viernes
        </span>

        {/* Número en script caligráfico — Great Vibes */}
        <span
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(4.5rem, 18vw, 6.5rem)",
            color: "#FAF8F5",
            lineHeight: 1,
            display: "block",
            flexShrink: 0,
          }}
        >
          21
        </span>

        <span
          style={{
            fontFamily: "'Merriweather', Georgia, serif",
            fontWeight: 300,
            fontSize: "0.6rem",
            letterSpacing: "0.16em",
            color: "rgba(250,248,245,0.6)",
            flex: 1,
            textAlign: "left",
          }}
        >
          2026
        </span>
      </div>

      {/* Línea inferior */}
      <div
        style={{
          height: 1,
          backgroundColor: "rgba(250,248,245,0.25)",
          marginTop: "0.75rem",
        }}
      />
    </section>
  );
}
