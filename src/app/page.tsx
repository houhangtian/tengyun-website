import Image from 'next/image'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Advantages from '@/components/Advantages'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Advantages />
      <Contact />
    </main>
  )
}
