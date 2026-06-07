// Agosto 2026: día 1 = Sábado (índice 5 en semana LUN-DOM)
const HEADERS = ["L", "M", "M", "J", "V", "S", "D"];
const HIGHLIGHT = 21;

// Genera el grid: 6 filas × 7 cols, null = celda vacía
function buildCalendar() {
  const startOffset = 5; // Sábado = índice 5
  const daysInMonth = 31;
  const cells: (number | null)[] = Array(startOffset).fill(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export default function Calendario() {
  const cells = buildCalendar();

  return (
    <section style={{ backgroundColor: "#E8E1D3", padding: "3rem 1.75rem", textAlign: "center" }}>
      <p
        style={{
          fontFamily: "'Merriweather', Georgia, serif",
          fontWeight: 300,
          fontSize: "0.55rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "rgba(46,23,16,0.45)",
          marginBottom: "0.5rem",
        }}
      >
        El gran día
      </p>

      <p
        style={{
          fontFamily: "'Merriweather', Georgia, serif",
          fontSize: "clamp(1.3rem, 4vw, 1.7rem)",
          color: "#2e1710",
          marginBottom: "1.75rem",
        }}
      >
        Agosto 2026
      </p>

      <div style={{ maxWidth: 280, margin: "0 auto" }}>
        {/* Headers */}
        <div className="p6-calendar-grid" style={{ marginBottom: 4 }}>
          {HEADERS.map((h, i) => (
            <div key={i} className="p6-cal-header">{h}</div>
          ))}
        </div>

        {/* Days */}
        <div className="p6-calendar-grid">
          {cells.map((day, i) =>
            day === null ? (
              <div key={i} />
            ) : (
              <div
                key={i}
                className={`p6-cal-day${day === HIGHLIGHT ? " highlighted" : ""}`}
              >
                {day}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
