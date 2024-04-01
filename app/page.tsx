import React from 'react'
import About from '@/components/About'
import Banner from '@/components/Banner'
import Nav from '@/components/Nav'
import ProjectsComp from '@/components/UpComingProjects'
import getAllProjects from '@/API/getAllProjects'
import { Project } from '@/src/types'
import Contact from '@/components/Contact'
import Loader from '@/components/Loader'
import SocialMedia from '@/components/SocialMedia'

export default async function  Home() {
  const projectsData: Project[] = await getAllProjects();

  return (
    <main className="">
      <Loader />
      <Nav />
      <Banner projects={projectsData}/>
      <ProjectsComp projects={projectsData}/>
      <About />
      <Contact />
      <SocialMedia projects={projectsData}/>
    </main>
  )
}
