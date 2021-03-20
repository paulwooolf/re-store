import React, {Component} from "react";
import BookListItem from "../book-list-item";
import { withBookstoreService } from '../hoc';
import { connect } from 'react-redux';
import {booksLoaded} from "../../actions";
import {booksRequested} from "../../actions";
import compose from "../../utils";
import Spinner from "../spinner";

class BookList extends Component {

    componentDidMount() {
        const { bookstoreService, booksLoaded, booksRequested } = this.props;
        booksRequested();
        bookstoreService.getBooks()
            .then((data) => booksLoaded(data));
    }

    render() {
        const { books, loading } = this.props;
        if (loading) {
            return <Spinner />
        }
        return (
            <ul>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}><BookListItem book={book} /></li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = ({books, loading}) => {
    return { books, loading }
};

const mapDispatchToProps = {
    booksLoaded,
    booksRequested
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);
