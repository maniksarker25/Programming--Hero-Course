import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Book from './Book';
import LoadingSpiner from './LoadingSpiner';

const Books = () => {
    const {books} = useLoaderData();
    const navigation = useNavigation();
    console.log(navigation.state)
    if(navigation.state === 'loading'){
        return <LoadingSpiner></LoadingSpiner>
    }
    return (
        <div className='mx-auto mt-12 gap-6 lg:max-w-screen-xl grid grid-cols-1 md-grid-cols-2 lg:grid-cols-4'>
            {
                books.map(book=><Book key={book.isbn13} book={book}></Book>)
            }
        </div>
    );
};

export default Books;