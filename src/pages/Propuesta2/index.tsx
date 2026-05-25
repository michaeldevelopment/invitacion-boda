import "./shared/gsap.config";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProgressBar from "./shared/ProgressBar";
import Hero from "./Hero";
import PinnedSequence from "./PinnedSequence";
import Oraciones from "./Oraciones";
import DressCode from "./DressCode";
import Hospedaje from "./Hospedaje";
import RSVP from "./RSVP";
import "./propuesta4.css";

export default function Propuesta4() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    return () => {
      // Kill all ScrollTriggers when leaving the page
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="p4-root">
      <ProgressBar />

      {/* Acto 1 — Hero */}
      <Hero />

      {/* Actos 2–5 — Secuencia pinned: frase · countdown · pausa · ubicaciones */}
      <PinnedSequence />

      {/* Acto 6 — Lluvia de oraciones */}
      <Oraciones />

      {/* Acto 7 — Dress code */}
      <DressCode />

      {/* Acto 8 — Hospedaje */}
      <Hospedaje />

      {/* Acto 9 — RSVP */}
      <RSVP />
    </div>
  );
}
