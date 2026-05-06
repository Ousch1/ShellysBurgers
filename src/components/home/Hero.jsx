import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import { SiGlovo } from 'react-icons/si'
import { BUSINESS, LINKS } from '../../utils/constants'

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 40 },
  animate:   { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Sección principal"
    >
      {/* Fondo — sustituye bg-gradient-hero por una imagen real cuando la tengas */}
      <div className="absolute inset-0 bg-brand-dark">
        {/* Overlay con imagen: descomenta y pon la ruta cuando tengas foto */}
        {/* <img src="/images/hero/hero-bg.jpg" alt="" className="w-full h-full object-cover opacity-50" loading="eager" /> */}

        {/* Patrón geométrico decorativo */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, #0066FF 0%, transparent 50%), radial-gradient(circle at 75% 75%, #0066FF 0%, transparent 50%)',
          }}
        />

        {/* Degradado de oscurecimiento */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
      </div>

      {/* Decoración de fondo — círculos brillantes */}
      <div className="absolute top-1/4 right-10 w-72 h-72 rounded-full bg-brand-blue/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-56 h-56 rounded-full bg-brand-blue/10 blur-3xl pointer-events-none" />

      {/* Contenido */}
      <div className="relative container-site text-center text-white py-32 flex flex-col items-center">

        {/* Título */}
        <motion.h1 {...fadeUp(0.2)} className="font-display text-7xl sm:text-8xl md:text-[9rem] lg:text-[11rem] leading-none tracking-wide text-white">
          SHELLY<span className="text-brand-blue">'S</span>
        </motion.h1>

        <motion.div {...fadeUp(0.3)} className="font-display text-3xl sm:text-4xl md:text-5xl tracking-[0.35em] text-white/70 mb-6">
          BURGERS
        </motion.div>

        {/* Separador */}
        <motion.div {...fadeUp(0.35)} className="flex items-center gap-4 mb-8">
          <div className="h-px w-16 bg-brand-blue" />
          <span className="font-body text-sm tracking-widest text-white/60 uppercase">
            {BUSINESS.eslogan}
          </span>
          <div className="h-px w-16 bg-brand-blue" />
        </motion.div>

        {/* Subtítulo */}
        <motion.p {...fadeUp(0.4)} className="font-body text-lg md:text-xl text-white/70 max-w-lg mb-12 leading-relaxed">
          Auténticas Smash Burgers artesanas en el corazón de&nbsp;
          <span className="text-white font-semibold">Ciudad Real</span>.
          Sabor real, ingredientes reales.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.5)} className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            to="/carta"
            className="btn-primary text-base px-8 py-4 group"
          >
            Ver Carta
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={LINKS.glovo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white text-base px-8 py-4 group"
          >
            <SiGlovo size={18} />
            Pedir Online
          </a>
        </motion.div>

      </div>
    </section>
  )
}
