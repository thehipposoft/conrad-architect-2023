import { Project } from '@/src/types';
import Link from 'next/link';
import React from 'react';

type Props = {
    projects: Project[] 
}

const Banner = ({ projects }: Props) => {

    return (
        <div className='hidden md:grid grid-cols-4 2xl:items-center mt-20 2xl:mt-0 w-[1350px] mx-auto h-screen'>
            <Link href={`/projects/${projects[7].id}`} 
                className='h-[600px] w-[325px] cursor-pointer relative duration-500 tile-1 hover:z-10 bg-center
                            animate-fade animate-duration-1000 animate-ease-in animate-delay-300 animate-once' 
                style={{ 
                    backgroundImage: `url(${projects[7].main_image})`,
                    backgroundSize: 'cover',
                    }}
            >
                <div className='opacity-0 duration-500 absolute top-0 left-0 w-full h-full overlay-1 flex justify-center items-center'>
                    <div className='bg-black opacity-20 absolute top-0 left-0 w-full h-full ' />
                    <h2 className='text-white relative z-10'>195 MONARCH BAY</h2>
                </div>
            </Link>
            <Link href={`/projects/${projects[5].id}`} 
                className='bg-slate-400 relative h-[600px] w-[325px] cursor-pointer hover:scale-110 hover:z-10 duration-500
                             tile-2 flex justify-center items-center translate-y-6 bg-center
                             animate-fade animate-duration-1000 animate-ease-in animate-delay-500'
                style={{ backgroundImage: `url(${projects[5].main_image})`,
                backgroundSize: 'cover',
             }}
            >
                <div className='overlay-2 absolute w-full h-full top-0 left-0 bg-black opacity-0 duration-500'></div>
                <h2 className='text-white relative z-10 opacity-0 duration-500'>405 DARTMOOR</h2>
            </Link>
            <Link href={`/projects/${projects[4].id}`} 
                className='bg-slate-400 relative h-[600px] w-[325px] cursor-pointer hover:scale-110 hover:z-10 duration-500
                            tile-2 flex justify-center items-center bg-center
                            animate-fade animate-duration-1000 animate-ease-in animate-delay-700
                            '
                style={{ backgroundImage: `url(${projects[4].main_image})`,
                backgroundSize: 'cover',
            }}
            >
                <div className='overlay-2 absolute w-full h-full top-0 left-0 bg-black opacity-0 duration-500'></div>
                <h2 className='text-white relative z-10 opacity-0 duration-500'>721 MANZANITA</h2>
            </Link>
            <Link href={`/projects/${projects[1].id}`}  
                className='bg-slate-400 h-[600px] w-[325px] cursor-pointer relative duration-500
                             hover:z-10 tile-3 translate-y-6 bg-center animate-fade animate-duration-1000 animate-ease-in animate-delay-1000'
                style={{ backgroundImage: `url(${projects[1].main_image})`,
                backgroundSize: 'cover',
            }}
            >
                <div className='opacity-0 duration-500 absolute top-0 left-0 w-full h-full overlay-3 flex justify-center items-center'>
                    <div className='bg-black opacity-20 absolute top-0 left-0 w-full h-full ' />
                    <h2 className='text-white relative z-10'>2570 PARK</h2>
                </div>
            </Link>

        </div>
    );
};

export default Banner;