import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'

import Header  from './components/layout/Header'
import Footer  from './components/layout/Footer'

import Home        from './pages/Home'
import BurgerDelMes from './pages/BurgerDelMes'
import Menu        from './pages/Menu'
import About       from './pages/About'
import Contact     from './pages/Contact'

export default function App() {
  const location = useLocation()

  return (
    <HelmetProvider>
      <div className="flex flex-col min-h-screen">
        <Header />

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/"                      element={<Home />} />
            <Route path="/hamburguesa-del-mes"   element={<BurgerDelMes />} />
            <Route path="/carta"                 element={<Menu />} />
            <Route path="/nosotros"              element={<About />} />
            <Route path="/contacto"              element={<Contact />} />
            {/* Fallback 404 */}
            <Route path="*"                      element={<NotFound />} />
          </Routes>
        </AnimatePresence>

        <Footer />
      </div>
    </HelmetProvider>
  )
}

function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center py-40 text-center">
      <h1 className="font-display text-9xl text-brand-blue mb-4">404</h1>
      <p className="font-body text-xl text-gray-600 mb-8">Página no encontrada</p>
      <a href="/" className="btn-primary">Volver al inicio</a>
    </main>
  )
}
