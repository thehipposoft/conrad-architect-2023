import React from 'react'
import About from '@/components/About'
import Banner from '@/components/Banner'
import Nav from '@/components/Nav'
import ProjectsComp from '@/components/Projects'
import getAllProjects from '@/API/getAllProjects'
import { Project } from '@/src/types'
import Contact from '@/components/Contact'
import getProject from '@/API/getProject'
import Loader from '@/components/Loader'

export default async function  Home() {

  const projectsData: Project[] = await getAllProjects();

  return (
    <main className="">
      <Loader />
      <Banner projects={projectsData}/>
      <Nav />
      <ProjectsComp projects={projectsData}/>
      <About />
      <Contact />
    </main>
  )
}
