import { useState, useEffect } from 'react'

// Caché a nivel de módulo — persiste entre navegaciones sin re-fetch
let cached = null

export const useProducts = () => {
  const [products, setProducts] = useState(cached || [])
  const [loading, setLoading]   = useState(!cached)
  const [error, setError]       = useState(null)

  useEffect(() => {
    if (cached) return

    fetch('/data/productos.json')
      .then((res) => {
        if (!res.ok) throw new Error('No se pudo cargar la carta')
        return res.json()
      })
      .then((data) => {
        cached = data
        setProducts(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error cargando productos:', err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { products, loading, error }
}
