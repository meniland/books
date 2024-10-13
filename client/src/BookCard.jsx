// BookCard.jsx
import React from 'react';

function BookCard({ book }) {
    return (
        <div>
            <h3>{book.name}</h3>
            <p>{book.category}</p>
            <p>{book.description}</p>
            <img src={book.photo} alt={book.name} />
        </div>
    );
}

export default BookCard;
