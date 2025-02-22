"use client";
import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const initialValues = {
    interest: [],
    name: '',
    customerEmail: '',
    message: '',
};

type FieldsType = {
    name: 'interest' | 'name' | 'customerEmail' | 'message';
    type: 'text' | 'textArea' | 'select' | 'email';
    label: string;
    placeholder: string;
    required?: boolean;
}

type MyCustomFormProps = {
    fields: FieldsType[];
    onSuccessMessage: string;
    onErrorMessage: string;
    emailServiceURL: string;
    submitButtonLabel: string;
};

type FormValues = {
    interest: string[];
    name: string;
    customerEmail: string;
    message: string;
};

const MyCustomForm = ({
    fields,
    onSuccessMessage,
    onErrorMessage,
    emailServiceURL,
    submitButtonLabel
}:MyCustomFormProps) => {
    const [messageSent, setMessageSent] = useState<string>('');
    const [isAPILoading, setIsAPILoading] = useState<boolean>(false);
    const [messageDescription, setMessageDescription] = useState<string>('');
    const [values, setValues] = useState<FormValues>({
        interest: [],
        name: '',
        customerEmail: '',
        message: '',
    });

    const renderSentMessage = () => {
        if (messageSent === 'succeed') {
            return <div className={`message succeed w-full text-center mb-6`}>
                <h2 className={'mb-2 text-2xl text-black'}>Thanks! </h2>
                <p className='text-black'>{onSuccessMessage}</p>
            </div>
        }
        if (messageSent === 'error') {
            return <div className={`message error w-full text-center mb-6`}>
                <h2 className={'mb-4 text-red-500'}>Something went wrong</h2>
                <p>{onErrorMessage}</p>
                <p>{messageDescription}</p>
            </div>
        }
        return null;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { target } = e;
        const { name, value } = target;

        setValues({
            ...values,
            [name]: value
        });
    };

    const handleChangeBoxes = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            setValues({
                ...values,
                interest: [...values.interest, e.target.value]
            })
        } else {
            const index = values.interest.indexOf(e.target.value);
            values.interest.splice(index, 1);
            setValues({
                ...values,
                interest: values.interest
            })
        }
    }

    const handleSubmit = (event:any) => {
        if (event) event.preventDefault();

        setIsAPILoading(true);
        axios.post(
            emailServiceURL,
            {
                interest: values.interest,
                message: values.message,
                name: values.name,
                customerEmail: values.customerEmail,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json, text/plain, */*',
                },
            }
        )
            .then(function (response) {
                setValues(initialValues);
                setMessageSent('succeed');
                setIsAPILoading(false);
            })
            .catch(function (error) {
                setMessageDescription(error.toString());
                setMessageSent('error');
                setIsAPILoading(false);
            });
    };

    return (
        <form
            className={`form mx-auto lg:w-[600px]`}
            onSubmit={(event) => handleSubmit(event)}
        >
            {
                fields.map((field)=> {
                    const { name, type, label, placeholder } = field;

                    switch (type) {
                        case 'textArea':
                            return (
                                <section className={'mb-4'} key={name}>
                                    <label className={'contact-label'}>{label}</label>
                                    <textarea
                                        name={name}
                                        id={name}
                                        value={values[name]}
                                        rows={2}
                                        cols={40}
                                        className='resize-none placeholder:uppercase py-5 px-2 border-b-[1px] border-black w-full focus:outline-none focus:placeholder:text-gray-400 placeholder:text-black'
                                        placeholder={placeholder}
                                        onChange={handleChange}
                                        required={field.required}
                                    />
                                </section>
                            );
                        default:
                            return (
                                <section className='mb-4'>
                                    <label className={'contact-label'}>{label}</label>
                                    <input
                                        type={type}
                                        name={name}
                                        id={name}
                                        className={'py-5 px-2 border-b-[1px] w-full placeholder:uppercase focus:outline-none focus:placeholder:text-gray-400 placeholder:text-black'}
                                        onChange={handleChange}
                                        value={values[name]}
                                        placeholder={placeholder}
                                        required={field.required}
                                    />
                                </section>
                            )
                    }
                })
            }
            {renderSentMessage()}
            <div className='flex items-center justify-center'>
                <button
                    disabled={isAPILoading}
                    value={submitButtonLabel ? submitButtonLabel : 'Send'}
                    type="submit"
                    className={` ${isAPILoading ? 'opacity-50' : ''} light rounded-3xl py-2 md:px-20 px-8 border-black mt-4 border-solid border-[1px] duration-300 hover:border-gray-100 hover:bg-gray-100 hover:underline`}
                >
                    {submitButtonLabel}
                </button>
            </div>
        </form>
    )
};

export default MyCustomForm
