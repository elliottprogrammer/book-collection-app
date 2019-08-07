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
                        <div className="col-md-4" key={book._id}>
                            {book.title}
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
