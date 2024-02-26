import GalleryPageComponent from "@/components/GalleryPageComponent";
import getAllProjects from '@/API/getAllProjects'
import { Project } from "@/src/types";
import Link from "next/link";


export default async function GalleryPage() {

    const projectsData: Project[] = await getAllProjects();

    return(
        <div>
            <div className='flex flex-col md:mb-16'>
                <div className="flex justify-end">
                    <Link href={'/'} className="p-2 mt-4 hover:bg-[#00000055] duration-500 animate-fade-left animate-delay-[1600ms] animate-duration-1000">HOME</Link>
                </div>
                <div className="md:w-[1350px] mx-auto md:mt-20 mt-12 flex justify-between">
                    <h1 className='text-2xl tracking-widest'>
                        GALLERY
                    </h1>
                    <Link href={'/'} className="hidden md:block p-2 hover:bg-[#00000055] duration-500 animate-fade-left animate-delay-[1600ms] animate-duration-1000">HOME</Link>
                </div>
                <GalleryPageComponent projects={projectsData}/>
            </div>
        </div>
    )

}