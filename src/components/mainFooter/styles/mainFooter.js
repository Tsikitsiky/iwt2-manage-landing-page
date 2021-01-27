import styled from 'styled-components';

export const Container = styled.section`
    background-color: hsl(12, 88%, 59%);
`;

export const TextWrapper = styled.div`
    max-width: 1040px;
    margin: 0 auto;
    padding: 50px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const Text = styled.h2`
     font-size: 42px;
    color: hsl(0, 0%, 98%);
    max-width: 50%;
    @media(max-width: 768px) {
        font-size: 36px;
        max-width: 80%;
        text-align: center;
    }
`;
export const Button = styled.button`
    background-color: hsl(0, 0%, 98%);
    color: hsl(12, 88%, 59%);
    border: none;
    outline: none;
    padding: 1rem 2rem;
    border-radius: 30px;
    font-size: 18px;
`;
