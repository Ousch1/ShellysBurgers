import { motion } from 'framer-motion'
import { SiGlovo } from 'react-icons/si'
import { getProductImage, handleImageError } from '../../utils/imageHelper'

export default function ProductCard({ product }) {
  const { nombre, descripcion, precio, imagen, glovo_url } = product

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      className="card flex flex-col group"
      aria-label={`Producto: ${nombre}`}
    >
      {/* Imagen */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={getProductImage(imagen)}
          alt={nombre}
          loading="lazy"
          onError={handleImageError}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay al hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badge de precio flotante */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-brand-blue font-body font-bold text-sm px-3 py-1 rounded-full shadow-sm">
          {precio}
        </div>
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-body font-bold text-brand-dark text-lg mb-2 leading-snug">
          {nombre}
        </h3>
        <p className="font-body text-gray-500 text-sm leading-relaxed flex-1 mb-4">
          {descripcion}
        </p>

        {/* Footer de la card */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="font-display text-2xl text-brand-blue">
            {precio}
          </span>
          <a
            href={glovo_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Pedir ${nombre} en Glovo`}
            className="inline-flex items-center gap-2 bg-brand-blue text-white font-body font-semibold text-xs px-4 py-2 rounded-full hover:bg-brand-blue-dark hover:shadow-blue transition-all duration-200"
          >
            <SiGlovo size={13} />
            Pedir
          </a>
        </div>
      </div>
    </motion.article>
  )
}
