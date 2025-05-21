import { revalidatePath } from "next/cache";
import GalleryPageComponent from "@/components/GalleryPageComponent";
import getAllProjects from '@/API/getAllProjects'
import { Project } from "@/src/types";
import { Link } from 'next-view-transitions'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Conrad Architects | Gallery',
  description: "Check out our latest projects and designs. We are committed to providing the best service and quality in the industry.",
}


export default async function GalleryPage() {

    revalidatePath('/gallery', 'page')

    const projectsData: Project[] = await getAllProjects();

    return(
        <div>
            <div className='flex flex-col mb-16'>
                <div className="flex justify-end md:hidden">
                    <Link href={'/'} className="p-4 mt-4 md:mr-0 mr-4 hover:bg-[#00000055] duration-500 animate-fade-left animate-delay-[1000ms] animate-duration-1000">HOME</Link>
                </div>
                <div className="md:w-[1350px] mx-auto md:mt-20 mt-10 flex justify-between">
                    <h1 className='text-2xl tracking-widest animate-fade-right animate-delay-[700ms] animate-duration-1000'>
                        GALLERY
                    </h1>
                    <Link href={'/'} className="hidden md:block p-2 hover:bg-[#00000055] duration-500 animate-fade-left animate-delay-[1000ms] animate-duration-1000">HOME</Link>
                </div>
                <GalleryPageComponent projects={projectsData}/>
            </div>
        </div>
    )

}