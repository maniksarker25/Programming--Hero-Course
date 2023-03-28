import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='m-3 bg-success-subtle d-flex justify-content-between px-5 rounded  '>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/countries">Countries</a>
                <a href="contact">Contact Us</a>
                <a href="/service">Service</a>
            </nav>
        </div>
    );
};

export default Header;