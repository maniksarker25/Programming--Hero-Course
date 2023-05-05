import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData, useSearchParams } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";

const Orders = () => {
    const savedCart = useLoaderData();
    // console.log(savedCart);
    const [cart,setCart] = useState(savedCart);
    const handleRemoveFromCart = (id) =>{
        const remaining = cart.filter(product=>product.id !== id);
        setCart(remaining);
        removeFromDb(id)
    }
    const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
           <div className='review-container'>
           {
            cart.map(product=><ReviewItem handleRemoveFromCart={handleRemoveFromCart} key={product.id} product={product}></ReviewItem>)
           }
           </div>
           <div className='cart-container'>
                <Cart
                 cart={cart} handleClearCart={handleClearCart}>
                    <Link className='proceed-link' to='/checkout'>
                    <button className='btn-proceed'>Proceed Checkout<FontAwesomeIcon icon={faCalculator} /></button>
                    </Link>
                </Cart>
           </div>
        </div>
    );
};

export default Orders;