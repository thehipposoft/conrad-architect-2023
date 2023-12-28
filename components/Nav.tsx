'use client'
import React, { useState } from 'react';

const Nav = () => {

const [openMenu, setOpenMenu] = useState(false);

const toggleMenu = () => {
    setOpenMenu(!openMenu)
}

    return (
        <div className={`${openMenu ? 'menuIsOpen ' : ''}`}>
            <button className='absolute top-20 left-20 z-20 text-white hover:bg-[#00000088] duration-500 p-2 2xl:text-black 2xl:hover:bg-[#00000055]' onClick={toggleMenu}>
                MENU
            </button>
            <div className={`h-screen w-full flex justify-around items-center fixed menu top-0 left-0 z-20 p-10 -translate-x-full bg-white duration-700`}>
                <button className='absolute top-20 left-20 z-20 hover:bg-[#00000050] duration-500 p-2' onClick={toggleMenu}>
                    CLOSE
                </button>
                <nav className='w-[350px] flex justify-center items-center flex-col'>
                    <ul>
                        <li className='mt-4'><a href="">HOME</a></li>
                        <li className='mt-4'><a href="#projects" onClick={toggleMenu}>PROJECTS</a></li>
                        <li className='mt-4'><a href="#about" onClick={toggleMenu}>ABOUT</a></li>
                        <li className='mt-4'><a href="#contact" onClick={toggleMenu}>CONTACT</a></li>
                    </ul>
                </nav>
                <div className='grid grid-cols-3 gap-8'>
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