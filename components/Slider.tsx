'use client'
import Image from "next/image";
import { Link } from 'next-view-transitions'
import { useState } from "react";

export function Slider({ projectsToDisplay }:any) {
    const [imageIndex, setImageIndex] = useState(0);

    function showNextImage() {
        setImageIndex((index) => {
            if (index === projectsToDisplay.length - 2) return 0;
            return index + 1;
        })
    }

    function showPrevImage() {
        setImageIndex((index) => {
            if (index === 0) return projectsToDisplay.length - 1;
            return index - 1;
        })
    }


    return(
        <div className={'mx-auto relative md:pt-12 flex items-center justify-center'}>
            <div className="relative max-h-[450px] md:max-w-[1350px] max-w-[100vw] flex md:gap-4 gap-2 overflow-hidden mx-auto">
                {
                    projectsToDisplay.map((val:any, index:any) => (
                        <Link href={`projects/${val.id}`} key={index}>
                            <div
                                className="h-[450px] md:w-[670px] w-screen slide overflow-hidden duration-700 slider-effect relative"
                                style={{
                                    translate: `${-102.5 * imageIndex}%`,
                                }}
                            >
                                <Image
                                    src={val.main_image}
                                    alt={val.title}
                                    width={670}
                                    height={450}
                                    objectFit="cover"
                                    className="object-cover w-full h-full duration-1000 hover:scale-105 cursor-pointer"
                                />
                                <h1 className="absolute bottom-6 right-12 text-white uppercase z-20 duration-500">{val.title}</h1>
                                <div className="absolute top-0 left-0 w-full h-full z-10 bg-black duration-500 opacity-10 hover:opacity-0"></div>
                            </div>
                        </Link>
                    ))
                }
            <button
                className={`${imageIndex === 0 ? 'hidden' : ''} absolute top-0 bottom-0 left-0 cursor-pointer hover:bg-[#00000033] duration-300 p-2`}
                onClick={showPrevImage}
            >
                <svg width="25" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                    <path d="M2.2834 0L0 2.35L7.417 10L0 17.65L2.2834 20L12 10L2.2834 0Z" fill="white"/>
                </svg>
            </button>
            <button
                className="absolute top-0 bottom-0 right-0 cursor-pointer hover:bg-[#00000033] duration-300 p-2"
                onClick={showNextImage}
            >
                <svg width="25" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.2834 0L0 2.35L7.417 10L0 17.65L2.2834 20L12 10L2.2834 0Z" fill="white"/>
                </svg>
            </button>
            </div>
            <div className="flex gap-2 absolute left-[50%] bottom-[-40px] -translate-x-[50%]">
                {
                    projectsToDisplay.map((_:any, index:any) => (
                        index === projectsToDisplay.length -1 ? '' :
                        <button
                            className={`${index === imageIndex ? 'bg-neutral-700' : ''} p-[7px] hover:bg-neutral-700 duration-150 rounded-full bg-neutral-400`}
                            onClick={() => setImageIndex(index)}
                            key={index}
                        >
                        </button>
                    ))
                }
            </div>
        </div>
    )
}


