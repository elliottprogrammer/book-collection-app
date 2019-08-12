import React from 'react';
import AddBookForm from './AddBookForm';

function addBookPage() {
    return (
        <div className="container main-content">
            <h1 className="h2 page-title mb-4">Add New Book</h1>
            <div className="content-box py-4 mb-5">
                <AddBookForm />
            </div>
        </div>
    );
}

export default addBookPage;
