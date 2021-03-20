import React from "react";
import {Link} from "react-router-dom";

const ShopHeader = () => {
    return (
        <header>
            <Link to="/">HOME</Link> | <Link to="/cart">CART</Link>
        </header>
    );
};

export default ShopHeader;
