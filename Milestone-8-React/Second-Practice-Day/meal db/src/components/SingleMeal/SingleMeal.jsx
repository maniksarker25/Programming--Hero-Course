import React from 'react';

const SingleMeal = (props) => {
    const {strMealThumb,strCategory,strIngredient4,idMeal} = props.singleMeal;
    let serial = 0;
    return (
        <div>
            <div className='flex justify-between mt-4'>
                <p>{props.index + 1}</p>
                <p>{strIngredient4}</p>
                <img className='w-6' src={strMealThumb} alt="" />
            </div>
        </div>
    );
};

export default SingleMeal;