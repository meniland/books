import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, Button } from '../styles/HeaderStyles';

const Header = () => {
    const navigate = useNavigate();
    const token = document.cookie.split('; ').find(row => row.startsWith('token='));

    const handleLogout = () => {
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        navigate('/login');
    };

    return (
        <HeaderContainer>
            {token && <Button onClick={handleLogout}>Log Out</Button>}
            <Button onClick={() => navigate('/upload')}>Upload Book</Button>
            <Button onClick={() => navigate('/myadds')}>My Adds</Button>
        </HeaderContainer>
    );
}

export default Header;
