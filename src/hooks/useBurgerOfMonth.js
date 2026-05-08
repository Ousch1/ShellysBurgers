import { useState, useEffect } from 'react'

// Caché a nivel de módulo — persiste entre navegaciones sin re-fetch
let cached = null

export const useBurgerOfMonth = () => {
  const [burger, setBurger]   = useState(cached || null)
  const [loading, setLoading] = useState(!cached)
  const [error, setError]     = useState(null)

  useEffect(() => {
    if (cached) return

    fetch('/data/hamburguesa-mes.json')
      .then((res) => {
        if (!res.ok) throw new Error('No se pudo cargar la hamburguesa del mes')
        return res.json()
      })
      .then((data) => {
        cached = data
        setBurger(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error cargando hamburguesa del mes:', err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { burger, loading, error }
}
