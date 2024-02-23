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
                            className='flex justify-between w-[1350px] mx-auto mt-16'
                        >
                            <a href={`/projects/${project.id}`}><h3 className='uppercase hover:underline'>{project.title}</h3></a>
                            <div className='grid grid-cols-10 grid-rows-2 gap-4 w-[900px]'>
                                <Link 
                                    href={`/projects/${project.id}`} 
                                    className='col-span-4 h-[400px] w-full relative'
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
                                    className='col-span-6 h-[400px] w-full relative'
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
                                    className='col-span-6 h-[400px] w-full relative'
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
                                    className='col-span-4 h-[400px] w-full relative'
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