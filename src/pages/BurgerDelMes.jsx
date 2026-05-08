import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { MdLocalFireDepartment, MdStar } from 'react-icons/md'
import { SiGlovo } from 'react-icons/si'
import { useBurgerOfMonth } from '../hooks/useBurgerOfMonth'
import { getBurgerOfMonthImage, handleImageError } from '../utils/imageHelper'

export default function BurgerDelMes() {
  const { burger, loading, error } = useBurgerOfMonth()

  return (
    <>
      <Helmet>
        <title>Hamburguesa del Mes – Shelly's Burgers</title>
        <meta name="description" content="Descubre nuestra hamburguesa especial del mes. Una creación única y de edición limitada." />
      </Helmet>

      <main className="pt-20">
        <section className="py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="container-site"
          >
            <span className="badge-fire mb-6">
              <MdLocalFireDepartment size={18} />
              Edición Limitada
            </span>
            <h1 className="font-display text-6xl md:text-8xl text-white mt-4">
              HAMBURGUESA<br /><span className="text-brand-blue">DEL MES</span>
            </h1>
          </motion.div>
        </section>

        <div className="h-px mx-auto max-w-7xl bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent mb-16" />

        {loading && (
          <div className="py-16">
            <div className="container-site max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="aspect-square rounded-3xl skeleton-dark" />
                <div className="space-y-4 pt-4">
                  <div className="h-12 w-3/4 rounded-2xl skeleton-dark" />
                  <div className="h-5 w-full rounded skeleton-dark" />
                  <div className="h-5 w-full rounded skeleton-dark" />
                </div>
              </div>
            </div>
          </div>
        )}

        {!loading && !error && burger && (
          <section className="pb-20">
            <div className="container-site max-w-5xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="relative group"
                >
                  <div className="rounded-3xl overflow-hidden aspect-square border border-brand-blue/20">
                    <img
                      src={getBurgerOfMonthImage(burger.imagen)}
                      alt={burger.nombre}
                      loading="eager"
                      decoding="async"
                      onError={handleImageError}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute -bottom-5 -right-5 bg-brand-blue text-white rounded-2xl px-6 py-3 shadow-blue">
                    <span className="font-display text-4xl">{burger.precio}</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-brand-blue mb-3">{burger.mes}</p>
                  <h2 className="font-display text-5xl md:text-6xl text-white mb-6 leading-none">
                    {burger.nombre.toUpperCase()}
                  </h2>
                  <p className="font-body text-white/65 text-lg leading-relaxed mb-8">{burger.descripcion}</p>

                  {burger.ingredientes && (
                    <div className="mb-8">
                      <h3 className="font-body font-semibold text-white mb-3">Ingredientes:</h3>
                      <ul className="space-y-2">
                        {burger.ingredientes.map((ing, i) => (
                          <li key={i} className="flex items-center gap-3 font-body text-sm text-white/60">
                            <MdStar className="text-brand-blue shrink-0" size={14} />
                            {ing}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {burger.destacado && (
                    <div className="inline-flex items-center gap-2 bg-brand-blue/10 border border-brand-blue/20 rounded-xl px-4 py-2 mb-8">
                      <span>⚡</span>
                      <span className="font-body text-sm text-brand-blue font-medium">{burger.destacado}</span>
                    </div>
                  )}

                  <a
                    href={burger.glovo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-brand-blue text-white font-body font-semibold text-lg px-10 py-4 rounded-full shadow-blue hover:bg-brand-blue-dark hover:shadow-blue-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <SiGlovo size={20} />
                    Pedir en Glovo
                  </a>
                </motion.div>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  )
}
