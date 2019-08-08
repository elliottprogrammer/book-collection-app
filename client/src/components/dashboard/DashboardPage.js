import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../../actions/bookActions';

class Dashboard extends Component {
    componentDidMount() {
        this.props.getBooks();
    }
    render() {
        return (
            <div className="container main-content">
                <h1 className="h2 page-title">Dashboard Page</h1>
                <div className="row">
                    {this.props.books.map(book => (
                        <div className="col-md-4 mb-4" key={book._id}>
                            <div className="book">
                                <div className="book__cover">
                                    <img src={`images/${book.isbn}.jpg`} alt="Book Cover" />
                                </div>
                                <div className="book__info">
                                    <h2 className="book-title">
                                        <a href="">{book.title}</a>
                                    </h2>
                                    <p className="author">
                                        {book.author_first_name} {book.author_last_name}
                                    </p>
                                    <div className="genres">
                                        {book.genre &&
                                            Array.isArray(book.genre) &&
                                            book.genre.map(genre => (
                                                <span className="genre-item">{genre}</span>
                                            ))}
                                    </div>
                                </div>
                                <div className="book__footinfo">
                                    Read: {book.read}
                                    <br />
                                    ISBN: {book.isbn}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        books: state.books,
    };
}
export default connect(
    mapStateToProps,
    { getBooks }
)(Dashboard);
