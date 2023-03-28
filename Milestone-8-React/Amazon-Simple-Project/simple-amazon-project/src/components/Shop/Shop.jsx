import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    
    // useState-----
   useEffect(()=>{
    fetch(" https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")
    .then(res => res.json())
    .then(data => setProducts(data))
   },[])
    return (
        <div className='shop-container lg:flex'>
            <div className='product-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:w-9/12'>
                {
                    products.map(product =><Product product={product} key={product.id}></Product>)
                }
            </div>
            <div className='cart-container'>
                <p>summary</p>

             </div>

        </div>
    );
};

export default Shop;