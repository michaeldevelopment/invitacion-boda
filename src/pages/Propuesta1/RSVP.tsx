import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function RSVP() {
  const [nombre, setNombre] = useState('')
  const [asistencia, setAsistencia] = useState<'si' | 'no' | ''>('')
  const [personas, setPersonas] = useState('1')
  const [enviado, setEnviado] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!nombre.trim() || !asistencia) return
    setEnviado(true)
  }

  return (
    <section className="bg-white py-20 px-6" id="rsvp">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9 }}
        className="max-w-sm mx-auto text-center"
      >
        <p className="section-label mb-3">Confirma tu asistencia</p>
        <h2 className="font-serif text-3xl text-borgona font-light mb-6">
          ¿Nos acompañás?
        </h2>
        <p className="font-serif italic text-borgona/60 text-sm leading-relaxed mb-10">
          Por favor confírmanos tu asistencia antes del{' '}
          <span className="not-italic font-medium text-borgona">1 de junio</span>.
          <br />
          Después de esa fecha, si no hemos recibido respuesta,
          asumiremos con cariño que no podrás acompañarnos.
        </p>

        <AnimatePresence mode="wait">
          {!enviado ? (
            <motion.form
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 text-left"
            >
              <input
                type="text"
                placeholder="Tu nombre completo"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="bg-transparent border-b border-borgona/20 text-borgona font-serif
                           placeholder:text-borgona/30 text-sm py-3 px-1 outline-none
                           focus:border-borgona/50 transition-colors duration-200"
              />

              <div className="flex gap-3">
                {[
                  { val: 'si', label: '¡Sí, estaré!' },
                  { val: 'no', label: 'No podré ir' },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    type="button"
                    onClick={() => setAsistencia(opt.val as 'si' | 'no')}
                    className={`flex-1 border font-serif text-xs tracking-widest uppercase py-3
                      transition-all duration-300
                      ${asistencia === opt.val
                        ? 'bg-borgona text-crema border-borgona'
                        : 'border-borgona/25 text-borgona hover:border-borgona/50'
                      }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {asistencia === 'si' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <label className="section-label block mb-2">Personas que asistirán</label>
                  <select
                    value={personas}
                    onChange={(e) => setPersonas(e.target.value)}
                    className="w-full bg-transparent border-b border-borgona/20 text-borgona font-serif
                               text-sm py-3 px-1 outline-none appearance-none
                               focus:border-borgona/50 transition-colors duration-200"
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? 'persona' : 'personas'}</option>
                    ))}
                  </select>
                </motion.div>
              )}

              <button type="submit" className="btn-primary w-full text-center mt-2">
                Confirmar
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="thanks"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="py-8"
            >
              <p className="font-script text-5xl text-borgona mb-4">
                {asistencia === 'si' ? '¡Hasta pronto!' : 'Gracias'}
              </p>
              <p className="font-serif italic text-borgona/60 text-sm">
                {asistencia === 'si'
                  ? 'Tu compañía para nosotras es el mejor regalo.'
                  : 'Te vamos a extrañar mucho.'}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
