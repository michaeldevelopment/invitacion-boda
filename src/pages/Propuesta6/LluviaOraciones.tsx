import { IconRegalo } from "../Propuesta5/shared/icons";

export default function LluviaOraciones() {
  const cream = "#FAF8F5";
  const creamDim = "rgba(250,248,245,0.7)";

  return (
    <section
      style={{
        backgroundColor: "#502129",
        padding: "3rem 2rem 2.5rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "min(90vw, 560px)", margin: "0 auto" }}>
        {/* Icono regalo */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <IconRegalo color={cream} size={38} />
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
          Lluvia de oraciones
        </h2>

        {/* Cuerpo */}
        <p
          style={{
            fontFamily: "'Merriweather', Georgia, serif",
            fontWeight: 300,
            fontSize: "clamp(0.85rem, 2.8vw, 0.95rem)",
            color: creamDim,
            lineHeight: 1.8,
            marginBottom: "1.25rem",
          }}
        >
          Lo más importante para nosotros es compartir ese día contigo. Te
          invitamos a acompañarnos desde ahora con tus oraciones por nuestro
          matrimonio, nuestro hogar y todo lo que estamos por construir.
        </p>
      </div>
    </section>
  );
}
