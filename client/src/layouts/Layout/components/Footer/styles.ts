import styled from 'styled-components';

export const Root = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.2rem;
    box-sizing: border-box;
    border-radius: 3.125rem 3.125rem 0 0;
    background-color: #efefef;
    width: 100%;
`;

export const Logo = styled.img`
    width: 10vw;
    @media (max-width: 1760px) {
        width: 11.25rem;
    }
    @media (max-width: 640px) {
        width: 7.5rem;
    }
`;
