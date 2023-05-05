import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='bg-gray-900 text-white md:flex px-12 py-3 justify-between items-center'>
            <div>
                <h1 className='text-4xl'>Meal DB</h1>
            </div>
            <div className='menu-bar'>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/menu">Menu</a>
                <a href="/login">Log in</a>
            </div>
        </div>
    );
};

export default Header;