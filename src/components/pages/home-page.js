import React from 'react';
import BookList from "../book-list";
import ShoppingCartTable from "../shopping-cart-table";
// import './app.css';

const HomePage = () => {
    return (
        <React.Fragment>
            <BookList />
            <ShoppingCartTable />
        </React.Fragment>
    )
};

export default HomePage;
