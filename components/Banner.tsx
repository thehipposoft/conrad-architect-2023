import { Project } from '@/src/types';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

type Props = {
    projects: Project[]
}

const Banner = ({ projects }: Props) => {

    function getBannerProjects(projects:Project[]) {
        const bannerProjects = projects.filter((project) => project.display_in_banner === 'Yes');
        return bannerProjects;
    }

    const SelectedBannerProjects = getBannerProjects(projects);

    return (
        <div className='flex flex-col md:grid md:grid-cols-4 grid-rows-4 md:grid-rows-none gap-2 md:gap-4
         2xl:mt-0 md:w-[1350px] m-auto md:h-[85vh] h-[90vh] items-center'>
            {
                SelectedBannerProjects.map((val:any, index:any) => {
                    return(
                        <Link
                            href={`/projects/${val.id}`}
                            key={index}
                            className={`hover:scale-110 ${index === 1 || index === 2 ? '' : ''}  ${index === 3 ? 'origin-right hover:scale-105' : ''} ${index === 0 ? 'origin-left hover:scale-105' : ''}
                             h-[600px] md:w-full w-screen cursor-pointer relative
                             duration-1000 tile hover:z-10 bg-center animate-fade
                             animate-duration-1000 animate-ease-in animate-delay-300 animate-once`}
                        >
                            <Image
                                src={val.main_image}
                                alt={val.title}
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                                className="object-cover w-full h-full duration-500 hover:scale-105 cursor-pointer"
                            />
                            <div className='md:opacity-0 duration-500 absolute top-0 left-0 w-full h-full overlay-1 flex pr-4 md:pr-0 justify-end
                             md:justify-center md:items-center items-end pb-4 md:pb-0'>
                                <div className='bg-black opacity-30 absolute top-0 left-0 w-full h-full ' />
                                <h2 className='text-white relative z-10 uppercase'>{val.title}</h2>
                            </div>
                        </Link>
                    )
                })
            }
           
        </div>
    );
};

export default Banner;


 /*
            <Link
                href={`/projects/${projects[5].id}`}
                className='bg-slate-400 relative h-[600px] w-full cursor-pointer hover:scale-y-[1.08] hover:scale-x-110 hover:z-10 duration-700 tile-2 flex pr-4 md:pr-0 justify-end md:justify-center md:items-center items-end bg-center animate-fade animate-duration-1000 animate-ease-in animate-delay-500'
            >
                <Image
                    src={projects[5].main_image}
                    alt={projects[5].title}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="object-cover w-full h-full duration-500 hover:scale-105 cursor-pointer"
                />
                <div className='overlay-2 absolute w-full h-full top-0 left-0 bg-black md:opacity-0 opacity-20 duration-500'></div>
                <h2 className='text-white relative z-10 md:opacity-0 duration-500 pb-4 md:pb-0'>405 DARTMOOR</h2>
            </Link>
            <Link
                href={`/projects/${projects[4].id}`}
                className='bg-slate-400 relative h-[600px] w-full cursor-pointer hover:scale-y-[1.08] hover:scale-x-110 hover:z-10 duration-700 tile-2 flex pr-4 md:pr-0 justify-end md:justify-center md:items-center items-end  bg-center animate-fade animate-duration-1000 animate-ease-in animate-delay-700'
            >
                <Image
                    src={projects[4].main_image}
                    alt={projects[4].title}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="object-cover w-full h-full duration-500 hover:scale-105 cursor-pointer"
                />
                <div className='overlay-2 absolute w-full h-full top-0 left-0 bg-black md:opacity-0 opacity-20 duration-500'></div>
                <h2 className='text-white relative z-10 md:opacity-0 duration-500 pb-4 md:pb-0'>721 MANZANITA</h2>
            </Link>
            <Link
                href={`/projects/${projects[1].id}`}
                className='bg-slate-400 h-[600px] w-full cursor-pointer relative duration-700 hover:z-10 tile-3 bg-center animate-fade animate-duration-1000 animate-ease-in animate-delay-1000'
            >
                <Image
                    src={projects[1].main_image}
                    alt={projects[1].title}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="object-cover w-full h-full duration-500 hover:scale-105 cursor-pointer"
                />
                <div className='md:opacity-0 duration-500 absolute top-0 left-0 w-full h-full overlay-3 flex pr-4 md:pr-0 justify-end md:justify-center md:items-center items-end pb-4 md:pb-0'>
                    <div className='bg-black opacity-20 absolute top-0 left-0 w-full h-full ' />
                    <h2 className='text-white relative z-10'>2570 PARK</h2>
                </div>
            </Link>
*/