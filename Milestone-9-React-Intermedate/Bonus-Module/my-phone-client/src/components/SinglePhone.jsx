import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SinglePhone = () => {
    const singlePhone = useLoaderData()
    return (
        <div>
            <h1>{singlePhone.name}</h1>
            <img src={singlePhone.image} alt="" />
        </div>
    );
};

export default SinglePhone;