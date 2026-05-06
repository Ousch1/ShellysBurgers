import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { MdLocationOn, MdPhone, MdAccessTime } from 'react-icons/md'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { SiGlovo } from 'react-icons/si'
import { BUSINESS, LINKS, HORARIOS } from '../utils/constants'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contacto y Ubicación – Shelly's Burgers</title>
        <meta name="description" content="Encuéntranos en C/ Postas 12, Ciudad Real. Llámanos al 926 722 298 o reserva mesa por WhatsApp." />
      </Helmet>

      <main className="pt-20">
        {/* Hero */}
        <section className="bg-brand-dark py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="container-site"
          >
            <span className="inline-block font-body text-xs font-semibold tracking-[0.25em] uppercase text-brand-blue mb-4">
              Visítanos
            </span>
            <h1 className="font-display text-6xl md:text-8xl text-white leading-none">
              CONTACTO <span className="text-brand-blue">&</span><br />UBICACIÓN
            </h1>
          </motion.div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

              {/* Columna Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-6"
              >
                {/* Dirección */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                      <MdLocationOn className="text-brand-blue" size={20} />
                    </div>
                    <div>
                      <h3 className="font-body font-semibold text-brand-dark mb-1">Dirección</h3>
                      <p className="font-body text-gray-600">{BUSINESS.direccion}</p>
                    </div>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                      <MdPhone className="text-brand-blue" size={20} />
                    </div>
                    <div>
                      <h3 className="font-body font-semibold text-brand-dark mb-1">Teléfono</h3>
                      <a href="tel:+34926722298" className="font-body text-gray-600 hover:text-brand-blue transition-colors block">
                        {BUSINESS.telefono}
                      </a>
                      <a href="tel:+34614815993" className="font-body text-sm text-gray-400 hover:text-brand-blue transition-colors">
                        Reservas: {BUSINESS.reservas}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Horarios */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                      <MdAccessTime className="text-brand-blue" size={20} />
                    </div>
                    <h3 className="font-body font-semibold text-brand-dark pt-2">Horarios</h3>
                  </div>
                  <ul className="space-y-2.5 pl-14">
                    {HORARIOS.map(({ dia, horas }) => (
                      <li key={dia} className="flex justify-between gap-3 font-body text-sm">
                        <span className="text-brand-dark font-medium">{dia}</span>
                        <span className="text-gray-400 text-right">{horas}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Redes */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-body font-semibold text-brand-dark mb-4">Síguenos</h3>
                  <div className="flex gap-3">
                    <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 hover:text-brand-blue hover:border-brand-blue font-body text-sm px-4 py-2 rounded-full transition-all">
                      <FaInstagram size={16} /> {BUSINESS.instagram}
                    </a>
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="space-y-3">
                  <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-body font-semibold py-4 px-6 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                    <FaWhatsapp size={22} /> Reservar por WhatsApp
                  </a>
                  <a href={LINKS.glovo} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full btn-primary py-4 px-6 rounded-2xl">
                    <SiGlovo size={18} /> Pedir en Glovo
                  </a>
                </div>
              </motion.div>

              {/* Mapa grande */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-2 rounded-2xl overflow-hidden shadow-card-hover min-h-[500px]"
              >
                <iframe
                  title="Mapa Shelly's Burgers Ciudad Real"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.5!2d-3.9272!3d38.9852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6a0e6b9b67dcb1%3A0x0!2sCalle+Postas+12%2C+13001+Ciudad+Real!5e0!3m2!1ses!2ses!4v1714000000000!5m2!1ses!2ses"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '500px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
