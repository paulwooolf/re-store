import React, {Fragment} from "react";

const BookListItem = ({book, onAddedToCart }) => {
    const { title, author } = book;
    return (
        <Fragment>
            <span>{ title }</span>
            <span>{ author }</span>
            <button onClick={onAddedToCart}>Add to cart</button>
        </Fragment>
    )
}

export default BookListItem;
