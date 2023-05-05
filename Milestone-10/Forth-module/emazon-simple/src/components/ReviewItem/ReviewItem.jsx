import React, { useState } from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product,handleRemoveFromCart }) => {
  const { id, img, name, price, quantity } = product;
  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div className="review-details">
        <p className="product-title">{name}</p>
        <p>
          Price: <span className="price-orange">${price}</span>
        </p>
        <p>Order Quantity:{quantity}</p>
      </div>
      <button onClick={()=>handleRemoveFromCart(id)} className="delete-button">
        {" "}
        <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default ReviewItem;
