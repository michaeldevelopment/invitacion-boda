import { IconIglesia } from "../Propuesta5/shared/icons";

const DARK = "#2e1710";

export default function Ceremonia() {
  return (
    <section style={{ backgroundColor: "#E8E1D3", padding: "3.5rem 1.75rem" }}>
      <div style={{ maxWidth: 360, margin: "0 auto", textAlign: "center" }}>

        {/* Icono */}
        <div style={{ marginBottom: "0.75rem", display: "flex", justifyContent: "center" }}>
          <IconIglesia color={DARK} size={40} />
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
          Ceremonia Religiosa
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
          3:00 pm
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
          Parroquia La Divina Eucaristía
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
          Cl. 7 #35-56, El Poblado, Medellín
        </p>

        {/* Botón */}
        <a
          href="https://maps.app.goo.gl/Fa4F7R6wTxcUJ9YW9"
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
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.background = DARK;
            (e.currentTarget as HTMLAnchorElement).style.color = "#E8E1D3";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
            (e.currentTarget as HTMLAnchorElement).style.color = DARK;
          }}
        >
          Ver ubicación
        </a>

      </div>
    </section>
  );
}
