import getProject from "@/API/getProject";
import ProjectDetail from "@/components/ProjectDetail";
import { Project } from "@/src/types";
import getAllProjects from '@/API/getAllProjects'
import Link from "next/link";
import Image from "next/image";

type Params = {
    params: {
        projectsId: number
    }
}

export default async function ProjectPage({ params: {projectsId}}: Params) {

    const project: Project = await getProject(projectsId);
    const projectsData: Project[] = await getAllProjects();

    return(
        <div>
            <Image src={'/assets/images/logo-black.png'} alt='James Conrad Architect logo' width={250} height={100} className='absolute top-10 left-16 duration-300 animate-fade-left animate-delay-[1600ms] animate-duration-1000'/>
            <Link href={'/'} className="absolute right-[5%] top-12 p-2 hover:bg-[#00000055] duration-300 animate-fade-left animate-delay-[1600ms] animate-duration-1000">HOME</Link>
            <ProjectDetail project={project} projectsToDisplay={projectsData} />
        </div>
    )

}