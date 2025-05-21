import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div className='h-screen bg-black' id='about'>
            <div className='md:pt-12 pt-[30%] h-[90%] flex flex-col justify-between'>
                <h2 className='text-white text-3xl md:w-[1350px] w-full mx-auto md:pb-0 text-center md:text-left animate-fade-up '>ABOUT US</h2>
                <div 
                    className='flex flex-col justify-center items-center duration-500 w-full h-full animate-fade-up ' 
                >
                    <Image src={'/assets/images/jim.png'} alt='Jim Conrad Photo' width={280} height={250} />
                    <p className='text-white pt-8 mt-2 md:mt-0 px-14 md:px-0 md:w-[500px] w-screen text-center'>“The combination of experience and highly personalized service allows JCA provide a full array of services to clients wanting to build their dream home.”</p>
                    <p className='text-white pt-4 text-2xl font-bold md:text-xl'>James Conrad, Founder.</p>
                </div>
            </div>
        </div>
    );
};

export default About;