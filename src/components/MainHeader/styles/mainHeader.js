import styled from 'styled-components';

export const Container = styled.section`
    background-image: url('images/illustration-intro.svg');
    background-position : right;
    background-repeat: no-repeat;
    background-size: 45%;
    width: 100%;
    padding-top: 50px;
    max-width: 1040px;
    margin: 0 auto;

    @media(max-width: 768px) {
        background-position: top;
        background-size: 370px;
        padding-top: 300px;
        text-align: center;
    }
`;
export const Title = styled.h1`
    max-width: 400px;
    font-size: 52px;
    color: hsl(228, 39%, 23%);
    @media(max-width: 768px) {
        font-size: 42px;
    }
`;
export const Text = styled.p`
    max-width: 400px;
    font-size: 18px;
    color: hsl(227, 12%, 61%);
    @media(max-width: 768px) {
        font-size: 16px;
    }
`;
export const Button = styled.button`
    background-color: hsl(12, 88%, 59%);
    color: hsl(0, 0%, 98%);
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    border-radius: 10px;
`;