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
                            <h3 className='uppercase'>{project.title}</h3>
                            <div className='grid grid-cols-10 grid-rows-2 gap-4 w-[900px]'>
                                <Link 
                                    href={`/projects/${project.id}`} 
                                    className='col-span-4 h-[400px] w-full'
                                    style={{
                                        backgroundImage: `url(${project.images[0]})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                </Link>
                                <Link 
                                    href={`/projects/${project.id}`} 
                                    className='col-span-6 h-[400px] w-full'
                                    style={{
                                        backgroundImage: `url(${project.images[1]})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                </Link>
                                <Link 
                                    href={`/projects/${project.id}`} 
                                    className='col-span-6 h-[400px] w-full'
                                    style={{
                                        backgroundImage: `url(${project.images[2]})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                </Link>
                                <Link 
                                    href={`/projects/${project.id}`} 
                                    className='col-span-4 h-[400px] w-full'
                                    style={{
                                        backgroundImage: `url(${project.images[3]})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                >
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