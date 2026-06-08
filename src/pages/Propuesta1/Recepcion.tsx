import { IconBrindis } from "../Propuesta2/shared/icons";

const DARK = "#2e1710";

export default function Recepcion() {
  return (
    <section style={{ backgroundColor: "#EDE8DF", padding: "3.5rem 1.75rem" }}>
      <div style={{ maxWidth: 360, margin: "0 auto", textAlign: "center" }}>
        {/* Icono */}
        <div
          style={{
            marginBottom: "0.75rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <IconBrindis color={DARK} size={40} />
        </div>

        {/* Título script */}
        <h2
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(2.4rem, 9vw, 3rem)",
            color: DARK,
            lineHeight: 1.1,
            marginBottom: "0.5rem",
          }}
        >
          Recepción
        </h2>

        {/* Hora */}
        <p
          style={{
            fontFamily: "'Merriweather', Georgia, serif",
            fontWeight: 300,
            fontSize: "clamp(1.1rem, 3.5vw, 1.25rem)",
            color: DARK,
            marginBottom: "1rem",
          }}
        >
          5:00 pm
        </p>

        {/* Separador */}
        <div
          style={{
            width: 36,
            height: 1,
            backgroundColor: `${DARK}33`,
            margin: "0 auto 1rem",
          }}
        />

        {/* Venue */}
        <p
          style={{
            fontFamily: "'Merriweather', Georgia, serif",
            fontWeight: 300,
            fontSize: "0.6rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: DARK,
            marginBottom: "0.35rem",
          }}
        >
          Quince Lucas Cocina Campestre
        </p>

        {/* Ciudad */}
        <p
          style={{
            fontFamily: "'Merriweather', Georgia, serif",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: "0.85rem",
            color: `${DARK}99`,
            marginBottom: "1.5rem",
          }}
        >
          Cl 20C Sur #15 96, San Lucas, Medellín
        </p>

        {/* Botón */}
        <a
          href="https://maps.app.goo.gl/zFz6SJPdV2hQNEE9A"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            border: `1px solid ${DARK}55`,
            color: DARK,
            padding: "0.5rem 2rem",
            fontFamily: "'Merriweather', Georgia, serif",
            fontWeight: 300,
            fontSize: "0.65rem",
            letterSpacing: "0.08em",
            textDecoration: "none",
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = DARK;
            (e.currentTarget as HTMLAnchorElement).style.color = "#E8E1D3";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background =
              "transparent";
            (e.currentTarget as HTMLAnchorElement).style.color = DARK;
          }}
        >
          Ver ubicación
        </a>
      </div>
    </section>
  );
}