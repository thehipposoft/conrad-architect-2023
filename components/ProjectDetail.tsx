'use client'
import React, {useState} from 'react';
import { Project } from '@/src/types';
import Image from 'next/image';
import { Link } from 'next-view-transitions'
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
                    <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.575 7.975L1.675 12.875C1.49167 13.0583 1.25833 13.15 0.975 13.15C0.691667 13.15 0.458333 13.0583 0.275 12.875C0.0916663 12.6917 0 12.4583 0 12.175C0 11.8917 0.0916663 11.6583 0.275 11.475L5.175 6.575L0.275 1.675C0.0916663 1.49167 0 1.25833 0 0.975C0 0.691667 0.0916663 0.458333 0.275 0.275C0.458333 0.0916663 0.691667 0 0.975 0C1.25833 0 1.49167 0.0916663 1.675 0.275L6.575 5.175L11.475 0.275C11.6583 0.0916663 11.8917 0 12.175 0C12.4583 0 12.6917 0.0916663 12.875 0.275C13.0583 0.458333 13.15 0.691667 13.15 0.975C13.15 1.25833 13.0583 1.49167 12.875 1.675L7.975 6.575L12.875 11.475C13.0583 11.6583 13.15 11.8917 13.15 12.175C13.15 12.4583 13.0583 12.6917 12.875 12.875C12.6917 13.0583 12.4583 13.15 12.175 13.15C11.8917 13.15 11.6583 13.0583 11.475 12.875L6.575 7.975Z" fill="black"/>
                    </svg>
                </Link>
            </div>
            <div className='flex md:justify-center md:items-center items-start'>
                <div className='flex md:flex-row flex-col md:min-w-[1300px] justify-between mx-auto mt-[5%] md:mt-0'>
                    <div
                        className='md:w-[35%] flex md:flex-col justify-between mb-6'
                    >
                        <div className='pl-6 md:pl-0'>
                            <h3 className='text-sm'>PROJECT</h3>
                            <h1 className='py-1 text-xl uppercase'>{project.title}</h1>
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
                                {project.location ? <p>{project.location}</p> : <p>-</p>}
                            </div>
                        </div>
                    </div>
                        <div
                            className='slider-effect relative md:w-[57%] w-screen md:h-[500px] h-[440px] animate-fade-left
                            animate-duration-[1300ms] animate-delay-[800ms] animate-once cursor-pointer bg-cover bg-center duration-1000'
                            onClick={toggleGallery}
                        >
                            <Image
                                src={project.main_image}
                                fill
                                alt=''
                                className='object-cover'
                             />

                            <div className='absolute top-0 left-0 light bg-black/20 text-white w-full h-full flex justify-center items-center opacity-0 duration-700 hover:opacity-100 cursor-pointer'>
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