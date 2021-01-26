import styled from 'styled-components';

export const Container = styled.div`
    padding: 50px 0;
    text-align: center;
`;

export const Title = styled.h2`
    
    font-size: 42px;
    color: hsl(228, 39%, 23%);
    @media(max-width: 768px) {
        font-size: 36px;
    }
`; 

export const SubTitle = styled.h3`
    font-size: 24px;
    color: hsl(228, 39%, 23%);
    @media(max-width: 768px) {
        font-size: 18px;
    }
`; 
export const Image = styled.img`
    max-width: 100px;
    margin-top: -50px;
`; 
export const Text = styled.p`
    color: hsl(227, 12%, 61%);
`; 
export const Button = styled.button`
     background-color: hsl(12, 88%, 59%);
    color: hsl(0, 0%, 98%);
    border: none;
    outline: none;
    padding: 1rem 2rem;
    border-radius: 30px;
    font-size: 18px;
`; 

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: 50px 0;
    overflow-x: hidden;
    /* white-space: pre-line; */
    @media(max-width: 1000px) {
        
    }
`;


export const Testemony = styled.li`
    background-color: hsl(0, 0%, 98%);
    text-align: center;
    padding: 0 2rem;

    @media(max-width: 1000px) {
        &:not(:first-child) {
            display: none;
        }
    }
`;