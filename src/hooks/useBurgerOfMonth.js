import { useState, useEffect } from 'react'

export const useBurgerOfMonth = () => {
  const [burger, setBurger]   = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    fetch('/data/hamburguesa-mes.json')
      .then((res) => {
        if (!res.ok) throw new Error('No se pudo cargar la hamburguesa del mes')
        return res.json()
      })
      .then((data) => {
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
