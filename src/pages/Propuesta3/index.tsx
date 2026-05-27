import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EnvelopeScreen from "./EnvelopeScreen";
import HeroSection from "./HeroSection";
import ParentsSection from "./ParentsSection";
import SaveTheDateSection from "./SaveTheDateSection";
import CountdownSection from "./CountdownSection";
import VenuesSection from "./VenuesSection";
import ItinerarySection from "./ItinerarySection";
import DressCodeSection from "./DressCodeSection";
import PrayersSection from "./PrayersSection";
import RSVPSection from "./RSVPSection";
import AccommodationSection from "./AccommodationSection";

const Divider = () => (
  <div className="flex items-center justify-center py-2 px-8">
    <div className="flex-1 h-px bg-borgona/10" />
    <span className="px-3 text-borgona/20 text-xs">✦</span>
    <div className="flex-1 h-px bg-borgona/10" />
  </div>
);

export default function Propuesta3() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="min-h-screen bg-crema max-w-[430px] md:max-w-2xl lg:max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        {!opened ? (
          <EnvelopeScreen key="envelope" onOpen={() => setOpened(true)} />
        ) : (
          <motion.div
            key="invitation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] }}
          >
            <HeroSection />
            <Divider />
            <ParentsSection />
            <Divider />
            <SaveTheDateSection />
            <Divider />
            <CountdownSection />
            <Divider />
            <VenuesSection />
            <Divider />
            <AccommodationSection />
            <Divider />
            <ItinerarySection />
            <Divider />
            <DressCodeSection />
            <Divider />
            <PrayersSection />
            <Divider />
            <RSVPSection />

            {/* Footer */}
            <div className="py-12 text-center bg-crema">
              <p className="font-script text-3xl text-borgona mb-2">Cami y Majo</p>
              <p className="font-serif text-xs tracking-widest text-borgona/40 uppercase">
                21 · Agosto · 2026
              </p>
              <p className="font-serif text-xs text-borgona/30 italic mt-4">
                camiymajo.com
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
