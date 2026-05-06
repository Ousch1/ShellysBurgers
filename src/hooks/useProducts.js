import { useState, useEffect } from 'react'

export const useProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState(null)

  useEffect(() => {
    fetch('/data/productos.json')
      .then((res) => {
        if (!res.ok) throw new Error('No se pudo cargar la carta')
        return res.json()
      })
      .then((data) => {
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
