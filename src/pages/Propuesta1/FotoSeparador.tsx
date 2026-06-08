import foto3 from "./cami-y-majo-3.jpeg";

export default function FotoSeparador() {
  return (
    <div style={{ lineHeight: 0 }}>
      <img
        src={foto3}
        alt="Cami y Majo"
        className="p6-foto-separador"
        style={{ width: "100%", display: "block", objectFit: "cover" }}
      />
    </div>
  );
}
