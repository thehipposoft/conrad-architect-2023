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
            <ProjectDetail project={project} projectsToDisplay={projectsData} />
        </div>
    )

}