import React from 'react';
import { Project } from '@/src/types';
import Image from 'next/image';

type Props = {
    project: Project
}

const ProjectDetail = ({ project }:Props) => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='flex min-w-[1300px] justify-between mx-auto'>
                <div className='w-[35%] flex flex-col justify-between my-4'>
                    <div className=''>
                        <h3 className='text-sm'>PROJECT</h3>
                        <h1 className='py-1 text-lg uppercase'>{project.title}</h1>
                        <button className='hover:underline duration-300'><h3>Discover</h3></button>
                    </div>
                    <div className='flex justify-between'>
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
                <div className='relative w-[55%] h-[420px]'>
                    <Image 
                        src={project.main_image} 
                        alt={`${project.title} main image`} 
                        fill
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;