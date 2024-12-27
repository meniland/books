import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import  '../styles/userItems.css';

const MyAddsPage = () => {
    const [myBooks, setMyBooks] = useState([]);

    useEffect(() => {
        const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
        if (!token) {
            window.location.href = '/login';
            return;
        }

        const fetchMyBooks = async () => {
            const response = await fetch(process.env.REACT_APP_API_DOMAIN + '/api/v1/items/user-items', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();
            setMyBooks(data);
        };

        fetchMyBooks().then();
    }, []);

    return (
        <div className='container'>
            {myBooks && myBooks.map(book => (
                <ItemCard key={book._id} book={book} />
            ))}
        </div>
    );
}

export default MyAddsPage;
