import React from 'react';
import BookList from "../book-list";
// import './app.css';

const HomePage = () => {
    const books = [
        {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J/ Fowler'
        },
        {
            id: 2,
            title: 'Release It!',
            author: 'Michael T. Nygrard'
        }
    ];
    return (
        <BookList books={books} />
    )
}

export default HomePage;
