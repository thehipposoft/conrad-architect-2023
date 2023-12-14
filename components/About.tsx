import React from 'react';

const About = () => {
    return (
        <div className='h-screen bg-black' id='about'>
            <div className='pt-20'>
                <h1 className='text-white text-3xl pl-20'>ABOUT US</h1>
                <div className='flex flex-col justify-center items-center pt-20'>
                    <div className='h-[250px] w-[250px] bg-red-200'></div>
                    <p className='text-white pt-8 w-[480px] text-center'>“The combination of experience and highly personalized service allows JCA provide a full array of services to clients wanting to build their dream home.”</p>
                    <p className='text-white pt-4'>James Conrad, Founder.</p>
                </div>
            </div>
        </div>
    );
};

export default About;