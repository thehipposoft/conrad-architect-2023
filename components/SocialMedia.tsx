import React from 'react';
import Image from 'next/image';
import { Project } from '@/src/types';

type Props = {
    projects: Project[] 
}


const SocialMedia = ({ projects }: Props) => {
    return(
        <div className='flex flex-col max-w-[1300px] md:px-20 mx-auto mb-12'>
            <div
                className={'flex justify-between py-6'}
            >
                <div className='pl-6 md:pl-0'>
                    <h1 className='py-1 text-2xl'>SOCIAL MEDIA</h1>
                    <button 
                        className='hover:underline duration-300'
                    >
                        <h3 className='text-sm'>FOLLOW US FOR MORE</h3>
                    </button>
                </div>
                <div className={'py-3 gap-3 flex items-center pr-4 md:pr-0'}>
                    <a
                        href={'https://www.instagram.com/steel_art_sla/'}
                        target={"_blank"} rel={'noreferrer'}
                        className={'mr-2 flex'}
                    >
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.4958 10.3311C12.6497 10.3311 10.3271 12.6538 10.3271 15.5C10.3271 18.3462 12.6497 20.6689 15.4958 20.6689C18.342 20.6689 20.6646 18.3462 20.6646 15.5C20.6646 12.6538 18.342 10.3311 15.4958 10.3311ZM30.9983 15.5C30.9983 13.3596 31.0177 11.2385 30.8975 9.10193C30.7773 6.62025 30.2111 4.41776 28.3964 2.60304C26.5779 0.784432 24.3793 0.222178 21.8977 0.101971C19.7573 -0.0182348 17.6362 0.00115338 15.4997 0.00115338C13.3593 0.00115338 11.2383 -0.0182348 9.10176 0.101971C6.62013 0.222178 4.41768 0.78831 2.60299 2.60304C0.784418 4.42164 0.222174 6.62025 0.10197 9.10193C-0.0182344 11.2424 0.00115335 13.3634 0.00115335 15.5C0.00115335 17.6366 -0.0182344 19.7615 0.10197 21.8981C0.222174 24.3797 0.788296 26.5822 2.60299 28.397C4.42156 30.2156 6.62013 30.7778 9.10176 30.898C11.2422 31.0182 13.3632 30.9988 15.4997 30.9988C17.6401 30.9988 19.7611 31.0182 21.8977 30.898C24.3793 30.7778 26.5817 30.2117 28.3964 28.397C30.215 26.5784 30.7773 24.3797 30.8975 21.8981C31.0215 19.7615 30.9983 17.6404 30.9983 15.5ZM15.4958 23.453C11.0948 23.453 7.54298 19.9011 7.54298 15.5C7.54298 11.0989 11.0948 7.547 15.4958 7.547C19.8969 7.547 23.4487 11.0989 23.4487 15.5C23.4487 19.9011 19.8969 23.453 15.4958 23.453ZM23.7744 9.07866C22.7468 9.07866 21.9171 8.24885 21.9171 7.22128C21.9171 6.19371 22.7468 5.3639 23.7744 5.3639C24.8019 5.3639 25.6317 6.19371 25.6317 7.22128C25.6321 7.46528 25.5842 7.70695 25.491 7.93243C25.3978 8.15792 25.261 8.3628 25.0884 8.53533C24.9159 8.70787 24.711 8.84467 24.4855 8.9379C24.2601 9.03113 24.0184 9.07897 23.7744 9.07866Z" fill="black"/>
                    </svg>
                    </a>
                    <a
                        href={'https://www.facebook.com/profile.php?id=100063616015472'}
                        target={"_blank"} rel={'noreferrer'}
                        className={'mr-2 flex'}
                    >
                        <svg width="15" height="31" viewBox="0 0 15 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.82915 31V16.4539H0V11.2166H3.82915V6.74327C3.82915 3.22809 6.09105 0 11.3029 0C13.4131 0 14.9736 0.203205 14.9736 0.203205L14.8506 5.09395C14.8506 5.09395 13.2592 5.07839 11.5227 5.07839C9.64319 5.07839 9.34207 5.9484 9.34207 7.39241V11.2166H15L14.7538 16.4539H9.34207V31H3.82915Z" fill="black"/>
                        </svg>
                    </a>
                    <a
                        href={'https://www.linkedin.com/company/steel-art-salta/'}
                        target={"_blank"} rel={'noreferrer'}
                        className={'mr-2 flex'}
                    >
                        <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8864 10.802H17.8288V13.6694C18.6848 12.0203 20.88 10.5385 24.1776 10.5385C30.4992 10.5385 32 13.8214 32 19.8447V31H25.6V21.2164C25.6 17.7862 24.744 15.8518 22.5648 15.8518C19.5424 15.8518 18.2864 17.9366 18.2864 21.2148V31H11.8864V10.802ZM0.912 30.7365H7.312V10.5385H0.912V30.7365ZM8.2288 3.9525C8.22904 4.47218 8.12265 4.98671 7.91582 5.46621C7.70899 5.94571 7.40584 6.3806 7.024 6.7456C6.25024 7.49057 5.2029 7.90756 4.112 7.905C3.02302 7.90429 1.9781 7.48836 1.2032 6.74715C0.822738 6.3809 0.520617 5.94553 0.31415 5.46597C0.107682 4.98641 0.000926611 4.4721 0 3.9525C0 2.90315 0.432 1.89875 1.2048 1.15785C1.97902 0.415646 3.02438 -0.000463777 4.1136 3.8791e-07C5.2048 3.8791e-07 6.2512 0.41695 7.024 1.15785C7.7952 1.89875 8.2288 2.90315 8.2288 3.9525Z" fill="black"/>
                        </svg>
                    </a>
                    <span className={'h-[1px] w-[180px] bg-black ml-3 md:block hidden '} />
                </div>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-2 gap-1'>
                <div 
                    className='w-full h-[350px] bg-cover bg-center'
                    style={{
                        backgroundImage: `url(${projects[5].images[0]})`,
                    }}
                />
                <div 
                    className='w-full h-[350px] bg-cover bg-center'
                    style={{
                        backgroundImage: `url(${projects[5].images[1]})`,
                    }}
                />
                <div 
                    className='w-full h-[350px] bg-cover bg-center'
                    style={{
                        backgroundImage: `url(${projects[5].images[2]})`,
                    }}
                />
                <div 
                    className='w-full h-[350px] bg-cover bg-center'
                    style={{
                        backgroundImage: `url(${projects[5].images[3]})`,
                    }}
                />
                <div 
                    className='w-full h-[350px] bg-cover bg-center'
                    style={{
                        backgroundImage: `url(${projects[5].images[5]})`,
                    }}
                />
                <div 
                    className='w-full h-[350px] bg-cover bg-center'
                    style={{
                        backgroundImage: `url(${projects[5].images[6]})`,
                    }}
                />
            </div>
        </div>
    )
};

export default SocialMedia;