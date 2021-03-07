import styled from 'styled-components';

export const Button = styled.button`
    width: 10vw;
    height: 5vh;
    font-size: 22px;
    background-color: black;
    color: white;
    font-family: 'Nunito';
    font-weight: bold;
    border-radius: 10px;
    transition: background-color 200ms;

    &:hover {
        background-color: white;
        color: black;
        border: 2px solid black;
    }
`;
