import React from 'react';
import { Card } from '../styles/BookCardStyles';

const BookCard = ({ book }) => (
    <Card>
        <h3>{book.name}</h3>
        <p><strong>Category:</strong> {book.category}</p>
        <p>{book.description}</p>
        {book.photoPath && (
            <img
                src={`http://localhost:5000/uploads/${book.photoPath.split('/').pop()}`}
                alt={book.name}
            />
        )}
    </Card>
);

export default BookCard;
