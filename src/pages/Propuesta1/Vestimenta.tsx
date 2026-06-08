import { IconPercha } from "../Propuesta2/shared/icons";

const VINO = "#502129";
const DARK = "#2e1710";

function PinterestIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={VINO}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

export default function Vestimenta() {
  return (
    <section
      style={{
        backgroundColor: "#E8E1D3",
        padding: "3rem 1.75rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 380, margin: "0 auto" }}>
        {/* Icono */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "0.75rem",
          }}
        >
          <IconPercha color={VINO} size={36} />
        </div>

        {/* Título */}
        <h2
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(2.4rem, 9vw, 3rem)",
            color: DARK,
            lineHeight: 1.2,
            marginBottom: "0.5rem",
          }}
        >
          Código de vestimenta
        </h2>

        {/* Subtítulo */}
        <p
          style={{
            fontFamily: "'Merriweather', Georgia, serif",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: "clamp(0.8rem, 2.5vw, 0.9rem)",
            color: `${VINO}CC`,
            marginBottom: "1.75rem",
          }}
        >
          Tendremos una celebración íntima, cálida y cercana
        </p>

        {/* Dress code */}
        <p
          style={{
            fontFamily: "'Merriweather', Georgia, serif",
            fontWeight: 300,
            fontSize: "clamp(0.9rem, 2.8vw, 1rem)",
            color: VINO,
            marginBottom: "0.75rem",
          }}
        >
          Semi-formal
        </p>

        {/* Descripción */}
        <p
          style={{
            fontFamily: "'Merriweather', Georgia, serif",
            fontWeight: 300,
            fontSize: "clamp(0.8rem, 2.5vw, 0.9rem)",
            color: `${VINO}BB`,
            lineHeight: 1.8,
            marginBottom: "1.75rem",
          }}
        >
          Te sugerimos elegir tonos claros y suaves que armonicen con el
          ambiente íntimo y cálido que queremos crear juntos.
        </p>

        {/* Divider */}
        <div className="p6-divider" style={{ marginBottom: "1.5rem" }} />

        {/* No estampados */}
        <p
          style={{
            fontFamily: "'Merriweather', Georgia, serif",
            fontWeight: 700,
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: DARK,
            marginBottom: "1.5rem",
          }}
        >
          No usar estampados
        </p>

        {/* Divider */}
        <div className="p6-divider" style={{ marginBottom: "1.5rem" }} />

        {/* Referencias visuales */}
        <p
          style={{
            fontFamily: "'Merriweather', Georgia, serif",
            fontWeight: 300,
            fontSize: "0.55rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: `${DARK}88`,
            marginBottom: "0.9rem",
          }}
        >
          Referencias visuales
        </p>

        {/* Link Pinterest */}
        <a
          href="https://co.pinterest.com/mjrozo_/dress-code-algunos-referentes/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.45rem",
            fontFamily: "'Merriweather', Georgia, serif",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: "clamp(0.8rem, 2.5vw, 0.9rem)",
            color: VINO,
            textDecoration: "none",
          }}
        >
          <PinterestIcon />
          Ver tablero de referencias de vestimenta &nbsp;→
        </a>
      </div>
    </section>
  );
}
