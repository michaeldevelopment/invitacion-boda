import "./propuesta6.css";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import EnvelopeScreen from "./EnvelopeScreen";
import HeroPhoto from "./HeroPhoto";
import InvitacionTexto from "./InvitacionTexto";
import FechaBlock from "./FechaBlock";
import Cuenta from "./Cuenta";
import Ceremonia from "./Ceremonia";
import Recepcion from "./Recepcion";
import FotoSeparador from "./FotoSeparador";
import Itinerario from "./Itinerario";
import Vestimenta from "./Vestimenta";
import LluviaOraciones from "./LluviaOraciones";
import Hospedaje from "./Hospedaje";
import Confirmacion from "./Confirmacion";
import PreguntasFrecuentes from "./PreguntasFrecuentes";
import Cierre from "./Cierre";

type AppState = "loading" | "envelope" | "transitioning" | "open";

export default function Propuesta6() {
  const [appState, setAppState] = useState<AppState>("loading");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTransition = () => {
    setAppState("transitioning");
    setTimeout(() => setAppState("open"), 650);
  };

  const showEnvelope = appState === "envelope" || appState === "transitioning";
  const showContent = appState === "transitioning" || appState === "open";

  return (
    <div className="p6-root">
      {appState === "loading" && (
        <Loader onLoaded={() => setAppState("envelope")} />
      )}

      {showEnvelope && (
        <EnvelopeScreen
          onTransition={handleTransition}
          fading={appState === "transitioning"}
        />
      )}

      {showContent && (
        <div
          style={{
            opacity: appState === "open" ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        >
          <HeroPhoto />
          <InvitacionTexto />
          <FechaBlock />
          <Cuenta />
          <FotoSeparador />
          <Itinerario />
          <Ceremonia />
          <Recepcion />
          <Vestimenta />
          <LluviaOraciones />
          <Hospedaje />
          <Confirmacion />
          <PreguntasFrecuentes />
          <Cierre />
        </div>
      )}
    </div>
  );
}
