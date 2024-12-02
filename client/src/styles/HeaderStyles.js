import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  background-color: #343a40;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

export const Button = styled.button`
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
