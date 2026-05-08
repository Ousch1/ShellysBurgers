import { motion } from 'framer-motion'
import { SiGlovo } from 'react-icons/si'
import { MdLocalFireDepartment, MdStar } from 'react-icons/md'
import { useBurgerOfMonth } from '../../hooks/useBurgerOfMonth'
import { getBurgerOfMonthImage, handleImageError } from '../../utils/imageHelper'

export default function HamburguesaDelMes() {
  const { burger, loading, error } = useBurgerOfMonth()

  if (loading) return <HamburguesaDelMesSkeleton />
  if (error || !burger) return null

  return (
    <section
      className="relative overflow-hidden bg-gradient-dark py-24"
      aria-label="Hamburguesa del mes"
      id="hamburguesa-del-mes"
    >
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-site relative">

        {/* Cabecera centrada */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge-fire mb-6">
            <MdLocalFireDepartment size={18} />
            La Hamburguesa del Mes
          </span>
          <p className="font-body text-white/40 text-sm tracking-widest uppercase">
            {burger.mes}
          </p>
        </motion.div>

        {/* Layout 2 columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative group"
          >
            {/* Marco decorativo */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-blue/30 to-transparent blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative rounded-3xl overflow-hidden aspect-square border border-brand-blue/20 shadow-blue-lg">
              <img
                src={getBurgerOfMonthImage(burger.imagen)}
                alt={`Hamburguesa del mes: ${burger.nombre}`}
                loading="eager"
                onError={handleImageError}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Etiqueta de precio flotante */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="absolute -bottom-5 -right-5 bg-brand-blue text-white rounded-2xl px-6 py-3 shadow-blue"
            >
              <span className="font-display text-4xl">{burger.precio}</span>
            </motion.div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-white lg:pl-4"
          >
            <h2 className="font-display text-6xl md:text-7xl lg:text-8xl leading-none text-white mb-6">
              {burger.nombre.toUpperCase()}
            </h2>

            <p className="font-body text-white/70 text-lg leading-relaxed mb-8">
              {burger.descripcion}
            </p>

            {/* Ingredientes */}
            {burger.ingredientes && (
              <ul className="space-y-2 mb-8">
                {burger.ingredientes.map((ing, i) => (
                  <li key={i} className="flex items-center gap-3 font-body text-sm text-white/60">
                    <MdStar className="text-brand-blue shrink-0" size={14} />
                    {ing}
                  </li>
                ))}
              </ul>
            )}

            {/* Destacado */}
            {burger.destacado && (
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-2 mb-8">
                <span className="text-brand-blue-light">⚡</span>
                <span className="font-body text-sm text-white/80">{burger.destacado}</span>
              </div>
            )}

            {/* CTA */}
            <a
              href={burger.glovo_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-blue text-white font-body font-semibold text-lg px-10 py-4 rounded-full shadow-blue hover:bg-brand-blue-dark hover:shadow-blue-lg hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 focus:ring-offset-brand-dark"
            >
              <SiGlovo size={20} />
              Pedir Ahora en Glovo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function HamburguesaDelMesSkeleton() {
  return (
    <section className="bg-gradient-dark py-24">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-square rounded-3xl skeleton-dark" />
          <div className="space-y-4">
            <div className="h-8 w-48 rounded-full skeleton-dark" />
            <div className="h-20 w-full rounded-2xl skeleton-dark" />
            <div className="h-6 w-3/4 rounded-xl skeleton-dark" />
            <div className="h-6 w-1/2 rounded-xl skeleton-dark" />
            <div className="h-14 w-56 rounded-full skeleton-dark mt-8" />
          </div>
        </div>
      </div>
    </section>
  )
}
