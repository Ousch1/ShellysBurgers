import { motion } from 'framer-motion'
import { SiGlovo } from 'react-icons/si'
import { getProductImage, handleImageError } from '../../utils/imageHelper'

export default function ProductCard({ product }) {
  const { nombre, descripcion, precio_tienda, precio_glovo, imagen, glovo_url } = product

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col rounded-xl overflow-hidden cursor-pointer
                 border border-white/[0.07] hover:border-brand-blue/50
                 transition-all duration-300
                 hover:shadow-[0_0_28px_rgba(0,102,255,0.18)]"
      style={{ background: 'linear-gradient(160deg, #0d1428 0%, #080c18 100%)' }}
      aria-label={`Producto: ${nombre}`}
    >
      {/* Imagen */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={getProductImage(imagen)}
          alt={nombre}
          loading="lazy"
          onError={handleImageError}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradiente inferior sobre imagen */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

        {/* Precio tienda — badge top-right */}
        <div className="absolute top-2.5 right-2.5 bg-brand-blue text-white font-body font-bold text-sm px-3 py-1.5 rounded-full shadow-blue">
          {precio_tienda}
        </div>

        {/* Glovo flotante — top-left */}
        <a
          href={glovo_url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          aria-label={`Pedir ${nombre} en Glovo`}
          className="absolute top-2.5 left-2.5 flex items-center gap-1.5
                     bg-black/70 backdrop-blur-sm border border-[#FFC244]/50
                     text-[#FFC244] text-sm font-semibold px-3 py-1.5 rounded-full
                     hover:bg-[#FFC244]/20 hover:border-[#FFC244] transition-all duration-200"
        >
          <SiGlovo size={13} className="flex-shrink-0" />
          <span>{precio_glovo}</span>
        </a>
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 px-4 py-3">
        <h3 className="font-body font-bold text-white text-sm leading-snug mb-1">
          {nombre}
        </h3>
        <p className="font-body text-white/45 text-xs leading-relaxed">
          {descripcion}
        </p>
      </div>

      {/* Línea glow inferior al hover */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-brand-blue/0 group-hover:bg-brand-blue/60 transition-all duration-300" />
    </motion.article>
  )
}
