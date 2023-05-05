import { Container } from 'postcss';
import React from 'react';
import SingleMeal from '../SingleMeal/SingleMeal';

const Cart = (props) => {
   const {cart} = props;
    return (
        <div>
           {
            cart.map((singleMeal,index) =><SingleMeal key={singleMeal.idMeal} index={index} singleMeal={singleMeal}></SingleMeal>)
           }
        </div>
    );
};

export default Cart;