import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../../actions/bookActions';
import BookListFilter from '../bookList/BookListFilter';
import BookItem from '../bookList/BookItem';

class Dashboard extends Component {
    componentDidMount() {
        this.props.getBooks();
    }
    render() {
        return (
            <div className="container main-content">
                <h1 className="h2 page-title mb-3">My Books</h1>
                <BookListFilter />

                <div className="row">
                    {this.props.books.map(book => (
                        <BookItem book={book} key={book._id} />
                    ))}
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        books: state.books,
        user: state.user,
    };
}
export default connect(
    mapStateToProps,
    { getBooks }
)(Dashboard);
