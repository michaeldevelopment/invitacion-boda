const FAQS = [
  {
    pregunta: "¿Hay parqueadero disponible en la iglesia y la recepción?",
    respuesta: [
      "Sí, tanto en la parroquia como en el lugar donde se celebrará la recepción hay espacio para parquear. El recorrido entre ambos lugares es de 40 minutos aprox.",
      "Recuerda gestionar tu transporte de ida y regreso. Si necesitas apoyo, ¡cuéntanos! :)",
    ],
  },
  {
    pregunta: "¿Puedo llevar acompañantes?",
    respuesta: [
      "Aunque quisiéramos tener un aforo infinito, esta invitación es solo para ti.",
      "Gracias por comprender y acompañarnos.",
    ],
  },
];

export default function FAQ() {
  return (
    <div
      className="py-4 sm:py-10 px-5 sm:px-8"
      style={{ backgroundColor: "#EAE3D6" }}
    >
      <div className="max-w-lg mx-auto">
        <h2
          className="font-serif font-light mb-4"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "#60141A" }}
        >
          <i>
            <b> Preguntas frecuentes </b>
          </i>
        </h2>
        <div className="p5-animated-line w-32 mb-10" />
        {FAQS.map((faq, i) => (
          <div key={i}>
            <div className="py-6">
              <p
                className="font-serif italic mb-4"
                style={{
                  fontSize: "clamp(1.05rem, 2.5vw, 1.2rem)",
                  color: "#60141A",
                  lineHeight: 1.4,
                }}
              >
                {faq.pregunta}
              </p>
              <div className="flex flex-col gap-3">
                {faq.respuesta.map((line, j) => (
                  <p
                    key={j}
                    className="font-serif leading-relaxed"
                    style={{
                      fontSize: "clamp(1rem, 2.3vw, 1.1rem)",
                      color: "rgba(96,20,26,0.72)",
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
            {i < FAQS.length - 1 && (
              <div
                className="h-px w-full"
                style={{ backgroundColor: "rgba(96,20,26,0.12)" }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
