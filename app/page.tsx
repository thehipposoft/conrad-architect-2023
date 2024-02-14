import React from 'react'
import About from '@/components/About'
import Banner from '@/components/Banner'
import Nav from '@/components/Nav'
import ProjectsComp from '@/components/Projects'
import getAllProjects from '@/API/getAllProjects'
import { Project } from '@/src/types'
import Contact from '@/components/Contact'
import Loader from '@/components/Loader'
import SocialMedia from '@/components/SocialMedia'
import Image from 'next/image'

export default async function  Home() {

  const projectsData: Project[] = await getAllProjects();

  console.log(">>projectsData", projectsData)

  return (
    <main className="">
      <Loader />
      <Image src={'/assets/images/logo-black.png'} alt='James Conrad Architect logo' width={250} height={100} className='absolute top-0 right-16 hidden md:block'/>
      <Nav />
      <Banner projects={projectsData}/>
      <ProjectsComp projects={projectsData}/>
      <About />
      <Contact />
      <SocialMedia projects={projectsData}/>
    </main>
  )
}
