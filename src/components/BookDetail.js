import React from 'react';

const BookDetail = ({book, index}) =>  (
    <div className="books">
        <div className="book">
            <h3>Book {index}</h3>
            <h2>{book.name}</h2>

            <div className="details">
            <p>👨: {book.authors.join(', ')}</p>
            <p>📖: {book.numberOfPages}</p>
            <p>🏘️: {book.country}</p>
            <p>⏰: {new Date(book.released).toDateString()}</p>
            </div>
        </div>
        </div>
)
export default BookDetail;