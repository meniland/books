import axios from 'axios';
import React, { useState } from 'react';
import { Form, Input, Button } from '../styles/LoginPageStyles';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:5000/api/v1/users', {
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        if (data.token) {
            document.cookie = `token=${data.token}`;
            window.location.href = '/';
        } else {
            alert('Login failed');
        }
    };

    return (
        <Form onSubmit={handleLogin}>
            <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <Button type="submit">Login</Button>
        </Form>
    );
}

export default LoginPage;
