# Invitación de Boda Digital — Cami & Majo

Sitio web de invitación de boda para el matrimonio de **Camilo (Cami) y Majo**, celebrado el **21 de agosto de 2026** en Medellín, Colombia.

## Evento

| | |
|---|---|
| Fecha | 21 de agosto de 2026 |
| Hora | 3:00 p.m. |
| Celebración Eucarística | Parroquia La Divina Eucaristía — El Poblado, Medellín |
| Recepción | Quince Lucas Cocina Campestre — Santa Elena, Medellín |

## Tech Stack

- **React 19** — Framework principal
- **TypeScript** — Tipado estático
- **Tailwind CSS** — Sistema de diseño utilitario
- **Framer Motion** — Animaciones (Propuesta 1)
- **GSAP + ScrollTrigger** — Animaciones avanzadas (Propuesta 2)
- **Lenis** — Smooth scroll
- **React Router DOM** — Navegación entre propuestas
- **Vite** — Build tool

## Correr localmente

```bash
npm install
npm run dev
```

La app corre en `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Estructura

```
src/
  pages/
    Propuesta1/   # Versión con Framer Motion
    Propuesta2/   # Versión con GSAP
```

## Dominio

`camiymajo.com`
