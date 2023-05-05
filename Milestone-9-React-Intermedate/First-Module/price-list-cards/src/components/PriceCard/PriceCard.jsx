import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='mt-6 p-4 border bg-indigo-400 rounded-md flex flex-col'>
            <h2>
                <span className='text-5xl text-purple-700 font-extrabold '>{price.price}</span>
                <span className='text-3xl font-bold text-white'>/Month</span>
            </h2>
            <h4 className='text-3xl font-bold'>{price.name}</h4>
            <p className='mt-3 font-bold'>Features:</p>
            {
                price.features.map((feature,index)=><Feature key={index} feature={feature}></Feature>)
            }
            <button className="w-1/2 bg-purple-600 text-white py-2 mt-auto rounded-md hover:bg-purple-700 duration-500">Buy Now</button>
        </div>
    );
};

export default PriceCard;