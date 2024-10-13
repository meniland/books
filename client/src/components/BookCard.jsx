import React from 'react';
import { Card } from '../styles/BookCardStyles';

const BookCard = ({ book }) => (
    <Card>
        <h3>{book.name}</h3>
        <p><strong>Category:</strong> {book.category}</p>
        <p>{book.description}</p>
        <img src={book.photo} alt={book.name} />
    </Card>
);

export default BookCard;
