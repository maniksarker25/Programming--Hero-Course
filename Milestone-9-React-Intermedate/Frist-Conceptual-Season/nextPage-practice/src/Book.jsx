import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    console.log(book)
    return (
        <Link to={`/book/${book.isbn13}`} >
            <div className='rounded-md shadow-lg transition hover:-translate-y-2 duration-200  relative hover:shadow-2xl'>
                <img className='object-cover w-full h-56 md:h-64 xl:h-80' src={book.image} alt="" />
            <div className='bg-black bg-opacity-75 opacity-0 hover:opacity-100 rounded-md text-gray-300 p-6 flex flex-col absolute inset-0 transition-opacity duration-200'>
                <p>{book.title}</p> <br />
                <p>{book.subtitle.substring(0,45)}...</p> <br />
                <p className='mt-auto'>Price:{book.price}</p>
            </div>
            </div>
        </Link>
    );
};

export default Book;