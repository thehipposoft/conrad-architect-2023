import type { Metadata, ResolvingMetadata } from "next";
import getProject from "@/API/getProject";
import ProjectDetail from "@/components/ProjectDetail";
import { Project } from "@/src/types";

type Params = {
    params: {
        projectsId: number
    }
}

export async function generateMetadata({
    params
}: Params, parent: ResolvingMetadata): Promise<Metadata> {
    const projectId = params.projectsId;
    const project = await getProject(projectId).then((res) => res);

    if (project) {
      const previousImages = (await parent).openGraph?.images || [];

      return {
        title: `Conrad Architects | ${project.title} `,
        openGraph: {
          images: [
            project.main_image,
            ...previousImages,
          ],
        },
      };
    }

    return {
      title: "Conrad Architect | Specific Project",
    };
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