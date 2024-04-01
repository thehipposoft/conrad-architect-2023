import getProject from "@/API/getProject";
import getAllProjects from "@/API/getAllProjects";
import ProjectDetail from "@/components/ProjectDetail";
import { Project } from "@/src/types";
import { GetStaticPaths } from "next";

type Params = {
    params: {
        projectsId: number
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const projects = await getAllProjects();

    const paths = projects.map((project:Project) => ({
      params: { projectsId: project.id.toString() },
    }));

    return { paths, fallback: true };
};

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