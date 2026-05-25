import { motion } from 'framer-motion'

const lugares = [
  {
    nombre: 'Hotel Dann Carlton Medellín',
    detalle: 'Hotel 5 estrellas · ~500 m de la iglesia · El Poblado, Cl. 7 #43-60',
    link: 'https://www.booking.com/hotel/co/dann-carlton-medellin.html',
  },
  {
    nombre: 'Airbnbs cerca a la iglesia',
    detalle: 'Airbnb · El Poblado · ~5 min de la iglesia',
    link: 'https://www.airbnb.com/s/Medellin--Antioquia/homes?refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2026-06-01&monthly_length=3&monthly_end_date=2026-09-01&price_filter_input_type=2&channel=EXPLORE&zoom_level=15.525610530611516&search_type=user_map_move&place_id=ChIJBa0PuN8oRI4RVju1x_x8E0I&acp_id=e6f47397-cd93-4793-8ee6-cc92bb7170e3&date_picker_type=calendar&checkin=2026-08-20&checkout=2026-08-23&query=Medellin%2C%20Antioquia&search_mode=regular_search&price_filter_num_nights=3&ne_lat=6.219498903576044&ne_lng=-75.55293689457068&sw_lat=6.197478654912585&sw_lng=-75.57837986057763&zoom=15.525610530611516&search_by_map=true&host_languages%5B%5D=es&selected_filter_order%5B%5D=host_languages%3Aes&update_selected_filters=false',
  },
  {
    nombre: 'Airbnbs cerca a la recepción',
    detalle: 'Airbnb · San Lucas · ~10 min de Quince Lucas',
    link: 'https://www.airbnb.com/s/Medellin--Antioquia/homes?refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2026-06-01&monthly_length=3&monthly_end_date=2026-09-01&price_filter_input_type=2&channel=EXPLORE&zoom_level=15.525610530611516&search_type=user_map_move&place_id=ChIJBa0PuN8oRI4RVju1x_x8E0I&acp_id=e6f47397-cd93-4793-8ee6-cc92bb7170e3&date_picker_type=calendar&checkin=2026-08-20&checkout=2026-08-23&query=Medellin%2C%20Antioquia&search_mode=regular_search&price_filter_num_nights=3&ne_lat=6.187904502990555&ne_lng=-75.55333211147592&sw_lat=6.165882936724882&sw_lng=-75.57877507748287&zoom=15.525610530611516&search_by_map=true&host_languages%5B%5D=es&selected_filter_order%5B%5D=host_languages%3Aes&update_selected_filters=false',
  },
]

export default function Hospedaje() {
  return (
    <section id="p1-hospedaje" className="bg-crema py-14 md:py-20 px-8 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-10 md:mb-14">
          <p className="font-serif text-borgona/45 text-[10px] md:text-xs tracking-widest uppercase mb-2">
            Para los que vienen de lejos
          </p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-borgona font-light">
            ¿Dónde hospedarse?
          </h2>
        </div>

        {/* Mobile: lista | Tablet+: grid 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 lg:gap-10 divide-y md:divide-y-0 divide-borgona/10">
          {lugares.map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="py-6 md:py-0 md:flex md:flex-col"
            >
              <p className="font-serif text-sm md:text-base text-borgona mb-1">{l.nombre}</p>
              <p className="font-serif italic text-borgona/50 text-xs md:text-sm mb-4 md:flex-1">
                {l.detalle}
              </p>
              <a
                href={l.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-borgona/30 text-borgona font-serif
                           text-[10px] md:text-xs tracking-widest uppercase px-6 py-2
                           hover:bg-borgona hover:text-crema transition-all duration-300 self-start"
              >
                Ver opciones
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center font-serif italic text-borgona/35 text-xs mt-10 md:mt-14">
          Recomendamos reservar con anticipación para asegurar disponibilidad.
        </p>
      </motion.div>
    </section>
  )
}
