'use client'
import React, { useState } from 'react';

const Nav = () => {

const [openMenu, setOpenMenu] = useState(false);

const toggleMenu = () => {
    setOpenMenu(!openMenu)
}

    return (
        <div className={`${openMenu ? 'menuIsOpen ' : ''}`}>
            <button className='fixed md:top-4 top-6 md:left-4 left-6 z-20 text-black animate-fade-right animate-duration-500 animate-delay-[1200ms]
             duration-500 p-2 2xl:text-black hover:bg-[#00000055] text-xl md:text-base' onClick={toggleMenu}>
                MENU
            </button>
            <div className={`h-screen md:w-full flex justify-around items-center fixed menu
             top-0 left-0 z-20 p-10 -translate-x-full bg-[#e9e8e8] duration-700`}>
                <button className='absolute md:top-4 top-6 md:left-4 left-6 z-20 text-xl md:text-base hover:bg-[#00000050] duration-500 p-2' onClick={toggleMenu}>
                    CLOSE
                </button>
                <nav className='w-[350px] flex justify-center items-center flex-col'>
                    <ul>
                        <li className='mt-4 text-lg'><a href="/">HOME</a></li>
                        <li className='mt-4 text-lg'><a href="#projects" onClick={toggleMenu}>PROJECTS</a></li>
                        <li className='mt-4 text-lg'><a href="#about" onClick={toggleMenu}>ABOUT</a></li>
                        <li className='mt-4 text-lg'><a href="#contact" onClick={toggleMenu}>CONTACT</a></li>
                    </ul>
                </nav>
                <div className='md:grid grid-cols-3 gap-8 hidden'>
                    <div 
                    className='bg-slate-400 h-[580px] w-[325px]'
                    style={{
                        backgroundImage: 'url(/assets/images/menu-1.png)',
                        backgroundPosition: 'center'
                    }}
                     />
                    <div className='bg-slate-400 h-[580px] w-[325px] translate-y-6'
                    style={{
                        backgroundImage: 'url(/assets/images/menu-2.png)',
                        backgroundPosition: 'center'

                    }}
                    />
                    <div className='bg-slate-400 h-[580px] w-[325px]'
                    style={{
                        backgroundImage: 'url(/assets/images/menu-3.png)',
                        backgroundPosition: 'center'

                    }} 
                    />
                </div>

            </div>
        </div>
    );
};

export default Nav;