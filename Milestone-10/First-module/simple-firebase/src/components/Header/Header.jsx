import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link className='mr-6 text-4xl ' to='/'>Home</Link>
            <Link to='/login'>Login</Link>
        </div>
    );
};

export default Header;