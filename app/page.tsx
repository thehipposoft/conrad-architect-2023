import About from '@/components/About'
import Banner from '@/components/Banner'
import Nav from '@/components/Nav'
import Projects from '@/components/Projects'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <Nav />
      <Banner />
      <Projects />
      <About />
    </main>
  )
}
