import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
import { Container } from '../styles/MyAddsPageStyles';

const MyAddsPage = () => {
    const [myBooks, setMyBooks] = useState([]);

    useEffect(() => {
        const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
        if (!token) {
            window.location.href = '/login';
            return;
        }

        const fetchMyBooks = async () => {
            const response = await fetch('/api/items/user-items', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();
            setMyBooks(data);
        };

        fetchMyBooks().then();
    }, []);

    return (
        <Container>
            {myBooks.map(book => (
                <BookCard key={book.id} book={book} />
            ))}
        </Container>
    );
}

export default MyAddsPage;
