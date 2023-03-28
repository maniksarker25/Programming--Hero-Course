import React from "react";
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    // console.log(cart)
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
      // if(product.quantity ===0){
      //   product.quantity = 1;
      // }

      //shortcut-------
      // product.quantity = product.quantity || 1;

        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
    }

    const tax = (totalPrice * 7) / 100;

    const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className="cart">
      <h2 className="summary-title">Order summary</h2>
      <p>Selected Item: {quantity}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <p>Total Shipping: ${totalShipping.toFixed(2)}</p>
      <p>Tax: ${tax}</p>
      <h6 className="grand-total">Grand Total: ${grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
