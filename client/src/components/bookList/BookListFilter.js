import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterBooks } from '../../actions/bookActions';

class BookListFilter extends Component {
    state = {
        searchBy: 'All',
        searchVal: '',
    };

    handleSelectChange = e => {
        this.setState({ searchBy: e.target.value });
    };

    handleSearchChange = e => {
        this.setState({ searchVal: e.target.value }, () => {
            this.props.filterBooks(this.state);
        });
    };

    render() {
        return (
            <div className="p-3 bg-light mb-5">
                <form>
                    <div className="form-row">
                        <div className="col-sm-3 mb-3">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <label className="input-group-text" htmlFor="bookFilter">
                                        Search By:
                                    </label>
                                </div>
                                <select
                                    id="bookFilter"
                                    name="bookFilter"
                                    className="custom-select"
                                    onChange={this.handleSelectChange}
                                >
                                    <option>All</option>
                                    <option>Title</option>
                                    <option>Author First Name</option>
                                    <option>Author Last Name</option>
                                    <option>Genre</option>
                                    <option>ISBN</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <input
                                type="text"
                                name="searchVal"
                                className="form-control"
                                placeholder="Search"
                                onChange={this.handleSearchChange}
                            />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(
    null,
    { filterBooks }
)(BookListFilter);
