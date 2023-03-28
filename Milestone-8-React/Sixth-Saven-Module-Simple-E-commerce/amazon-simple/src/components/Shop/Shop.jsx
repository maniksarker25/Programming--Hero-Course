import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import {addToDb, getShoppingCart} from '../../utilities/fakedb';
import "./Shop.css";

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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
