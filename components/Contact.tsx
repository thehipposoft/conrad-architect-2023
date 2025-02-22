import React from 'react';
import { Form } from './Form';

const Contact = () => {
    return (
        <div className='flex justify-center items-center md:items-left h-screen animate-fade-up animate-duration-1000 animate-delay-500' id='contact'>
            <div className='flex flex-col md:h-auto md:flex-row md:justify-center items-center max-w-[1300px] md:selection:px-20 w-full'>
                <div className='flex justify-center items-center md:border-r-[1px] border-b-[1px] md:border-b-0 border-[#6F6F6F] md:w-1/3 w-[50vw] md:h-[300px]'>
                    <h1 className='letter pb-6'>CONTACT</h1>
                </div>
                <Form
                    fields={[
                        {
                            name: 'name',
                            type: 'text',
                            label: '',
                            placeholder: 'Name',
                            required: true,
                        },
                        {
                            name: 'customerEmail',
                            type: 'email',
                            label: '',
                            placeholder: 'Email',
                            required: true,
                        },
                        {
                            name: 'message',
                            type: 'textArea',
                            label: '',
                            placeholder: 'Message',
                            required: true,
                        },
                    ]}
                    onSuccessMessage={'Your message was submited succesfully. We will contact you soon.'}
                    onErrorMessage={'Please, try again in some minutes'}
                    submitButtonLabel={'SEND MESSAGE'}
                    emailServiceURL={'https://thehippoapi.netlify.app/.netlify/functions/api/conrad-architect-email'}
                />
            </div>
        </div>
    );
};

export default Contact;