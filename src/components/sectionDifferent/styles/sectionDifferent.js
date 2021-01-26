import styled from 'styled-components'

export const Container = styled.section`
    padding-top: 50px;
    max-width: 1040px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media(max-width: 768px) {
        flex-direction: column;
        padding-left: 1rem;
    }
`;
export const Title = styled.h2`
    font-size: 42px;
    color: hsl(228, 39%, 23%);
    @media(max-width: 768px) {
        font-size: 36px;
    }
`;

export const Text = styled.p`
    font-size: 18px;
    color: hsl(227, 12%, 61%);
    @media(max-width: 768px) {
        font-size: 16px;
    }
`;

export const SubTitle = styled.h3`
    margin-top: 2rem;
    font-size: 24px;
    color: hsl(228, 39%, 23%);
    @media(max-width: 768px) {
        font-size: 18px;
        padding-left: 3rem;
        height: 2rem;
        background-color: hsl(13, 100%, 96%);
    }
`;

export const Pane = styled.div`
    width: 50%;
    position: relative;

    @media(max-width: 1000px) {
        width: 100%;
        text-align: center;
    }
`;

export const Wrapper = styled.div`
    padding-left: 3rem;
    &::before {
        content: "";
        background-color: hsl(12, 88%, 59%);
        width: 3rem;
        height: 2rem;
        border-radius: 10px;
        position: absolute;
        left: -16px;
    }

    @media(max-width: 768px) {
        padding-left: 0;
        text-align: left;
    }
`;


