'use client'
import React, {useState} from 'react';
import { Project } from '@/src/types';
import Image from 'next/image';
import Link from 'next/link';
import LightBox from './LightBox';

type Props = {
    project: Project,
}

//TODO: Add 'Next project' button

const ProjectDetail = ({ project }:Props) => {

    const [openGallery, setOpenGallery] = useState(false);

    const toggleGallery = () => {
        setOpenGallery(!openGallery)
    }


    return (
        <div className='md:h-[90vh]  flex flex-col justify-around'>
            <div className='md:w-[1300px] px-6 md:px-0 w-full mx-auto flex h-16 justify-between items-center'>
                <Link href={'/'}>
                    <Image
                        src={'/assets/images/logoblack.svg'}
                        alt='James Conrad Architect logo'
                        width={250}
                        height={100}
                        className='animate-fade animate-delay-[1800ms] animate-duration-1000'
                    />
                </Link>

                <Link href={'/'} className=' animate-fade animate-delay-[1800ms] animate-duration-[2000ms]'>
                            <img src="/assets/images/close.svg" alt="Back home button" className='w-6'/>
                </Link>
            </div>
            <div className='flex md:justify-center md:items-center items-start'>
                <div className='flex md:flex-row flex-col md:min-w-[1300px] justify-between mx-auto mt-[25%] md:mt-0'>
                    <div
                        className='md:w-[35%] flex md:flex-col justify-between mb-6'
                        >
                        <div className='pl-6 md:pl-0'>
                            <h3 className='text-sm'>PROJECT</h3>
                            <h1 className='py-1 text-lg uppercase'>{project.title}</h1>
                            <button
                                className='hover:underline underline md:no-underline duration-300'
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
                            className='slider-effect relative md:w-[57%] w-screen md:h-[500px] h-[440px] animate-fade-left
                            animate-duration-[1300ms] animate-delay-[800ms] animate-once cursor-pointer bg-cover bg-center duration-1000'
                            onClick={toggleGallery}
                            style={{
                                backgroundImage: `url(${project.main_image})`,
                            }}
                        >
                            <div className='absolute top-0 left-0 light bg-black/20 text-white w-full h-full flex justify-center items-center opacity-0 duration-1000 hover:opacity-100 cursor-pointer'>
                                Discover
                            </div>
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
                <LightBox projectImages={project.images} isGalleryOpen={openGallery} closeGallery={toggleGallery} />
            </div>

        </div>
    );
};

export default ProjectDetail;