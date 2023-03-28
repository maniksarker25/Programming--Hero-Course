import React from 'react';

const Shoe = (props) => {
    const {name,price} =props.shoe;
    return (
        <div>
            <h4>Buy this:{name}</h4>
            <p>price:{price}</p>
        </div>
    );
};

export default Shoe;