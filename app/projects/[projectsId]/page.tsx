import getProject from "@/API/getProject";
import ProjectDetail from "@/components/ProjectDetail";
import { Project } from "@/src/types";
import getAllProjects from '@/API/getAllProjects'
import Link from "next/link";

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
            <Link href={'/'} className="absolute right-[5%] top-16 p-2 hover:bg-[#00000055] duration-300 animate-fade-left animate-delay-[1600ms] animate-duration-1000">HOME</Link>
            <ProjectDetail project={project} projectsToDisplay={projectsData} />
        </div>
    )

}