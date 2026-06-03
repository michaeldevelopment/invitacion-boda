interface IconProps {
  color?: string;
  size?: number;
}

export function IconIglesia({ color = "#60141A", size = 22 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Cruz */}
      <line x1="12" y1="2" x2="12" y2="6" />
      <line x1="10" y1="4" x2="14" y2="4" />
      {/* Cuerpo iglesia */}
      <path d="M5 22V10.5L12 5l7 5.5V22H5z" />
      {/* Puerta */}
      <rect x="9.5" y="14" width="5" height="8" />
    </svg>
  );
}

export function IconBrindis({ color = "#AB7E6C", size = 22 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Copas */}
      <path d="M6 3l2 7h8l2-7H6z" />
      <line x1="10" y1="10" x2="10" y2="20" />
      <line x1="14" y1="10" x2="14" y2="20" />
      <line x1="7" y1="20" x2="17" y2="20" />
      {/* Burbujas */}
      <circle cx="9.5" cy="6.5" r="0.7" fill={color} stroke="none" />
      <circle cx="13" cy="5.5" r="0.7" fill={color} stroke="none" />
      <circle cx="11" cy="7.5" r="0.5" fill={color} stroke="none" />
    </svg>
  );
}

export function IconMesa({ color = "#7A8D61", size = 22 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Plato */}
      <circle cx="12" cy="13" r="5" />
      {/* Tenedor */}
      <line x1="4" y1="6" x2="4" y2="10" />
      <line x1="3" y1="6" x2="5" y2="6" />
      <line x1="4" y1="10" x2="4" y2="20" />
      {/* Cuchillo */}
      <path d="M20 6c0 0-1 2-1 4s1 2 1 2v8" />
    </svg>
  );
}

export function IconPastel({ color = "#AB7E6C", size = 22 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Base torta */}
      <rect x="3" y="13" width="18" height="8" rx="1" />
      {/* Capa superior */}
      <path d="M3 13c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />
      {/* Vela */}
      <line x1="12" y1="13" x2="12" y2="7" />
      {/* Llama */}
      <path
        d="M12 7c0 0-1.2-1.5 0-2.5s0 2.5 0 2.5z"
        fill={color}
        strokeWidth="0.8"
      />
    </svg>
  );
}

export function IconLuna({ color = "#60141A", size = 22 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Media luna */}
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
      {/* Estrella grande */}
      <path
        d="M17 4l.6 1.8 1.8.6-1.8.6L17 9l-.6-1.8L14.6 6.6l1.8-.6z"
        fill={color}
        stroke="none"
      />
      {/* Estrella pequeña */}
      <path
        d="M20 10l.35 1.05 1.05.35-1.05.35L20 13l-.35-1.05L18.6 11.7l1.05-.35z"
        fill={color}
        stroke="none"
      />
    </svg>
  );
}

export function IconPercha({ color = "#60141A", size = 28 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      stroke={color}
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Gancho superior */}
      <path d="M14 8a3 3 0 1 0-3-3" />
      {/* Barra horizontal */}
      <path d="M14 8L4 20h20L14 8z" />
      {/* Base */}
      <line x1="10" y1="24" x2="18" y2="24" strokeWidth="2" />
    </svg>
  );
}

export function IconRegalo({ color = "#AB7E6C", size = 32 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Caja */}
      <rect x="2" y="11" width="20" height="11" rx="1" />
      {/* Tapa */}
      <rect x="1" y="8" width="22" height="3" rx="0.5" />
      {/* Cinta vertical */}
      <line x1="12" y1="8" x2="12" y2="22" />
      {/* Lazo izquierdo */}
      <path d="M12 8c-1.5-1.5-5-1 -5-3.5a2.5 2.5 0 0 1 5 3.5z" />
      {/* Lazo derecho */}
      <path d="M12 8c1.5-1.5 5-1 5-3.5a2.5 2.5 0 0 0-5 3.5z" />
    </svg>
  );
}

export function IconOracion({ color = "#AB7E6C", size = 32 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke={color}
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Corazón */}
      <path d="M16 27s-11-6.5-11-14a6 6 0 0 1 11-3.3 6 6 0 0 1 11 3.3c0 7.5-11 14-11 14z" />
      {/* Destellos */}
      <line x1="25" y1="5" x2="25" y2="7.5" strokeWidth="1.5" />
      <line x1="27.5" y1="8" x2="29.5" y2="8" strokeWidth="1.5" />
      <line x1="26.2" y1="6.2" x2="27.8" y2="4.8" strokeWidth="1.2" />
      <line x1="26.2" y1="9.8" x2="27.8" y2="11.2" strokeWidth="1.2" />
    </svg>
  );
}
