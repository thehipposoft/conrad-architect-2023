import React from 'react';
import { Project } from '@/src/types';
import { Link } from 'next-view-transitions'

type Props = {
    projects: Project[]
}

const GalleryPageComponent = ({ projects }:any) => {
    return (
        <div className=''>
            {
                projects.map((project:any, index:any) => {
                    return(
                        <div 
                            key={index}
                            className='flex md:flex-row flex-col md:justify-between md:w-[1350px] mx-auto md:mt-16 mt-10 animate-fade-up'
                        >
                            <div className='flex flex-col'>
                                <Link href={`/projects/${project.id}`}>
                                    <h3 className='uppercase hover:underline text-center md:text-left mb-2'>{project.title}</h3>
                                </Link>
                                {
                                    project.year ? <p className='text-center md:text-left pb-4 md:pb-0'>{project.year}</p> : <p className='text-center md:text-left pb-4 md:pb-0'>Upcoming</p>
                                }
                            </div>
                            <div className={` ${project.images.length < 3 ? 'h-[550px]' : ''} md:grid flex flex-col md:grid-cols-10 md:grid-rows-2 gap-4 md:w-[900px]`}>
                                <Link 
                                    href={`/projects/${project.id}`} 
                                    className='col-span-4 md:h-[400px] h-[180px] md:w-full w-screen relative'
                                    style={{
                                        backgroundImage: `url(${project.images[0].full_image_url})`,
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
                                        backgroundImage: `url(${project.images[1].full_image_url})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                    <div className='absolute top-0 left-0 light bg-black/40 text-white w-full h-full flex justify-center items-center opacity-0 duration-500 hover:opacity-100 cursor-pointer'>
                                        Discover
                                    </div>
                                </Link>
                                {
                                    project.images[2] ?
                                    <Link 
                                        href={`/projects/${project.id}`} 
                                        className={`col-span-6 md:h-[400px] h-[180px] md:w-full w-screen relative`}
                                        style={{
                                            backgroundImage: `url(${project.images[2].full_image_url})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}
                                    >
                                        <div className='absolute top-0 left-0 light bg-black/40 text-white w-full h-full flex justify-center items-center opacity-0 duration-500 hover:opacity-100 cursor-pointer'>
                                            Discover
                                        </div>
                                    </Link>
                                     : ''
                                }
                                {
                                    project.images[3] ?
                                    <Link 
                                        href={`/projects/${project.id}`} 
                                        className={`col-span-4 md:h-[400px] h-[180px] md:w-full w-screen relative`}
                                        style={{
                                            backgroundImage: `url(${project.images[3].full_image_url})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}
                                    >
                                        <div className='absolute top-0 left-0 light bg-black/40 text-white w-full h-full flex justify-center items-center opacity-0 duration-500 hover:opacity-100 cursor-pointer'>
                                            Discover
                                        </div>
                                    </Link>
                                     : ''
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default GalleryPageComponent;