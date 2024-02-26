import React from 'react';
import { Project } from '@/src/types';
import Link from 'next/link';

type Props = {
    projects: Project[]
}

const GalleryPageComponent = ({ projects }:Props) => {

    return (
        <div className=''>
            {
                projects.map((project, index) => {
                    return(
                        <div 
                            key={index}
                            className='flex md:flex-row flex-col md:justify-between md:w-[1350px] mx-auto mt-16'
                        >
                            <a href={`/projects/${project.id}`}><h3 className='uppercase hover:underline text-center md:text-left mb-8'>{project.title}</h3></a>
                            <div className='md:grid flex flex-col md:grid-cols-10 md:grid-rows-2  gap-4 md:w-[900px]'>
                                <Link 
                                    href={`/projects/${project.id}`} 
                                    className='col-span-4 md:h-[400px] h-[180px] md:w-full w-screen relative'
                                    style={{
                                        backgroundImage: `url(${project.images[0]})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                    <div className='absolute top-0 left-0 light bg-black/40 text-white w-full h-full flex justify-center items-center opacity-0 duration-500 hover:opacity-100 cursor-pointer'>
                                        Discover
                                    </div>
                                </Link>
                                <Link 
                                    href={`/projects/${project.id}`} 
                                    className='col-span-6 md:h-[400px] h-[180px] md:w-full w-screen relative'
                                    style={{
                                        backgroundImage: `url(${project.images[1]})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                    <div className='absolute top-0 left-0 light bg-black/40 text-white w-full h-full flex justify-center items-center opacity-0 duration-500 hover:opacity-100 cursor-pointer'>
                                        Discover
                                    </div>
                                </Link>
                                <Link 
                                    href={`/projects/${project.id}`} 
                                    className='col-span-6 md:h-[400px] h-[180px] md:w-full w-screen relative'
                                    style={{
                                        backgroundImage: `url(${project.images[2]})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                    <div className='absolute top-0 left-0 light bg-black/40 text-white w-full h-full flex justify-center items-center opacity-0 duration-500 hover:opacity-100 cursor-pointer'>
                                        Discover
                                    </div>
                                </Link>
                                <Link 
                                    href={`/projects/${project.id}`} 
                                    className={` ${project.images[3] ? '' : 'hidden'} col-span-4 md:h-[400px] h-[180px] md:w-full w-screen relative`}
                                    style={{
                                        backgroundImage: `url(${project.images[3]})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                    <div className='absolute top-0 left-0 light bg-black/40 text-white w-full h-full flex justify-center items-center opacity-0 duration-500 hover:opacity-100 cursor-pointer'>
                                        Discover
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default GalleryPageComponent;