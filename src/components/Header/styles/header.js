import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1040px;
    margin: 0 auto;
    padding: 2rem 0 ;
`;
export const Link = styled.a`
    text-decoration: none;
    color: hsl(228, 39%, 23%);
    font-style: 18px;
`;
export const Logo = styled.img``;
export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    padding-top: 16px;

`;
export const Menu = styled.nav`
    display: flex;
    gap: 1rem;
    @media(max-width: 1000px) {
        display: none
    }
`;

export const Button = styled.button`
    background-color: hsl(12, 88%, 59%);
    color: hsl(0, 0%, 98%);
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    @media(max-width: 1000px) {
        display: none;
    }
`;

export const ButtonMenu = styled.button`
    display: none;
    background-color: transparent;
    background-image: url('images/icon-menu.svg');
    background-repeat: no-repeat;
    background-size: 24px;
    border: none;
    outline: none;
    @media(max-width: 1000px) {
        display: block;
        width: 24px;
        height: 24px;
    }
`;

export const ButtonCloseMenu = styled.button`
    display: none;
    background-color: transparent;
    background-image: url('images/icon-close.svg');
    background-repeat: no-repeat;
    background-size: 24px;
    border: none;
    outline: none;
    @media(max-width: 1000px) {
        display: block;
        width: 24px;
        height: 24px;
    }
`;