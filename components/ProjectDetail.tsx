'use client'
import React, {useState} from 'react';
import { Project } from '@/src/types';
import Image from 'next/image';
import Gallery from './Gallery';

type Props = {
    project: Project
}

const ProjectDetail = ({ project }:Props) => {

    const [openGallery, setOpenGallery] = useState(false);

    const toggleGallery = () => {
        setOpenGallery(!openGallery)
    }

    return (
        <div className='h-screen flex md:justify-center md:items-center items-start'>
            <div className='flex md:flex-row flex-col md:min-w-[1300px] justify-between mx-auto mt-[40%] md:mt-0'>
                <div 
                    className='md:w-[35%] flex flex-col md:justify-between mb-6 animate-fade-right
                        animate-duration-500 animate-ease-in animate-delay-100 animate-once'
                    >
                    <div className='pl-6 md:pl-0'>
                        <h3 className='text-sm'>PROJECT</h3>
                        <h1 className='py-1 text-lg uppercase'>{project.title}</h1>
                        <button 
                            className='hover:underline duration-300'
                            onClick={toggleGallery}
                        >
                            <h3>Discover</h3>
                        </button>
                    </div>
                    <div className='md:flex justify-between hidden'>
                        <div>
                            <h3 className='text-sm'>CATEGORY</h3>
                            <p>{project.service}</p>
                        </div>
                        <div>
                            <h3 className='text-sm'>LOCATION</h3>
                            <p>{project.location}</p>
                        </div>
                    </div>
                </div>
                    <div 
                        className='relative md:w-[57%] w-screen md:h-[500px] h-[375px] animate-fade-left 
                        animate-duration-1000 animate-delay-[800ms] animate-once cursor-pointer bg-cover bg-center'
                        onClick={toggleGallery}
                        style={{
                            backgroundImage: `url(${project.main_image})`,
                        }}
                    >
                    </div>
                <div className='flex justify-between md:hidden px-6 pt-12'>
                        <div>
                            <h3 className='text-sm'>CATEGORY</h3>
                            <p>{project.service}</p>
                        </div>
                        <div>
                            <h3 className='text-sm'>LOCATION</h3>
                            <p>{project.location}</p>
                        </div>
                    </div>
            </div>
            <Gallery projectImages={project.images} isGalleryOpen={openGallery} closeGallery={toggleGallery} />
        </div>
    );
};

export default ProjectDetail;