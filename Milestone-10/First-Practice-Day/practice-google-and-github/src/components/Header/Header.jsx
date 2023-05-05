import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-center mt-6 '>
            <Link className='mr-6 text-2xl' to='/'>Home</Link>
            <Link className='mr-6 text-2xl' to='/login'>Login </Link>
            <Link className='mr-6 text-2xl' to='/register'>Register</Link>
        </div>
    );
};

export default Header;