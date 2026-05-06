import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import MenuSection from '../components/menu/MenuSection'

export default function Menu() {
  return (
    <>
      <Helmet>
        <title>Nuestra Carta – Shelly's Burgers</title>
        <meta name="description" content="Descubre toda la carta de Shelly's Burgers: hamburguesas smash, complementos, postres y bebidas. Pide en Glovo o visítanos en Ciudad Real." />
      </Helmet>

      <main className="pt-20 min-h-screen">
        {/* Hero de sección */}
        <section className="bg-brand-dark py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="container-site"
          >
            <span className="inline-block font-body text-xs font-semibold tracking-[0.25em] uppercase text-brand-blue mb-4">
              Ciudad Real
            </span>
            <h1 className="font-display text-6xl md:text-8xl text-white leading-none">
              NUESTRA <span className="text-brand-blue">CARTA</span>
            </h1>
            <p className="font-body text-white/60 text-lg mt-6 max-w-lg mx-auto">
              Smash Burgers artesanas, complementos perfectos y postres que no te puedes perder.
            </p>
          </motion.div>
        </section>

        {/* Carta */}
        <section className="py-16 bg-gray-50">
          <div className="container-site">
            <MenuSection />
          </div>
        </section>
      </main>
    </>
  )
}
