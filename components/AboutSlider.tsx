'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Member } from "@/src/types";


type Props = {
    members: Member[]
}

export function AboutSlider({ members }:Props) {
    const [imageIndex, setImageIndex] = useState(0);

    function showNextImage() {
        setImageIndex((index) => {
            if (index === members.length - 1) return 0;
            return index + 1;
        })
    }

    function showPrevImage() {
        setImageIndex((index) => {
            if (index === 0) return members.length - 1;
            return index - 1;
        })
    }
    

    return(
        <div className={'mx-auto relative pt-16'}>
            <div className="relative mx-auto justify-center items-center animate-fade-up animate-duration-1000 animate-delay-500">
                <div className="flex max-w-[500px] overflow-hidden mx-auto">
                    {
                        members.map((val:any, index:any) => (
                            <div 
                                className='flex flex-col justify-center items-center duration-500 w-full h-full' 
                                key={index}
                                style={{
                                    translate: `${-100 * imageIndex}%`,
                                }}
                            >
                                <Image src={val.image} alt='Jim Conrad Photo' width={280} height={250} />
                                <p className='text-white pt-8 mt-2 md:mt-0 px-10 md:px-0 md:w-[500px] w-screen text-center'>{val.text}</p>
                                <p className='text-white pt-4'>{val.name}</p>
                            </div>
                        ))
                    }
                </div>

            <button 
                className={`${imageIndex === 0 ? 'hidden' : ''} absolute top-0 bottom-0 md:left-[10%] left-[5%] cursor-pointer text-white duration-500 p-2 hover:bg-[#ffffff33]`}
                onClick={showPrevImage}
            >
                <svg width="25" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                    <path d="M2.2834 0L0 2.35L7.417 10L0 17.65L2.2834 20L12 10L2.2834 0Z" fill="white"/>
                </svg>
            </button>
            <button 
                className="absolute top-0 bottom-0 md:right-[10%] right-[5%] cursor-pointer text-white duration-500 p-2 hover:bg-[#ffffff33]"
                onClick={showNextImage}
            >
                <svg width="25" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.2834 0L0 2.35L7.417 10L0 17.65L2.2834 20L12 10L2.2834 0Z" fill="white"/>
                </svg>
            </button>
            </div>

        </div>
    )
}