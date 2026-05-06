import { motion } from 'framer-motion'
import { CATEGORIAS } from '../../utils/constants'

export default function CategoryFilter({ active, onChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-3" role="tablist" aria-label="Filtrar por categoría">
      {CATEGORIAS.map(({ id, label }) => {
        const isActive = active === id
        return (
          <button
            key={id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(id)}
            className={`
              relative font-body font-semibold text-sm px-6 py-2.5 rounded-full
              transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2
              ${isActive
                ? 'bg-brand-blue text-white shadow-blue'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-blue hover:text-brand-blue'}
            `}
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
