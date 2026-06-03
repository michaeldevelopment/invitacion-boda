import "./shared/gsap.config";
import { useEffect, useState } from "react";
import { ScrollTrigger } from "./shared/gsap.config";

import "./propuesta5.css";

import Loader from "./Loader";
import EnvelopeScreen from "./EnvelopeScreen";
import NavMenu from "./NavMenu";
import ProgressBar from "./shared/ProgressBar";
import Hero from "./Hero";
import InvitationPhrase from "./InvitationPhrase";
import NarrativeSection from "./NarrativeSection";
import Locations from "./Locations";
import DressCode from "./DressCode";
import Oraciones from "./Oraciones";
import Hospedaje from "./Hospedaje";
import FAQ from "./FAQ";
import RSVP from "./RSVP";

type AppState = "loading" | "envelope" | "transitioning" | "open";

export default function Propuesta5() {
  const [appState, setAppState] = useState<AppState>("loading");

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleTransition = () => {
    // Hero monta con opacity-0, pétalos empiezan a caer
    setAppState("transitioning");
    // 650ms después, Hero hace fade-in (coincide con el fade-out del sobre)
    setTimeout(() => setAppState("open"), 650);
  };

  const showEnvelope = appState === "envelope" || appState === "transitioning";
  const showContent = appState === "transitioning" || appState === "open";
  const petalosActivos = appState !== "envelope" && appState !== "loading";

  return (
    <div className="p5-root">
      {/* Loader — visible solo durante la carga inicial */}
      {appState === "loading" && (
        <Loader onLoaded={() => setAppState("envelope")} />
      )}

      {/* Sobre — present hasta que se abra */}
      {showEnvelope && (
        <EnvelopeScreen
          onTransition={handleTransition}
          fading={appState === "transitioning"}
        />
      )}

      {/* Invitación — monta en "transitioning" (invisible) para que
          los pétalos ya estén cayendo cuando el Hero se vuelve visible */}
      {showContent && (
        <div
          className="transition-opacity duration-500"
          style={{
            opacity: appState === "open" ? 1 : 0,
            paddingTop: 56,
          }}
        >
          <NavMenu />
          <ProgressBar />

          {/* Hero con prop para activar pétalos */}
          <Hero petalosActivos={petalosActivos} />

          {/* Frase de invitación */}
          <InvitationPhrase />

          {/* Narrativa + Countdown */}
          <NarrativeSection />

          {/* Ubicaciones + Timeline */}
          <Locations />

          {/* Dress Code */}
          <DressCode />

          {/* Lluvia de Oraciones */}
          <Oraciones />

          {/* Hospedaje */}
          <Hospedaje />

          {/* Preguntas frecuentes */}
          <FAQ />

          {/* RSVP */}
          <RSVP />
        </div>
      )}
    </div>
  );
}
