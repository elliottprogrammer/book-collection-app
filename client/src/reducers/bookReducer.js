import { GET_BOOKS, ADD_BOOK, SEARCH_FILTER_BOOKS } from '../actions/types';

const bookReducer = (state = [], action) => {
    switch (action.type) {
        case GET_BOOKS:
            return action.payload;
        case ADD_BOOK:
            const bookList = [...state];
            bookList.push(action.payload);
            return bookList;
        case SEARCH_FILTER_BOOKS:
            const { searchBy, searchVal } = action.payload.filterVals;
            const booksCopy = action.payload.books;
            if (searchBy === 'All') {
                return booksCopy.filter(o =>
                    Object.keys(o).some(k =>
                        ['isbn', 'title', 'author_first_name', 'author_last_name'].includes(k)
                            ? o[k].toLowerCase().includes(searchVal.toLowerCase())
                            : null
                    )
                );
            } else if (searchBy === 'Genre') {
                return booksCopy.filter(o =>
                    o['genre'].some(g => g.toLowerCase().includes(searchVal.toLowerCase()))
                );
            } else {
                return booksCopy.filter(o =>
                    o[searchBy.replace(/\s/g, '_').toLowerCase()]
                        .toLowerCase()
                        .includes(searchVal.toLowerCase())
                );
            }
        default:
            return state;
    }
};

export default bookReducer;
