import React from "react";
import {
  IconIglesia,
  IconBrindis,
  IconMesa,
  IconPastel,
  IconLuna,
} from "../Propuesta2/shared/icons";

const VINO = "#502129";
const DARK = "#2e1710";

type Side = "right" | "left";

interface Item {
  hora: string;
  desc: string;
  Icon: (p: { color?: string; size?: number }) => React.ReactElement;
  side: Side;
}

const items: Item[] = [
  { hora: "3:00 p.m.", desc: "La promesa", Icon: IconIglesia, side: "right" },
  {
    hora: "5:00 p.m.",
    desc: "El brindis por esta nueva etapa",
    Icon: IconBrindis,
    side: "left",
  },
  {
    hora: "6:00 p.m.",
    desc: "Compartiremos la mesa",
    Icon: IconMesa,
    side: "right",
  },
  {
    hora: "7:00 p.m.",
    desc: "Algo dulce nos esperará",
    Icon: IconPastel,
    side: "left",
  },
  {
    hora: "9:00 p.m.",
    desc: "Nos despediremos",
    Icon: IconLuna,
    side: "right",
  },
];

function ItemText({
  hora,
  desc,
  align,
}: {
  hora: string;
  desc: string;
  align: "left" | "right";
}) {
  return (
    <div style={{ textAlign: align }}>
      <p
        style={{
          fontFamily: "'Merriweather', Georgia, serif",
          fontWeight: 700,
          fontSize: "0.7rem",
          letterSpacing: "0.1em",
          color: VINO,
          marginBottom: "0.2rem",
          lineHeight: 1.3,
        }}
      >
        {hora}
      </p>
      <p
        style={{
          fontFamily: "'Merriweather', Georgia, serif",
          fontWeight: 300,
          fontStyle: "italic",
          fontSize: "0.72rem",
          color: `${DARK}BB`,
          lineHeight: 1.4,
        }}
      >
        {desc}
      </p>
    </div>
  );
}

export default function Itinerario() {
  return (
    <section style={{ backgroundColor: "#E8E1D3", padding: "3.5rem 1.25rem" }}>
      <div style={{ maxWidth: 380, margin: "0 auto" }}>
        {/* Título */}
        <h2
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(2.4rem, 9vw, 3rem)",
            color: DARK,
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: "2rem",
          }}
        >
          Así viviremos éste día
        </h2>

        {/* Timeline zigzag */}
        <div style={{ position: "relative", padding: "0 0.5rem" }}>
          {/* Línea vertical central */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 1,
              backgroundColor: `${DARK}18`,
              transform: "translateX(-50%)",
              zIndex: 0,
            }}
          />

          {items.map(({ hora, desc, Icon, side }, i) => {
            const isRight = side === "right";
            return (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 56px 1fr",
                  alignItems: "center",
                  marginBottom: i < items.length - 1 ? "2rem" : 0,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {/* Columna izquierda */}
                <div style={{ paddingRight: "0.5rem" }}>
                  {!isRight && (
                    <ItemText hora={hora} desc={desc} align="right" />
                  )}
                </div>

                {/* Centro: punto + icono */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.3rem",
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      backgroundColor: VINO,
                      flexShrink: 0,
                    }}
                  />
                  <Icon color={DARK} size={26} />
                </div>

                {/* Columna derecha */}
                <div style={{ paddingLeft: "0.5rem" }}>
                  {isRight && <ItemText hora={hora} desc={desc} align="left" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
