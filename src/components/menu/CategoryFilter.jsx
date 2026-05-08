import { motion } from 'framer-motion'
import { CATEGORIAS } from '../../utils/constants'

export default function CategoryFilter({ active, onChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filtrar por categoría">
      {CATEGORIAS.map(({ id, label }) => {
        const isActive = active === id
        return (
          <button
            key={id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(id)}
            className={`
              relative font-body font-semibold text-xs px-5 py-2 rounded-full
              transition-all duration-250
              focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 focus:ring-offset-transparent
              ${isActive
                ? 'bg-brand-blue text-white shadow-blue'
                : 'text-white/60 border border-white/15 hover:border-brand-blue/60 hover:text-white'}
            `}
            style={!isActive ? { background: 'rgba(255,255,255,0.05)' } : {}}
          >
            {isActive && (
              <motion.span
                layoutId="activeCategory"
                className="absolute inset-0 bg-brand-blue rounded-full -z-10"
              />
            )}
            {label}
          </button>
        )
      })}
    </div>
  )
}
