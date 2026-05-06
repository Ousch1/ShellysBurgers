import { Link } from 'react-router-dom'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { SiGlovo } from 'react-icons/si'
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md'
import { BUSINESS, LINKS } from '../../utils/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-white" role="contentinfo">
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Marca */}
          <div className="lg:col-span-1">
            <Link to="/" aria-label="Inicio">
              <span className="font-display text-4xl tracking-wider">
                SHELLY<span className="text-brand-blue">'S</span>
              </span>
              <div className="font-display text-lg tracking-[0.25em] text-white/50 mt-0.5">BURGERS</div>
            </Link>
            <p className="font-body text-white/60 text-sm mt-4 leading-relaxed">
              Auténticas Smash Burgers artesanas elaboradas con pasión en el corazón de Ciudad Real.
            </p>
            {/* Redes sociales */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Shelly's Burgers"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-blue transition-colors duration-200"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp de Shelly's Burgers"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-green-500 transition-colors duration-200"
              >
                <FaWhatsapp size={18} />
              </a>
              <a
                href={LINKS.glovo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pedir en Glovo"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-blue transition-colors duration-200"
              >
                <SiGlovo size={16} />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="font-display text-lg tracking-widest text-white mb-5">MENÚ</h3>
            <ul className="space-y-2">
              {[
                { to: '/',                    label: 'Inicio' },
                { to: '/hamburguesa-del-mes', label: 'Hamburguesa del Mes' },
                { to: '/carta',               label: 'Nuestra Carta' },
                { to: '/nosotros',            label: 'Nosotros' },
                { to: '/contacto',            label: 'Contacto' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="font-body text-sm text-white/60 hover:text-brand-blue-light transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-display text-lg tracking-widest text-white mb-5">CONTACTO</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MdLocationOn className="text-brand-blue mt-0.5 shrink-0" size={18} />
                <span className="font-body text-sm text-white/60 leading-relaxed">{BUSINESS.direccion}</span>
              </li>
              <li className="flex items-center gap-3">
                <MdPhone className="text-brand-blue shrink-0" size={18} />
                <a href={`tel:${BUSINESS.telefono.replace(/\s/g, '')}`} className="font-body text-sm text-white/60 hover:text-brand-blue-light transition-colors">
                  {BUSINESS.telefono}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-brand-blue shrink-0" size={17} />
                <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-white/60 hover:text-brand-blue-light transition-colors">
                  Reservas: {BUSINESS.reservas}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaInstagram className="text-brand-blue shrink-0" size={17} />
                <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-white/60 hover:text-brand-blue-light transition-colors">
                  {BUSINESS.instagram}
                </a>
              </li>
            </ul>
          </div>

          {/* Pedir */}
          <div>
            <h3 className="font-display text-lg tracking-widest text-white mb-5">PIDE AHORA</h3>
            <p className="font-body text-sm text-white/60 leading-relaxed mb-5">
              ¿No puedes venir? Pide nuestras hamburguesas directamente a domicilio.
            </p>
            <a
              href={LINKS.glovo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              <SiGlovo size={16} />
              Pedir en Glovo
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/40">
            © {year} Shelly's Burgers · Todos los derechos reservados
          </p>
          <div className="flex items-center gap-6">
            {[
              { to: '/aviso-legal',       label: 'Aviso Legal' },
              { to: '/privacidad',        label: 'Privacidad' },
              { to: '/cookies',           label: 'Cookies' },
            ].map(({ to, label }) => (
              <Link key={to} to={to} className="font-body text-xs text-white/40 hover:text-white/70 transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
