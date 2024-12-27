import React from 'react';
import '../styles/ItemCard.css';
const ItemCard = ({ book }) => (
    <div className='item-card'>
        <h3>{book.name}</h3>
        <p><strong>Category:</strong> {book.category}</p>
        <p>{book.description}</p>
        <div>
            {book.photoPath && (
                <img
                    src={process.env.REACT_APP_API_DOMAIN + `/uploads/${book.photoPath.split('/').pop()}`}
                    alt={book.name}
                />
            )}
        </div>
    </div>
);

export default ItemCard;
