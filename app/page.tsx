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
import Link from 'next/link'

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
      <Link href={'/'} className='flex justify-center hover:underline mb-2 light'>Created by<strong className='px-1 inter'>HippoSoft</strong>| All Right Reserved</Link>
    </main>
  )
}
