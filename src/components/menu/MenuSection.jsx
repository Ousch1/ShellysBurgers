import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useProducts } from '../../hooks/useProducts'
import CategoryFilter from './CategoryFilter'
import ProductCard from './ProductCard'

export default function MenuSection() {
  const { products, loading, error } = useProducts()
  const [activeCategory, setActiveCategory] = useState('todos')

  const filtered = activeCategory === 'todos'
    ? products
    : products.filter((p) => p.categoria === activeCategory)

  if (loading) return <MenuSkeleton />

  if (error) {
    return (
      <div className="py-24 text-center">
        <p className="font-body text-white/40 text-lg">No se pudo cargar la carta. Por favor, inténtalo más tarde.</p>
      </div>
    )
  }

  return (
    <div>
      {/* Filtros */}
      <div className="mb-8">
        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
      </div>

      {/* Grid compacto */}
      <AnimatePresence mode="popLayout">
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
        >
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <div className="py-16 text-center">
          <p className="font-body text-white/40 text-lg">No hay productos en esta categoría.</p>
        </div>
      )}
    </div>
  )
}

function MenuSkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="rounded-xl overflow-hidden border border-white/[0.07]"
             style={{ background: 'linear-gradient(160deg, #0d1428 0%, #080c18 100%)' }}>
          <div className="aspect-[3/4] skeleton-dark" />
          <div className="p-4 space-y-2">
            <div className="h-4 w-3/4 rounded skeleton-dark" />
            <div className="h-3 w-full rounded skeleton-dark" />
            <div className="h-3 w-2/3 rounded skeleton-dark" />
          </div>
        </div>
      ))}
    </div>
  )
}
