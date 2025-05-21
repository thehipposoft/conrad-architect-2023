import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from 'next-view-transitions'
 
export const metadata: Metadata = {
  title: 'Conrad Architects | Jim Conrad',
  description: "“The combination of experience and highly personalized service allows JCA provide a full array of services to clients wanting to build their dream home.”",
}


const JimConradPage = () => {
  return (
    <div className='flex flex-col mb-16'>
        <div className="flex justify-end md:hidden">
            <Link href={'/'} className="p-4 mt-4 md:mr-0 mr-4 hover:bg-[#00000055] duration-500 animate-fade-left animate-delay-[1000ms] animate-duration-1000">HOME</Link>
        </div>
        <div className="md:w-[1350px] mx-auto md:mt-20 mt-10 flex justify-between">
            <h1 className='text-2xl tracking-widest animate-fade-right animate-delay-[700ms] animate-duration-1000'>
                TEAM
            </h1>
            <Link href={'/'} className="hidden md:block p-2 hover:bg-[#00000055] duration-500 animate-fade-left animate-delay-[1000ms] animate-duration-1000">HOME</Link>
        </div>
        <div className='' id='about'>
            <div className='md:pt-12 pt-[30%] h-[90%] flex flex-col justify-between'>
                <div 
                    className='flex flex-col justify-center items-center duration-500 w-full h-full animate-fade-up ' 
                >
                    <Image src={'/assets/images/jim.png'} alt='Jim Conrad Photo' width={280} height={250} />
                    <p className=' pt-8 mt-2 md:mt-0 px-14 md:px-0 md:w-[500px] w-screen text-center'>“The combination of experience and highly personalized service allows JCA provide a full array of services to clients wanting to build their dream home.”</p>
                    <p className='font-bold text-2xl md:text-xl pt-4'>James Conrad, Founder.</p>
                </div>
            </div>
        </div>
    </div>

  )
}

export default JimConradPage