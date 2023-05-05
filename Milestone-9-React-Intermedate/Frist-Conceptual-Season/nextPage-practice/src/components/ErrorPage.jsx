import React from 'react';
import { useRouteError } from 'react-router-dom';
import message from '../assets/message.json'
import Lottie from "lottie-react";

const ErrorPage = () => {
    const {error} = useRouteError();
    return (
        <div className=' w-full h-full lg:w-[500px] lg:max-w-screen-xl mx-auto mt-12'>
            <Lottie  animationData={message} loop={true}></Lottie>
            <h1 className='text-xl ms-24 text-red-700 lg:text-3xl'>{error.message}</h1>
        </div>
    );
};

export default ErrorPage;