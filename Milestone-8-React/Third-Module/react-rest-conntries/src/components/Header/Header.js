import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/about">About Us</a>
            </nav>
            <h1>Welcome to my react Website</h1>
        </div>
    );
};

export default Header;