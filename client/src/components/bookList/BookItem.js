import React from 'react';
import { Link } from 'react-router-dom';

function BookItem({ book }) {
    return (
        <div className="col-md-4 mb-4">
            <div className="book">
                <div className="book__cover">
                    <img src={`images/${book.isbn}.jpg`} alt="Book Cover" />
                </div>
                <div className="book__info">
                    <h2 className="book-title">
                        <Link to="/book:id">{book.title}</Link>
                    </h2>
                    <p className="author">
                        {book.author_first_name} {book.author_last_name}
                    </p>
                    <div className="genres">
                        {book.genre &&
                            Array.isArray(book.genre) &&
                            book.genre.map((genre, index) => (
                                <span key={index} className="genre-item">
                                    {genre}
                                </span>
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
    );
}

export default BookItem;
