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
        <p className="font-body text-gray-500 text-lg">No se pudo cargar la carta. Por favor, inténtalo más tarde.</p>
      </div>
    )
  }

  return (
    <div>
      {/* Filtros */}
      <div className="mb-12">
        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
      </div>

      {/* Conteo */}
      <p className="font-body text-gray-400 text-sm text-center mb-8">
        {filtered.length} {filtered.length === 1 ? 'producto' : 'productos'}
      </p>

      {/* Grid */}
      <AnimatePresence mode="popLayout">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <div className="py-16 text-center">
          <p className="font-body text-gray-400 text-lg">No hay productos en esta categoría.</p>
        </div>
      )}
    </div>
  )
}

function MenuSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="rounded-2xl overflow-hidden shadow-card">
          <div className="aspect-[4/3] skeleton" />
          <div className="p-5 space-y-3">
            <div className="h-5 w-3/4 rounded skeleton" />
            <div className="h-4 w-full rounded skeleton" />
            <div className="h-4 w-2/3 rounded skeleton" />
            <div className="h-10 w-full rounded-full skeleton mt-4" />
          </div>
        </div>
      ))}
    </div>
  )
}
