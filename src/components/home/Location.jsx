import { motion } from 'framer-motion'
import { MdLocationOn, MdPhone, MdAccessTime } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'
import { BUSINESS, LINKS, HORARIOS } from '../../utils/constants'

const cardClass = "rounded-2xl p-6 border border-white/[0.08]"
const cardStyle = { background: 'rgba(255,255,255,0.04)' }
const iconWrap = "w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center shrink-0"

export default function Location() {
  const today = new Date().toLocaleDateString('es-ES', { weekday: 'long' })
  const todayCapitalized = today.charAt(0).toUpperCase() + today.slice(1)

  return (
    <section className="py-24 bg-transparent" id="ubicacion" aria-label="Ubicación y horarios">
      <div className="container-site">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-body text-xs font-semibold tracking-[0.25em] uppercase text-brand-blue mb-4">
            Encuéntranos
          </span>
          <h2 className="section-title">
            DÓNDE <span className="text-brand-blue">ESTAMOS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className={cardClass} style={cardStyle}>
              <div className="flex items-start gap-4">
                <div className={iconWrap}><MdLocationOn className="text-brand-blue" size={20} /></div>
                <div>
                  <h3 className="font-body font-semibold text-white mb-1">Dirección</h3>
                  <p className="font-body text-white/60">{BUSINESS.direccion}</p>
                </div>
              </div>
            </div>

            <div className={cardClass} style={cardStyle}>
              <div className="flex items-start gap-4">
                <div className={iconWrap}><MdPhone className="text-brand-blue" size={20} /></div>
                <div>
                  <h3 className="font-body font-semibold text-white mb-1">Teléfono</h3>
                  <a href="tel:+34926722298" className="font-body text-white/60 hover:text-brand-blue transition-colors block">{BUSINESS.telefono}</a>
                  <a href="tel:+34614815993" className="font-body text-sm text-white/40 hover:text-brand-blue transition-colors">Reservas: {BUSINESS.reservas}</a>
                </div>
              </div>
            </div>

            <div className={cardClass} style={cardStyle}>
              <div className="flex items-start gap-4 mb-4">
                <div className={iconWrap}><MdAccessTime className="text-brand-blue" size={20} /></div>
                <h3 className="font-body font-semibold text-white">Horarios</h3>
              </div>
              <ul className="space-y-2 pl-14">
                {HORARIOS.map(({ dia, horas }) => {
                  const isToday = dia === todayCapitalized
                  return (
                    <li key={dia} className={`flex justify-between gap-4 font-body text-sm ${isToday ? 'text-brand-blue font-semibold' : 'text-white/60'}`}>
                      <span>{dia}</span>
                      <span className={isToday ? '' : 'text-white/40'}>{horas}</span>
                    </li>
                  )
                })}
              </ul>
            </div>

            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-500 text-white font-body font-semibold py-4 px-6 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <FaWhatsapp size={22} />
              Reservar Mesa por WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 rounded-2xl overflow-hidden border border-white/10"
          >
            <iframe
              title="Ubicación de Shelly's Burgers en Ciudad Real"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.5!2d-3.9272!3d38.9852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6a0e6b9b67dcb1%3A0x0!2sCalle+Postas+12%2C+13001+Ciudad+Real!5e0!3m2!1ses!2ses!4v1714000000000!5m2!1ses!2ses"
              width="100%"
              height="450"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
