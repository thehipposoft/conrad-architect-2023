import React from 'react'
import About from '@/components/About'
import Banner from '@/components/Banner'
import Nav from '@/components/Nav'
import ProjectsComp from '@/components/Projects'
import getAllProjects from '@/API/getAllProjects'
import { Project } from '@/src/types'
import Contact from '@/components/Contact'
import getProject from '@/API/getProject'

export default async function  Home() {

  const projectsData: Project[] = await getAllProjects();

  return (
    <main className="">
      <Nav />
      <section className='h-screen md:hidden flex flex-col justify-center items-center '>
        <h1 className='text-3xl animate-fade-up animate-duration-700 animate-delay-300'>JAMES CONRAD</h1>
        <h1 className='text-3xl animate-fade-up animate-duration-700 animate-delay-1000'>ARCHITECT</h1>
      </section>
      <Banner projects={projectsData}/>
      <ProjectsComp projects={projectsData}/>
      <About />
      <Contact />
    </main>
  )
}
