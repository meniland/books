import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Textarea, Button } from '../styles/UploadPageStyles';

const UploadPage = () => {
    const [bookData, setBookData] = useState({
        name: '',
        category: '',
        description: '',
        photo: null
    });

    useEffect(() => {
        const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
        if (!token) {
            window.location.href = '/login';
        }
    }, []);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setBookData(prev => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
        const response = await fetch('/api/upload', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookData)
        });

        if (response.ok) {
            alert('Book uploaded successfully');
        } else {
            alert('Session expired, please log in again');
            window.location.href = '/login';
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input type="text" name="name" placeholder="Book Name" onChange={handleChange} required />
            <Select name="category" onChange={handleChange} required>
                <option value="">Select Category</option>
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
                {/* Add more categories as needed */}
            </Select>
            <Textarea name="description" placeholder="Description" onChange={handleChange} required />
            <Input type="file" name="photo" onChange={handleChange} required />
            <Button type="submit">Upload Book</Button>
        </Form>
    );
}

export default UploadPage;
