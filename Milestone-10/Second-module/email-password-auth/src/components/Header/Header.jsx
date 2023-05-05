import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='w-50 mx-auto d-flex justify-content-between my-4'>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            <Link to='/register-rbs'>RegisterRBS</Link>
            <Link to='/register-bs'>RegisterBS</Link>
        </nav>
    );
};

export default Header;