import React, { Component } from 'react';
import ReactTags from 'react-tag-autocomplete';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { isbnSearch } from '../../actions/searchActions';
import { addBook } from '../../actions/bookActions';
import classnames from 'classnames';
import isEmpty from '../../utils/isEmpty';

class AddBookForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isbn: '',
            title: '',
            author_first_name: '',
            author_last_name: '',
            genre: '',
            cover_image_url: '',
            language: 'English',
            borrowed_out: false,
            borrower_name: '',
            borrow_date: '',
            errors: {},
            tags: [],
            suggestions: [
                { id: 1, name: 'Crime' },
                { id: 2, name: 'Adventure' },
                { id: 3, name: 'Comedy' },
                { id: 4, name: 'Fiction' },
                { id: 5, name: 'History' },
                { id: 6, name: 'Horror' },
                { id: 7, name: 'Informative' },
                { id: 8, name: 'Inspirational' },
                { id: 9, name: 'Mystery' },
                { id: 10, name: 'Non-Fiction' },
                { id: 11, name: 'Novel' },
                { id: 12, name: 'Politics' },
                { id: 13, name: 'Prayers' },
                { id: 14, name: 'Romance' },
                { id: 15, name: 'Sci-Fi' },
                { id: 16, name: 'Self Help' },
                { id: 17, name: 'Short Stories' },
                { id: 18, name: 'True Story' },
            ],
        };
    }

    componentWillReceiveProps(nextProps) {
        if (!isEmpty(nextProps.bookInfo)) {
            this.setState(nextProps.bookInfo);
        }
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    handleDelete(i) {
        const tags = this.state.tags.slice(0);
        tags.splice(i, 1);
        this.setState({ tags });
    }

    handleAddition(tag) {
        const tags = [].concat(this.state.tags, tag);
        this.setState({ tags });
    }

    onInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    isbnSearch = e => {
        if (this.state.isbn.length < 9) return;
        this.props.isbnSearch(this.state.isbn);
    };

    onSubmit = e => {
        e.preventDefault();
        this.setState({ errors: {} });
        const newBook = {
            isbn: this.state.isbn,
            title: this.state.title,
            author_first_name: this.state.author_first_name,
            author_last_name: this.state.author_last_name,
            genre: this.state.tags.map(tag => tag.name),
            cover_image_url: this.state.cover_image_url,
            language: this.state.language,
            borrowed_out: this.state.borrowed_out,
            borrower_name: this.state.borrower_name,
            borrow_date: this.state.borrow_date,
            user_id: this.props.user._id,
        };
        this.props.addBook(newBook, this.props.history);
    };

    render() {
        const { isbn, title, author_first_name, author_last_name, errors } = this.state;
        return (
            <form onSubmit={this.onSubmit} noValidate>
                <div className="row">
                    <div className="col-md">
                        <div className="form-group">
                            <label htmlFor="isbn">ISBN:</label>
                            <input
                                type="text"
                                id="isbn"
                                name="isbn"
                                className={classnames('form-control', {
                                    'is-invalid': errors.isbn,
                                })}
                                onChange={this.onInputChange}
                                value={isbn}
                                onBlur={this.isbnSearch}
                            />
                            {errors.isbn && <div className="invalid-feedback">{errors.isbn}</div>}
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="form-group">
                            <label htmlFor="title">Book Title:</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className={classnames('form-control', {
                                    'is-invalid': errors.title,
                                })}
                                onChange={this.onInputChange}
                                value={title}
                            />
                            {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        <div className="form-group">
                            <label htmlFor="author_first_name">Author First Name:</label>
                            <input
                                type="text"
                                id="author_first_name"
                                name="author_first_name"
                                className={classnames('form-control', {
                                    'is-invalid': errors.author_first_name,
                                })}
                                onChange={this.onInputChange}
                                value={author_first_name}
                            />
                            {errors.author_first_name && (
                                <div className="invalid-feedback">{errors.author_first_name}</div>
                            )}
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="form-group">
                            <label htmlFor="author_last_name">Author Last Name:</label>
                            <input
                                type="text"
                                id="author_last_name"
                                name="author_last_name"
                                className={classnames('form-control', {
                                    'is-invalid': errors.author_last_name,
                                })}
                                onChange={this.onInputChange}
                                value={author_last_name}
                            />
                            {errors.author_last_name && (
                                <div className="invalid-feedback">{errors.author_last_name}</div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        <div className="form-group">
                            <label htmlFor="genre">Genre(s):</label>
                            <ReactTags
                                tags={this.state.tags}
                                suggestions={this.state.suggestions}
                                minQueryLength="1"
                                onDelete={this.handleDelete.bind(this)}
                                onAddition={this.handleAddition.bind(this)}
                                placeholder="Add a genre"
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="cover_image_url">Book cover image:</label>
                            <input
                                type="text"
                                name="cover_image_url"
                                className="form-control"
                                id="cover_image_url"
                                onChange={this.onInputChange}
                                value={this.state.cover_image_url}
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                        {this.state.cover_image_url && (
                            <img src={this.state.cover_image_url} alt="Book Cover" />
                        )}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label>Language:</label>
                            <br />
                            <div className="form-check form-check-inline my-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="language"
                                    id="inlineRadio1"
                                    value="English"
                                    onChange={this.onInputChange}
                                    defaultChecked
                                />
                                <label className="form-check-label" htmlFor="inlineRadio1">
                                    English
                                </label>
                            </div>
                            <div className="form-check form-check-inline my-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="language"
                                    id="inlineRadio2"
                                    value="Spanish"
                                    onChange={this.onInputChange}
                                />
                                <label className="form-check-label" htmlFor="inlineRadio2">
                                    Spanish
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label>Borrowed out?</label>
                            <br />
                            <div className="form-check form-check-inline my-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="borrowed_out"
                                    id="borrowed_out1"
                                    value="No"
                                    onChange={this.onInputChange}
                                    defaultChecked
                                />
                                <label className="form-check-label" htmlFor="borrowed_out1">
                                    No
                                </label>
                            </div>
                            <div className="form-check form-check-inline my-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="borrowed_out"
                                    id="borrowed_out2"
                                    value="Yes"
                                    onChange={this.onInputChange}
                                />
                                <label className="form-check-label" htmlFor="borrowed_out2">
                                    Yes
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.borrowed_out === 'Yes' && (
                    <div className="row">
                        <div className="col-md-3">
                            <div className="form-group">
                                <label htmlFor="borrower_name">Borrower Name:</label>
                                <input
                                    type="text"
                                    id="borrower_name"
                                    name="borrower_name"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label htmlFor="borrow_date">Date Borrowed:</label>
                                <input
                                    type="date"
                                    id="borrow_date"
                                    name="borrow_date"
                                    className="form-control"
                                    onChange={this.onInputChange}
                                />
                            </div>
                        </div>
                    </div>
                )}
                <div className="row justify-content-end mt-4">
                    <div className="col-auto">
                        <button type="submit" className="btn btn-lg btn-success">
                            <i className="fas fa-save" /> SAVE BOOK
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        bookInfo: state.searchResult,
        books: state.books,
        errors: state.errors,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        isbnSearch: isbn => dispatch(isbnSearch(isbn)),
        addBook: (newBook, history) => dispatch(addBook(newBook, history)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(AddBookForm));
