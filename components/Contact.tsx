import React from 'react';

const Contact = () => {
    return (
        <div className='flex justify-center items-center md:items-left h-screen animate-fade-up animate-duration-1000 animate-delay-500' id='contact'>
            <div className='flex flex-col md:h-auto md:flex-row md:justify-center items-center max-w-[1300px] px-20 w-full'>
                <div className='flex justify-center items-center md:border-r-[1px] border-b-[1px] md:border-b-0 border-[#6F6F6F] md:w-1/3 w-[50vw] md:h-[300px]'>
                    <h1 className='letter pb-6'>CONTACT</h1>
                </div>
                <form action="" className='w-[75%] md:pl-16 pt-12 md:pt-0'>
                    <section className='mb-4'>
                        <input type="text" name="name" id="" placeholder='NAME' className='py-5 px-2 border-b-[1px] w-full' />
                    </section>
                    <section className='mb-4'>
                        <input type="text" name="email" id="" placeholder='EMAIL' className='py-5 px-2 border-b-[1px] w-full' />
                    </section>
                    <section className='mb-4'>
                        <input type="text" name="message" id="" placeholder='MESSAGE' className='py-5 px-2 border-b-[1px] w-full' />
                    </section>
                    <section className='text-center mt-4'>
                        <button type="submit" name="submit" id="" className='rounded-3xl py-2 md:px-12 px-8 border-[#6F6F6F] mt-4 border-solid border-2'>SEND MESSAGE</button>
                    </section>
                </form>
            </div>
        </div>
    );
};

export default Contact;