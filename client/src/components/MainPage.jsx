import React, { useState, useEffect } from 'react';
import { Container, Filter } from '../styles/MainPageStyles';
import ItemCard from './ItemCard';
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
            const response = await axios.get(process.env.REACT_APP_API_DOMAIN + '/api/v1/items');
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
                {filteredBooks && filteredBooks.map(book => (
                    <ItemCard key={book._id} book={book} />
                ))}
            </div>
        </Container>
    );
}

export default MainPage;
