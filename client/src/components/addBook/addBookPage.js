import React from 'react';

export default function addBookPage() {
    return (
        <div className="container main-content">
            <h1 className="h2 page-title mb-4">Add New Book</h1>
            <div className="content-box py-4">
                <form>
                    <div className="row">
                        <div className="col-md">
                            <div className="form-group">
                                <label htmlFor="isbn">ISBN:</label>
                                <input type="text" id="isbn" name="isbn" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="form-group">
                                <label htmlFor="title">Book Title:</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    className="form-control"
                                />
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
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="form-group">
                                <label htmlFor="author_last_name">Author Last Name:</label>
                                <input
                                    type="text"
                                    id="author_last_name"
                                    name="author_last_name"
                                    className="form-control"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md">
                            <div className="form-group">
                                <label htmlFor="genre">Genre (comma seperated):</label>
                                <input
                                    type="text"
                                    id="genre"
                                    name="genre"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="col-md">
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
                                    />
                                    <label className="form-check-label" htmlFor="inlineRadio2">
                                        Spanish
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
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
                                    />
                                    <label className="form-check-label" htmlFor="borrowed_out2">
                                        Yes
                                    </label>
                                </div>
                            </div>
                        </div>
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
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-end mt-4">
                        <div className="col-auto">
                            <button type="submit" className="btn btn-lg btn-success">
                                <i className="fas fa-save" /> SAVE BOOK
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
