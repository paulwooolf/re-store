
const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_LOADED',
        payload: newBooks
    }
}

const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUESTED'
    }
}

const booksError = (error) => {
    return {
        books: [],
        type: 'FETCH_BOOKS_ERROR',
        payload: error
    }
}

const fetchBooks = (bookstoreService, dispatch) => () => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((error) => dispatch(booksError(error)))
}

const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
}

export {
    fetchBooks,
    bookAddedToCart
}
