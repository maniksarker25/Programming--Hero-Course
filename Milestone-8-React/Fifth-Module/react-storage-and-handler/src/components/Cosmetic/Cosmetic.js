import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb';
import './Cosmetic.css';

const Cosmetic = (props) => {
    const {name,price,id} =props.cosmetic;
    const addToCart = (id)=>{
        addToDb(id);
    }
    const removeFromCart = (id)=>{
        removeFromDb(id);

    }
    // const addToCartWithParam = ()=> addToCart();
    return (
        <div className='product'>
            <h3>Buy This:{name}</h3>
            <p>Price:{price}</p>
            <p>id:{id}</p>
            {/* <button style={{marginRight:'10px'}} onClick={addToCartWithParam}>Add to Cart</button> */}
            <button style={{marginRight:'10px'}} onClick={()=>addToCart(id)}>Add to Cart</button>
            <button onClick={()=>removeFromCart(id)}>Remove From Cart</button>
        </div>
    );
};

export default Cosmetic;