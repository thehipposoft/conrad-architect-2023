import { revalidatePath } from 'next/cache'
import About from '@/components/About'
import Banner from '@/components/Banner'
import Nav from '@/components/Nav'
import ProjectsComp from '@/components/UpComingProjects'
import getAllProjects from '@/API/getAllProjects'
import { Project } from '@/src/types'
import Contact from '@/components/Contact'
import Loader from '@/components/Loader'
import SocialMedia from '@/components/SocialMedia'
import { Link } from 'next-view-transitions'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conrad Architects | Home',
  description: "“The combination of experience and highly personalized service allows JCA provide a full array of services to clients wanting to build their dream home.”",
}

export default async function Home() {

  revalidatePath('/', 'page')
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
      <Link
        href={'https://www.thehipposoft.com/'}
        target='_blank'
        className='flex justify-center hover:underline mb-2 light'
      >
        Created by<strong className='px-1 inter'>HippoSoft</strong>| All Right Reserved
      </Link>
    </main>
  )
}
