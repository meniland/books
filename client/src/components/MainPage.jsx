import React, { useState, useEffect } from 'react';
import { Container, Filter } from '../styles/MainPageStyles';
import BookCard from './BookCard';
import axios from 'axios';

const MainPage = () => {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [category, setCategory] = useState('');

    useEffect(() => {
        fetchBooks().then(response => {
            setBooks(response);
            setFilteredBooks(response);
        });
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/items');
            return response.data;
        } catch (err) {
        }
    };


    const handleFilterChange = (event) => {
        setCategory(event.target.value);
        if(event.target.value === '') {
            setFilteredBooks(books);
        } else {
            setFilteredBooks(books.filter(book => book.category === event.target.value));
        }
    };

    return (
        <Container>
            <Filter value={category} onChange={handleFilterChange}>
                <option value="">All Categories</option>
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
            </Filter>
            <div>
                {filteredBooks.map(book => (
                    <BookCard key={book._id} book={book} />
                ))}
            </div>
        </Container>
    );
}

export default MainPage;
