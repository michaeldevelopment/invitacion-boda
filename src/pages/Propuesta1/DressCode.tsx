import { useEffect } from "react";
import { motion } from "framer-motion";

const colores = [
  { hex: "#60141A", label: "Borgoña" },
  { hex: "#7A8D61", label: "Olivo" },
  { hex: "#AB7E6C", label: "Terracota" },
  { hex: "#E8E1D3", label: "Crema" },
  { hex: "#8B7355", label: "Camel" },
  { hex: "#C4A882", label: "Arena" },
];

export default function DressCode() {
  // useEffect(() => {
  //   const build = () => {
  //     (window as any).PinUtils?.build();
  //   };

  //   if (document.querySelector('script[src*="pinit.js"]')) {
  //     build();
  //   } else {
  //     const script = document.createElement("script");
  //     script.src = "//assets.pinterest.com/js/pinit.js";
  //     script.async = true;
  //     script.defer = true;
  //     script.onload = build;
  //     document.body.appendChild(script);
  //   }
  // }, []);

  useEffect(() => {
    const build = () => {
      (window as any).PinUtils?.build();
    };
    if (document.querySelector('script[src*="pinit.js"]')) {
      build();
    } else {
      const script = document.createElement("script");
      script.src = "//assets.pinterest.com/js/pinit.js";
      script.async = true;
      script.defer = true;
      script.onload = build;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="bg-crema py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8 }}
        className="max-w-sm mx-auto text-center"
      >
        <p className="section-label mb-3">Vestimenta</p>
        <h2 className="font-serif text-3xl text-borgona font-light mb-3">
          Formal
        </h2>
        <p className="font-serif italic text-borgona/60 text-sm leading-relaxed mb-10">
          Les pedimos vestir en tonos tierra y cálidos.
          <br />
          Se agradece evitar el blanco.
        </p>

        <div className="flex justify-center gap-3 flex-wrap mb-6">
          {colores.map((c, i) => (
            <motion.div
              key={c.hex}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="flex flex-col items-center gap-1.5"
            >
              <div
                className="w-9 h-9 rounded-full border border-borgona/10"
                style={{ backgroundColor: c.hex }}
              />
              <span className="text-borgona/40 text-[9px] tracking-wider uppercase font-serif">
                {c.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Pinterest board */}
      <div className="mt-8">
        <p className="font-serif italic text-borgona/50 text-xs tracking-wide flex justify-center">
          Referencias de estilo
        </p>
        <a
          data-pin-do="embedBoard"
          data-pin-board-width="340"
          data-pin-scale-height="240"
          data-pin-scale-width="60"
          href="https://co.pinterest.com/mjrozo_/dress-code-algunos-referentes/"
        />
      </div>

      {/* Pinterest board */}
      {/* <div className="mt-12 mb-4">
        <div className="flex justify-center">
          <a
            data-pin-do="embedBoard"
            data-pin-board-width="600"
            data-pin-scale-height="300"
            data-pin-scale-width="80"
            href="https://co.pinterest.com/mjrozo_/dress-code-algunos-referentes/"
          />
        </div>
      </div> */}
    </section>
  );
}
