import GalleryPageComponent from "@/components/GalleryPageComponent";
import getAllProjects from '@/API/getAllProjects'
import { Project } from "@/src/types";


export default async function GalleryPage() {

    const projectsData: Project[] = await getAllProjects();

    return(
        <div>
            <div className='flex flex-col mb-16'>
                <h1 className='w-[1350px] mx-auto mt-20 text-2xl tracking-widest'>
                    GALLERY
                </h1>
                <GalleryPageComponent projects={projectsData}/>
            </div>
        </div>
    )

}