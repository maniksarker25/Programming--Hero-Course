import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import {addToDb, deleteShoppingCart, getShoppingCart} from '../../utilities/fakedb';
import "./Shop.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart,setCart]=useState([]);
  //useEffect------------
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(()=>{
    const storedCart = getShoppingCart();
    const savedCart = [];
    //Step1: get id--------
    for(const id in storedCart){
      //Step 2: get product from products by using id------
    const addedProduct = products.find(product => product.id === id );
    //Step 3: add quantity----
    if(addedProduct){
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      //Step 4: add the added product to the saved cart---------
      savedCart.push(addedProduct);
    }

    }
    //step5: set the cart
    setCart(savedCart);
  },[products])
  // handle event
  const handleAddToCart= (product)=>{
    // cart.push(product);
    let newCart = [];
    // const newCart = [...cart,product];
    // if product doesn't exits in the cart, then set quantity = 1;
    // if exist update quantity by 1
    const exists = cart.find(pd=>pd.id === product.id);
    if(!exists){
      product.quantity = 1;
      newCart = [...cart,product]
    }
    else{
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter(pd=>pd.id !== product.id);
      newCart = [...remaining,exists];
    }
    setCart(newCart);
    addToDb(product.id)
  }
  const handleClearCart =()=>{
      setCart([]);
      deleteShoppingCart();
  }
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
           key={product.id} 
           product={product}
           handleAddToCart={handleAddToCart}

           ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart handleClearCart={handleClearCart} cart={cart}>
          <Link className="proceed-link" to='/orders'>
          <button className="btn-proceed">Review Order<FontAwesomeIcon icon={faArrowAltCircleRight} /> </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
