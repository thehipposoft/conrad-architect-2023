import getProject from "@/API/getProject";
import ProjectDetail from "@/components/ProjectDetail";
import { Project } from "@/src/types";

type Params = {
    params: {
        projectsId: number
    }
}

export default async function ProjectPage({ params: {projectsId}}: Params) {
    const project: null | Project = await getProject(projectsId);

    return(
        <div>
            {
                project && <ProjectDetail project={project} />
            }

        </div>
    )

}