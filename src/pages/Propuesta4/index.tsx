import "./shared/gsap.config";
import { useEffect } from "react";
import NavMenu from "./NavMenu";
import { ScrollTrigger } from "./shared/gsap.config";

import ProgressBar from "./shared/ProgressBar";
import Hero from "./Hero";
import InvitationPhrase from "./InvitationPhrase";
import NarrativeSection from "./NarrativeSection";
import Oraciones from "./Oraciones";
import Locations from "./Locations";
import DressCode from "./DressCode";
import Hospedaje from "./Hospedaje";
import RSVP from "./RSVP";
import "./propuesta4.css";

export default function Propuesta4() {
  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="p4-root" style={{ paddingTop: 56 }}>
      <NavMenu />
      <ProgressBar />

      {/* Acto 1 — Hero */}
      <Hero />

      {/* Acto 2 — Frase · Countdown */}
      <InvitationPhrase />

      {/* Acto 3 — Historia · Versículo */}
      <NarrativeSection />

      {/* Acto 4 — Lluvia de oraciones */}
      <Oraciones />

      {/* Acto 6 — Ubicaciones (ceremonia y recepción) */}
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
