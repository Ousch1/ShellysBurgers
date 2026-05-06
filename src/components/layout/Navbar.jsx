import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { NAV_LINKS, LINKS } from '../../utils/constants'
import GlovoButton from '../ui/GlovoButton'

export default function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const { pathname }              = useLocation()

  /* Cambio de fondo al hacer scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Cierra menú móvil al cambiar de página */
  useEffect(() => setMenuOpen(false), [pathname])

  const isHome   = pathname === '/'
  const isTransparent = isHome && !scrolled

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isTransparent
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100'}
      `}
    >
      <div className="container-site flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group" aria-label="Shelly's Burgers – Inicio">
          <span className={`font-display text-3xl tracking-wider transition-colors ${isTransparent ? 'text-white' : 'text-brand-dark'}`}>
            SHELLY
            <span className="text-brand-blue">'S</span>
          </span>
          <span className={`font-display text-lg tracking-[0.2em] transition-colors ${isTransparent ? 'text-white/70' : 'text-gray-400'}`}>
            BURGERS
          </span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Navegación principal">
          {NAV_LINKS.map(({ href, label }) => (
            <NavLink
              key={href}
              to={href}
              className={({ isActive }) => `
                relative font-body font-medium text-sm tracking-wide
                transition-colors duration-200 pb-1
                ${isTransparent
                  ? (isActive ? 'text-brand-blue' : 'text-white hover:text-brand-blue-light')
                  : (isActive ? 'text-brand-blue' : 'text-gray-600 hover:text-brand-blue')}
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5
                after:bg-brand-blue after:transition-all after:duration-300
                ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
              `}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <GlovoButton size="sm" className="hidden sm:inline-flex" />

          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${isTransparent ? 'text-white hover:bg-white/10' : 'text-brand-dark hover:bg-gray-100'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <nav className="container-site py-4 flex flex-col gap-1" aria-label="Menú móvil">
              {NAV_LINKS.map(({ href, label }) => (
                <NavLink
                  key={href}
                  to={href}
                  className={({ isActive }) => `
                    font-body font-medium py-3 px-4 rounded-xl transition-colors
                    ${isActive
                      ? 'bg-brand-blue/10 text-brand-blue'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-brand-blue'}
                  `}
                >
                  {label}
                </NavLink>
              ))}
              <div className="pt-2 pb-1">
                <GlovoButton size="md" className="w-full" />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
