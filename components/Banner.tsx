import React from 'react';

const Banner = () => {
    return (
        <div className='grid grid-cols-4 mt-12 w-[1350px] mx-auto'>
            <div className='bg-slate-400 h-[580px] w-[325px] cursor-pointer relative duration-300 tile-1 hover:z-10'>
                <div className='opacity-0 duration-200 absolute top-0 left-0 w-full h-full overlay-1 flex justify-center items-center'>
                    <div className='bg-black opacity-20 absolute top-0 left-0 w-full h-full ' />
                    <h2 className='text-white relative z-10'>195 MONARCH BAY</h2>
                </div>
            </div>
            <div className='bg-slate-400 relative h-[580px] w-[325px] cursor-pointer hover:scale-110 hover:z-10 duration-300 tile-2 flex justify-center items-center translate-y-6'>
                <div className='overlay-2 absolute w-full h-full top-0 left-0 bg-black opacity-0'></div>
                <h2 className='text-white relative z-10 opacity-0'>405 DARTMOOR</h2>
            </div>
            <div className='bg-slate-400 relative h-[580px] w-[325px] cursor-pointer hover:scale-110 hover:z-10 duration-300 tile-2 flex justify-center items-center'>
                <div className='overlay-2 absolute w-full h-full top-0 left-0 bg-black opacity-0'></div>
                <h2 className='text-white relative z-10 opacity-0'>721 MANZANITA</h2>
            </div>
            <div className='bg-slate-400 h-[580px] w-[325px] cursor-pointer relative duration-300 hover:z-10 tile-3 translate-y-6'>
                <div className='opacity-0 duration-200 absolute top-0 left-0 w-full h-full overlay-3 flex justify-center items-center'>
                    <div className='bg-black opacity-20 absolute top-0 left-0 w-full h-full ' />
                    <h2 className='text-white relative z-10'>2570 PARK</h2>
                </div>
            </div>

        </div>
    );
};

export default Banner;