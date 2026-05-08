import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MdVerified } from 'react-icons/md'

const VALORES = [
  { emoji: '🥩', titulo: 'Carne Premium',     texto: 'Seleccionamos únicamente la mejor carne fresca para elaborar nuestros smash burgers.' },
  { emoji: '🔥', titulo: 'Técnica Smash',      texto: 'El aplastado perfecto crea una corteza dorada única e irresistible.' },
  { emoji: '🫙', titulo: 'Salsas Artesanas',   texto: 'Cada salsa se elabora diariamente en nuestra cocina con ingredientes frescos.' },
  { emoji: '🍞', titulo: 'Pan Brioche Fresco', texto: 'Nuestro pan llega todos los días de panadería local para garantizar su frescura.' },
]

export default function About() {
  return (
    <section className="py-24 bg-transparent" id="nosotros" aria-label="Sobre nosotros">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block font-body text-xs font-semibold tracking-[0.25em] uppercase text-brand-blue mb-4">
              Nuestra Historia
            </span>
            <h2 className="section-title mb-6">
              SMASH BURGERS<br />
              <span className="text-brand-blue">CON ALMA</span>
            </h2>
            <p className="font-body text-white/65 text-lg leading-relaxed mb-6">
              Shelly's Burgers nació en 2025 con una misión clara: llevar a Ciudad Real las auténticas <strong className="text-white">Smash Burgers</strong> americanas, elaboradas con la mejor carne y una técnica depurada.
            </p>
            <p className="font-body text-white/55 leading-relaxed mb-8">
              Cada hamburguesa es un proceso de precisión: la carne se aplasta sobre la plancha a alta temperatura para conseguir esa corteza dorada y crujiente que hace irresistible cada bocado. Sin atajos, sin congelados — solo producto fresco y pasión por el oficio.
            </p>

            <div className="flex items-center gap-3 mb-8">
              <MdVerified className="text-brand-blue" size={22} />
              <span className="font-body text-white/70 font-medium">Las mejores Smash Burgers de La Mancha</span>
            </div>

            <Link to="/nosotros" className="btn-primary">
              Conócenos mejor
            </Link>
          </motion.div>

          {/* Valores */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {VALORES.map(({ emoji, titulo, texto }, i) => (
              <motion.div
                key={titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-6 border border-white/[0.08] hover:border-brand-blue/40 transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                <span className="text-3xl mb-3 block">{emoji}</span>
                <h3 className="font-body font-bold text-white mb-2">{titulo}</h3>
                <p className="font-body text-white/50 text-sm leading-relaxed">{texto}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
