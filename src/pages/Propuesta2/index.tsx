import "./shared/gsap.config";
import { useEffect } from "react";
import NavMenu from "./NavMenu";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProgressBar from "./shared/ProgressBar";
import Hero from "./Hero";
import PinnedSequence from "./PinnedSequence";
import Locations from "./Locations";
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
    <div className="p4-root" style={{ paddingTop: 56 }}>
      <NavMenu />
      <ProgressBar />

      {/* Acto 1 — Hero */}
      <Hero />

      {/* Actos 2–4 — Secuencia pinned: frase · countdown · pausa */}
      <PinnedSequence />

      {/* Acto 5 — Ubicaciones (ceremonia y recepción) */}
      <Locations />

      {/* Acto 7 — Dress code */}
      <DressCode />

      {/* Acto 8 — Hospedaje */}
      <Hospedaje />

      {/* Acto 9 — RSVP */}
      <RSVP />
    </div>
  );
}
