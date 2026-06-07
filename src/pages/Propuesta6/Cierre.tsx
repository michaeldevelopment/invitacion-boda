import foto2 from "./cami-y-majo-1.jpeg";

const DARK = "#2e1710";

export default function Cierre() {
  return (
    <section style={{ backgroundColor: "#E8E1D3", textAlign: "center" }}>

      {/* Separador */}
      <div style={{ height: 1, backgroundColor: `${DARK}18`, margin: "0 1.75rem" }} />

      {/* Foto final */}
      <div style={{ lineHeight: 0 }}>
        <img
          src={foto2}
          alt="Cami y Majo"
          style={{
            width: "100%",
            height: 400,
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
        />
      </div>

      <div style={{ padding: "3rem 2rem 3.5rem" }}>
        <div style={{ maxWidth: 340, margin: "0 auto" }}>

          {/* Título */}
          <h2
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(2.4rem, 9vw, 3rem)",
              color: DARK,
              lineHeight: 1.2,
              marginBottom: "1.25rem",
            }}
          >
            Muchas gracias
          </h2>

          {/* Cuerpo */}
          <p
            style={{
              fontFamily: "'Merriweather', Georgia, serif",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(0.85rem, 2.8vw, 0.95rem)",
              color: `${DARK}99`,
              lineHeight: 1.85,
              marginBottom: "1.75rem",
            }}
          >
            Tu compañía para nosotros es el mejor regalo.
            <br />
            Gracias por caminar con nosotros. Con amor
          </p>

          {/* Firma */}
          <p
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(2.4rem, 9vw, 3rem)",
              color: DARK,
              lineHeight: 1.2,
            }}
          >
            Cami y Majo
          </p>

        </div>
      </div>
    </section>
  );
}
