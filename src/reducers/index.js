
const initialState = {
    books: [],
    loading: true,
    error: null
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FETCH_BOOKS_REQUESTED':
            return {
                books: [],
                loading: true,
                error: null
            }
        case 'FETCH_BOOKS_LOADED':
            return {
                books: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_BOOKS_ERROR':
            return {
                books: [],
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }

};

export default reducer;
