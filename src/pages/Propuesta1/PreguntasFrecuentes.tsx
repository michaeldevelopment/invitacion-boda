const VINO = "#502129";
const DARK = "#2e1710";

interface FAQ {
  pregunta: string;
  respuestas: string[];
}

const faqs: FAQ[] = [
  {
    pregunta: "¿Hay parqueadero disponible en la iglesia y la recepción?",
    respuestas: [
      "Sí, tanto en la parroquia como en el lugar donde se celebrará la recepción hay espacio para parquear. El recorrido entre ambos lugares es de 20 minutos aprox.",
    ],
  },
  {
    pregunta: "¿Puedo llevar acompañantes?",
    respuestas: [
      "Aunque quisiéramos tener un aforo infinito, esta invitación es solo para ti.",
      "Gracias por comprender y acompañarnos.",
    ],
  },
];

export default function PreguntasFrecuentes() {
  return (
    <section style={{ backgroundColor: "#E8E1D3", padding: "3.5rem 1.75rem" }}>
      <div style={{ maxWidth: "min(90vw, 560px)", margin: "0 auto" }}>
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
          Preguntas frecuentes
        </h2>

        {/* Divider bajo título */}
        <div
          style={{
            width: 60,
            height: 1,
            backgroundColor: `${DARK}30`,
            marginBottom: "2rem",
          }}
        />

        {/* Lista de preguntas */}
        {faqs.map((faq, i) => (
          <div key={i}>
            {/* Separador entre items (no antes del primero) */}
            {i > 0 && (
              <div
                style={{
                  height: 1,
                  backgroundColor: `${DARK}18`,
                  margin: "1.5rem 0",
                }}
              />
            )}

            {/* Pregunta */}
            <p
              style={{
                fontFamily: "'Merriweather', Georgia, serif",
                fontWeight: 300,
                fontStyle: "italic",
                fontSize: "clamp(0.85rem, 2.8vw, 0.95rem)",
                color: VINO,
                lineHeight: 1.6,
                marginBottom: "0.85rem",
              }}
            >
              {faq.pregunta}
            </p>

            {/* Respuestas */}
            {faq.respuestas.map((resp, j) => (
              <p
                key={j}
                style={{
                  fontFamily: "'Merriweather', Georgia, serif",
                  fontWeight: 300,
                  fontSize: "clamp(0.8rem, 2.5vw, 0.88rem)",
                  color: `${DARK}AA`,
                  lineHeight: 1.8,
                  marginBottom: j < faq.respuestas.length - 1 ? "0.75rem" : 0,
                }}
              >
                {resp}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
