import { Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

import Header  from './components/layout/Header'
import Footer  from './components/layout/Footer'

import Home        from './pages/Home'
import BurgerDelMes from './pages/BurgerDelMes'
import Menu        from './pages/Menu'
import About       from './pages/About'
import Contact     from './pages/Contact'

export default function App() {
  return (
    <HelmetProvider>
      {/* Fondo fijo — no repinta en scroll, funciona bien en móvil */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, background: 'linear-gradient(180deg, #000000 0%, #00061a 30%, #000d33 65%, #001a5c 100%)' }} />
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Header />

        <Routes>
          <Route path="/"                      element={<Home />} />
          <Route path="/hamburguesa-del-mes"   element={<BurgerDelMes />} />
          <Route path="/carta"                 element={<Menu />} />
          <Route path="/nosotros"              element={<About />} />
          <Route path="/contacto"              element={<Contact />} />
          <Route path="*"                      element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </HelmetProvider>
  )
}

function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center py-40 text-center">
      <h1 className="font-display text-9xl text-brand-blue mb-4">404</h1>
      <p className="font-body text-xl text-white/50 mb-8">Página no encontrada</p>
      <a href="/" className="btn-primary">Volver al inicio</a>
    </main>
  )
}
