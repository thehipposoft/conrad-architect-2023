import Image from 'next/image';
import React from 'react';
import { AboutSlider } from './AboutSlider';

const ABOUT_DATA = [
    {
        id: 1,
        image: '/assets/images/jim.png',
        text: '“The combination of experience and highly personalized service allows JCA provide a full array of services to clients wanting to build their dream home.”',
        name: 'James Conrad, Founder.'
    },
    {
        id: 2,
        image: '/assets/images/jim.png',
        text: 'Text 2',
        name: 'Member 2'
    },
    {
        id: 3,
        image: '/assets/images/jim.png',
        text: 'Text 3',
        name: 'Member 3'
    },
]

const About = () => {
    return (
        <div className='h-screen bg-black' id='about'>
            <div className='md:pt-20 pt-[30%]'>
                <h1 className='text-white text-3xl md:pl-20 md:pb-0 text-center md:text-left animate-fade-up animate-duration-1000 animate-delay-500'>ABOUT US</h1>
                <AboutSlider members={ABOUT_DATA} />
            </div>
        </div>
    );
};

export default About;