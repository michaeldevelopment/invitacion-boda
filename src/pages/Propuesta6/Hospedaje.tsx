const cream = "#FAF8F5";
const creamFaint = "rgba(250,248,245,0.2)";

function HotelIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="38"
      height="38"
      fill="none"
      stroke={cream}
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="6" width="18" height="15" rx="0.5" />
      <path d="M3 10h18" />
      <rect x="7" y="13" width="3" height="3" />
      <rect x="14" y="13" width="3" height="3" />
      <path d="M12 6V3" />
      <path d="M9 3h6" />
    </svg>
  );
}

function BtnOutline({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        border: `1px solid rgba(250,248,245,0.5)`,
        color: cream,
        padding: "0.45rem 1.6rem",
        fontFamily: "'Merriweather', Georgia, serif",
        fontWeight: 300,
        fontSize: "0.62rem",
        letterSpacing: "0.08em",
        textDecoration: "none",
        marginTop: "0.6rem",
      }}
    >
      {children}
    </a>
  );
}

const opciones = [
  {
    nombre: "Airbnbs cerca a la iglesia",
    subtitulo: "El Poblado, Medellín",
    link: "https://www.airbnb.com/s/El-Poblado--Medell%C3%ADn/homes",
  },
  {
    nombre: "Airbnbs cerca a la recepción",
    subtitulo: "San Lucas, Medellín",
    link: "https://www.airbnb.com/s/Santa-Elena--Medell%C3%ADn/homes",
  },
];

export default function Hospedaje() {
  return (
    <section
      style={{
        backgroundColor: "#502129",
        padding: "2.5rem 2rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "min(90vw, 560px)", margin: "0 auto" }}>
        {/* Separador superior */}
        <div
          style={{
            height: 1,
            backgroundColor: creamFaint,
            marginBottom: "2.5rem",
          }}
        />

        {/* Encabezado "Si vienes de otra ciudad" */}
        <p
          style={{
            fontFamily: "'Merriweather', Georgia, serif",
            fontWeight: 300,
            fontSize: "0.6rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(250,248,245,0.5)",
            marginBottom: "0.6rem",
          }}
        >
          Si vienes de otra ciudad
        </p>
        <p
          style={{
            fontFamily: "'Merriweather', Georgia, serif",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: "clamp(0.85rem, 2.8vw, 0.95rem)",
            color: "rgba(250,248,245,0.75)",
            lineHeight: 1.8,
            marginBottom: "2.25rem",
          }}
        >
          Queremos que disfrutes con tranquilidad. Aquí encontrarás algunas
          opciones de alojamiento cercanas al lugar del evento.
        </p>

        {/* Icono hotel */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <HotelIcon />
        </div>

        {/* Título */}
        <h2
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(2.4rem, 9vw, 3rem)",
            color: cream,
            lineHeight: 1.2,
            marginBottom: "1.5rem",
          }}
        >
          Sugerencia de hospedaje
        </h2>

        {/* Opciones */}
        {opciones.map((op, i) => (
          <div
            key={i}
            style={{ marginBottom: i < opciones.length - 1 ? "1.5rem" : 0 }}
          >
            <p
              style={{
                fontFamily: "'Merriweather', Georgia, serif",
                fontWeight: 300,
                fontSize: "0.6rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(250,248,245,0.6)",
                marginBottom: "0.35rem",
              }}
            >
              {op.nombre}
            </p>
            <p
              style={{
                fontFamily: "'Merriweather', Georgia, serif",
                fontWeight: 300,
                fontStyle: "italic",
                fontSize: "0.9rem",
                color: cream,
                marginBottom: "0.6rem",
              }}
            >
              {op.subtitulo}
            </p>
            <BtnOutline href={op.link}>Más información</BtnOutline>
          </div>
        ))}

        {/* Separador inferior */}
        <div
          style={{
            height: 1,
            backgroundColor: creamFaint,
            marginTop: "2.5rem",
          }}
        />
      </div>
    </section>
  );
}
