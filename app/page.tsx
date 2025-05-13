// app/page.tsx
import Hero from '../components/pages/home/Hero'
import BestSeller from '../components/pages/home/BestSeller'
import SpecialOffer from '../components/pages/home/SpecialOffer'
import ProdukPakan from '../components/pages/home/ProdukPakan'
import SegeraHadir from '../components/pages/home/SegeraHadir'
import Konsultasi from '../components/pages/home/Konsultasi'
import KenapaPilih from '../components/pages/home/KenapaPililh'
import LatestBlog from '../components/pages/home/LatestBlog'

export default function Home() {
  return (
    <main>
      <Hero />
      <BestSeller />
      <SpecialOffer />
      <ProdukPakan />
      <SegeraHadir />
      <Konsultasi />
      <KenapaPilih />
      <LatestBlog />
    </main>
  )
}