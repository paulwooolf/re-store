import React, {Component} from "react";
import BookListItem from "../book-list-item";
import { withBookstoreService } from '../hoc';
import { connect } from 'react-redux';
import {bookAddedToCart, fetchBooks} from "../../actions";
import compose from "../../utils";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import {bindActionCreators} from "redux";

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error, onAddedToCart } = this.props;
        if (loading) {
            return <Spinner />
        }
        if (error) {
            return <ErrorIndicator />
        }
        return <BookList books={books} onAddedToCart={onAddedToCart} />
    }
}

const BookList = ({books, onAddedToCart}) => {
    return (
        <ul>
            {
                books.map((book) => {
                    return (
                        <li key={book.id}>
                            <BookListItem
                                book={book}
                                onAddedToCart={() => onAddedToCart(book.id)}
                            />
                        </li>
                    )
                })
            }
        </ul>
    )
}

const mapStateToProps = ( {bookList: {books, loading, error}}) => {
    return { books, loading, error }
};

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
    return bindActionCreators({
        fetchBooks: fetchBooks(bookstoreService),
        onAddedToCart: bookAddedToCart
    }, dispatch)
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
