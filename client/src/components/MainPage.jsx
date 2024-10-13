import React, { useState, useEffect } from 'react';
import { Container, Filter } from '../styles/MainPageStyles';
import BookCard from './BookCard';

const MainPage = () => {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [category, setCategory] = useState('');

    // useEffect(() => {
    //     // Fetch books from the server
    //     // Assume fetchBooks() fetches the book data from an API
    //     fetchBooks().then(data => {
    //         setBooks(data);
    //         setFilteredBooks(data);
    //     });
    // }, []);

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
                {/* Add more categories as needed */}
            </Filter>
            <div>
                {filteredBooks.map(book => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </Container>
    );
}

export default MainPage;
