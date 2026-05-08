import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MdVerified } from 'react-icons/md'

const TIMELINE = [
  { year: '2025', titulo: 'El comienzo', texto: 'Shelly\'s Burgers abre sus puertas en el corazón de Ciudad Real con una propuesta clara: las mejores Smash Burgers de La Mancha.' },
  { year: '2025', titulo: 'Filosofía Smash', texto: 'Adoptamos la técnica del "smash" americano: aplastamos la carne sobre la plancha a alta temperatura para conseguir una corteza dorada y crujiente única.' },
  { year: '2026', titulo: 'Hamburguesa del Mes', texto: 'Lanzamos la sección de "Hamburguesa del Mes", una creación limitada y exclusiva que cambia mensualmente con ingredientes de temporada.' },
]

const VALORES = [
  { icon: '🥩', titulo: 'Carne fresca diaria',    texto: 'Nunca congelada. Cada hamburguesa se elabora con carne seleccionada que llega fresca cada mañana.' },
  { icon: '🔥', titulo: 'Técnica Smash',           texto: 'El aplastado perfecto sobre plancha crea la corteza dorada que distingue una smash burger del resto.' },
  { icon: '🫙', titulo: 'Salsas artesanas',        texto: 'Todas las salsas se elaboran en nuestra cocina con ingredientes naturales. Sin conservantes.' },
  { icon: '🍞', titulo: 'Pan brioche local',       texto: 'Trabajamos con panadería local para garantizar el pan más fresco posible en cada servicio.' },
  { icon: '🌱', titulo: 'Producto local',           texto: 'Apostamos por proveedores de la región de Castilla-La Mancha para apoyar la economía local.' },
  { icon: '❤️', titulo: 'Hecho con pasión',        texto: 'Cada hamburguesa es una obra de amor. Porque la diferencia entre bueno y extraordinario está en los detalles.' },
]

const cardStyle = { background: 'rgba(255,255,255,0.04)' }

export default function About() {
  return (
    <>
      <Helmet>
        <title>Nosotros – Shelly's Burgers</title>
        <meta name="description" content="Conoce la historia y filosofía de Shelly's Burgers. Auténticas Smash Burgers artesanas en Ciudad Real desde 2025." />
      </Helmet>

      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="container-site"
          >
            <span className="inline-block font-body text-xs font-semibold tracking-[0.25em] uppercase text-brand-blue mb-4">
              Nuestra historia
            </span>
            <h1 className="font-display text-6xl md:text-8xl text-white leading-none">
              SOBRE <span className="text-brand-blue">NOSOTROS</span>
            </h1>
          </motion.div>
        </section>

        {/* Divisor */}
        <div className="h-px mx-auto max-w-7xl bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent mb-16" />

        {/* Historia */}
        <section className="py-16">
          <div className="container-site max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="section-title mb-6">
                UNA PASIÓN <span className="text-brand-blue">POR LAS BURGERS</span>
              </h2>
              <p className="font-body text-white/60 text-xl leading-relaxed">
                Shelly's Burgers nació en 2025 con una misión simple: revolucionar el panorama gastronómico de Ciudad Real con las auténticas Smash Burgers americanas, elaboradas con respeto por el producto y sin atajos.
              </p>
            </motion.div>

            <div className="space-y-8">
              {TIMELINE.map(({ year, titulo, texto }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-blue flex items-center justify-center shrink-0 text-white font-display text-sm text-center leading-none">
                    {year}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-body font-bold text-white text-xl mb-2">{titulo}</h3>
                    <p className="font-body text-white/60 leading-relaxed">{texto}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Divisor */}
        <div className="h-px mx-auto max-w-7xl bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent my-4" />

        {/* Valores */}
        <section className="py-16">
          <div className="container-site">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="section-title">
                NUESTROS <span className="text-brand-blue">VALORES</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {VALORES.map(({ icon, titulo, texto }, i) => (
                <motion.div
                  key={titulo}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl p-7 border border-white/[0.08] hover:border-brand-blue/40 hover:-translate-y-1 transition-all duration-300"
                  style={cardStyle}
                >
                  <span className="text-4xl block mb-4">{icon}</span>
                  <h3 className="font-body font-bold text-white text-lg mb-2">{titulo}</h3>
                  <p className="font-body text-white/50 text-sm leading-relaxed">{texto}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container-site text-center">
            <div className="rounded-3xl border border-brand-blue/30 p-14"
                 style={{ background: 'linear-gradient(135deg, rgba(0,102,255,0.15) 0%, rgba(0,26,92,0.3) 100%)' }}>
              <h2 className="font-display text-5xl md:text-6xl text-white mb-6">¿LISTO PARA PROBARLAS?</h2>
              <p className="font-body text-white/65 text-lg mb-10 max-w-md mx-auto">
                Ven a visitarnos o pide a domicilio. Te prometemos que no te arrepentirás.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/carta" className="btn-primary text-base px-8 py-4">Ver la Carta</Link>
                <Link to="/contacto" className="btn-outline text-base px-8 py-4">Cómo Llegar</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
