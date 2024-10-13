// UploadPage.jsx
import React, { useState } from 'react';

function UploadPage() {
    const [bookData, setBookData] = useState({
        name: '',
        category: '',
        description: '',
        photo: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setBookData(prev => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Upload bookData to the server
        // Assuming a function uploadBook() uploads the data
        uploadBook(bookData).then(response => {
            if(response.ok) {
                alert('Book uploaded successfully');
            }
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Book Name" onChange={handleChange} required />
            <select name="category" onChange={handleChange} required>
                <option value="">Select Category</option>
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
                {/* Add more categories as needed */}
            </select>
            <textarea name="description" placeholder="Description" onChange={handleChange} required />
            <input type="file" name="photo" onChange={handleChange} required />
            <button type="submit">Upload Book</button>
        </form>
    );
}

export default UploadPage;
