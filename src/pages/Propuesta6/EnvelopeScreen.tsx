import { useRef, useState } from "react";
import envelop from "./envelope-wine.png";
import envelopVideo from "./envelop-video.mp4";

interface EnvelopeScreenProps {
  onTransition: () => void;
  fading: boolean;
}

export default function EnvelopeScreen({
  onTransition,
  fading,
}: EnvelopeScreenProps) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const transitionFiredRef = useRef(false);

  const handleClick = () => {
    if (playing) return;
    setPlaying(true);
    videoRef.current?.play();
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const { currentTime, duration } = videoRef.current;
    if (!duration) return;

    const remaining = duration - currentTime;

    if (remaining <= 1.5) {
      videoRef.current.volume = Math.max(0, remaining / 1.5);
    }

    if (!transitionFiredRef.current && remaining <= 0.7) {
      transitionFiredRef.current = true;
      onTransition();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50"
      style={{
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? "none" : "auto",
        transition: "opacity 0.6s ease",
        cursor: playing ? "default" : "pointer",
      }}
      onClick={handleClick}
    >
      <img
        src={envelop}
        alt="Sobre de invitacion"
        className="absolute inset-0 w-full h-full"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          opacity: playing ? 0 : 1,
          transition: "opacity 0.3s ease",
          zIndex: 1,
        }}
        draggable={false}
      />

      <video
        ref={videoRef}
        src={envelopVideo}
        preload="auto"
        playsInline
        className="absolute inset-0 w-full h-full"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          opacity: playing ? 1 : 0,
          transition: "opacity 0.3s ease",
          zIndex: 2,
        }}
        onTimeUpdate={handleTimeUpdate}
        onEnded={onTransition}
      />

      <div
        className="absolute inset-x-0 bottom-0 flex flex-col items-center pb-[12%] md:pb-[5%] lg:pb-[3%]"
        style={{
          zIndex: 3,
          opacity: playing ? 0 : 1,
          transition: "opacity 0.5s ease",
          pointerEvents: "none",
        }}
      >
        <p
          className="font-script leading-tight text-center"
          style={{
            fontSize: "clamp(2rem, 8vw, 3rem)",
            color: "rgba(250,248,245,0.88)",
            letterSpacing: "0.02em",
          }}
        >
          Te invitamos a nuestro gran día
        </p>
        <p
          className="font-serif italic mt-2 text-center"
          style={{
            fontSize: "clamp(0.6rem, 2.5vw, 0.8rem)",
            color: "rgba(250,248,245,0.6)",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          Haz click para abrir la invitación
        </p>
      </div>
    </div>
  );
}
