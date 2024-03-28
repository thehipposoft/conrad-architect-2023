'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {

const [openMenu, setOpenMenu] = useState(false);

const toggleMenu = () => {
    setOpenMenu(!openMenu)
}

    return (
        <div className={`${openMenu ? 'menuIsOpen ' : ''} `}>
            <div className='flex justify-between md:w-[1350px] h-16 md:mx-auto md:mt-2 mt-2 mx-2'>
                <button className='text-black animate-fade-right animate-duration-500 animate-delay-[1200ms]
                duration-1000 p-2 my-2  hover:bg-[#00000055] text-lg' onClick={toggleMenu}>
                    MENU
                </button>
                <Image 
                    src={'/assets/images/logoblack.svg'} 
                    alt='James Conrad Architect logo' 
                    width={250} 
                    height={100} 
                    className='duration-300 animate-fade-left animate-delay-[1600ms] animate-duration-1000 hidden md:block'
                />
            </div>
            <div className={`h-screen md:w-full w-screen overflow-hidden flex flex-col items-center md:fixed absolute menu opacity-0
             top-0 left-0 z-20 -translate-x-full md:bg-[#e9e8e8] bg-white duration-1000`}>
                <div className='flex md:w-[1350px] w-full h-16 md:mx-auto md:mt-0 mt-2 mx-2'>
                    <button className='text-xl text-black md:text-lg hover:bg-[#00000050] duration-500 p-2 m-2 md:mx-0' onClick={toggleMenu}>
                        CLOSE
                    </button>
                </div>
                <div className='flex md:flex-row flex-col md:w-[1350px] justify-between m-auto md:h-[85vh] h-screen'>
                    <nav className='flex justify-center mx-auto flex-col h-full'>
                        <ul>
                            <li className='mt-4 text-2xl md:text-lg'><a href="/">HOME</a></li>
                            <li className='mt-4 text-2xl md:text-lg'><a href="#projects" onClick={toggleMenu}>PROJECTS</a></li>
                            <li className='mt-4 text-2xl md:text-lg'><a href="#about" onClick={toggleMenu}>ABOUT</a></li>
                            <li className='mt-4 text-2xl md:text-lg'><a href="#contact" onClick={toggleMenu}>CONTACT</a></li>
                            <li className='mt-4 text-2xl md:text-lg'><Link href="/gallery" onClick={toggleMenu}>GALLERY</Link></li>

                        </ul>
                    </nav>
                    <div className='md:hidden w-screen relative bottom-0 flex justify-center items-center h-[15vh] bg-black'>
                        <Image 
                            src={'/assets/images/logo_white.svg'} 
                            alt='James Conrad Architect logo' 
                            width={350} 
                            height={200} 
                            className=''
                        />
                    </div>
                    <div className='md:grid grid-cols-3 gap-4 hidden w-[1010px] xl:mt-0'>
                        <div 
                        className='bg-slate-400 h-[600px] w-full'
                        style={{
                            backgroundImage: 'url(/assets/images/menu-1.png)',
                            backgroundPosition: 'center'
                        }}
                        />
                        <div className='bg-slate-400 h-[600px] w-full'
                        style={{
                            backgroundImage: 'url(/assets/images/menu-2.png)',
                            backgroundPosition: 'center'

                        }}
                        />
                        <div className='bg-slate-400 h-[600px] w-full'
                        style={{
                            backgroundImage: 'url(/assets/images/menu-3.png)',
                            backgroundPosition: 'center'

                        }} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;