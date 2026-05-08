import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import HamburguesaDelMes from '../components/home/HamburguesaDelMes'

export default function BurgerOfMonth() {
  return (
    <>
      <Helmet>
        <title>Hamburguesa del Mes – Shelly's Burgers</title>
        <meta name="description" content="Descubre la hamburguesa especial de este mes en Shelly's Burgers. Edición limitada, ingredientes únicos." />
      </Helmet>

      {/* Spacer para la navbar fija */}
      <div className="pt-20" />

      {/* Cabecera de página */}
      <section className="py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block font-body text-xs font-semibold tracking-[0.25em] uppercase text-brand-blue mb-4">
            Edición Limitada
          </span>
          <h1 className="section-title">
            HAMBURGUESA<br />
            <span className="text-brand-blue">DEL MES</span>
          </h1>
          <p className="section-subtitle mx-auto mt-4 text-center">
            Cada mes creamos una hamburguesa especial con ingredientes de temporada y combinaciones únicas. No te la pierdas.
          </p>
        </motion.div>
      </section>

      <HamburguesaDelMes />
    </>
  )
}
