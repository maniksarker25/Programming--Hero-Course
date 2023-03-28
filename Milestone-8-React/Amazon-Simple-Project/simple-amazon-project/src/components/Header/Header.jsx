import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='flex justify-between header px-8 py-3 items-center '>
            <img src={logo} alt="" />
            <div className='text-white link-container' >
                <a href="/order">Order</a>
                <a href="/order review">Order Review</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Log in</a>
            </div>
        </div>
    );
};

export default Header;