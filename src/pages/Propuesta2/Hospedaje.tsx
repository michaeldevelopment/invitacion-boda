import { useRef } from "react";
import { gsap, useGSAP } from "./shared/gsap.config";

interface Hotel {
  nombre: string;
  tipo: string;
  distancia: string;
  referencia: string;
  url: string;
  cerca: string;
  bg: string;
}

const HOTELES: Hotel[] = [
  {
    nombre: "Airbnbs cerca a la iglesia",
    tipo: "Airbnb · El Poblado",
    distancia: "~5 min de la iglesia",
    referencia: "El Poblado, Medellín",
    url: "https://www.airbnb.com/s/Medellin--Antioquia/homes?refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2026-06-01&monthly_length=3&monthly_end_date=2026-09-01&price_filter_input_type=2&channel=EXPLORE&zoom_level=15.525610530611516&search_type=user_map_move&place_id=ChIJBa0PuN8oRI4RVju1x_x8E0I&acp_id=e6f47397-cd93-4793-8ee6-cc92bb7170e3&date_picker_type=calendar&checkin=2026-08-20&checkout=2026-08-23&query=Medellin%2C%20Antioquia&search_mode=regular_search&price_filter_num_nights=3&ne_lat=6.219498903576044&ne_lng=-75.55293689457068&sw_lat=6.197478654912585&sw_lng=-75.57837986057763&zoom=15.525610530611516&search_by_map=true&host_languages%5B%5D=es&selected_filter_order%5B%5D=host_languages%3Aes&update_selected_filters=false",
    cerca: "iglesia",
    bg: "#ccc4b4",
  },
  {
    nombre: "Airbnbs cerca a la recepción",
    tipo: "Airbnb · San Lucas",
    distancia: "~10 min de Quince Lucas",
    referencia: "San Lucas, Medellín",
    url: "https://www.airbnb.com/s/Medellin--Antioquia/homes?refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2026-06-01&monthly_length=3&monthly_end_date=2026-09-01&price_filter_input_type=2&channel=EXPLORE&zoom_level=15.525610530611516&search_type=user_map_move&place_id=ChIJBa0PuN8oRI4RVju1x_x8E0I&acp_id=e6f47397-cd93-4793-8ee6-cc92bb7170e3&date_picker_type=calendar&checkin=2026-08-20&checkout=2026-08-23&query=Medellin%2C%20Antioquia&search_mode=regular_search&price_filter_num_nights=3&ne_lat=6.187904502990555&ne_lng=-75.55333211147592&sw_lat=6.165882936724882&sw_lng=-75.57877507748287&zoom=15.525610530611516&search_by_map=true&host_languages%5B%5D=es&selected_filter_order%5B%5D=host_languages%3Aes&update_selected_filters=false",
    cerca: "recepción",
    bg: "#cfd9c0",
  },
];

function IglesiaIllustration() {
  return (
    <svg width="110" height="110" viewBox="0 0 110 110" fill="none" stroke="#60141A" strokeLinecap="round" strokeLinejoin="round">
      {/* Cruz */}
      <line x1="55" y1="6" x2="55" y2="22" strokeWidth="2.5" />
      <line x1="48" y1="12" x2="62" y2="12" strokeWidth="2.5" />
      {/* Campanario */}
      <polygon points="55,20 40,38 70,38" fill="#60141A" fillOpacity="0.35" strokeWidth="1.5" />
      {/* Cuerpo principal */}
      <rect x="26" y="38" width="58" height="50" fill="#60141A" fillOpacity="0.12" strokeWidth="1.5" />
      {/* Puerta */}
      <path d="M44 88 V68 A11 11 0 0 1 66 68 V88" fill="#60141A" fillOpacity="0.25" strokeWidth="1.5" />
      {/* Ventanas */}
      <rect x="28" y="44" width="14" height="18" rx="7" fill="#60141A" fillOpacity="0.2" strokeWidth="1.2" />
      <rect x="68" y="44" width="14" height="18" rx="7" fill="#60141A" fillOpacity="0.2" strokeWidth="1.2" />
    </svg>
  );
}

function RecepcionIllustration() {
  return (
    <svg width="110" height="110" viewBox="0 0 110 110" fill="none" stroke="#7A8D61" strokeLinecap="round" strokeLinejoin="round">
      {/* Copa izquierda */}
      <path d="M32 16 L20 58 H44 Z" fill="#7A8D61" fillOpacity="0.25" strokeWidth="1.5" />
      <line x1="32" y1="58" x2="32" y2="80" strokeWidth="2" />
      <line x1="20" y1="80" x2="44" y2="80" strokeWidth="2.5" />
      {/* Copa derecha */}
      <path d="M78 16 L66 58 H90 Z" fill="#7A8D61" fillOpacity="0.25" strokeWidth="1.5" />
      <line x1="78" y1="58" x2="78" y2="80" strokeWidth="2" />
      <line x1="66" y1="80" x2="90" y2="80" strokeWidth="2.5" />
      {/* Burbujas izq */}
      <circle cx="29" cy="38" r="2" fill="#7A8D61" fillOpacity="0.5" stroke="none" />
      <circle cx="35" cy="30" r="1.5" fill="#7A8D61" fillOpacity="0.4" stroke="none" />
      {/* Burbujas der */}
      <circle cx="75" cy="38" r="2" fill="#7A8D61" fillOpacity="0.5" stroke="none" />
      <circle cx="81" cy="28" r="1.5" fill="#7A8D61" fillOpacity="0.4" stroke="none" />
      {/* Brindis */}
      <line x1="54" y1="22" x2="54" y2="32" strokeWidth="1.5" strokeOpacity="0.5" />
      <line x1="49" y1="27" x2="59" y2="27" strokeWidth="1.5" strokeOpacity="0.5" />
    </svg>
  );
}

export default function Hospedaje() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (prefersReduced) {
        gsap.set(sectionRef.current, { opacity: 1 });
        return;
      }

      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.from(".p5-hosp-header", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".p5-hospedaje-card", {
        y: 60,
        opacity: 0,
        stagger: 0.18,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".p5-hosp-grid",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef },
  );

  const handleCardEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, { y: -6, duration: 0.3, ease: "power2.out" });
  };
  const handleCardLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, { y: 0, duration: 0.3, ease: "power2.out" });
  };

  const handleImgMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    const img = e.currentTarget.querySelector<HTMLElement>(".p5-hospedaje-img");
    if (img)
      gsap.to(img, { x: x * 12, y: y * 12, duration: 0.5, ease: "power2.out" });
  };

  const handleImgLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const img = e.currentTarget.querySelector<HTMLElement>(".p5-hospedaje-img");
    if (img)
      gsap.to(img, { x: 0, y: 0, duration: 0.5, ease: "power2.out" });
  };

  return (
    <div
      ref={sectionRef}
      id="p5-hospedaje"
      className="p5-section py-16 sm:py-20 md:py-24 px-5 sm:px-8"
      style={{ backgroundColor: "#E8E1D3", opacity: 0 }}
    >
      <div className="max-w-2xl lg:max-w-3xl mx-auto">
        {/* Header */}
        <div className="p5-hosp-header text-center mb-14">
          <h2
            className="font-serif font-light mb-4"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#60141A" }}
          >
            Si vienes de otra ciudad
          </h2>
          <p
            className="font-serif italic"
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
              color: "rgba(96,20,26,0.78)",
              lineHeight: 1.7,
            }}
          >
            Queremos que disfrutes con tranquilidad. Aquí encontrarás algunas
            opciones de alojamiento cercanas al lugar del evento.
          </p>
        </div>

        {/* Cards */}
        <div className="p5-hosp-grid grid grid-cols-1 md:grid-cols-2 gap-5">
          {HOTELES.map((h) => (
            <a
              key={h.nombre}
              href={h.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p5-hospedaje-card block no-underline overflow-hidden"
              onMouseEnter={handleCardEnter}
              onMouseLeave={handleCardLeave}
            >
              {/* Color block con ilustración */}
              <div
                className="p5-hospedaje-img-wrap h-44 relative overflow-hidden"
                onMouseMove={handleImgMove}
                onMouseLeave={handleImgLeave}
              >
                <div
                  className="p5-hospedaje-img w-full h-full"
                  style={{ backgroundColor: h.bg, willChange: "transform" }}
                />
                {/* Ilustración SVG con opacidad 0.3 */}
                <div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  style={{ opacity: 0.3 }}
                >
                  {h.cerca === "iglesia" ? (
                    <IglesiaIllustration />
                  ) : (
                    <RecepcionIllustration />
                  )}
                </div>
                <span
                  className="absolute top-3 left-3 font-serif tracking-[0.18em] uppercase px-2.5 py-1"
                  style={{
                    fontSize: "0.65rem",
                    backgroundColor:
                      h.cerca === "iglesia"
                        ? "rgba(96,20,26,0.8)"
                        : "rgba(122,141,97,0.85)",
                    color: "#E8E1D3",
                  }}
                >
                  Cerca a la {h.cerca}
                </span>
              </div>

              {/* Info */}
              <div className="p-6">
                <p
                  className="font-serif uppercase mb-3"
                  style={{
                    fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                    letterSpacing: "0.18em",
                    color: "#AB7E6C",
                  }}
                >
                  {h.tipo}
                </p>
                <h3
                  className="font-serif font-light mb-2 leading-snug"
                  style={{ fontSize: "clamp(1.2rem, 3vw, 1.5rem)", color: "#60141A" }}
                >
                  {h.nombre}
                </h3>
                <p
                  className="font-serif italic mb-1"
                  style={{ fontSize: "clamp(0.95rem, 2vw, 1rem)", color: "rgba(122,141,97,0.95)" }}
                >
                  {h.distancia}
                </p>
                <p
                  className="font-serif"
                  style={{ fontSize: "clamp(0.95rem, 2vw, 1rem)", color: "rgba(96,20,26,0.75)" }}
                >
                  {h.referencia}
                </p>
                <p
                  className="font-serif tracking-[0.25em] uppercase mt-4"
                  style={{ fontSize: "clamp(0.7rem, 1.5vw, 0.75rem)", color: "#AB7E6C" }}
                >
                  Ver opciones →
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
