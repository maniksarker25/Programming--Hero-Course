import React from 'react';

const Button = (props) => {
    return (
        <div className='text-center'>
            <button className="btn btn-success my-6">{props.children}</button>
        </div>
    );
};

export default Button;