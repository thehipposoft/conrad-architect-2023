'use client'
import React, { useState } from 'react';

const Nav = () => {

const [openMenu, setOpenMenu] = useState(false);

const toggleMenu = () => {
    setOpenMenu(!openMenu)
    console.log(openMenu)
}

    return (
        <div className={`${openMenu ? 'menuIsOpen' : ''}`}>
            <button className='absolute top-16 left-16 z-20 hover:bg-fuchsia-500 p-2' onClick={toggleMenu}>
                MENU
            </button>
            <div className={`h-screen fixed menu flex top-0 left-0 z-20 p-10 -translate-x-full bg-orange-100 duration-500`}>
                <button className='absolute top-16 left-16 z-20 hover:bg-fuchsia-500 p-2' onClick={toggleMenu}>
                    CLOSE
                </button>
                <nav className='w-[350px] flex justify-center items-center flex-col'>
                    <ul>
                        <li className='mt-4'><a href="">HOME</a></li>
                        <li className='mt-4'><a href="#projects" onClick={toggleMenu}>PROJECTS</a></li>
                        <li className='mt-4'><a href="#look" onClick={toggleMenu}>LOOK AND FEEL</a></li>
                        <li className='mt-4'><a href="#about" onClick={toggleMenu}>ABOUT</a></li>
                        <li className='mt-4'><a href="#contact" onClick={toggleMenu}>CONTACT</a></li>
                    </ul>
                </nav>
                <div className='grid grid-cols-3 gap-8'>
                    <div className='bg-slate-400 h-[580px] w-[325px]' />
                    <div className='bg-slate-400 h-[580px] w-[325px] translate-y-6' />
                    <div className='bg-slate-400 h-[580px] w-[325px]' />
                </div>

            </div>
        </div>
    );
};

export default Nav;