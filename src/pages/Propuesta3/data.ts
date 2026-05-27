export const WEDDING_DATE = new Date("2026-08-21T15:00:00");

export const WHATSAPP_LINK = "https://wa.link/ousb8f";

export const UBICACIONES = [
  {
    tipo: "Ceremonia",
    nombre: "PARROQUIA LA DIVINA EUCARISTÍA",
    subNombre: "Poblado · Medellín",
    direccion: "Cl. 7 #35-56, El Poblado, Medellín, Antioquia",
    hora: "3:00 p.m.",
    mapsLink: "https://maps.app.goo.gl/Fa4F7R6wTxcUJ9YW9",
  },
  {
    tipo: "Recepción",
    nombre: "QUINCE LUCAS COCINA CAMPESTRE",
    subNombre: "Santa Elena · Medellín",
    direccion: "Cl 20C Sur #15 96, Santa Elena, Medellín, Antioquia",
    hora: "6:00 p.m.",
    mapsLink: "https://maps.app.goo.gl/zFz6SJPdV2hQNEE9A",
  },
];

export const ITINERARIO = [
  { hora: "3:00 p.m.", evento: "Celebración eucarística", icono: "church" },
  { hora: "6:00 p.m.", evento: "Recepción", icono: "arch" },
];

export const HOSPEDAJE = {
  iglesia: [
    {
      nombre: "Hotel Dann Carlton Medellín",
      descripcion: "Hotel 5 estrellas en El Poblado",
      distancia: "~500 m de la iglesia",
      link: "https://www.dann-carlton.com.co/",
    },
    {
      nombre: "Airbnb El Poblado",
      descripcion: "Apartamentos con excelente ubicación",
      distancia: "~5 min de la iglesia",
      link: "https://www.airbnb.com.co/s/El-Poblado--Medell%C3%ADn",
    },
  ],
  recepcion: [
    {
      nombre: "Hotel Poblado Alejandría",
      descripcion: "Hotel boutique cerca a Santa Elena",
      distancia: "~15 min de la recepción",
      link: "https://www.hotelpobladoalejandria.com/",
    },
    {
      nombre: "Airbnb Santa Elena",
      descripcion: "Cabañas y fincas en las afueras",
      distancia: "~10 min de la recepción",
      link: "https://www.airbnb.com.co/s/Santa-Elena--Medell%C3%ADn",
    },
  ],
};

export const SEED_ORACIONES = [
  {
    id: 1,
    texto: "Que el amor de Dios guíe cada uno de sus pasos juntos.",
    autor: "La familia",
  },
  {
    id: 2,
    texto: "Mucho amor, risas y aventuras en este nuevo camino.",
    autor: "Un amigo cercano",
  },
  {
    id: 3,
    texto: "Que sus corazones sean siempre hogar el uno para el otro.",
    autor: "Con todo el amor",
  },
];

export const TEXTOS = {
  invitacion: "Te invitamos para celebrar juntos uno de los días más importantes de nuestras vidas",
  regalo: "Tu compañía para nosotros es el mejor regalo",
  rsvp: "Por favor confírmanos tu asistencia antes del 1 de junio. Después de esa fecha, si no hemos recibido respuesta, asumiremos con cariño que no podrás acompañarnos.",
  cita: "Amamos porque él nos amó primero",
  citaRef: "1 Jn 4,19",
};

export const SAVE_DATE_URL =
  "https://calendar.google.com/calendar/render?action=TEMPLATE" +
  "&text=Boda+Cami+y+Majo" +
  "&dates=20260821T150000/20260822T000000" +
  "&details=Celebraci%C3%B3n+de+la+boda+de+Camilo+y+Majo" +
  "&location=Parroquia+La+Divina+Eucar%C3%ADst%C3%ADa%2C+Cl.+7+%2335-56%2C+El+Poblado%2C+Medell%C3%ADn";
