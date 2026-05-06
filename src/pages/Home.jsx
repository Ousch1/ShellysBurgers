import { Helmet } from 'react-helmet-async'
import Hero from '../components/home/Hero'
import HamburguesaDelMes from '../components/home/HamburguesaDelMes'
import About from '../components/home/About'
import Location from '../components/home/Location'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Shelly's Burgers – Smash Burgers en Ciudad Real</title>
        <meta name="description" content="Las mejores Smash Burgers artesanas de Ciudad Real. Visítanos en C/ Postas 12 o pide a domicilio por Glovo." />
      </Helmet>

      <main>
        <Hero />
        <HamburguesaDelMes />
        <About />
        <Location />
      </main>
    </>
  )
}
