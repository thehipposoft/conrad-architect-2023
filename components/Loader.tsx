'use client'
import React, {useState, useEffect} from 'react';

const Loader = () => {

const [fade, setFade] = useState<boolean>(false);
const [remove, setRemove] = useState<boolean>(false);

useEffect(() =>{
    setTimeout(() => {
        setFade(true);
    }, 3000)
    
    setTimeout(() => {
        setRemove(true);
    }, 4500)
}, [])


    return (
        <div 
            className={`h-screen md:w-[98vw] w-screen bottom-0 absolute z-20 duration-[2000ms] overflow-hidden flex justify-center items-center bg-white 
            ${fade === true ? 'opacity-0' : ''}
            ${remove === true ? '-translate-y-full' : ''}
             `}

        >
            <section className='flex loader-tex uppercase text-2xl'>
                <p className='animate-fade-left animate-duration-[1000ms] animate-delay-[300ms] animate-fill-both'>J</p>
                <p className='animate-fade-left animate-duration-[1000ms] animate-delay-[400ms]'>a</p>
                <p className='animate-fade-left animate-duration-[1000ms] animate-delay-[500ms]'>m</p>
                <p className='animate-fade-left animate-duration-[1000ms] animate-delay-[600ms]'>e</p>
                <p className='animate-fade-left animate-duration-[1000ms] animate-delay-[700ms]'>s</p>
                <p className='animate-fade-left animate-duration-[1000ms] animate-delay-[800ms] pl-2'>C</p>
                <p className='animate-fade-left animate-duration-[1000ms] animate-delay-[900ms]'>o</p>
                <p className='animate-fade-left animate-duration-[1000ms] animate-delay-[1000ms]'>n</p>
                <p className='animate-fade-left animate-duration-[1000ms] animate-delay-[1100ms]'>r</p>
                <p className='animate-fade-left animate-duration-[1000ms] animate-delay-[1200ms]'>a</p>
                <p className='animate-fade-left animate-duration-[1000ms] animate-delay-[1300ms]'>d</p>
                <p className='animate-fade-left animate-duration-[1000ms] animate-delay-[1400ms] pl-2'>A</p>
                <p className='animate-fade-left animate-duration-[1000ms] animate-delay-[1500ms]'>r</p>
                <p className='animate-fade-left animate-duration-[1000ms] animate-delay-[1600ms]'>c</p>
                <p className='animate-fade-left animate-duration-[1000ms] animate-delay-[1700ms]'>h</p>
                <p className='animate-fade-left animate-duration-[1000ms] animate-delay-[1800ms]'>i</p>
                <p className='animate-fade-left animate-duration-[1000ms] animate-delay-[1900ms]'>t</p>
                <p className='animate-fade-left animate-duration-[1000ms] animate-delay-[2000ms]'>e</p>
                <p className='animate-fade-left animate-duration-[1000ms] animate-delay-[2100ms]'>c</p>
                <p className='animate-fade-left animate-duration-[1000ms] animate-delay-[2200ms]'>t</p>
            </section>
        </div>
    );
};

export default Loader;