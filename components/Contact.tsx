import React from 'react';

const Contact = () => {
    return (
        <div className='flex justify-center h-screen' id='contact'>
            <div className='flex justify-center items-center max-w-[1300px] w-full'>
                <div className='flex justify-center items-center border-r-[1px] border-[#6F6F6F] w-1/3 h-[300px]'>
                    <h1 className='letter'>CONTACT</h1>
                </div>
                <form action="" className='w-[700px] pl-16'>
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
                        <button type="submit" name="submit" id="" className='rounded-3xl py-2 px-12 border-[#6F6F6F] mt-4 border-solid border-2'>SEND MESSAGE</button>
                    </section>
                </form>
            </div>
        </div>
    );
};

export default Contact;